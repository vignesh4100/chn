import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  Timestamp
} from "firebase/firestore";
import { db } from "../config/firebase";
import { BaseContent, ContentType } from "../types/cms";

// Generic CMS service that works with any content type
export class CMSService<T extends BaseContent> {
  private collectionName: string;

  constructor(contentType: ContentType) {
    this.collectionName = contentType;
  }

  // Create new content
  async create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, this.collectionName), {
        ...data,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error(`Error creating ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Update existing content
  async update(id: string, data: Partial<T>): Promise<void> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error(`Error updating ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Delete content
  async delete(id: string): Promise<void> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error(`Error deleting ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Get content by slug
  async getBySlug(slug: string): Promise<T | null> {
    try {
      const q = query(collection(db, this.collectionName), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return null;
      }
      
      const docData = querySnapshot.docs[0];
      const data = docData.data();
      
      return {
        id: docData.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date()
      } as T;
    } catch (error) {
      console.error(`Error getting ${this.collectionName} by slug:`, error);
      throw error;
    }
  }

  // Get all content
  async getAll(publishedOnly: boolean = false): Promise<T[]> {
    try {
      let q = query(collection(db, this.collectionName), orderBy("createdAt", "desc"));
      
      if (publishedOnly) {
        q = query(collection(db, this.collectionName), where("published", "==", true), orderBy("createdAt", "desc"));
      }
      
      const querySnapshot = await getDocs(q);
      const items: T[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        items.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date()
        } as T);
      });

      return items;
    } catch (error) {
      console.error(`Error getting ${this.collectionName}:`, error);
      throw error;
    }
  }

  // Get content by ID
  async getById(id: string): Promise<T | null> {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date()
        } as T;
      }
      
      return null;
    } catch (error) {
      console.error(`Error getting ${this.collectionName} by ID:`, error);
      throw error;
    }
  }

  // Get content statistics
  async getStats(): Promise<any> {
    try {
      const allItems = await this.getAll();
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      return {
        total: allItems.length,
        published: allItems.filter(item => item.published).length,
        draft: allItems.filter(item => !item.published).length,
        today: allItems.filter(item => {
          const itemDate = new Date(item.createdAt);
          itemDate.setHours(0, 0, 0, 0);
          return itemDate.getTime() === today.getTime();
        }).length
      };
    } catch (error) {
      console.error(`Error getting ${this.collectionName} stats:`, error);
      throw error;
    }
  }
}

// Service instances for different content types