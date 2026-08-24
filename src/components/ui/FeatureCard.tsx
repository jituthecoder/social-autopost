import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

export function FeatureCard({ icon: Icon, title, description, badge }: FeatureCardProps) {
  return (
    <div
      className="glass-card"
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '0.75rem',
            backgroundColor: 'var(--color-primary-light)',
            color: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={24} />
        </div>

        {badge && <span className="badge">{badge}</span>}
      </div>

      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: 'var(--color-text-main)',
          lineHeight: '1.3',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '0.95rem',
          color: 'var(--color-text-muted)',
          lineHeight: '1.6',
        }}
      >
        {description}
      </p>
    </div>
  );
}
