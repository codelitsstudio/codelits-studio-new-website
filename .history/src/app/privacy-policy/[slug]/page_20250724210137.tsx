import { notFound } from 'next/navigation';
import { allPolicies } from '@/lib/privacyPolicies';

interface PageProps {
  params: { slug: string };
}

export default function PolicyPage({ params }: PageProps) {
  const policy = allPolicies.find((p) => p.slug === params.slug);
  if (!policy) return notFound();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Privacy &rarr; {policy.title}
      </p>
      <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
        {policy.title}
      </h1>

      <div className="mt-8 prose max-w-none">
        {policy.component}
      </div>
    </div>
  );
}
