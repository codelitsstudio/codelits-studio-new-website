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
    shortDescription: 'Custom software solutions tailored to your specific business needs, from enterprise applications to innovative tools.',
    longDescription:
      'We architect and engineer bespoke software solutions that drive business transformation. Our process covers the full lifecycle, from ideation and strategy to development, deployment, and ongoing support. We build scalable, secure, and high-performance applications that are designed to grow with your business.',
    image: '/illustrations/software-dev.png',
    hint: 'software architecture diagram',
    keyFeatures: [
      { title: 'Custom‑Built Architecture', icon: Building },
      { title: 'Cross‑Platform Compatibility', icon: Code },
      { title: 'Modular & Scalable Codebase', icon: Layers },
      { title: 'Robust Backend Systems', icon: Server },
      { title: 'Frontend & UI Logic Integration', icon: Code },
      { title: 'API Development & Integration', icon: GitBranch },
      { title: 'Authentication & Authorization', icon: Lock },
      { title: 'Security Best Practices', icon: ShieldCheck },
      { title: 'Testing & Quality Assurance', icon: Repeat },
      { title: 'Performance Optimization', icon: Zap },
      { title: 'DevOps & CI/CD Pipelines', icon: Cpu },
      { title: 'Desktop Software Development', icon: MonitorCheck }, // replaced Desktop with MonitorCheck
      { title: 'Data Management & Analytics', icon: Database },
      { title: 'Maintenance & Version Control', icon: FileText },
      { title: 'Documentation & Handoff', icon: FileText },
    ],
    relatedProjects: ['rms', 'project-epsilon'],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: WebDevIcon,
    shortDescription: 'High-performance, secure, and scalable web solutions built with the latest technologies.',
    longDescription:
      'We build robust websites and web applications that serve as the digital backbone of your business. Our development team specializes in modern frameworks and best practices to deliver solutions that are fast, secure, and scalable. Whether it\'s a marketing site or a complex SaaS platform, we write clean, efficient code that stands the test of time.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'coding development screen',
    keyFeatures: [
      { title: 'Front-End Development (React, Next.js)', icon: Code },
      { title: 'Back-End Development (Node.js)', icon: Server },
      { title: 'Headless CMS Integration', icon: Database },
      { title: 'API Development & Integration', icon: GitBranch },
      { title: 'Performance Optimization', icon: Zap },
    ],
    relatedProjects: ['rms', 'eco-club', 'nexus', 'e-commerce-clothing', 'project-phi'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: MobileAppDevIcon,
    shortDescription: 'Engaging native and cross-platform mobile applications for both iOS and Android.',
    longDescription:
      'Turn your ideas into powerful mobile experiences. We guide you through the entire app development lifecycle, from strategy and design to development and App Store submission. We focus on creating apps that are not only functional but also provide a delightful and intuitive user experience that keeps users coming back.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'mobile app development',
    keyFeatures: [
      { title: 'iOS & Android Development', icon: MobileAppDevIcon },
      { title: 'Cross-Platform Solutions (React Native)', icon: Code },
      { title: 'Push Notifications & In-App Purchases', icon: Zap },
      { title: 'App Store Deployment', icon: Server },
      { title: 'Maintenance & Support', icon: Repeat },
    ],
    relatedProjects: ['project-delta'],
  },
  {
    slug: 'ai-ml-solutions',
    title: 'AI & ML Solutions',
    icon: AiMlIcon,
    shortDescription: 'Integrate artificial intelligence and machine learning to unlock data-driven insights and automate processes.',
    longDescription:
      'Leverage the power of AI and Machine Learning to gain a competitive edge. We develop custom AI models and integrate intelligent solutions into your existing systems to automate workflows, predict trends, and provide actionable insights from your data. From natural language processing to computer vision, we can help you innovate.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'artificial intelligence brain',
    keyFeatures: [
      { title: 'Custom Model Development', icon: Code },
      { title: 'Natural Language Processing (NLP)', icon: Layers },
      { title: 'Computer Vision', icon: MonitorCheck },
      { title: 'Predictive Analytics', icon: BarChart2 },
      { title: 'AI-Powered Automation', icon: Zap },
    ],
    relatedProjects: ['project-epsilon'],
  },
  {
    slug: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    icon: EcomIcon,
    shortDescription: 'Robust e-commerce platforms that provide a seamless shopping experience for your customers.',
    longDescription:
      'We build powerful e-commerce solutions that drive sales and foster customer loyalty. From custom Shopify themes to complex marketplace integrations, our team handles all technical aspects of your online store. We focus on creating a fast, secure, and user-friendly shopping experience that converts visitors into customers.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'online store checkout',
    keyFeatures: [
      { title: 'Custom Storefront Development', icon: Building },
      { title: 'Payment Gateway Integration', icon: ShieldCheck },
      { title: 'Inventory Management Systems', icon: Database },
      { title: 'Subscription & Membership Models', icon: Repeat },
      { title: 'Performance Optimization', icon: Zap },
    ],
    relatedProjects: ['e-commerce-clothing'],
  },
  {
    slug: 'seo-content-strategy',
    title: 'SEO & Content Strategy',
    icon: SeoContentStrategyIcon,
    shortDescription: 'Improve search rankings and attract organic traffic with our expert SEO and content strategies.',
    longDescription:
      'Attract and retain your target audience with a powerful content and SEO strategy. We conduct in-depth keyword research, technical SEO audits, and on-page optimization to improve your search engine visibility. Our content team creates valuable, relevant articles, and landing pages that establish your authority and drive organic traffic.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'content strategy planning',
    keyFeatures: [
      { title: 'Technical SEO Audits', icon: MonitorCheck },
      { title: 'Keyword Research', icon: Building },
      { title: 'On-Page & Off-Page SEO', icon: Code },
      { title: 'Content Creation & Marketing', icon: FileText },
      { title: 'Local SEO', icon: Landmark },
    ],
    relatedProjects: ['project-gamma'],
  },
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    icon: UxUiDesignIcon,
    shortDescription: 'Human-centered design that ensures your product is not only beautiful but also intuitive and accessible.',
    longDescription:
      'Our UI/UX design process is rooted in a deep understanding of your users. We craft seamless journeys and visually stunning interfaces that enhance usability and drive engagement. From wireframing and prototyping to user testing and final design, we ensure every interaction is meaningful and every pixel is perfect.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'ui design prototype',
    keyFeatures: [
      { title: 'User Research & Personas', icon: Building },
      { title: 'Wireframing & Prototyping', icon: Layers },
      { title: 'Interactive Design Systems', icon: MonitorCheck },
      { title: 'Usability Testing', icon: Repeat },
      { title: 'Accessibility Compliance', icon: ShieldCheck },
    ],
    relatedProjects: ['playxio', 'nexus', 'project-delta'],
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    icon: WebDesignIcon,
    shortDescription: 'Creating visually stunning and memorable websites that capture your brand identity and engage your audience.',
    longDescription:
      'A great website begins with great design. Our web design service focuses on creating a unique visual identity for your brand online. We blend aesthetics with functionality, ensuring your site is not only beautiful but also responsive, fast, and aligned with your strategic goals. We create digital experiences that leave a lasting impression.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'website design layout',
    keyFeatures: [
      { title: 'Visual Identity & Branding', icon: Building },
      { title: 'Responsive Web Design', icon: Layers },
      { title: 'Motion & Interaction Design', icon: Zap },
      { title: 'Creative Direction', icon: Code },
      { title: 'Graphic Asset Creation', icon: FileText },
    ],
    relatedProjects: ['playxio', 'nexus', 'eco-club'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: DigitalMarketingIcon,
    shortDescription: 'Data-driven strategies to increase your online visibility, attract leads, and boost conversions.',
    longDescription:
      'Our digital marketing services are designed to help you connect with your target audience and achieve your business objectives. We use a data-driven approach to craft and execute campaigns across multiple channels, including paid advertising, social media, and content marketing, ensuring maximum ROI and sustainable growth.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'marketing analytics charts',
    keyFeatures: [
      { title: 'Paid Advertising (PPC)', icon: Zap },
      { title: 'Social Media Management', icon: MonitorCheck },
      { title: 'Email Marketing Campaigns', icon: FileText },
      { title: 'Conversion Rate Optimization (CRO)', icon: BarChart2 },
      { title: 'Analytics & Reporting', icon: BarChart2 },
    ],
    relatedProjects: ['project-gamma'],
  },
  {
    slug: 'monitoring-maintenance',
    title: 'Monitoring & Maintenance',
    icon: MonitoringMaintenanceIcon,
    shortDescription: 'Proactive support to ensure your digital products remain secure, updated, and performing optimally.',
    longDescription:
      'Our partnership extends beyond launch. We provide comprehensive monitoring and maintenance services to ensure your website or application remains in peak condition. This includes security monitoring, performance checks, regular updates, and bug fixes, giving you peace of mind and protecting your investment.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'server maintenance check',
    keyFeatures: [
      { title: '24/7 Uptime Monitoring', icon: MonitorCheck },
      { title: 'Security Patching & Updates', icon: ShieldCheck },
      { title: 'Performance Optimization', icon: Zap },
      { title: 'Regular Backups', icon: Repeat },
      { title: 'Technical Support', icon: Code },
    ],
    relatedProjects: ['rms', 'e-commerce-clothing'],
  },
  {
    slug: 'training-education',
    title: 'Training & Education',
    icon: TrainingEducationIcon,
    shortDescription: 'Empowering your team with the knowledge to manage and grow your digital platforms effectively.',
    longDescription:
      'We offer tailored training and education programs to empower your in-house teams. Whether you need to manage a new CMS, understand your analytics dashboard, or learn best practices for content updates, we provide clear, comprehensive training that enables your team to take ownership and succeed.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'team training workshop',
    keyFeatures: [
      { title: 'CMS Training', icon: Code },
      { title: 'Technical Documentation', icon: FileText },
      { title: 'Marketing Tool Workshops', icon: Zap },
      { title: 'Best Practices Education', icon: ShieldCheck },
      { title: 'Customized Training Programs', icon: Building },
    ],
    relatedProjects: [],
  },
  {
    slug: 'research-development',
    title: 'Research & Development',
    icon: ResearchDevelopmentIcon,
    shortDescription: 'Exploring new technologies and prototyping innovative solutions to future-proof your business.',
    longDescription:
      'Innovation is at the heart of what we do. Our R&D service is dedicated to exploring emerging technologies, from the latest in AI to new web frameworks. We partner with clients to prototype innovative ideas, validate new concepts, and discover solutions that can provide a significant competitive advantage.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'future technology research',
    keyFeatures: [
      { title: 'Technology Feasibility Studies', icon: Building },
      { title: 'Proof of Concept (PoC)', icon: Repeat },
      { title: 'Rapid Prototyping', icon: Zap },
      { title: 'Innovation Workshops', icon: Code },
      { title: 'Market Trend Analysis', icon: BarChart2 },
    ],
    relatedProjects: ['project-epsilon'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: CloudDevOpsIcon,
    shortDescription: 'Streamlining development and deployment with modern cloud infrastructure and DevOps practices.',
    longDescription:
      'Accelerate your development lifecycle and improve application reliability with our Cloud & DevOps services. We help you leverage cloud platforms like AWS and Google Cloud, and implement CI/CD pipelines, containerization, and infrastructure-as-code. This leads to faster deployments, better scalability, and more resilient systems.',
    image: 'https://placehold.co/1200x800.png',
    hint: 'cloud infrastructure diagram',
    keyFeatures: [
      { title: 'Cloud Architecture Design', icon: Building },
      { title: 'CI/CD Pipeline Implementation', icon: Repeat },
      { title: 'Containerization (Docker, Kubernetes)', icon: Layers },
      { title: 'Infrastructure as Code (IaC)', icon: Code },
      { title: 'Automated Testing & Deployment', icon: Zap },
    ],
    relatedProjects: ['rms', 'project-epsilon'],
  },
];
