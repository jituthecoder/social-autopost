export const SITE_CONFIG = {
  name: 'A4 AutoPost',
  description: 'AI-Powered Social Media Management & Automated Multi-Platform Publishing',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://a4autopost.com',
  dashboardUrl: process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1',
  twitterHandle: '@a4autopost',
  ogImage: '/logo.png',
  author: 'A4 AutoPost Team',
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
