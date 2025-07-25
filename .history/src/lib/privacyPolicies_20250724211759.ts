import type { ComponentType } from 'react';
import type { Icon } from 'lucide-react';
import { ShieldCheck, GameController } from 'lucide-react';
import { PrivacyMain } from '@/components/privacy/PrivacyMain';
import { PrivacyPlayXio } from '@/components/privacy/PrivacyPlayXio';

export interface Initiative {
  slug: string;
  title: string;
  shortDescription: string;
  icon: typeof Icon;
  component: ComponentType;
}

export const allInitiatives: Initiative[] = [
  {
    slug: 'main',
    title: 'Codelits Studio Privacy Policy',
    shortDescription: 'Default privacy policy for our core services.',
    icon: ShieldCheck,
    component: PrivacyMain,
  },
  {
    slug: 'playxio',
    title: 'PlayXio Privacy Policy',
    shortDescription: 'Privacy policy for our esports platform and mobile app.',
    icon: GameController,
    component: PrivacyPlayXio,
  },
  // ➕ add future initiatives here
];
