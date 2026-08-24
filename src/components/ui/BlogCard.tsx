import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WPPost } from '@/types/wordpress';
import { Clock, Calendar } from 'lucide-react';

interface BlogCardProps {
  post: WPPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const categoryName = post.categories?.[0]?.name || 'General';

  return (
    <article
      className="glass-card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
          }}
        >
          <span className="badge" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'var(--glass-bg)' }}>
            {categoryName}
          </span>
        </div>
      </div>

      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--color-text-subtle)',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Calendar size={14} />
            {formattedDate}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Clock size={14} />
            {post.read_time_minutes} min read
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.15rem',
            fontWeight: '700',
            lineHeight: '1.4',
            color: 'var(--color-text-main)',
          }}
        >
          <Link
            href={`/blog/${post.slug}`}
            style={{
              color: 'inherit',
              transition: 'color 0.2s ease',
            }}
          >
            {post.title}
          </Link>
        </h3>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
            lineHeight: '1.5',
            flexGrow: 1,
          }}
        >
          {post.excerpt.length > 120 ? `${post.excerpt.slice(0, 120)}...` : post.excerpt}
        </p>

        <div
          style={{
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-main)' }}>
            By {post.author.name}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              color: 'var(--color-primary)',
            }}
          >
            Read Article →
          </Link>
        </div>
      </div>
    </article>
  );
}
