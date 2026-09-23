import React from 'react';
import { SITE_CONFIG } from '@/config/seo.config';

interface JsonLdProps {
  type?: 'WebSite' | 'Organization' | 'SoftwareApplication' | 'BlogPosting' | 'BreadcrumbList';
  data?: Record<string, unknown>;
}

export function JsonLd({ type = 'WebSite', data = {} }: JsonLdProps) {
  let schemaData: Record<string, unknown> = {};

  if (type === 'WebSite') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
      description: SITE_CONFIG.description,
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.domain,
      },
    };
  } else if (type === 'Organization') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
      logo: `${SITE_CONFIG.domain}/logo.png`,
      sameAs: [
        SITE_CONFIG.social.twitter,
        SITE_CONFIG.social.linkedin,
        SITE_CONFIG.social.instagram,
        SITE_CONFIG.social.facebook,
      ],
    };
  } else if (type === 'SoftwareApplication') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: SITE_CONFIG.name,
      operatingSystem: 'All',
      applicationCategory: 'BusinessApplication',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '19',
        highPrice: '99',
        offerCount: '3',
      },
      description: SITE_CONFIG.description,
    };
  } else {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
