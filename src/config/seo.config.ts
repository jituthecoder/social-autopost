export const SITE_CONFIG = {
  name: 'SocialPulse AI',
  description: 'AI-Powered Social Media Management & Automated Multi-Platform Publishing',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://mydomain.com',
  dashboardUrl: process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.mydomain.com',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.mydomain.com',
  twitterHandle: '@socialpulse_ai',
  ogImage: '/images/og-default.jpg',
  author: 'SocialPulse Team',
  keywords: [
    'AI social media manager',
    'social media auto post',
    'content scheduler',
    'multi-platform social publishing',
    'AI caption generator',
    'social media analytics',
    'social queue automation',
  ],
};
