export interface WPAuthor {
  id: number;
  name: string;
  avatar_url?: string;
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

export interface WPTag {
  id: number;
  name: string;
  slug: string;
}

export interface WPPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string;
  published_at: string;
  modified_at: string;
  author: WPAuthor;
  categories: WPCategory[];
  tags?: WPTag[];
  read_time_minutes: number;
}
