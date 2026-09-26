import React from 'react';
import Link from 'next/link';
import { Share2 } from 'lucide-react';
import { SITE_CONFIG } from '@/config/seo.config';

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
        marginTop: 'auto',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '1rem',
                textDecoration: 'none',
              }}
            >
              <img
                src="/logo.png"
                alt="A4 AutoPost"
                className="logo-dark"
                style={{
                  height: '56px',
                  width: 'auto',
                  maxHeight: '56px',
                  objectFit: 'contain',
                }}
              />
              <img
                src="/logo-light.png"
                alt="A4 AutoPost"
                className="logo-light"
                style={{
                  height: '56px',
                  width: 'auto',
                  maxHeight: '56px',
                  objectFit: 'contain',
                }}
              />
            </Link>

            <p
              style={{
                fontSize: '0.925rem',
                color: 'var(--color-text-muted)',
                maxWidth: '320px',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
              }}
            >
              The complete AI-powered social media post scheduling and multi-platform growth automation engine.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow A4 AutoPost on Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
                }}
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Follow A4 AutoPost on Facebook"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
                }}
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="Follow A4 AutoPost on LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
                }}
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                title="Follow @a4autopost on X (Twitter)"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
                }}
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: '700',
                color: 'var(--color-text-main)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
              }}
            >
              Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/features" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  All Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Pricing Plans
                </Link>
              </li>
              <li>
                <a href={`${SITE_CONFIG.dashboardUrl}/register`} style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                  Start Free Trial
                </a>
              </li>
              <li>
                <a href={`${SITE_CONFIG.dashboardUrl}/login`} style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: '700',
                color: 'var(--color-text-main)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
              }}
            >
              Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/blog" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-automate-social-media-posts-with-ai-in-2026" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  AI Social Strategy
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: '700',
                color: 'var(--color-text-main)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/about" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Acceptable Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--color-text-subtle)',
          }}
        >
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success)',
                display: 'inline-block',
              }}
            />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
