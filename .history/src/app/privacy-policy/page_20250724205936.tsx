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

        <div className="md:col-span-2 space-y-10 text-base md:text-lg text-muted-foreground">

          {/* Main Company Policy */}
          <div>
            <h2 className="text-2xl font-bold font-headline text-foreground mb-4">Main Company Privacy Policy</h2>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold">1. Introduction</h3>
                <p>We value your privacy. This policy explains how we handle personal information collected through our primary website and services.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">2. Data Collection</h3>
                <p>We collect data to improve our services, including your name, email, and technical data such as IP address and usage behavior.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">3. Use of Information</h3>
                <p>Information is used for service delivery, customer support, product improvements, marketing (with consent), and legal compliance.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">4. Third-Party Sharing</h3>
                <p>We share data only with trusted vendors (like cloud providers) and do not sell your personal information.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">5. Security & Updates</h3>
                <p>We use encryption and best practices to secure your data. Policy updates will be reflected on this page with date changes.</p>
              </section>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t pt-10">
            <h2 className="text-2xl font-bold font-headline text-foreground mb-4">Initiatives: PlayXio Privacy Policy</h2>

            <div className="space-y-6">
              <p className="italic text-sm text-muted-foreground">Effective Date: July 8, 2025</p>

              <section>
                <h3 className="text-xl font-semibold">1. Preregistration Notice</h3>
                <p>Our preregistration app is a basic landing page. During this phase, we only collect minimal data (like email or username) to reserve access.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">2. Information We Collect</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Personal Info:</strong> Name, email, username, optional contacts.</li>
                  <li><strong>Game Data:</strong> Stats, scores, match history.</li>
                  <li><strong>Device Info:</strong> OS, IP, session logs.</li>
                  <li><strong>Payments:</strong> Processed securely via third-party, not stored by us.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold">3. How We Use Data</h3>
                <p>We use your data to provide gaming services, matchmaking, analytics, marketing communication, and fraud prevention.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">4. Data Sharing</h3>
                <p>We do not sell data. Sharing occurs only with trusted providers, legal authorities (if needed), or with your consent.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">5. Cookies & Tracking</h3>
                <p>Cookies are used to analyze usage and performance. You can disable them in browser settings, though some features may break.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">6. Your Rights</h3>
                <p>You can update, access, delete your data, or withdraw consent where applicable. Opt out of marketing anytime.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">7. Security</h3>
                <p>We use encryption, firewalls, and access controls, but we advise using strong passwords and practicing safe use.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">8. Children’s Privacy</h3>
                <p>PLAYXIO is not for users under 13. If such data is collected, contact us for removal.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">9. Updates</h3>
                <p>Policy may change. Latest version is always on our site. Continued use means acceptance.</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">10. Contact Us</h3>
                <p>
                  Website: <a href="https://playxio.xyz" className="text-primary hover:underline">playxio.xyz</a><br/>
                  Email: <a href="mailto:support@playxio.xyz" className="text-primary hover:underline">support@playxio.xyz</a>
                </p>
              </section>
            </div>
          </div>

        </div>
      </div>

      {/* Call to action */}
      <div className="mt-24 bg-card p-8 md:p-12 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold">Still have privacy questions?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Whether you're a regular user or part of our PlayXio community, we're here to help with your privacy concerns.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Privacy team"
              width={600}
              height={400}
              className="rounded-lg object-cover"
              data-ai-hint="privacy and data security"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
