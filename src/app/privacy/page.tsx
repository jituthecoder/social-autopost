import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/seo.config';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we collect, use, and protect your personal data and social media API connections.`,
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'August 24, 2026';

  return (
    <section className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Legal Documentation
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
            Privacy Policy
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
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>1. Introduction</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Welcome to {SITE_CONFIG.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring your personal data and connected social media profiles are handled with the highest security standards. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ({SITE_CONFIG.domain}) or use our AI social media management application.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>2. Information We Collect</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              We collect information to provide and improve our social media scheduling services:
            </p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Account Information:</strong> Name, email address, password hash, company name, and billing details when you register for an account.</li>
              <li><strong>Social Media OAuth Tokens:</strong> Access tokens and profile IDs received via official OAuth 2.0 authorizations for connected channels (such as LinkedIn, X/Twitter, Meta Facebook & Instagram, TikTok, Pinterest). We never store or request your social media passwords.</li>
              <li><strong>User Content:</strong> Draft posts, media uploads, AI prompt inputs, and scheduled publication queues.</li>
              <li><strong>Usage Telemetry:</strong> Log data, IP addresses, browser types, device information, and interaction metrics.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>3. How We Use Your Information</h2>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>To provide, operate, and maintain our multi-platform social media publishing queue.</li>
              <li>To generate AI captions, hooks, and content suggestions based on your explicit inputs.</li>
              <li>To send service notifications, security alerts, and customer support communications.</li>
              <li>To process subscription payments and monitor account usage limits.</li>
              <li>To detect and prevent fraudulent, unauthorized, or illegal activities.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>4. AI Content Generation & Privacy</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              When you use our AI content features, your inputs are processed securely to generate captions and hooks. <strong>We do not use your private content or proprietary brand posts to train public AI models.</strong> All AI prompt generations are isolated to your workspace.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>5. Social Media Platform Data Protection</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Our application complies strictly with developer terms and privacy requirements for Meta, LinkedIn, Twitter/X, TikTok, and Pinterest APIs. We process platform data solely to execute your scheduled publishing requests. You can revoke access tokens at any time via your social media security settings or within your {SITE_CONFIG.name} dashboard.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>6. Data Sharing & Third Parties</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              We do not sell, rent, or trade your personal data. We only share data with trusted third-party service providers (such as cloud hosting providers like AWS, payment processors, and official social media APIs) necessary to deliver our application.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>7. Data Security & Retention</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              We implement industry-standard encryption protocols (TLS/SSL in transit, AES-256 at rest) to protect your information. OAuth tokens and authentication secrets are stored in secure environment vaults. We retain your data only for as long as your account remains active or as required by law.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>8. Your Rights (GDPR & CCPA)</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Depending on your location, you have the right to access, correct, export, or delete your personal information. To exercise any of these rights, please contact our privacy compliance team at <a href="mailto:privacy@mydomain.com" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>privacy@mydomain.com</a>.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>9. Contact Us</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> privacy@mydomain.com
              <br />
              <strong>Address:</strong> SocialPulse Legal Team, San Francisco, CA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
