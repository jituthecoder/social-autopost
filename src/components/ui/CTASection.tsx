import React from 'react';
import { Button } from './Button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function CTASection({
  title = 'Ready to Automate Your Social Media Growth?',
  subtitle = 'Start generating, scheduling, and publishing AI-optimized posts across all your social channels in minutes.',
  primaryCtaText = 'Start Free 14-Day Trial',
  primaryCtaHref = '/signup',
  secondaryCtaText = 'Explore Pricing Plans',
  secondaryCtaHref = '/pricing',
}: CTASectionProps) {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-primary-light) 100%)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-xl)',
            borderRadius: '1.5rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: 'var(--color-text-main)',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              maxWidth: '650px',
              margin: '0 auto 2.25rem auto',
              lineHeight: '1.6',
            }}
          >
            {subtitle}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Button href={primaryCtaHref} size="lg" variant="primary">
              {primaryCtaText}
            </Button>
            <Button href={secondaryCtaHref} size="lg" variant="outline">
              {secondaryCtaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
