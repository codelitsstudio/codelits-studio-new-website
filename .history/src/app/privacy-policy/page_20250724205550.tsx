import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-8 md:gap-16">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">LEGAL</p>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mt-2">Privacy Policy</h1>
        </div>

        <div className="md:col-span-2 space-y-8 text-base md:text-lg text-muted-foreground">
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-headline mb-2 text-foreground">1. Introduction</h2>
            <p>
              This Privacy Policy outlines how we collect, use, and protect your personal information when you visit or interact with our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold font-headline mb-2 text-foreground">2. Information We Collect</h2>
            <p>
              We may collect personal data such as your name, email address, and IP address when you interact with our services, contact forms, or sign up for newsletters.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold font-headline mb-2 text-foreground">3. How We Use Your Information</h2>
            <p>
              The data we collect helps us improve our services, communicate with users, and comply with legal obligations. We do not sell or rent your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold font-headline mb-2 text-foreground">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. However, no method of transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold font-headline mb-2 text-foreground">5. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data. Please contact us for any data-related inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold font-headline mb-2 text-foreground">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. The latest version will always be available on this page with the date of revision.
            </p>
          </section>
        </div>
      </div>

      <div className="mt-24 bg-card p-8 md:p-12 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold">Have questions about privacy?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              If you have any concerns or questions regarding this Privacy Policy, please don’t hesitate to contact us.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Privacy illustration"
              width={600}
              height={400}
              className="rounded-lg object-cover"
              data-ai-hint="privacy protection illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
