export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
  color: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  popular?: boolean;
  features: string[];
  deliverables: string[];
  estimatedDays: string;
  idealFor: string;
}

export interface SupportItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  keyPoints: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  tagline: string;
  category: string;
  heroImage: string;
  fallbackImage?: string;
  summary: string;
  process: string[];
  impact: string[];
  techStack: string[];
  liveUrl?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Landing Page' | 'Company Profile' | 'E-Commerce' | 'Blog / SEO' | 'AI Web';
  image: string;
  fallbackImage?: string;
  badge: string;
  description: string;
  clientName: string;
  industry: string;
  year: string;
  tags: string[];
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  demoUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  projectType: string;
  avatar: string;
  fallbackAvatar?: string;
  review: string;
  rating: number;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}
