import React from 'react';
import { Share2, Video, Globe } from 'lucide-react';

export type PlatformType = 'twitter' | 'linkedin' | 'facebook' | 'instagram' | 'pinterest' | 'tiktok';

interface SocialPlatformBadgeProps {
  platform: PlatformType;
  name?: string;
}

const TwitterIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function SocialPlatformBadge({ platform, name }: SocialPlatformBadgeProps) {
  const getPlatformDetails = () => {
    switch (platform) {
      case 'twitter':
        return { label: name || 'X / Twitter', icon: TwitterIcon, color: '#1DA1F2' };
      case 'linkedin':
        return { label: name || 'LinkedIn', icon: LinkedinIcon, color: '#0A66C2' };
      case 'facebook':
        return { label: name || 'Facebook', icon: FacebookIcon, color: '#1877F2' };
      case 'instagram':
        return { label: name || 'Instagram', icon: InstagramIcon, color: '#E4405F' };
      case 'pinterest':
        return { label: name || 'Pinterest', icon: Share2, color: '#BD081C' };
      case 'tiktok':
        return { label: name || 'TikTok', icon: Video, color: '#00F2FE' };
      default:
        return { label: name || platform, icon: Globe, color: 'var(--color-primary)' };
    }
  };

  const { label, icon: Icon, color } = getPlatformDetails();

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.45rem 0.85rem',
        borderRadius: '9999px',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)',
        fontSize: '0.85rem',
        fontWeight: '600',
        color: 'var(--color-text-main)',
      }}
    >
      <Icon size={16} color={color} />
      <span>{label}</span>
    </div>
  );
}
