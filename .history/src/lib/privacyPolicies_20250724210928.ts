// src/lib/privacyPolicies.ts

import { JSX } from 'react';
import { PrivacyP } from '@/components/privacy/PrivacyP';
import { PlayXioPrivacy } from '@/components/privacy/PlayXioPrivacy';
import { ShieldCheck, GameController } from 'lucide-react';

export interface Policy {
  slug: string;
  title: string;
  description: string;
  icon: JSX.Element;
  component: JSX.Element;
}

export const allPolicies: Policy[] = [  // ✅ This must be exported
  {
    slug: 'main',
    title: 'Main Company Policy',
    description: 'Default privacy policy for our core services.',
    icon: <ShieldCheck className="w-8 h-8" />,
    component: <PrivacyP />,
  },
  {
    slug: 'playxio',
    title: 'PlayXio Privacy Policy',
    description: 'Privacy policy for our esports initiative.',
    icon: <GameController className="w-8 h-8" />,
    component: <PlayXioPrivacy />,
  },
];
