'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { FAQAccordion, FAQItem } from '@/components/ui/FAQAccordion';
import { CTASection } from '@/components/ui/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { SocialPlatformBadge } from '@/components/ui/SocialPlatformBadge';
import {
  Sparkles,
  Calendar,
  Send,
  Zap,
  Layers,
  Users,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  TrendingUp,
  Star,
  Check,
} from 'lucide-react';

// Brand Logos for "Trusted By" Section
const BRAND_LOGOS = [
  { name: 'ElevenLabs', label: 'ElevenLabs' },
  { name: 'Semrush', label: 'SEMRUSH' },
  { name: 'Wired', label: 'WIRED' },
  { name: 'Vice', label: 'VICE' },
  { name: 'Crocs', label: 'crocs™' },
  { name: 'Benefit', label: 'benefit' },
];

// SVG Floating Platform Icons
const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF0000">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#BD081C">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026l.032-.026z" />
  </svg>
);

const TiktokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--color-text-main)">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.55-1.31 1.48-1.35 2.45-.07.96.34 1.94 1.08 2.55.85.73 2.06.96 3.13.62.97-.29 1.76-1.04 2.11-1.99.27-.72.32-1.5.3-2.26.02-4.4.01-8.81.01-13.22z" />
  </svg>
);

const ZapierIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF4A00">
    <path d="M12 0L1.5 12h9L9 24l13.5-12h-9L15 0z" />
  </svg>
);

const TESTIMONIALS = [
  {
    name: 'Jessica Vance',
    role: 'Head of Growth',
    company: 'SaaSify Studio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    content:
      'A4 AutoPost transformed our entire social workflow. We manage 30+ multi-platform accounts with zero manual post delays and saved 18 hours every single week!',
    metric: '+380% Impressions',
    rating: 5,
  },
  {
    name: 'Marcus Sterling',
    role: 'Digital Agency Founder',
    company: 'Apex Media',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content:
      'The AI caption generator writes platform-adapted hooks that actually perform. Our client renewal rate hit 98% since we switched to A4 AutoPost queues.',
    metric: '18 hrs saved/wk',
    rating: 5,
  },
  {
    name: 'Elena Rostova',
    role: 'Solopreneur & Creator',
    company: 'Tech Pulse Newsletter',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    content:
      'I set up my entire month of LinkedIn and Twitter threads in one afternoon. The automatic best-time publishing engine doubled my post engagement.',
    metric: '2.4M Annual Reach',
    rating: 5,
  },
];

const EXTENDED_FAQS: FAQItem[] = [
  {
    question: 'How does A4 AutoPost work?',
    answer:
      'A4 AutoPost connects to your social media accounts via secure official APIs. You create or generate content using AI, choose your publishing schedule or queue, and our background engine automatically formats and publishes your posts at peak engagement times.',
  },
  {
    question: 'Which social media platforms are supported?',
    answer:
      'We support X (Twitter), LinkedIn (Profiles & Pages), Facebook (Pages & Groups), Instagram (Business Accounts), Pinterest, YouTube Shorts, and TikTok.',
  },
  {
    question: 'Will my social accounts get restricted or banned for using auto-posting?',
    answer:
      'Never. A4 AutoPost uses official developer APIs approved by Meta, LinkedIn, X, TikTok, and Pinterest. We comply 100% with platform rate limits and security guidelines.',
  },
  {
    question: 'Can I customize the AI voice to match my brand?',
    answer:
      'Yes! You can define your brand voice, tone preferences, emoji frequency, and custom hashtags. The AI adapts captions specifically to your brand guidelines.',
  },
  {
    question: 'Can I upload custom media assets from Canva or Google Drive?',
    answer:
      'Yes. You can attach high-resolution images, carousels, and videos directly from your device, Google Drive, or Canva integration.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial on all plans with full access to AI generation and multi-platform publishing. No credit card is required to sign up.',
  },
  {
    question: 'Can I manage multiple client accounts as an agency?',
    answer:
      'Base plans support single brand workspaces, while our Agency plan allows you to create isolated client workspaces, invite team members, and manage posting schedules with granular permission controls.',
  },
  {
    question: 'Is there a contract or long-term commitment?',
    answer:
      'No contracts whatsoever. You can choose monthly or annual billing and cancel or change your plan anytime with a single click.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd type="SoftwareApplication" />

      {/* Floating Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '6rem',
          paddingBottom: '5.5rem',
          overflow: 'hidden',
        }}
      >
        <div className="hero-glow" />
        <div className="hero-grid-bg" />

        {/* Floating Platform Icons Scattered around Hero */}
        <div className="floating-icon float-anim-1" style={{ top: '12%', left: '8%' }}>
          <XIcon />
        </div>
        <div className="floating-icon float-anim-2" style={{ top: '16%', right: '10%' }}>
          <YoutubeIcon />
        </div>
        <div className="floating-icon float-anim-3" style={{ top: '48%', left: '5%' }}>
          <LinkedinIcon />
        </div>
        <div className="floating-icon float-anim-4" style={{ top: '44%', right: '6%' }}>
          <PinterestIcon />
        </div>
        <div className="floating-icon float-anim-2" style={{ bottom: '15%', left: '10%' }}>
          <InstagramIcon />
        </div>
        <div className="floating-icon float-anim-1" style={{ bottom: '12%', right: '12%' }}>
          <FacebookIcon />
        </div>
        <div className="floating-icon float-anim-3" style={{ bottom: '28%', left: '22%' }}>
          <TiktokIcon />
        </div>
        <div className="floating-icon float-anim-4" style={{ bottom: '26%', right: '24%' }}>
          <ZapierIcon />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 5, textAlign: 'center' }}>
          {/* Release Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <span className="badge">
              <Sparkles size={14} /> AI-Powered Social Publishing 2.0
            </span>
          </div>

          {/* Original Title */}
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              maxWidth: '900px',
              margin: '0 auto 1.5rem auto',
              color: 'var(--color-text-main)',
            }}
          >
            Automate, Schedule, & Scale Your Social Media with <span className="gradient-text">AI Precision</span>
          </h1>

          {/* Original Description */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '720px',
              margin: '0 auto 2.5rem auto',
              lineHeight: '1.6',
            }}
          >
            Stop spending hours manually posting across channels. Create platform-tailored content with AI, schedule queues in seconds, and publish seamlessly everywhere.
          </p>

          {/* Original Two CTA Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <Button href="/signup" size="lg" variant="primary">
              Start Free 14-Day Trial <ArrowRight size={18} />
            </Button>
            <Button href="/pricing" size="lg" variant="outline">
              View Pricing & Plans
            </Button>
          </div>

          {/* Social Platforms Publishing Badge Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              padding: '1.25rem',
              borderRadius: '1rem',
              backgroundColor: 'var(--glass-bg)',
              border: '1px solid var(--color-border)',
              maxWidth: '780px',
              margin: '0 auto',
            }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-subtle)', marginRight: '0.5rem' }}>
              Publishing to:
            </span>
            <SocialPlatformBadge platform="twitter" />
            <SocialPlatformBadge platform="linkedin" />
            <SocialPlatformBadge platform="facebook" />
            <SocialPlatformBadge platform="instagram" />
            <SocialPlatformBadge platform="pinterest" />
            <SocialPlatformBadge platform="tiktok" />
          </div>
        </div>
      </section>

      {/* Trusted By Brand Logos Banner */}
      <section
        style={{
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          paddingTop: '3rem',
          paddingBottom: '3rem',
          transition: 'background-color 0.25s ease',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.8125rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-text-subtle)',
              marginBottom: '2rem',
            }}
          >
            Trusted by 250,000+ creators, growth brands, and digital agencies
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {BRAND_LOGOS.map((brand, idx) => (
              <div
                key={idx}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '-0.02em',
                  opacity: 0.8,
                  transition: 'opacity 0.2s ease, color 0.2s ease',
                }}
              >
                {brand.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--color-bg-alt)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--color-text-main)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Manual Social Management is Burning Out Your Growth
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
              Managing multiple social media accounts without the right engine causes fragmented workflows and missed opportunities.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--color-error)', marginBottom: '1rem' }}>
                <Clock size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                Wasted Hours Daily
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Context switching between platforms to post updates takes focus away from strategic business initiatives.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--color-warning)', marginBottom: '1rem' }}>
                <TrendingUp size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                Inconsistent Presence
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Irregular publishing schedules destroy algorithmic reach, causing engagement to drop across networks.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <Sparkles size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                Content Ideation Block
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Struggling to write fresh, engaging captions tailored for each platform every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Workflow Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>
              4-Step Workflow
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em',
              }}
            >
              From Idea to Auto-Published Post in Minutes
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Connect Accounts',
                desc: 'Link your LinkedIn, Twitter/X, Instagram, and Facebook profiles securely.',
                icon: Layers,
              },
              {
                step: '02',
                title: 'Generate with AI',
                desc: 'Input a topic or URL and let AI draft platform-adapted captions & hashtags.',
                icon: Sparkles,
              },
              {
                step: '03',
                title: 'Schedule Queue',
                desc: 'Assign posts to pre-defined time slots or pick custom publication dates.',
                icon: Calendar,
              },
              {
                step: '04',
                title: 'Auto-Publish',
                desc: 'Sit back as A4 AutoPost delivers posts automatically and tracks performance.',
                icon: Send,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: 'var(--color-primary)',
                    opacity: 0.8,
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-text-main)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Wall of Love Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>
              Wall of Love
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--color-text-main)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Loved by <span className="gradient-text">250,000+ Marketers & Creators</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
              Here is what founders, creators, and agencies say about scaling with A4 AutoPost.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {TESTIMONIALS.map((review, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Star Rating & Metric Chip */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.25rem', color: '#F59E0B' }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#F59E0B" />
                      ))}
                    </div>

                    <span
                      className="badge"
                      style={{
                        fontSize: '0.75rem',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      {review.metric}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.975rem', color: 'var(--color-text-main)', lineHeight: '1.65' }}>
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>

                {/* Author Info Footer */}
                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '46px',
                      height: '46px',
                      minWidth: '46px',
                      minHeight: '46px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '2px solid var(--color-primary-light)',
                    }}
                  >
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      sizes="46px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div style={{ overflow: 'hidden' }}>
                    <h4
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: '700',
                        color: 'var(--color-text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {review.name}
                      <Check
                        size={14}
                        style={{
                          color: '#ffffff',
                          backgroundColor: 'var(--color-success)',
                          borderRadius: '50%',
                          padding: '1px',
                          flexShrink: 0,
                        }}
                      />
                    </h4>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--color-text-muted)',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                      }}
                    >
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--color-text-main)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Everything You Need for Social Dominance
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
              Built specifically for modern marketing teams, creators, and growth agencies.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            <FeatureCard
              icon={Sparkles}
              badge="AI Engine"
              title="Smart AI Caption & Hashtag Generator"
              description="Create high-engagement hooks, body copy, and niche hashtags tailored for LinkedIn long-form or Twitter threads with a single prompt."
            />
            <FeatureCard
              icon={Calendar}
              badge="Scheduling"
              title="Visual Content Queue & Drag-and-Drop Calendar"
              description="Organize your upcoming social strategy with a sleek visual calendar. Rearrange posts effortlessly with smart queueing."
            />
            <FeatureCard
              icon={Zap}
              badge="Multi-Channel"
              title="One-Click Multi-Platform Distribution"
              description="Publish a post simultaneously across LinkedIn, X, Facebook, and Instagram while maintaining customized formatting for each."
            />
            <FeatureCard
              icon={Users}
              badge="Agency Ready"
              title="Client Workspaces & Team Permissions"
              description="Manage multiple brands in separated workspaces. Assign custom editor, reviewer, and admin permissions to team members."
            />
            <FeatureCard
              icon={BarChart3}
              badge="Analytics"
              title="Unified Engagement & Performance Metrics"
              description="Track top-performing posts, follower growth trends, and audience engagement metrics across all connected channels."
            />
            <FeatureCard
              icon={ShieldCheck}
              badge="Security"
              title="Enterprise API Security & OAuth Sync"
              description="Connect social accounts safely using official OAuth 2.0 API integrations without sharing account passwords."
            />
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            Flexible Plans
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: '800',
              color: 'var(--color-text-main)',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-muted)',
              maxWidth: '600px',
              margin: '0 auto 3rem auto',
            }}
          >
            Choose the plan that fits your social growth goals. Cancel or upgrade anytime.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            {/* Starter Plan */}
            <div className="glass-card" style={{ padding: '2.5rem 1.75rem', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Starter</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
                Ideal for solo creators and solopreneurs.
              </p>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                $19 <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>/mo</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> 5 Social Accounts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> 100 Scheduled Posts / mo
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> Basic AI Post Writer
                </li>
              </ul>
              <Button href="/signup" variant="outline" fullWidth>
                Get Started
              </Button>
            </div>

            {/* Pro Plan */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem 1.75rem',
                textAlign: 'left',
                border: '2px solid var(--color-primary)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '1.5rem',
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                }}
              >
                Most Popular
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Pro Growth</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
                For professional marketers & growing brands.
              </p>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                $49 <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>/mo</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> 15 Social Accounts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> Unlimited Scheduled Posts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> Advanced AI Content Suite
                </li>
              </ul>
              <Button href="/signup" variant="primary" fullWidth>
                Start 14-Day Trial
              </Button>
            </div>

            {/* Agency Plan */}
            <div className="glass-card" style={{ padding: '2.5rem 1.75rem', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Agency</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
                For agencies & multi-brand management.
              </p>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                $99 <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-muted)' }}>/mo</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> 45 Social Accounts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> Isolated Client Workspaces
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} /> Priority 24/7 Support
                </li>
              </ul>
              <Button href="/signup" variant="outline" fullWidth>
                Contact Sales
              </Button>
            </div>
          </div>

          <Link href="/pricing" style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-primary)' }}>
            Compare full feature breakdown →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--color-text-main)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
              Everything you need to know about A4 AutoPost features, pricing, and social posting APIs.
            </p>
          </div>

          <FAQAccordion items={EXTENDED_FAQS} />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
