import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo.config';

export const metadata: Metadata = {
  title: `Acceptable Use Policy | ${SITE_CONFIG.name}`,
  description: `Acceptable Use Policy for ${SITE_CONFIG.name}. Rules and guidelines for social media automated posting, rate limits, and content compliance.`,
  alternates: {
    canonical: '/acceptable-use',
  },
};

export default function AcceptableUsePage() {
  const lastUpdated = 'August 24, 2026';

  return (
    <section className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Compliance Guidelines
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
            Acceptable Use Policy
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
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>1. Overview & Purpose</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              This Acceptable Use Policy defines the rules and guidelines governing automated posting and content scheduling on {SITE_CONFIG.name}. Our mission is to provide an ethical AI publishing engine that respects audience trust and social media platform rules.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>2. Prohibited Content & Automation</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              You may not use {SITE_CONFIG.name} to generate, schedule, or publish any of the following:
            </p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Spam & Mass Automation:</strong> Repetitive, low-value, duplicate posts designed to manipulate engagement algorithms.</li>
              <li><strong>Harassment & Hate Speech:</strong> Content that promotes discrimination, violence, or hate against individuals or protected groups.</li>
              <li><strong>Malicious Links & Phishing:</strong> Content containing malware, deceptive URLs, or unauthorized affiliate redirects.</li>
              <li><strong>Misinformation & Impersonation:</strong> Deceptive posts intended to mislead audiences or impersonate individuals/entities without authorization.</li>
              <li><strong>Copyright Infringement:</strong> Unlicensed images, media, or text owned by third parties without appropriate rights.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>3. Rate Limits & Platform API Rules</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              You agree to adhere to the publishing frequency guidelines and rate limits established by connected networks (LinkedIn, X/Twitter, Meta, TikTok, Pinterest). Bypassing system rate limits or attempting to exploit API queues is strictly forbidden.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>4. Enforcement & Reporting</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Accounts found to be in violation of this policy may face immediate content removal, queue suspension, or permanent account termination without refund. To report abusive content or security violations, email <a href="mailto:abuse@mydomain.com" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>abuse@mydomain.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
