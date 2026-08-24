import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '@/lib/wordpress';
import { BlogCard } from '@/components/ui/BlogCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { CTASection } from '@/components/ui/CTASection';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { SITE_CONFIG } from '@/config/seo.config';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const postUrl = `${SITE_CONFIG.domain}/blog/${post.slug}`;

  return {
    title: `${post.title} | ${SITE_CONFIG.name} Blog`,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: 'article',
      url: postUrl,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.published_at,
      modifiedTime: post.modified_at,
      authors: [post.author.name],
      images: [
        {
          url: post.featured_image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featured_image],
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const formattedPublished = new Date(post.published_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedModified = new Date(post.modified_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const articleJsonLdData = {
    headline: post.title,
    description: post.excerpt,
    image: [post.featured_image],
    datePublished: post.published_at,
    dateModified: post.modified_at,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.domain}/logo.png`,
      },
    },
  };

  return (
    <>
      <JsonLd type="BlogPosting" data={articleJsonLdData} />

      <article className="section" style={{ paddingTop: '4rem' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: 'var(--color-text-muted)',
              marginBottom: '2rem',
            }}
          >
            <Link href="/" style={{ color: 'var(--color-text-muted)' }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" style={{ color: 'var(--color-text-muted)' }}>
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-main)', fontWeight: '600' }}>
              {post.categories?.[0]?.name || 'Article'}
            </span>
          </nav>

          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: 'var(--color-primary)',
              marginBottom: '1.5rem',
            }}
          >
            <ArrowLeft size={16} /> Back to all posts
          </Link>

          {/* Article Header */}
          <header style={{ marginBottom: '2.5rem' }}>
            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: '800',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                color: 'var(--color-text-main)',
              }}
            >
              {post.title}
            </h1>

            {/* Author & Meta bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid var(--color-border)',
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User size={18} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontWeight: '700', color: 'var(--color-text-main)' }}>
                  {post.author.name}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={16} />
                <span>Published {formattedPublished}</span>
              </div>

              {post.modified_at !== post.published_at && (
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)' }}>
                  (Updated {formattedModified})
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginLeft: 'auto' }}>
                <Clock size={16} />
                <span>{post.read_time_minutes} min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '420px',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              marginBottom: '3rem',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              sizes="(max-width: 1000px) 100vw, 880px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Post Content */}
          <div
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--color-text-main)',
              marginBottom: '4rem',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div style={{ paddingTop: '3rem', borderTop: '1px solid var(--color-border)', marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: 'var(--color-text-main)',
                  marginBottom: '2rem',
                }}
              >
                Related Articles
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {relatedPosts.map((related) => (
                  <BlogCard key={related.id} post={related} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </>
  );
}
