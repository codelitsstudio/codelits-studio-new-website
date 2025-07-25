import Link from 'next/link';
import { allInitiatives } from '@/lib/privacyPolicies';
import { ArrowRight } from 'lucide-react';

export default function PrivacyPolicyIndex() {
  const main = allInitiatives.find((i) => i.slug === 'main')!;
  const others = allInitiatives.filter((i) => i.slug !== 'main');

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 space-y-24">
      {/* Main Policy */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-16">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            PRIVACY
          </p>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
            {main.title}
          </h1>
        </div>
        <div className="md:col-span-2 space-y-8 text-base md:text-lg text-muted-foreground">
          {/* render the main component */}
          <main.component />
        </div>
      </div>

      {/* Initiatives List */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          INITIATIVES
        </p>
        <h2 className="font-headline text-3xl font-bold mt-2">
          Additional Privacy Policies
        </h2>

        <div className="mt-8 space-y-8">
          {others.map((init) => {
            const Icon = init.icon;
            return (
              <Link
                href={`/privacy-policy/${init.slug}`}
                key={init.slug}
                className="group block rounded-lg -m-4 p-4 transition-all duration-300 hover:bg-card/50"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 text-primary pt-1 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8" iconNode={[]} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-headline flex items-center">
                      {init.title}
                      <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="mt-2 text-muted-foreground text-base md:text-lg">
                      {init.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
