import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/ui/CTASection';
import { Target, Users, Zap, ShieldCheck, HeartHandshake, Globe, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | SocialPulse AI Social Management',
  description:
    'Learn about SocialPulse mission, our team, core values, and how our AI social auto-publisher powers 250,000+ creators and agencies worldwide.',
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

const TEAM_MEMBERS = [
  {
    name: 'David Vance',
    role: 'Co-Founder & CEO',
    bio: 'Former Product Lead at Stripe. Passionate about building high-scale developer and marketing tools.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Sophia Chen',
    role: 'Co-Founder & CTO',
    bio: 'Former Senior AI Researcher. Specialized in NLP language models and enterprise background queue architectures.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Alex Rivera',
    role: 'VP of Product',
    bio: 'Former Growth Manager. Obsessed with seamless user experience, visual scheduling calendars, and AI hooks.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Customer Success',
    bio: 'Former Digital Agency Founder. Helps creators and agency partners scale client operations frictionlessly.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
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
                We built SocialPulse to be the publishing engine we always wished we had: powered by intelligent AI hook writers, visual drag-and-drop calendar queues, and enterprise-grade queue reliability.
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
              The Values Behind SocialPulse
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
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>
              Leadership Team
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '800',
                color: 'var(--color-text-main)',
                letterSpacing: '-0.02em',
              }}
            >
              Meet the Minds Behind SocialPulse
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
              A team of product designers, AI researchers, and full-stack engineers passionate about modern publishing.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 1.25rem auto',
                    border: '3px solid var(--color-primary-light)',
                  }}
                >
                  <Image src={member.avatar} alt={member.name} fill sizes="90px" style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-text-main)', marginBottom: '0.2rem' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                  {member.role}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
