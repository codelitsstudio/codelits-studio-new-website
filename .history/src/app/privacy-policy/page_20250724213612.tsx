import Link from 'next/link';
import { allInitiatives } from '@/lib/privacyPolicies';
import { ArrowRight, Phone   } from 'lucide-react';

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
  {/* Initiatives List */}
<div>
  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
    INITIATIVES
  </p>
  <h2 className="font-headline text-3xl font-bold mt-2 mb-8">
    Additional Privacy Policies
  </h2>

<div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-900 rounded-lg border border-black dark:border-gray-700 overflow-hidden">
  {others.map((init) => {
    const Icon = init.icon;
    return (
      <Link
        href={`/privacy-policy/${init.slug}`}
        key={init.slug}
        className="group flex justify-between items-center p-6 bg-card/50 transition-colors duration-300 hover:bg-card/70"
      >
        {/* Gamepad icon: most left, vertically centered */}
        <div className="flex-shrink-0 text-primary flex items-center">
          <Phone className="w-8 h-8" />
        </div>

        {/* Initiative icon + text */}
        <div className="flex items-start flex-1">
          <div className="flex-shrink-0 text-primary">
            <Icon className="w-10 h-10" iconNode={[]} />
          </div>
          <div>
            <h3 className="text-xl font-bold font-headline">{init.title}</h3>
            <p className="mt-1 text-muted-foreground text-base md:text-lg leading-relaxed">
              {init.shortDescription}
            </p>
          </div>
        </div>

        {/* Right side: arrow */}
        <ArrowRight
          className="ml-4 h-6 w-6 text-primary opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          aria-hidden="true"
        />
      </Link>
    );
  })}
</div>


</div>

    </div>
  );
}
