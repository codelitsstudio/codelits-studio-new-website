'use client';

import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  { name: 'Karri Saarinen', position: 'Co-founder, CEO', avatar: '/images/team/karri.jpg' },
  { name: 'Jori Lallo', position: 'Co-founder', avatar: '/images/team/jori.jpg' },
  { name: 'Tuomas Artman', position: 'Co-founder, CTO', avatar: '/images/team/tuomas.jpg' },
  { name: 'Tom Moor', position: 'Head of Engineering', avatar: '/images/team/tom.jpg' },
  { name: 'Nan Yu', position: 'Head of Product', avatar: '/images/team/nan.jpg' },
  { name: 'Cristina Cordova', position: 'COO', avatar: '/images/team/cristina.jpg' },
  { name: 'Casey Bertenthal', position: 'Head of Sales', avatar: '/images/team/casey.jpg' },
  // Add more team members as needed
];

const backers = [
  { name: 'Miles Clements', position: 'Partner' },
  { name: 'Stephanie Zhan', position: 'Partner' },
  { name: 'Dylan Field', position: 'CEO, Figma' },
  { name: 'Patrick Collison', position: 'CEO, Stripe' },
  { name: 'Stewart Butterfield', position: 'Former CEO, Slack' },
  { name: 'Guillermo Rauch', position: 'CEO, Vercel' },
  // Add more backers here
];

const newsItems = [
  {
    title: 'How to build better project workflows',
    date: 'July 15, 2025',
    image: '/images/news/workflows.jpg',
    link: '/blog/project-workflows',
  },
  {
    title: 'Remote work productivity tips',
    date: 'July 1, 2025',
    image: '/images/news/remote-work.jpg',
    link: '/blog/remote-productivity',
  },
  {
    title: 'Scaling engineering teams effectively',
    date: 'June 20, 2025',
    image: '/images/news/scaling-teams.jpg',
    link: '/blog/scaling-teams',
  },
  // Add more news items to fill 3x3 grid or replicate these
  {
    title: 'Designing with user feedback',
    date: 'June 5, 2025',
    image: '/images/news/user-feedback.jpg',
    link: '/blog/user-feedback',
  },
  {
    title: 'The future of software tools',
    date: 'May 25, 2025',
    image: '/images/news/software-tools.jpg',
    link: '/blog/future-software-tools',
  },
  {
    title: 'Balancing speed and quality',
    date: 'May 10, 2025',
    image: '/images/news/speed-quality.jpg',
    link: '/blog/speed-quality',
  },
  {
    title: 'Effective team communication',
    date: 'April 30, 2025',
    image: '/images/news/team-communication.jpg',
    link: '/blog/team-communication',
  },
  {
    title: 'Integrating AI in workflows',
    date: 'April 15, 2025',
    image: '/images/news/ai-workflows.jpg',
    link: '/blog/ai-integration',
  },
  {
    title: 'Security best practices for teams',
    date: 'April 1, 2025',
    image: '/images/news/security-practices.jpg',
    link: '/blog/security-practices',
  },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          About Us
        </h1>

        {/* Video Box */}
        <div className="mt-8 relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Intro Video"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Intro paragraphs */}
        <div className="mt-10 space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <p>
            We're crafting the project planning tool for teams that care about quality.
            Computers used to be magical. But much of that magic has been lost over time, replaced by subpar tools and practices that slow teams down and hold back great work. Frustrated with the status quo, we decided to build something better. Something that teams would actually enjoy using. We named it Linear to signify progress.
          </p>
          <p>
            What started as a simple issue tracker, has since evolved into a powerful project and issue tracking system that streamlines workflows across the entire product development process. We don't think of Linear as just a better "tool", but as a better "way" to build software.
          </p>
          <p>
            Today, thousands of teams around the globe — from early-stage startups to public companies — use Linear to build their products. Linear helps them to focus on what they do best: Crafting software experiences that feel magical again.
          </p>
          <p>
            We care deeply about the quality of our work. Linear has always been a fully remote company. Today, our small but mighty team is distributed across North America and Europe. What unites us is relentless focus, fast execution, and our passion for software craftsmanship. We are all makers at heart and care deeply about the quality of our work, down to the smallest detail.
          </p>
        </div>
      </div>

      {/* Hiring Button */}
      <div className="mt-12 text-center">
 <Link href="/careers" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
  We are Hiring
</Link>
>
      </div>

      {/* Team Section */}
      <section className="mt-16">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">
          Meet the Team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center max-w-5xl mx-auto">
          {teamMembers.map(({ name, position, avatar }) => (
            <div key={name} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                <Image
                  src={avatar}
                  alt={name}
                  width={64}
                  height={64}
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-2 text-sm font-semibold">{name}</p>
              <p className="text-xs text-muted-foreground">{position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Backers Section */}
      <section className="mt-20 bg-gray-50 py-12 rounded-lg shadow-inner">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">
          Built for the Best, Backed by the Best
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {backers.map(({ name, position }) => (
            <div key={name} className="border p-4 rounded-lg bg-white shadow-sm">
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">{position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="mt-20 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">News</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {newsItems.map(({ title, date, image, link }) => (
            <Link
              href={link}
              key={title}
              className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              passHref
            >
              <a>
                <div className="relative w-full h-40">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-xs text-muted-foreground mb-1">{date}</p>
                  <h3 className="font-semibold text-lg flex items-center justify-between">
                    {title}
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </h3>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
