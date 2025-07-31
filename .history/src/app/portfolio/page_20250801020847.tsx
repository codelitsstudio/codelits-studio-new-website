import type { Metadata } from 'next';
import WorkClientComponent from './WorkClientComponent'; 

export const metadata: Metadata = {
  title: 'Work – CodeLits Studio | Next-Gen Software AI, and Digital Innovation Firm',
  description: 'Discover the projects and innovative solutions delivered by CodeLits Studio.',
};


export default function AiPage() {
  return <WorkClientComponent />;
}
