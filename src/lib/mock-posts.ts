import { WPPost, WPCategory } from '@/types/wordpress';

export const MOCK_CATEGORIES: WPCategory[] = [
  { id: 1, name: 'AI & Automation', slug: 'ai-automation' },
  { id: 2, name: 'Growth Strategy', slug: 'growth-strategy' },
  { id: 3, name: 'Content Marketing', slug: 'content-marketing' },
  { id: 4, name: 'Social Analytics', slug: 'social-analytics' },
];

export const MOCK_POSTS: WPPost[] = [
  {
    id: 101,
    slug: 'how-to-automate-social-media-posts-with-ai-in-2026',
    title: 'How to Automate Social Media Content Scheduling with AI in 2026',
    excerpt: 'Discover how top digital creators and marketing teams save 15+ hours every week using smart AI post generation and multi-platform automation.',
    content: `
      <h2>The Shift in Social Media Publishing</h2>
      <p>Managing social media manually across multiple networks like LinkedIn, Twitter/X, Instagram, and Facebook is fast becoming unsustainable for modern growth teams. Between writing tailored captions, selecting optimal posting times, and designing visuals, marketers spend hours on repetitive tasks.</p>
      
      <h3>Why AI Automation is the Game Changer</h3>
      <p>AI-powered social scheduling tools go beyond simple queueing. They analyze audience engagement history to suggest high-impact posting slots, automatically generate platform-specific caption variations, and format media assets for ideal display.</p>

      <ul>
        <li><strong>Multi-Channel Syncing:</strong> Publish a single core message formatted specifically for LinkedIn long-form and X threads simultaneously.</li>
        <li><strong>Smart Time Slots:</strong> Automatically deliver posts when your target audience is most active.</li>
        <li><strong>Consistent Brand Voice:</strong> Train AI prompts to maintain your exact tone of voice across every channel.</li>
      </ul>

      <h2>Key Strategies for AI-Powered Social Growth</h2>
      <p>To maximize your reach without burning out, establish a content workflow that leverages AI for ideation and draft creation, while reserving human oversight for final approval and audience interaction.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    published_at: '2026-08-15T10:00:00Z',
    modified_at: '2026-08-18T14:30:00Z',
    author: {
      id: 1,
      name: 'Sarah Jenkins',
      avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    categories: [{ id: 1, name: 'AI & Automation', slug: 'ai-automation' }],
    read_time_minutes: 5,
  },
  {
    id: 102,
    slug: 'top-10-ai-prompts-for-high-converting-linkedin-posts',
    title: '10 High-Converting AI Prompts for Viral LinkedIn Posts',
    excerpt: 'Boost your personal brand and generate qualified B2B leads on LinkedIn with these battle-tested AI content prompts.',
    content: `
      <h2>Cracking the LinkedIn Algorithm with Authentic AI Content</h2>
      <p>LinkedIn rewards posts that foster meaningful discussions in comment sections. Passive promotional posts get buried. Here is how to construct prompts that get readers talking.</p>
      
      <h3>Prompt #1: The Contrarian Perspective</h3>
      <p><em>"Act as a B2B SaaS founder. Rewrite the following industry myth into a hook that challenges conventional wisdom on [Topic] while keeping a professional tone..."</em></p>

      <h3>Prompt #2: The Step-by-Step Breakdown</h3>
      <p><em>"Structure this case study into 5 actionable bullet points highlighting actionable lessons for marketing directors..."</em></p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=1200&q=80',
    published_at: '2026-08-10T09:15:00Z',
    modified_at: '2026-08-10T09:15:00Z',
    author: {
      id: 2,
      name: 'Alex Rivera',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    categories: [{ id: 3, name: 'Content Marketing', slug: 'content-marketing' }],
    read_time_minutes: 4,
  },
  {
    id: 103,
    slug: 'scaling-agency-social-media-clients-without-hiring',
    title: 'Scaling Social Media Operations for Agencies Without Expanding Headcount',
    excerpt: 'How marketing agencies leverage unified social management platforms to handle 30+ client accounts seamlessly.',
    content: `
      <h2>The Scaling Dilemma for Marketing Agencies</h2>
      <p>As marketing agencies onboard more clients, client management and approval bottlenecks often slow down operations. Centralized scheduling and AI workflow tools eliminate manual copying across social platforms.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    published_at: '2026-08-02T12:00:00Z',
    modified_at: '2026-08-05T16:00:00Z',
    author: {
      id: 1,
      name: 'Sarah Jenkins',
      avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    categories: [{ id: 2, name: 'Growth Strategy', slug: 'growth-strategy' }],
    read_time_minutes: 6,
  },
];
