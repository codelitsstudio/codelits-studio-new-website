import Link from 'next/link';
import { allPolicies } from '@/lib/privacyPolicies';
import { ArrowRight } from 'lucide-react';

export default function PrivacyIndexPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        PRIVACY
      </p>
      <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
        Privacy Initiatives
      </h1>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPolicies.map(({ slug, title, description, icon: Icon }) => (
          <Link
            key={slug}
            href={`/privacy-policy/${slug}`}
            className="group block rounded-lg p-6 hover:bg-card/50 transition"
          >
            <div className="flex items-start gap-4">
              <Icon className="w-8 h-8 text-primary" iconNode={[]} />
              <div>
                <h2 className="text-2xl font-bold flex items-center">
                  {title}
                  <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition" />
                </h2>
                <p className="mt-2 text-muted-foreground">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
