export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  coverImage: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
}