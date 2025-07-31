import type { Metadata } from 'next';
import AiClientComponent from './AiClientComponent'; 

export const metadata: Metadata = {
  title: 'AI Tools – CodeLits Studio | Next-Gen Software AI, and Digital Innovation Firm',
  description: 'Explore our collection of AI-powered tools designed to boost your productivity.',
};

export default function AiPage() {
  return <AiClientComponent />;
}
