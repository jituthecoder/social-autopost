import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/seo.config';
import { getAllPosts } from '@/lib/wordpress';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.domain;

  // Fetch blog posts dynamically for sitemap
  const posts = await getAllPosts();

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.modified_at || post.published_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const staticRoutes = [
    '/',
    '/features/',
    '/pricing/',
    '/blog/',
    '/about/',
    '/contact/',
    '/login/',
    '/signup/',
    '/privacy/',
    '/terms/',
    '/cookies/',
    '/acceptable-use/',
  ].map((route) => ({
    url: route === '/' ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
