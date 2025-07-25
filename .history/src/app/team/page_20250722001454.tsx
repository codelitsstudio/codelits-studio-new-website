import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Heading from '@/components/Heading';
import PageWrapper from '@/components/ui/PageWrapper';

// Sample team members data (fill with real photos and info)
const teamMembers = [
  { name: 'Karri Saarinen', position: 'Co-founder, CEO', photo: '/images/team/karri.jpg' },
  { name: 'Jori Lallo', position: 'Co-founder', photo: '/images/team/jori.jpg' },
  { name: 'Tuomas Artman', position: 'Co-founder, CTO', photo: '/images/team/tuomas.jpg' },
  { name: 'Tom Moor', position: 'Head of Engineering', photo: '/images/team/tom.jpg' },
  { name: 'Nan Yu', position: 'Head of Product', photo: '/images/team/nan.jpg' },
  { name: 'Cristina Cordova', position: 'COO', photo: '/images/team/cristina.jpg' },
  { name: 'Casey Bertenthal', position: 'Head of Sales', photo: '/images/team/casey.jpg' },
  // ...add all others
];

// Sample backers data
const backers = [
  { name: 'Miles Clements', role: 'Partner' },
  { name: 'Stephanie Zhan', role: 'Partner' },
  { name: 'Dylan Field', role: 'CEO, Figma' },
  { name: 'Patrick Collison', role: 'CEO, Stripe' },
  { name: 'Stewart Butterfield', role: 'Former CEO, Slack' },
  // ...add others
];

// Sample news data
const news = [
  { author: 'Kevin Hartnett', date: 'Jul 16, 2025', title: 'Inside Mercury’s six-month journey building with AI agents' },
  { author: 'Karri Saarinen', date: 'Jun 10, 2025', title: 'Building our way: Announcing our Series C' },
  { author: 'Karri Saarinen', date: 'May 27, 2025', title: 'Why is quality so rare?' },
  // ...add others
];

export default function StudioPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-24">

        {/* Title */}
        <header className="text-center max-w-3xl mx-auto">
          <Heading size="xl" className="mb-4">Studio</Heading>
          <p className="text-lg text-muted-foreground">
            We are a team of passionate creators, thinkers, and innovators dedicated to crafting exceptional digital experiences.
          </p>
        </header>

        {/* About / Story */}
        <section className="max-w-4xl mx-auto prose prose-primary">
          <h2>Bringing Magic Back to Software</h2>
          <p>
            We're crafting the project planning tool for teams that care about quality.
            Computers used to be magical. But much of that magic has been lost over time,
            replaced by subpar tools and practices that slow teams down and hold back great work.
          </p>
          <p>
            Frustrated with the status quo, we decided to build something better.
            Something that teams would actually enjoy using.
            We named it Linear to signify progress.
          </p>
          <p>
            What started as a simple issue tracker, has since evolved into a powerful
            project and issue tracking system that streamlines workflows across the entire
            product development process.
          </p>
          <p>
            Today, thousands of teams around the globe — from early-stage startups to public companies —
            use Linear to build their products. Linear helps them to focus on what they do best:
            crafting software experiences that feel magical again.
          </p>
          <p>
            We care deeply about the quality of our work. Linear has always been a fully remote company.
            Our small but mighty team is distributed across North America and Europe.
            What unites us is relentless focus, fast execution, and our passion for software craftsmanship.
            We are all makers at heart and care deeply about the quality of our work, down to the smallest detail.
          </p>
        </section>

        {/* Team Members horizontal scroll */}
        <section>
          <Heading size="lg" className="mb-8 text-center">Meet the Team</Heading>
          <div className="flex space-x-8 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
            {teamMembers.map(({ name, position, photo }) => (
              <div
                key={name}
                className="snap-start flex-shrink-0 w-56 rounded-lg shadow-lg bg-card"
              >
                <div className="relative w-full h-72">
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 224px"
                    priority={false}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-sm text-muted-foreground">{position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Manifesto */}
        <section className="max-w-4xl mx-auto prose prose-primary">
          <h2>Manifesto</h2>
          <p>
            We are a force that ignites the spark of creative potential and propels transformative change.
            Our manifesto is fueled by a relentless passion, boundless imagination, and unwavering dedication.
          </p>
        </section>

        {/* Backers */}
        <section className="max-w-4xl mx-auto">
          <Heading size="lg" className="mb-8 text-center">Built for the Best - Backed by the Best</Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-muted-foreground">
            {backers.map(({ name, role }) => (
              <div key={name} className="p-4 rounded bg-card shadow-sm">
                <p className="font-semibold">{name}</p>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* News */}
        <section className="max-w-4xl mx-auto prose prose-primary">
          <h2>News</h2>
          <ul className="list-disc list-inside space-y-4">
            {news.map(({ author, date, title }) => (
              <li key={`${author}-${date}`}>
                <p className="font-semibold">{title}</p>
                <p className="text-xs text-muted-foreground">{author} · {date}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact / CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Interested in working with us?</h2>
          <p className="mb-6 max-w-xl mx-auto text-muted-foreground">
            Let's talk about how we can help you achieve your goals. We're here to turn your ideas into reality.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>

      </div>
    </PageWrapper>
  );
}
