import React from 'react';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/seo.config';

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_CONFIG.name}`,
  description: `Terms of Service for ${SITE_CONFIG.name}. Please read these terms carefully before using our AI social media management SaaS platform.`,
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'August 24, 2026';

  return (
    <section className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Legal Terms
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
            Terms of Service
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
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>1. Agreement to Terms</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              By creating an account or accessing {SITE_CONFIG.name} (&quot;Platform,&quot; &quot;Service,&quot; &quot;we,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;) and our <a href="/privacy" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Privacy Policy</a>. If you do not agree to these terms, you may not use our services.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>2. Account Registration & Responsibilities</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              To access our social media scheduling features, you must register for an account:
            </p>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>You must provide accurate, current, and complete registration information.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are fully responsible for all activities that occur under your account login or connected social media API tokens.</li>
              <li>You must notify us immediately of any unauthorized use or security breaches.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>3. Subscriptions, Trials, & Billing</h2>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>14-Day Free Trial:</strong> We offer a 14-day free trial on selected subscription plans. No credit card is required to initiate the trial.</li>
              <li><strong>Billing Cycle:</strong> Subscriptions are billed on a recurring monthly or annual basis depending on your selected plan.</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time via your billing dashboard. Cancellations take effect at the end of the current billing cycle.</li>
              <li><strong>Refund Policy:</strong> We offer a 30-day money-back guarantee for initial paid subscriptions. Refund requests can be submitted to legal@mydomain.com.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>4. Acceptable Use & Social Network Compliance</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              You agree to use {SITE_CONFIG.name} solely in compliance with all applicable local, national, and international laws, as well as the terms of service of connected social media platforms (LinkedIn, Twitter/X, Meta Facebook & Instagram, TikTok, Pinterest). <strong>Prohibited activities include transmitting automated spam, misleading content, malware, or harassing material.</strong> Violation of platform policies may result in immediate account suspension.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>5. Intellectual Property Rights</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              You retain all ownership rights to the content, text, media, and images you upload or schedule using our Service. {SITE_CONFIG.name} owns all software, user interface designs, logos, algorithms, and AI prompt engineering tools provided as part of the Service.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>6. Limitation of Liability</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              To the maximum extent permitted by law, {SITE_CONFIG.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, or social media engagement resulting from your use or inability to use the service, or API rate limits imposed by third-party social networks.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>7. Termination</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              We reserve the right to suspend or terminate your account at our sole discretion, without notice, if we believe you have violated these Terms or engaged in abusive automation practices.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>8. Governing Law</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>9. Contact Information</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              For legal inquiries or notices regarding these Terms of Service, please contact:
              <br />
              <strong>Email:</strong> legal@a4autopost.com
              <br />
              <strong>Address:</strong> A4 AutoPost Legal Department.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
