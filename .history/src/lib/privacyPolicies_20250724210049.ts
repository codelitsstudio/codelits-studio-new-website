import { ReactNode } from 'react';
import { PrivacyP } from '@/components/privacy/PrivacyP';
import { PlayXioPrivacy } from '@/components/privacy/PlayXioPrivacy';

export interface Policy {
  slug: string;
  title: string;
  description: string;
  icon: ReactNode;      // e.g. an SVG or lucide icon
  component: ReactNode; // the full content component
}

export const allPolicies: Policy[] = [
  {
    slug: 'main',
    title: 'Main Company Policy',
    description: 'Our default privacy policy for all core services.',
    icon: <svg /* … */ />,
    component: <PrivacyP />,
  },
  {
    slug: 'playxio',
    title: 'PlayXio Privacy Policy',
    description: 'Privacy policy for our esports initiative.',
    icon: <svg /* … */ />,
    component: <PlayXioPrivacy />,
  },
  // add more initiatives here
];
