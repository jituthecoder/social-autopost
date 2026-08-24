import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo.config';

export const metadata: Metadata = {
  title: `Cookie Policy | ${SITE_CONFIG.name}`,
  description: `Cookie Policy for ${SITE_CONFIG.name}. Learn how we use cookies and tracking technologies on our website and SaaS application.`,
  alternates: {
    canonical: '/cookies',
  },
};

export default function CookiePolicyPage() {
  const lastUpdated = 'August 24, 2026';

  return (
    <section className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Privacy & Cookies
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
              color: 'var(--color-text-main)',
            }}
          >
            Cookie Policy
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Last Updated: {lastUpdated}
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'var(--color-text-main)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>1. What Are Cookies?</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Cookies are small text files stored on your browser or device when you visit websites. They help websites remember your preferences, keep you logged in securely, and understand how users interact with pages.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>2. Cookies We Use</h2>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <strong>Essential Authentication Cookies:</strong> Necessary for core website functions such as keeping your session active, security token verification, and theme preference persistence (Light vs. Dark mode).
              </li>
              <li>
                <strong>Preference & Functional Cookies:</strong> Used to remember your dashboard layout choices, timezone settings, and workspace preferences.
              </li>
              <li>
                <strong>Analytics & Telemetry Cookies:</strong> Help us measure landing page conversion performance and feature utilization patterns to improve our user experience.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>3. Managing Cookie Preferences</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              You can control or disable cookies directly within your web browser settings. Please note that disabling essential cookies may impact your ability to log in or access certain features of the {SITE_CONFIG.name} application.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>4. Contact Us</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              If you have any questions about our use of cookies, please contact us at <a href="mailto:privacy@mydomain.com" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>privacy@mydomain.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
