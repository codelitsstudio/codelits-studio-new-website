// no JSX here—just plain TS

import type { Icon as LucideIcon } from 'lucide-react';
import { ShieldCheck, Gamepad2 } from 'lucide-react';
import { PrivacyP } from '@/components/privacy/PrivacyP';
import { PlayXioPrivacy } from '@/components/privacy/PlayXioPrivacy';

export interface Policy {
  slug: string;
  title: string;
  description: string;
  /** a lucide‑react icon component */
  icon: typeof LucideIcon;
  /** a React component that renders the full policy */
  component: React.ComponentType;
}

export const allPolicies: Policy[] = [
  {
    slug: 'main',
    title: 'Main Company Policy',
    description: 'Default privacy policy for our core services.',
    icon: ShieldCheck,
    component: PrivacyP,
  },
  {
    slug: 'playxio',
    title: 'PlayXio Privacy Policy',
    description: 'Privacy policy for our esports initiative.',
    icon: Gamepad2,
    component: PlayXioPrivacy,
  },
  // …add more initiatives here
];
