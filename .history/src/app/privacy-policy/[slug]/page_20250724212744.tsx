import { notFound } from 'next/navigation';
import { allInitiatives } from '@/lib/privacyPolicies';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export default function InitiativePage({ params }: PageProps) {
  const init = allInitiatives.find((i) => i.slug === params.slug);
  if (!init) return notFound();

  const Icon = init.icon;
  const Content = init.component;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 space-y-24">
      {/* Header */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-16">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {params.slug === 'main'
              ? 'PRIVACY'
              : init.title.split(' ')[0].toUpperCase()}
          </p>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
            {init.title}
          </h1>
        </div>
        <div className="md:col-span-2 space-y-8 text-base md:text-lg text-muted-foreground">
          <Content />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-24 bg-card p-8 md:p-12 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold">
              Questions about {init.title.split(' ')[0]} privacy?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Reach out if you need any clarifications.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">
                Contact Us <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        
        </div>
      </div>
    </div>
  );
}
