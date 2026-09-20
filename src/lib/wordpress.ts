import { WPPost, WPCategory } from '@/types/wordpress';
import { MOCK_POSTS, MOCK_CATEGORIES } from './mock-posts';

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || '';

export async function getAllPosts(categorySlug?: string): Promise<WPPost[]> {
  if (!WORDPRESS_URL) {
    if (categorySlug) {
      return MOCK_POSTS.filter((post) =>
        post.categories.some((cat) => cat.slug === categorySlug)
      );
    }
    return MOCK_POSTS;
  }

  try {
    const endpoint = `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`;
    const res = await fetch(endpoint, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.warn('WordPress API fetch failed, falling back to local dataset');
      return MOCK_POSTS;
    }

    const rawPosts = await res.json();
    return rawPosts.map(transformWPPost);
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return MOCK_POSTS;
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  if (!WORDPRESS_URL) {
    return MOCK_POSTS.find((p) => p.slug === slug) || null;
  }

  try {
    const endpoint = `${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`;
    const res = await fetch(endpoint, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return MOCK_POSTS.find((p) => p.slug === slug) || null;
    }

    const rawPosts = await res.json();
    if (!rawPosts || rawPosts.length === 0) {
      return MOCK_POSTS.find((p) => p.slug === slug) || null;
    }

    return transformWPPost(rawPosts[0]);
  } catch (error) {
    console.error(`Error fetching post for slug "${slug}":`, error);
    return MOCK_POSTS.find((p) => p.slug === slug) || null;
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  if (!WORDPRESS_URL) {
    return MOCK_CATEGORIES;
  }

  try {
    const endpoint = `${WORDPRESS_URL}/wp-json/wp/v2/categories`;
    const res = await fetch(endpoint, { next: { revalidate: 86400 } });
    if (!res.ok) return MOCK_CATEGORIES;

    const categories = await res.json();
    return categories.map((cat: any) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return MOCK_CATEGORIES;
  }
}

// Helper function to normalize raw WP API response to typed WPPost
function transformWPPost(raw: any): WPPost {
  const featuredMedia =
    raw._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';

  const authorName = raw._embedded?.author?.[0]?.name || 'A4 AutoPost Team';
  const authorAvatar = raw._embedded?.author?.[0]?.avatar_urls?.['96'];

  const categories = (raw._embedded?.['wp:term']?.[0] || []).map((cat: any) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
  }));

  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title?.rendered || 'Untitled Post',
    excerpt: raw.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
    content: raw.content?.rendered || '',
    featured_image: featuredMedia,
    published_at: raw.date,
    modified_at: raw.modified || raw.date,
    author: {
      id: raw.author || 1,
      name: authorName,
      avatar_url: authorAvatar,
    },
    categories,
    read_time_minutes: Math.max(3, Math.ceil((raw.content?.rendered?.length || 1000) / 1000)),
  };
}
