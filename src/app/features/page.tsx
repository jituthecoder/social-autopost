import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { FAQAccordion, FAQItem } from '@/components/ui/FAQAccordion';
import { CTASection } from '@/components/ui/CTASection';
import { SocialPlatformBadge } from '@/components/ui/SocialPlatformBadge';
import {
  Sparkles,
  Calendar,
  Zap,
  Users,
  BarChart3,
  ShieldCheck,
  Share2,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sliders,
  Layers,
  FileText,
  Video,
  Image as ImageIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Features | AI Social Media Management & Auto-Posting',
  description:
    'Explore the full suite of AI content generation, multi-channel scheduling, visual calendar, client workspaces, and analytics features in A4 AutoPost.',
  alternates: {
    canonical: '/features',
  },
};

const FEATURE_FAQS: FAQItem[] = [
  {
    question: 'Can I set custom queue posting times for different days of the week?',
    answer:
      'Yes. You can define custom recurring time slots for Mondays, Tuesdays, weekends, or specific times of day. Posts added to your queue will automatically fill the next available slot.',
  },
  {
    question: 'Does the AI engine support multi-language content generation?',
    answer:
      'Yes! The AI engine supports over 30 languages, allowing you to generate and translate captions for global target audiences with native tone adaptations.',
  },
  {
    question: 'Can I upload high-definition videos for Instagram Reels and TikTok?',
    answer:
      'Absolutely. You can upload MP4 and MOV videos up to 4K resolution. Our media processing engine automatically optimizes video bitrates for Instagram Reels, TikTok, and YouTube Shorts.',
  },
  {
    question: 'How do client post approval links work for agencies?',
    answer:
      'Agencies can generate a branded, password-protected approval link for any draft queue. Clients can view, comment on, or approve scheduled posts directly from their browser without creating an account.',
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '5.5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={14} /> Complete SaaS Feature Suite
          </span>

          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              color: 'var(--color-text-main)',
              maxWidth: '920px',
              margin: '0 auto 1.5rem auto',
            }}
          >
            Engineered for <span className="gradient-text">Maximum Social Impact</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '740px',
              margin: '0 auto 3rem auto',
              lineHeight: '1.65',
            }}
          >
            From AI caption generation to automated queue scheduling, visual calendars, and client workspaces — A4 AutoPost replaces 5 separate social media tools.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '4rem',
            }}
          >
            <Link
              href="/signup"
              style={{
                padding: '0.8rem 1.75rem',
                borderRadius: '0.5rem',
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                fontWeight: '700',
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              Start Your Free Trial <ArrowRight size={18} />
            </Link>
            <Link
              href="/pricing"
              style={{
                padding: '0.8rem 1.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--color-border)',
                backgroundColor: 'transparent',
                color: 'var(--color-text-main)',
                fontWeight: '600',
                fontSize: '1rem',
              }}
            >
              View Pricing & Plans
            </Link>
          </div>

          {/* Top Feature Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              textAlign: 'left',
            }}
          >
            <FeatureCard
              icon={Sparkles}
              badge="AI Engine"
              title="AI Content Optimization"
              description="Generates engaging, platform-customized hooks, posts, and hashtags adapted specifically for LinkedIn, Twitter, Instagram, and Facebook."
            />
            <FeatureCard
              icon={Calendar}
              badge="Scheduling"
              title="Visual Content Calendar"
              description="Drag and drop posts easily across an intuitive monthly and weekly calendar interface with custom color tags."
            />
            <FeatureCard
              icon={Zap}
              badge="Automation"
              title="Best-Time Auto-Publishing"
              description="Automatically queue posts to publish when your specific target audience is most active online."
            />
            <FeatureCard
              icon={Share2}
              badge="Multi-Channel"
              title="Unified Multi-Account Sync"
              description="Connect multiple profiles per platform and post across all channels simultaneously with single-click publishing."
            />
            <FeatureCard
              icon={Users}
              badge="Collaboration"
              title="Client & Team Workspaces"
              description="Isolate client profiles in dedicated workspaces and manage custom team member permissions with ease."
            />
            <FeatureCard
              icon={BarChart3}
              badge="Analytics"
              title="Growth & Engagement Telemetry"
              description="Track impression stats, audience growth rates, top-performing post patterns, and export client CSV reports."
            />
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 1: AI Engine */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="badge" style={{ marginBottom: '1rem' }}>
                Smart Content Creation
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: '800',
                  color: 'var(--color-text-main)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.25',
                }}
              >
                Draft Viral Hooks & Platform-Adapted Captions in Seconds
              </h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                }}
              >
                Say goodbye to writer block. Our specialized AI prompt engine analyzes your niche topic and outputs multiple high-converting hooks formatted specifically for LinkedIn long-form posts or X/Twitter threads.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Custom Brand Voice Training & Tone Customization
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Niche Hashtag Suggestions & Emoji Frequency Controls
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Character Count Validation for X, LinkedIn & Instagram
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Sparkles size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontWeight: '700', fontSize: '1.05rem' }}>AI Prompt Studio</span>
              </div>
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'var(--color-bg-alt)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '1rem',
                }}
              >
                <strong>Topic Input:</strong> &quot;How to scale a B2B SaaS agency without expanding headcount in 2026&quot;
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div
                  style={{
                    padding: '0.85rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-primary-light)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-main)',
                  }}
                >
                  💡 <strong>Hook 1 (Contrarian):</strong> &quot;Hiring more account managers is the worst way to scale your agency. Here is why automated queues changed everything...&quot;
                </div>
                <div
                  style={{
                    padding: '0.85rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-main)',
                  }}
                >
                  📊 <strong>Hook 2 (Data-Driven):</strong> &quot;We audited 40 agency schedules. Teams using AI auto-publishers saved 18 hours weekly while doubling reach.&quot;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 2: Visual Calendar */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={20} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontWeight: '700', fontSize: '1.05rem' }}>Monthly Queue Planner</span>
                </div>
                <span className="badge" style={{ fontSize: '0.75rem' }}>Aug 2026</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.4rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.4rem' }}>
                {[...Array(28)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      aspectRatio: '1',
                      borderRadius: '0.4rem',
                      backgroundColor: i % 4 === 0 ? 'var(--color-primary-light)' : 'var(--color-bg-alt)',
                      border: i % 4 === 0 ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: i % 4 === 0 ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    }}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="badge" style={{ marginBottom: '1rem' }}>
                Visual Calendar & Queue Engine
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: '800',
                  color: 'var(--color-text-main)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.25',
                }}
              >
                Complete Control Over Your Monthly Content Calendar
              </h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                }}
              >
                Gain bird-eye visibility over your upcoming social pipeline. Drag and drop scheduled updates to rearrange publishing dates instantly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Drag-and-Drop Post Rescheduling
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Color-Coded Social Platform Badges & Tags
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Automated Recurring Time-Slot Queue Buckets
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Compatibility Grid */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>
              Multi-Channel Support
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em',
              }}
            >
              Supported Formats Across Networks
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
              Publish text, high-res images, video carousels, and threads to all your accounts.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              { platform: 'twitter', formats: 'Text, Threads, Images, Videos', status: 'Full OAuth 2.0 API' },
              { platform: 'linkedin', formats: 'Posts, Articles, Document Slides', status: 'Full OAuth 2.0 API' },
              { platform: 'instagram', formats: 'Feed Photos, Reels, Carousels', status: 'Business API Direct' },
              { platform: 'facebook', formats: 'Page Updates, Group Posts, Video', status: 'Official Graph API' },
              { platform: 'pinterest', formats: 'Image Pins, Idea Pins, Web Links', status: 'Official Pin API' },
              { platform: 'tiktok', formats: 'Vertical HD Video, Reels & Shorts', status: 'TikTok Creator Sync' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <SocialPlatformBadge platform={item.platform as any} />
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', fontWeight: '600' }}>
                  Formats: <span style={{ color: 'var(--color-text-muted)', fontWeight: '400' }}>{item.formats}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-success)', fontWeight: '700' }}>
                  ✓ {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Technical FAQs */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-text-main)' }}>
              Feature Technical FAQs
            </h2>
          </div>
          <FAQAccordion items={FEATURE_FAQS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
