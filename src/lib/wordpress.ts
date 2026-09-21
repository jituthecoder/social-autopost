import { WPPost, WPCategory } from '@/types/wordpress';
import { MOCK_POSTS, MOCK_CATEGORIES } from './mock-posts';

const WORDPRESS_URL = (process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://wpthrust.in').replace(/\/$/, '');

const FETCH_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'application/json',
};

function decodeEntities(str: string): string {
  if (!str) return '';
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

export async function getAllPosts(categorySlug?: string): Promise<WPPost[]> {
  try {
    const endpoint = `${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=100&_embed`;
    const res = await fetch(endpoint, {
      headers: FETCH_HEADERS,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`WordPress API fetch failed with status ${res.status}, falling back to local dataset`);
      return MOCK_POSTS;
    }

    const rawPosts = await res.json();
    let posts = rawPosts.map(transformWPPost);

    if (categorySlug) {
      posts = posts.filter((post: WPPost) =>
        post.categories.some((cat) => cat.slug === categorySlug)
      );
    }

    return posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return MOCK_POSTS;
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const endpoint = `${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`;
    const res = await fetch(endpoint, {
      headers: FETCH_HEADERS,
      next: { revalidate: 3600 },
    });

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
  try {
    const endpoint = `${WORDPRESS_URL}/wp-json/wp/v2/categories?per_page=100`;
    const res = await fetch(endpoint, {
      headers: FETCH_HEADERS,
      next: { revalidate: 86400 },
    });
    if (!res.ok) return MOCK_CATEGORIES;

    const categories = await res.json();
    return categories.map((cat: any) => ({
      id: cat.id,
      name: decodeEntities(cat.name),
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
    name: decodeEntities(cat.name),
    slug: cat.slug,
  }));

  const rawExcerpt = (raw.excerpt?.rendered || '').replace(/<[^>]+>/g, '').trim();

  return {
    id: raw.id,
    slug: raw.slug,
    title: decodeEntities(raw.title?.rendered || 'Untitled Post'),
    excerpt: decodeEntities(rawExcerpt),
    content: raw.content?.rendered || '',
    featured_image: featuredMedia,
    published_at: raw.date,
    modified_at: raw.modified || raw.date,
    author: {
      id: raw.author || 1,
      name: decodeEntities(authorName),
      avatar_url: authorAvatar,
    },
    categories,
    read_time_minutes: Math.max(3, Math.ceil((raw.content?.rendered?.length || 1000) / 1000)),
  };
}

