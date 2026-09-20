import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getCategories } from '@/lib/wordpress';
import { BlogCard } from '@/components/ui/BlogCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media Strategy & AI Growth Blog | A4 AutoPost',
  description:
    'Read actionable guides, AI content tips, and social media scheduling strategies to scale your social footprint.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogListingPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getCategories(),
  ]);

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <>
      <JsonLd type="WebSite" />

      <section className="section" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Resource Hub
          </span>

          <h1
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              color: 'var(--color-text-main)',
            }}
          >
            Insights & Guides for <span className="gradient-text">Social Media Dominance</span>
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              maxWidth: '650px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Discover battle-tested tactics for AI automation, multi-channel scheduling, and audience engagement.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '3.5rem',
            }}
          >
            <Link
              href="/blog"
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '600',
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                border: '1px solid var(--color-border)',
                transition: 'all 0.2s ease',
              }}
            >
              All Articles
            </Link>

            {categories.map((cat) => (
              <Link
                key={cat.id}
                href="/blog"
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text-muted)',
                  border: '1px solid var(--color-border)',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Featured Post Card */}
          {featuredPost && (
            <div
              className="glass-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                overflow: 'hidden',
                textAlign: 'left',
                marginBottom: '4rem',
                border: '1px solid var(--color-border)',
              }}
            >
              <div style={{ position: 'relative', minHeight: '320px' }}>
                <Image
                  src={featuredPost.featured_image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

              <div
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="badge">Featured Article</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-subtle)' }}>
                    {featuredPost.read_time_minutes} min read
                  </span>
                </div>

                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', lineHeight: '1.25', color: 'var(--color-text-main)' }}>
                  <Link href={`/blog/${featuredPost.slug}`} style={{ color: 'inherit' }}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {featuredPost.excerpt}
                </p>

                <div style={{ paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-main)' }}>
                    By {featuredPost.author.name}
                  </span>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    Read Full Guide <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Posts Grid */}
          {remainingPosts.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem',
                textAlign: 'left',
              }}
            >
              {remainingPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
