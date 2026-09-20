import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/ui/CTASection';
import { Target, Users, Zap, ShieldCheck, HeartHandshake, Globe, Award, Sparkles, CheckCircle2, Rocket, Code2, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | A4 AutoPost AI Social Management',
  description:
    'Learn about A4 AutoPost mission, our team, core values, and how our AI social auto-publisher powers 250,000+ creators and agencies worldwide.',
  alternates: {
    canonical: '/about',
  },
};

const STATS = [
  { value: '250K+', label: 'Active Users & Brands' },
  { value: '15M+', label: 'Posts Auto-Published' },
  { value: '99.99%', label: 'Queue Delivery Uptime' },
  { value: '18+ Hours', label: 'Saved Per Week / Team' },
];

const FOUNDERS = [
  {
    name: 'Jitendra Kumar',
    role: 'Co-Founder & CEO',
    bio: 'Software developer and entrepreneur passionate about coding, building practical solutions, and turning ideas into innovative digital products that solve real-world problems and create lasting value for businesses.',
    avatar: '/images/team/jitendra-kumar.jpg',
    badgeType: 'vision',
    badgeTitle: 'Vision',
    badgeSub: '& Growth',
    tags: ['Product', 'Strategy', 'Growth', 'Leadership'],
    quote: 'Turning ideas into meaningful products that people love to use.',
    objectPosition: 'top center',
  },
  {
    name: 'Reyaj Alam',
    role: 'Co-Founder & CTO',
    bio: 'Software developer focused on building innovative products that solve real-world problems. Passionate about clean code, scalable systems, and leveraging technology to make a positive impact.',
    avatar: '/images/team/reyaj-alam.jpg',
    badgeType: 'tech',
    badgeTitle: 'Tech',
    badgeSub: '& Execution',
    tags: ['Development', 'Systems', 'Innovation', 'Problem Solving'],
    quote: 'Building technology today for a simpler, smarter tomorrow.',
    objectPosition: 'center',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '5.5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={14} /> Our Mission & Vision
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
            Pioneering the Future of <span className="gradient-text">Automated Social Growth</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '740px',
              margin: '0 auto 3.5rem auto',
              lineHeight: '1.65',
            }}
          >
            We are on a mission to free creators, marketers, and digital agencies from repetitive posting tasks so they can focus on high-impact brand strategy.
          </p>

          {/* Stats Bar Container */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                    fontWeight: '800',
                    color: 'var(--color-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: 'var(--color-text-muted)',
                    marginTop: '0.4rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
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
                Our Journey
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
                Built by Marketers Who Were Tired of Fragmented Tools
              </h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.7',
                  marginBottom: '1.25rem',
                }}
              >
                In 2024, our founders were running a fast-growing digital marketing agency. Managing 30+ client accounts across LinkedIn, Twitter/X, Instagram, and Facebook meant context-switching 50 times a day, manually pasting captions, and constantly worrying about missed posting slots.
              </p>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.7',
                  marginBottom: '1.75rem',
                }}
              >
                We built A4 AutoPost to be the publishing engine we always wished we had: powered by intelligent AI hook writers, visual drag-and-drop calendar queues, and enterprise-grade queue reliability.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> 100% Official OAuth 2.0 Platform API Synchronization
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> AI Prompt Engines Trained for Tone & Brand Voice
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} /> Enterprise Redis Queue Reliability with Zero Lost Posts
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                Our Core Principles
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>
                    1. Creator Autonomy
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                    AI should amplify human creativity, not replace it. We build assistants that draft hooks while keeping you in full control.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-secondary)', marginBottom: '0.25rem' }}>
                    2. Uncompromising Security
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                    Your social media tokens and account credentials are stored in encrypted vaults and processed via official API endpoints.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-success)', marginBottom: '0.25rem' }}>
                    3. Transparent Pricing & Speed
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                    No hidden fees, no per-post charges. Fast, intuitive tools that save hours every single week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>
              What Drives Us
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em',
              }}
            >
              The Values Behind A4 AutoPost
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <Target size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
                Customer Obsession
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Every single feature, calendar tweak, and AI prompt template we ship is driven by direct feedback from active creators and agencies.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>
                <Zap size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
                AI Precision
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                We engineer specialized language prompts that capture your exact tone of voice, avoiding generic AI clichés.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--color-success)', marginBottom: '1rem' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
                Platform Safety
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                We work strictly within official social platform guidelines to ensure your accounts maintain high trust scores and zero restrictions.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                <Globe size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
                Global Scalability
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Our queue infrastructure processes millions of scheduled updates seamlessly across global time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', paddingTop: '5rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <span style={{ width: '32px', height: '1.5px', background: 'linear-gradient(90deg, transparent, #38bdf8)' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.18em', color: '#60a5fa', textTransform: 'uppercase' }}>
                MEET THE FOUNDERS
              </span>
              <span style={{ width: '32px', height: '1.5px', background: 'linear-gradient(90deg, #38bdf8, transparent)' }} />
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.85rem, 4vw, 2.75rem)',
                fontWeight: '800',
                color: '#ffffff',
                letterSpacing: '-0.025em',
                lineHeight: '1.2',
                marginBottom: '0.75rem',
              }}
            >
              Built by Developers, for a <span style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Better Digital World</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: '1.6' }}>
              A team of product designers, AI researchers, and full-stack engineers passionate about modern publishing.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
              gap: '2rem',
              maxWidth: '1240px',
              margin: '0 auto',
            }}
          >
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                style={{
                  background: 'radial-gradient(ellipse at top left, rgba(30, 41, 59, 0.75) 0%, rgba(15, 23, 42, 0.95) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1.5rem',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.75rem',
                  boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
                  position: 'relative',
                  flexWrap: 'nowrap',
                }}
              >
                {/* Left: Avatar with Decorative Glow & Round Overlapping Badge */}
                <div style={{ flexShrink: 0, position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
                  {/* Soft Gradient Glow Aura */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      left: '-6px',
                      width: '172px',
                      height: '172px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.35) 0%, rgba(56, 189, 248, 0.15) 100%)',
                      filter: 'blur(8px)',
                      zIndex: 0,
                    }}
                  />

                  {/* Main Circular Image */}
                  <div
                    style={{
                      position: 'relative',
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3.5px solid #6366f1',
                      boxShadow: '0 0 25px rgba(99, 102, 241, 0.45)',
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src={founder.avatar}
                      alt={founder.name}
                      fill
                      sizes="150px"
                      style={{
                        objectFit: 'cover',
                        objectPosition: founder.objectPosition || 'center',
                      }}
                    />
                  </div>

                  {/* Floating Circular Pill Badge on Bottom-Left */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '-6px',
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: '#090d16',
                      border: '1.5px solid #6366f1',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.8)',
                      zIndex: 3,
                      textAlign: 'center',
                    }}
                  >
                    {founder.badgeType === 'vision' ? (
                      <Rocket size={16} style={{ color: '#38bdf8', marginBottom: '2px' }} />
                    ) : (
                      <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: '800', lineHeight: '1', marginBottom: '2px' }}>
                        {'</>'}
                      </span>
                    )}
                    <span style={{ fontSize: '8px', fontWeight: '800', color: '#ffffff', lineHeight: '1.1' }}>
                      {founder.badgeTitle}
                    </span>
                    <span style={{ fontSize: '7.5px', fontWeight: '700', color: '#94a3b8', lineHeight: '1.1' }}>
                      {founder.badgeSub}
                    </span>
                  </div>
                </div>

                {/* Right: Founder Info & Details */}
                <div style={{ flex: '1 1 0', minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: '800',
                      color: '#ffffff',
                      marginBottom: '0.2rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {founder.name}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: '700',
                      color: '#60a5fa',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {founder.role}
                  </div>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#94a3b8',
                      lineHeight: '1.65',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {founder.bio}
                  </p>

                  {/* Skill / Focus Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {founder.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          background: 'rgba(30, 41, 59, 0.65)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '9999px',
                          padding: '0.3rem 0.85rem',
                          fontSize: '0.78rem',
                          color: '#cbd5e1',
                          fontWeight: '600',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Personal Quote */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      marginTop: '0',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '900',
                        color: '#6366f1',
                        lineHeight: '1',
                        userSelect: 'none',
                      }}
                    >
                      “
                    </span>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        fontStyle: 'italic',
                        color: '#cbd5e1',
                        lineHeight: '1.55',
                        margin: 0,
                      }}
                    >
                      {founder.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
