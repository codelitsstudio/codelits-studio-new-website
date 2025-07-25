'use client';

import TeamPageVideo from '@/components/StudioPageVideo';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Reuse this card background from Work page style (simplified)
const CardBackground = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-yellow-50/20 to-yellow-200/10 opacity-30" />
);

const teamAvatarUrl =
  'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA==';

const teamMembers = [
  { name: 'Karri Saarinen', position: 'Co-founder, CEO', avatar: teamAvatarUrl },
  { name: 'Jori Lallo', position: 'Co-founder', avatar: teamAvatarUrl },
  { name: 'Tuomas Artman', position: 'Co-founder, CTO', avatar: teamAvatarUrl },
  { name: 'Tom Moor', position: 'Head of Engineering', avatar: teamAvatarUrl },
  { name: 'Nan Yu', position: 'Head of Product', avatar: teamAvatarUrl },
  { name: 'Cristina Cordova', position: 'COO', avatar: teamAvatarUrl },
  { name: 'Casey Bertenthal', position: 'Head of Sales', avatar: teamAvatarUrl },
  { name: 'Tim Qi', position: 'Team Member', avatar: teamAvatarUrl },
  { name: 'Matthew Roberts', position: 'Team Member', avatar: teamAvatarUrl },
  { name: 'Matthijs Wolting', position: 'Team Member', avatar: teamAvatarUrl },
  { name: 'Josh Pyles', position: 'Team Member', avatar: teamAvatarUrl },
  { name: 'Nathalie Alex', position: 'Team Member', avatar: teamAvatarUrl },
  { name: 'Dom Wong', position: 'Team Member', avatar: teamAvatarUrl },
  { name: 'Alan Doyle', position: 'Team Member', avatar: teamAvatarUrl },
  { name: 'Alex Suevalov', position: 'Team Member', avatar: teamAvatarUrl },
  { name: 'Igor Sechyn', position: 'Team Member', avatar: teamAvatarUrl },
];

const backers = [
  { name: 'Miles Clements', position: 'Partner' },
  { name: 'Stephanie Zhan', position: 'Partner' },
  { name: 'Dylan Field', position: 'CEO, Figma' },
  { name: 'Patrick Collison', position: 'CEO, Stripe' },
  { name: 'Stewart Butterfield', position: 'Former CEO, Slack' },
  { name: 'Guillermo Rauch', position: 'CEO, Vercel' },
  { name: 'Dick Costolo', position: 'Former CEO, Twitter' },
  { name: 'Josh Miller', position: 'CEO, Browser Company' },
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

const missionTitle = 'Our Mission';
const missionDesc =
  'Our mission is to ensure software development teams can do their best work. That’s why we created Shortcut—the most intuitive, lightweight and enjoyable project management platform teams actually want to use. By breaking down barriers, we help teams focus on what matters: working together to create products their customers love.';

const values = [
  {
    title: 'Treat people right',
    desc: 'We are respectful, thoughtful, and empathetic when interacting with each other, our clients, and our partners.',
  },
  {
    title: 'Spread joy',
    desc: 'Our work should make people smile. There’s plenty of boring software in the world, we don’t need to add to the list.',
  },
  {
    title: 'Take ownership',
    desc: 'We own our decisions, take action, and independently adapt to circumstances to deliver the best possible results.',
  },
  {
    title: 'Be open by default',
    desc: 'We work and communicate openly, honestly, and responsibly.',
  },
  {
    title: 'Have a bias for action',
    desc: 'We make swift decisions and move forward quickly using our best judgment. Deep deliberation is reserved for times where our actions are irreversible.',
  },
];

const leadersSummary =
  'We break down barriers so teams can focus on what matters – working together to create products for their customers.';

export default function TeamPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl text-black bg-white">
      {/* Title Section */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="font-headline text-5xl font-bold tracking-tight leading-tight">
          Codelits Studio is redefining the digital experience — one pixel at a time.
        </h1>
        <div className="mt-12">
          <TeamPageVideo />
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start mb-24">
        <h2 className="text-yellow-600 text-4xl font-bold">{missionTitle}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{missionDesc}</p>
      </section>

      {/* Values Section */}
      <section className="max-w-4xl mx-auto mb-24">
        <h2 className="text-yellow-600 text-4xl font-bold mb-10">Our Values</h2>
        <div className="space-y-10">
          {values.map(({ title, desc }) => (
            <div key={title} className="relative group rounded-2xl p-6 border border-yellow-200 hover:border-yellow-400 shadow-md hover:shadow-lg transition-all duration-300 bg-yellow-50/30">
              {/* subtle gradient bg like Work page cards */}
              <CardBackground children={undefined} />
              <h3 className="text-black font-semibold text-2xl relative z-10">{title}</h3>
              <p className="text-gray-600 mt-3 relative z-10">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leaders Summary Section */}
      <section className="max-w-5xl mx-auto rounded-2xl p-12 mb-24 border border-yellow-300 bg-yellow-50/40 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
        <h3 className="text-yellow-700 font-semibold text-3xl md:flex-1">Meet the leaders behind Shortcut</h3>
        <p className="text-gray-700 text-lg md:flex-1">{leadersSummary}</p>
      </section>

      {/* Hiring Button */}
      <div className="max-w-5xl mx-auto text-center mb-24">
        <Link href="/careers" passHref legacyBehavior>
          <Button
            as="a"
            size="lg"
            className="bg-yellow-600 text-black hover:bg-yellow-700 transition-shadow shadow-lg"
          >
            We are Hiring
          </Button>
        </Link>
      </div>

      {/* Team Grid Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="font-headline text-4xl font-bold mb-14 text-center text-black">Meet the Team</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center">
          {teamMembers.map(({ name, position, avatar }) => (
            <Link
              key={name}
              href="#"
              className="relative group rounded-2xl overflow-hidden border border-yellow-200 hover:border-yellow-400 shadow-md hover:shadow-lg transition-all duration-300 bg-yellow-50/30 flex flex-col items-center p-6"
            >
              <div className="w-28 h-28 rounded-xl overflow-hidden border border-yellow-300 shadow-inner mb-5">
                <Image
                  src={avatar}
                  alt={name}
                  width={112}
                  height={112}
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-black font-semibold text-lg">{name}</p>
              <p className="text-yellow-800 text-sm mt-1">{position}</p>
              {/* subtle background overlay */}
              <CardBackground children={undefined} />
            </Link>
          ))}
        </div>
      </section>

      {/* Backers Section */}
      <section className="max-w-6xl mx-auto rounded-2xl p-12 mb-24 border border-yellow-300 bg-yellow-50/30 shadow-md">
        <h2 className="font-headline text-4xl font-bold mb-14 text-center text-yellow-700">
          Built for the Best, Backed by the Best
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center text-yellow-900">
          {backers.map(({ name, position }) => (
            <div
              key={name}
              className="rounded-xl p-6 border border-yellow-200 hover:border-yellow-400 shadow-inner hover:shadow-lg transition-all duration-300 bg-yellow-50/50"
            >
              <p className="font-semibold text-lg">{name}</p>
              <p className="text-sm mt-1">{position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <h2 className="font-headline text-4xl font-bold mb-14 text-center text-black">
          News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {newsItems.map(({ title, date, image, link }) => (
            <Link
              href={link}
              key={title}
              className="group relative rounded-2xl overflow-hidden border border-yellow-200 hover:border-yellow-400 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="p-6 bg-yellow-50/60">
                <p className="text-sm text-yellow-700 mb-2">{date}</p>
                <h3 className="font-semibold text-xl flex items-center justify-between text-yellow-900">
                  {title}
                  <span
                    aria-hidden="true"
                    className="ml-3 inline-block transition-transform group-hover:translate-x-2"
                  >
                    &rarr;
                  </span>
                </h3>
              </div>
              <CardBackground children={undefined} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
