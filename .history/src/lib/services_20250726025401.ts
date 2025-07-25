import type { ComponentType, SVGProps } from 'react';
import {
  SoftwareDevelopmentIcon,
  WebDevIcon,
  MobileAppDevIcon,
  AiMlIcon,
  EcomIcon,
  SeoContentStrategyIcon,
  UxUiDesignIcon,
  WebDesignIcon,
  DigitalMarketingIcon,
  MonitoringMaintenanceIcon,
  TrainingEducationIcon,
  ResearchDevelopmentIcon,
  CloudDevOpsIcon,
} from '@/components/icons/service-icons';

import {
  Code,
  Cpu,
  Layers,
  Server,
  ShieldCheck,
  GitBranch,
  Database,
  FileText,
  MonitorCheck,
  Zap,
  Lock,
  Repeat,
  Building,
  Landmark,
  BarChart2,
} from 'lucide-react';

// --- Type Definition ---
export type FeatureItem = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type Service = {
  tagline: string;
  slug: string;
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  shortDescription: string;
  longDescription: string;
  image: string;
  hint: string;
  keyFeatures: FeatureItem[];
  relatedProjects: string[];
};

// --- Services Data ---
export const allServices: Service[] = [
  {
    slug: 'software-development',
    title: 'Software Development',
    icon: SoftwareDevelopmentIcon,
    shortDescription:
      'Custom software solutions tailored to your business needs, from enterprise applications to innovative tools.',
    longDescription:
      'We create scalable, secure software designed to grow with your business. Our full lifecycle approach includes ideation, development, deployment, and ongoing support to ensure high performance and reliability.',
    image: '/illustrations/software-dev.png',
    hint: 'software architecture diagram',
    keyFeatures: [
      { title: 'Custom Architecture Design', icon: Building },
      { title: 'Cross-Platform Compatibility', icon: Code },
      { title: 'Modular & Maintainable Code', icon: Layers },
      { title: 'Robust Backend Development', icon: Server },
      { title: 'API Design & Integration', icon: GitBranch },
      { title: 'Authentication & Authorization', icon: Lock },
      { title: 'Security Best Practices', icon: ShieldCheck },
      { title: 'Automated Testing & QA', icon: Repeat },
      { title: 'Performance & Scalability', icon: Zap },
      { title: 'DevOps & CI/CD Pipelines', icon: Cpu },
      { title: 'Data Management & Analytics', icon: Database },
      { title: 'Documentation & Knowledge Transfer', icon: FileText },
    ],
    relatedProjects: ['rms', 'project-epsilon'],
  },
  {
    slug: 'web-development',
title: 'Web Development',

    icon: WebDevIcon,
    shortDescription:
      'Secure, scalable web solutions built with modern technologies to power your online presence.',
    longDescription:
      'Our web development team builds fast, secure, and maintainable websites and applications using modern frameworks. From marketing sites to complex SaaS platforms, we deliver clean, efficient code that lasts.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'coding development screen',
    keyFeatures: [
      { title: 'Modern Front-End Frameworks (React, Next.js)', icon: Code },
      { title: 'Robust Back-End APIs (Node.js)', icon: Server },
      { title: 'Headless CMS Integration', icon: Database },
      { title: 'REST & GraphQL API Development', icon: GitBranch },
      { title: 'Advanced Performance Optimization', icon: Zap },
      { title: 'Progressive Web Apps (PWAs)', icon: MonitorCheck },
      { title: 'SEO-Friendly Development', icon: ShieldCheck },
    ],
    relatedProjects: ['rms', 'eco-club', 'nexus', 'e-commerce-clothing'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: MobileAppDevIcon,
    shortDescription:
      'Native and cross-platform mobile apps that engage users across iOS and Android devices.',
    longDescription:
      'We develop feature-rich mobile apps with smooth UX and reliable performance. Our expertise spans native iOS/Android and React Native, ensuring your app meets market demands and platform standards.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'mobile app development',
    keyFeatures: [
      { title: 'Native iOS & Android Development', icon: MobileAppDevIcon },
      { title: 'Cross-Platform Solutions with React Native', icon: Code },
      { title: 'Push Notifications & In-App Purchases', icon: Zap },
      { title: 'App Store Deployment & Compliance', icon: Server },
      { title: 'Continuous Maintenance & Updates', icon: Repeat },
      { title: 'User Analytics Integration', icon: BarChart2 },
    ],
    relatedProjects: ['project-delta'],
  },
  {
    slug: 'ai-ml-solutions',
    title: 'AI & ML Solutions',
    icon: AiMlIcon,
    shortDescription:
      'Harness AI and machine learning to automate processes and gain deep data insights.',
    longDescription:
      'We build custom AI/ML models tailored to your needs, from NLP and computer vision to predictive analytics, helping you innovate and automate effectively.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'artificial intelligence brain',
    keyFeatures: [
      { title: 'Custom AI Model Development', icon: Code },
      { title: 'Natural Language Processing (NLP)', icon: Layers },
      { title: 'Computer Vision & Image Recognition', icon: MonitorCheck },
      { title: 'Predictive Analytics & Forecasting', icon: BarChart2 },
      { title: 'AI-Driven Automation & Workflow', icon: Zap },
      { title: 'Model Training & Validation', icon: Repeat },
    ],
    relatedProjects: ['project-epsilon'],
  },
  {
    slug: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    icon: EcomIcon,
    shortDescription:
      'Seamless and secure e-commerce platforms designed to boost sales and customer loyalty.',
    longDescription:
      'From custom storefronts to marketplace integrations, we deliver fast, reliable online stores with optimized checkout flows, payment gateways, and inventory management.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'online store checkout',
    keyFeatures: [
      { title: 'Custom Storefront Design & Development', icon: Building },
      { title: 'Secure Payment Gateway Integration', icon: ShieldCheck },
      { title: 'Inventory & Order Management Systems', icon: Database },
      { title: 'Subscription & Membership Features', icon: Repeat },
      { title: 'Performance & SEO Optimization', icon: Zap },
      { title: 'Multi-Channel Sales Support', icon: GitBranch },
    ],
    relatedProjects: ['e-commerce-clothing'],
  },
  {
    slug: 'seo-content-strategy',
    title: 'SEO & Content Strategy',
    icon: SeoContentStrategyIcon,
    shortDescription:
      'Boost your online visibility and attract organic traffic with expert SEO and content marketing.',
    longDescription:
      'Our SEO and content strategies include keyword research, technical audits, on-page optimization, and creating valuable content to increase search rankings and engagement.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'content strategy planning',
    keyFeatures: [
      { title: 'Comprehensive Technical SEO Audits', icon: MonitorCheck },
      { title: 'Strategic Keyword Research', icon: Building },
      { title: 'On-Page & Off-Page SEO Tactics', icon: Code },
      { title: 'Content Creation & Marketing', icon: FileText },
      { title: 'Local & International SEO', icon: Landmark },
      { title: 'SEO Performance Tracking', icon: BarChart2 },
    ],
    relatedProjects: ['project-gamma'],
  },
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    icon: UxUiDesignIcon,
    shortDescription:
      'User-centered design delivering intuitive and accessible digital experiences.',
    longDescription:
      'We design interfaces that are visually appealing and easy to use, grounded in thorough user research and iterative testing, ensuring meaningful interactions.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'ui design prototype',
    keyFeatures: [
      { title: 'User Research & Personas', icon: Building },
      { title: 'Wireframing & Interactive Prototyping', icon: Layers },
      { title: 'Design Systems & UI Components', icon: MonitorCheck },
      { title: 'Usability & Accessibility Testing', icon: Repeat },
      { title: 'Compliance with Accessibility Standards', icon: ShieldCheck },
      { title: 'Visual & Motion Design', icon: Zap },
    ],
    relatedProjects: ['playxio', 'nexus', 'project-delta'],
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    icon: WebDesignIcon,
    shortDescription:
      'Creating memorable, visually stunning websites that reflect your brand identity.',
    longDescription:
      'We combine aesthetics with functionality to craft responsive, fast-loading websites that leave a lasting impression and meet your strategic objectives.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'website design layout',
    keyFeatures: [
      { title: 'Visual Identity & Branding', icon: Building },
      { title: 'Responsive & Adaptive Design', icon: Layers },
      { title: 'Motion Graphics & Interaction Design', icon: Zap },
      { title: 'Creative Direction & Artistry', icon: Code },
      { title: 'Custom Graphic Asset Creation', icon: FileText },
      { title: 'User Experience Optimization', icon: MonitorCheck },
    ],
    relatedProjects: ['playxio', 'nexus', 'eco-club'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: DigitalMarketingIcon,
    shortDescription:
      'Data-driven marketing strategies that maximize visibility and conversions.',
    longDescription:
      'We run targeted campaigns across paid ads, social media, and email to connect with your audience, optimize conversions, and grow your brand sustainably.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'marketing analytics charts',
    keyFeatures: [
      { title: 'Pay-Per-Click (PPC) Advertising', icon: Zap },
      { title: 'Social Media Strategy & Management', icon: MonitorCheck },
      { title: 'Email Campaign Development', icon: FileText },
      { title: 'Conversion Rate Optimization (CRO)', icon: BarChart2 },
      { title: 'Analytics, Reporting & Insights', icon: BarChart2 },
      { title: 'Audience Targeting & Segmentation', icon: GitBranch },
    ],
    relatedProjects: ['project-gamma'],
  },
  {
    slug: 'monitoring-maintenance',
    title: 'Monitoring & Maintenance',
    icon: MonitoringMaintenanceIcon,
    shortDescription:
      'Proactive support to keep your digital products secure, updated, and performant.',
    longDescription:
      'We ensure your applications run smoothly with 24/7 uptime monitoring, security patches, regular updates, and responsive technical support.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'server maintenance check',
    keyFeatures: [
      { title: '24/7 Uptime & Performance Monitoring', icon: MonitorCheck },
      { title: 'Security Patching & Vulnerability Fixes', icon: ShieldCheck },
      { title: 'Performance Tuning & Optimization', icon: Zap },
      { title: 'Scheduled Backups & Disaster Recovery', icon: Repeat },
      { title: 'Dedicated Technical Support', icon: Code },
      { title: 'Incident Management & Reporting', icon: BarChart2 },
    ],
    relatedProjects: ['rms', 'e-commerce-clothing'],
  },
  {
    slug: 'training-education',
    title: 'Training & Education',
    icon: TrainingEducationIcon,
    shortDescription:
      'Empowering your team with the skills to manage and grow digital platforms effectively.',
    longDescription:
      'We provide customized training on CMS, marketing tools, analytics, and best practices, ensuring your team can independently handle digital operations.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'team training workshop',
    keyFeatures: [
      { title: 'CMS & Platform Training', icon: Code },
      { title: 'Comprehensive Technical Documentation', icon: FileText },
      { title: 'Marketing Tools & Analytics Workshops', icon: Zap },
      { title: 'Best Practice Guidelines & Education', icon: ShieldCheck },
      { title: 'Customized & Scalable Training Programs', icon: Building },
      { title: 'Ongoing Support & Q&A Sessions', icon: Repeat },
    ],
    relatedProjects: [],
  },
  {
    slug: 'research-development',
    title: 'Research & Development',
    icon: ResearchDevelopmentIcon,
    shortDescription:
      'Exploring new tech and prototyping innovative solutions to future-proof your business.',
    longDescription:
      'We help you stay ahead by testing emerging technologies, creating proof-of-concepts, and analyzing market trends for innovation opportunities.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'future technology research',
    keyFeatures: [
      { title: 'Technology Feasibility & Analysis', icon: Building },
      { title: 'Proof of Concept (PoC) Development', icon: Repeat },
      { title: 'Rapid Prototyping & MVP Creation', icon: Zap },
      { title: 'Innovation Workshops & Ideation', icon: Code },
      { title: 'Market & Competitive Trend Analysis', icon: BarChart2 },
      { title: 'Collaborative Research Partnerships', icon: GitBranch },
    ],
    relatedProjects: ['project-epsilon'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: CloudDevOpsIcon,
    shortDescription:
      'Streamlining development and deployment with cloud infrastructure and modern DevOps practices.',
    longDescription:
      'We accelerate your delivery pipeline with cloud architecture, CI/CD automation, container orchestration, and infrastructure-as-code for scalable, resilient systems.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'cloud infrastructure diagram',
    keyFeatures: [
      { title: 'Cloud Infrastructure Architecture', icon: Building },
      { title: 'CI/CD Pipeline Design & Implementation', icon: Repeat },
      { title: 'Containerization (Docker & Kubernetes)', icon: Layers },
      { title: 'Infrastructure as Code (IaC)', icon: Code },
      { title: 'Automated Testing & Continuous Deployment', icon: Zap },
      { title: 'Monitoring & Incident Response', icon: MonitorCheck },
    ],
    relatedProjects: ['rms', 'project-epsilon'],
  },
];
