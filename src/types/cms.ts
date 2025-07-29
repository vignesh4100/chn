export interface BaseContent {
  id?: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  coverImage?: string;
  published: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export interface BlogPost extends BaseContent {
  excerpt?: string;
  tags?: string[];
  category?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Article extends BaseContent {
  summary?: string;
  readTime?: number;
  featured?: boolean;
}

export interface NewsPost extends BaseContent {
  location?: string;
  urgent?: boolean;
  source?: string;
}

export interface JobPosting extends BaseContent {
  department: string;
  location: string;
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  salary?: string;
  requirements: string[];
  benefits?: string[];
  applicationDeadline?: Date;
  active: boolean;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  role: 'admin' | 'editor' | 'author';
}

export type ContentType = 'blogs' | 'articles' | 'jobs';

export interface ContentStats {
  total: number;
  published: number;
  draft: number;
  today: number;
}