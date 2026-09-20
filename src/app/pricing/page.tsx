'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FAQAccordion, FAQItem } from '@/components/ui/FAQAccordion';
import { CTASection } from '@/components/ui/CTASection';
import { Check, X, CheckCircle2 } from 'lucide-react';

const EXTENDED_PRICING_FAQS: FAQItem[] = [
  {
    question: 'Can I change or upgrade my plan later?',
    answer:
      'Yes, you can upgrade, downgrade, or switch between monthly and annual billing at any time directly from your account settings. Pro-rated adjustments are applied instantly.',
  },
  {
    question: 'What happens when my 14-day trial ends?',
    answer:
      'At the end of your 14-day trial, you can choose the plan that best fits your needs. If you choose not to subscribe immediately, your scheduled queues will pause and your account data will be safely stored for 30 days.',
  },
  {
    question: 'Are there any hidden API fees or posting charges?',
    answer:
      'None whatsoever. All social platform API connections, post scheduling, auto-publishing, and standard AI content generations are included in your subscription.',
  },
  {
    question: 'How does the 20% annual discount work?',
    answer:
      'When you choose Annual Billing, you are billed once per year at a 20% discount compared to monthly billing, giving you 2 full months free every year.',
  },
  {
    question: 'Can I invite team members or clients to review scheduled posts?',
    answer:
      'Yes! Pro plans include 3 team seats, and Agency plans include 15 seats with dedicated client workspaces and approval workflows so clients can review posts before publication.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit/debit cards (Visa, MasterCard, American Express, Discover), PayPal, and wire transfers for enterprise invoices.',
  },
  {
    question: 'Do you offer refunds if I am not satisfied?',
    answer:
      'We offer a 30-day money-back guarantee on all subscription plans if A4 AutoPost does not meet your team’s expectations.',
  },
  {
    question: 'What happens to my queued posts if I decide to cancel?',
    answer:
      'If you cancel your subscription, any posts scheduled prior to your subscription end-date will still be published. Future unposted queues will be archived.',
  },
];

interface FeatureRow {
  name: string;
  starter: string | boolean;
  pro: string | boolean;
  agency: string | boolean;
}

interface FeatureCategory {
  category: string;
  features: FeatureRow[];
}

const COMPARISON_MATRIX: FeatureCategory[] = [
  {
    category: 'Core Accounts & Capacity',
    features: [
      { name: 'Social Media Accounts', starter: '5 Accounts', pro: '15 Accounts', agency: '45 Accounts' },
      { name: 'Monthly Scheduled Posts', starter: '100 / month', pro: 'Unlimited', agency: 'Unlimited' },
      { name: 'Brand Workspaces', starter: '1 Workspace', pro: '3 Workspaces', agency: 'Unlimited Workspaces' },
      { name: 'Team Member Seats', starter: '1 Seat', pro: '3 Seats', agency: '15 Seats' },
    ],
  },
  {
    category: 'AI Content Suite',
    features: [
      { name: 'AI Post & Hook Writer', starter: 'Basic AI', pro: 'Advanced AI', agency: 'Enterprise Custom Prompts' },
      { name: 'Platform Caption Auto-Adaptation', starter: true, pro: true, agency: true },
      { name: 'Smart AI Hashtag Generator', starter: true, pro: true, agency: true },
      { name: 'Custom Brand Voice Profiles', starter: '1 Profile', pro: '3 Profiles', agency: 'Unlimited Profiles' },
      { name: 'AI Image & Video Prompts', starter: false, pro: true, agency: true },
    ],
  },
  {
    category: 'Publishing & Queue Engine',
    features: [
      { name: 'Best-Time Auto-Publishing Engine', starter: false, pro: true, agency: true },
      { name: 'Drag & Drop Visual Calendar', starter: true, pro: true, agency: true },
      { name: 'One-Click Multi-Channel Sync', starter: true, pro: true, agency: true },
      { name: 'Custom Time Slot Queues', starter: true, pro: true, agency: true },
    ],
  },
  {
    category: 'Analytics & Team Collaboration',
    features: [
      { name: 'Engagement & Reach Analytics', starter: 'Basic Stats', pro: 'Advanced Analytics', agency: 'Multi-Brand Export Reports' },
      { name: 'Client Post Approval Workflows', starter: false, pro: false, agency: true },
      { name: 'Custom Member Roles & Permissions', starter: false, pro: true, agency: true },
    ],
  },
  {
    category: 'Security & Support',
    features: [
      { name: 'Official OAuth 2.0 API Sync', starter: true, pro: true, agency: true },
      { name: 'Support Channel', starter: 'Standard Email', pro: 'Priority Chat & Email', agency: '24/7 Dedicated Account Manager' },
    ],
  },
];

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);

  const discountMultiplier = annualBilling ? 0.8 : 1;

  const starterPrice = Math.round(19 * discountMultiplier);
  const proPrice = Math.round(49 * discountMultiplier);
  const agencyPrice = Math.round(99 * discountMultiplier);

  const renderValue = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check size={20} style={{ color: 'var(--color-success)', margin: '0 auto' }} />
      ) : (
        <X size={20} style={{ color: 'var(--color-text-subtle)', margin: '0 auto' }} />
      );
    }
    return <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{val}</span>;
  };

  return (
    <>
      {/* Header Section */}
      <section className="section" style={{ textAlign: 'center', paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Transparent Pricing
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
            Predictable Pricing for <span className="gradient-text">Unstoppable Growth</span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-muted)',
              maxWidth: '650px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Start with a 14-day free trial. No credit card required. Upgrade or downgrade anytime.
          </p>

          {/* Billing Switch */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.4rem 0.6rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '3.5rem',
            }}
          >
            <button
              type="button"
              onClick={() => setAnnualBilling(false)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: !annualBilling ? 'var(--color-primary)' : 'transparent',
                color: !annualBilling ? '#ffffff' : 'var(--color-text-muted)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setAnnualBilling(true)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: annualBilling ? 'var(--color-primary)' : 'transparent',
                color: annualBilling ? '#ffffff' : 'var(--color-text-muted)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              Annual Billing
              <span
                style={{
                  fontSize: '0.75rem',
                  backgroundColor: 'var(--color-success)',
                  color: '#ffffff',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '9999px',
                }}
              >
                Save 20%
              </span>
            </button>
          </div>

          {/* Pricing Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {/* Starter Plan */}
            <div className="glass-card" style={{ padding: '2.5rem 2rem', textAlign: 'left' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: '700' }}>Starter Plan</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
                Ideal for solo content creators & solopreneurs.
              </p>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                ${starterPrice}{' '}
                <span style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  / month {annualBilling ? '(billed annually)' : ''}
                </span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> 5 Social Media Accounts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> 100 Scheduled Posts / month
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Basic AI Post Writer
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-subtle)' }}>
                  <X size={18} style={{ color: 'var(--color-text-subtle)' }} /> Multi-Brand Workspaces
                </li>
              </ul>
              <Button href="/signup" variant="outline" fullWidth>
                Start Free Trial
              </Button>
            </div>

            {/* Pro Plan */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                textAlign: 'left',
                border: '2px solid var(--color-primary)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '2rem',
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                }}
              >
                Recommended
              </div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: '700' }}>Pro Growth</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
                For professional marketers & scaling brands.
              </p>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                ${proPrice}{' '}
                <span style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  / month {annualBilling ? '(billed annually)' : ''}
                </span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> 15 Social Accounts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Unlimited Scheduled Posts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Advanced AI Content Suite
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Best Time Publishing Engine
                </li>
              </ul>
              <Button href="/signup" variant="primary" fullWidth>
                Start 14-Day Trial
              </Button>
            </div>

            {/* Agency Plan */}
            <div className="glass-card" style={{ padding: '2.5rem 2rem', textAlign: 'left' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: '700' }}>Agency</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
                For digital agencies managing multiple clients.
              </p>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                ${agencyPrice}{' '}
                <span style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  / month {annualBilling ? '(billed annually)' : ''}
                </span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> 45 Social Accounts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Unlimited Client Workspaces
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Team Member Permissions
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Dedicated Account Manager
                </li>
              </ul>
              <Button href="/signup" variant="outline" fullWidth>
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>
              Full Feature Breakdown
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em',
              }}
            >
              Compare Plan Features Side by Side
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
              Explore detailed capability differences between Starter, Pro Growth, and Agency plans.
            </p>
          </div>

          <div className="glass-card" style={{ overflowX: 'auto', padding: '1.5rem' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '700px',
                textAlign: 'left',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  <th style={{ padding: '1rem', fontSize: '1.05rem', fontWeight: '700', width: '38%' }}>
                    Features & Capabilities
                  </th>
                  <th style={{ padding: '1rem', fontSize: '1.05rem', fontWeight: '700', textAlign: 'center', width: '20%' }}>
                    Starter<br />
                    <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                      ${starterPrice}/mo
                    </span>
                  </th>
                  <th
                    style={{
                      padding: '1rem',
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      textAlign: 'center',
                      color: 'var(--color-primary)',
                      width: '21%',
                    }}
                  >
                    Pro Growth ★<br />
                    <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--color-primary)' }}>
                      ${proPrice}/mo
                    </span>
                  </th>
                  <th style={{ padding: '1rem', fontSize: '1.05rem', fontWeight: '700', textAlign: 'center', width: '21%' }}>
                    Agency<br />
                    <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                      ${agencyPrice}/mo
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_MATRIX.map((group, groupIdx) => (
                  <React.Fragment key={groupIdx}>
                    <tr style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                      <td
                        colSpan={4}
                        style={{
                          padding: '0.85rem 1rem',
                          fontWeight: '700',
                          fontSize: '0.9rem',
                          color: 'var(--color-text-main)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((feat, featIdx) => (
                      <tr
                        key={featIdx}
                        style={{
                          borderBottom: '1px solid var(--color-border)',
                          transition: 'background-color 0.15s ease',
                        }}
                      >
                        <td style={{ padding: '0.9rem 1rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                          {feat.name}
                        </td>
                        <td style={{ padding: '0.9rem 1rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                          {renderValue(feat.starter)}
                        </td>
                        <td
                          style={{
                            padding: '0.9rem 1rem',
                            textAlign: 'center',
                            backgroundColor: 'var(--color-primary-glow)',
                            color: 'var(--color-text-main)',
                          }}
                        >
                          {renderValue(feat.pro)}
                        </td>
                        <td style={{ padding: '0.9rem 1rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                          {renderValue(feat.agency)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>
              Pricing & Subscription FAQs
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
              Everything you need to know about billing, plan upgrades, and subscription policies.
            </p>
          </div>

          <FAQAccordion items={EXTENDED_PRICING_FAQS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
