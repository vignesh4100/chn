import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp,
  increment
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { BlogPost, BlogCategory, BlogStats } from '../types/blog';

const BLOGS_COLLECTION = 'blogs';
const CATEGORIES_COLLECTION = 'blog_categories';

export class BlogService {
  // Blog Posts
  static async createBlogPost(blogData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
        ...blogData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        views: 0,
        likes: 0
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }
  }

  static async updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<void> {
    try {
      const docRef = doc(db, BLOGS_COLLECTION, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating blog post:', error);
      throw error;
    }
  }

  static async deleteBlogPost(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, BLOGS_COLLECTION, id));
    } catch (error) {
      console.error('Error deleting blog post:', error);
      throw error;
    }
  }

  static async getBlogPost(id: string): Promise<BlogPost | null> {
    try {
      const docRef = doc(db, BLOGS_COLLECTION, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as BlogPost;
      }
      return null;
    } catch (error) {
      console.error('Error getting blog post:', error);
      throw error;
    }
  }

  static async getAllBlogPosts(status?: string): Promise<BlogPost[]> {
    try {
      let q = query(collection(db, BLOGS_COLLECTION), orderBy('createdAt', 'desc'));
      
      if (status) {
        q = query(collection(db, BLOGS_COLLECTION), where('status', '==', status), orderBy('createdAt', 'desc'));
      }

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
    } catch (error) {
      console.error('Error getting blog posts:', error);
      throw error;
    }
  }

  static async getPublishedBlogPosts(limitCount?: number): Promise<BlogPost[]> {
    try {
      let q = query(
        collection(db, BLOGS_COLLECTION), 
        where('status', '==', 'published'),
        orderBy('publishedAt', 'desc')
      );

      if (limitCount) {
        q = query(q, limit(limitCount));
      }

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
    } catch (error) {
      console.error('Error getting published blog posts:', error);
      throw error;
    }
  }

  static async incrementViews(id: string): Promise<void> {
    try {
      const docRef = doc(db, BLOGS_COLLECTION, id);
      await updateDoc(docRef, {
        views: increment(1)
      });
    } catch (error) {
      console.error('Error incrementing views:', error);
      throw error;
    }
  }

  static async incrementLikes(id: string): Promise<void> {
    try {
      const docRef = doc(db, BLOGS_COLLECTION, id);
      await updateDoc(docRef, {
        likes: increment(1)
      });
    } catch (error) {
      console.error('Error incrementing likes:', error);
      throw error;
    }
  }

  // Categories
  static async createCategory(categoryData: Omit<BlogCategory, 'id' | 'postCount'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, CATEGORIES_COLLECTION), {
        ...categoryData,
        postCount: 0
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
  }

  static async getCategories(): Promise<BlogCategory[]> {
    try {
      const querySnapshot = await getDocs(collection(db, CATEGORIES_COLLECTION));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogCategory[];
    } catch (error) {
      console.error('Error getting categories:', error);
      throw error;
    }
  }

  // Stats
  static async getBlogStats(): Promise<BlogStats> {
    try {
      const allPosts = await this.getAllBlogPosts();
      const publishedPosts = allPosts.filter(post => post.status === 'published');
      const draftPosts = allPosts.filter(post => post.status === 'draft');
      
      const totalViews = allPosts.reduce((sum, post) => sum + (post.views || 0), 0);
      const totalLikes = allPosts.reduce((sum, post) => sum + (post.likes || 0), 0);

      return {
        totalPosts: allPosts.length,
        publishedPosts: publishedPosts.length,
        draftPosts: draftPosts.length,
        totalViews,
        totalLikes
      };
    } catch (error) {
      console.error('Error getting blog stats:', error);
      throw error;
    }
  }

  // Utility functions
  static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  static calculateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
}