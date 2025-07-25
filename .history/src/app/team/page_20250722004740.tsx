'use client';

import TeamPageVideo from '@/components/StudioPageVideo';
import Image from 'next/image';
import Link from 'next/link';

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

// Our Mission + Values content
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
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl text-white">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
          Codelits Studio is redefining the digital experience — one pixel at a time.
        </h1>

       <TeamPageVideo />

      </div>

      {/* Mission Section */}
      <section className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <h2 className="text-yellow-500 text-3xl font-bold">{missionTitle}</h2>
        <p className="text-white text-base leading-relaxed">{missionDesc}</p>
      </section>

      {/* Values Section */}
      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-yellow-500 text-3xl font-bold mb-8">Our Values</h2>
        <div className="space-y-8">
          {values.map(({ title, desc }) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-xl">{title}</h3>
              <p className="text-gray-300 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leaders Horizontal Box */}
      <section className="mt-20 max-w-5xl mx-auto bg-yellow-900 bg-opacity-30 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-yellow-400 font-semibold text-2xl md:flex-1">
          Meet the leaders behind Shortcut
        </h3>
        <p className="text-white text-base md:flex-1">{leadersSummary}</p>
      </section>

      {/* Hiring Button */}
      <div className="mt-12 text-center">
        <Link
          href="/careers"
          className="inline-block px-8 py-3 bg-yellow-600 text-black font-semibold rounded-lg shadow hover:bg-yellow-700 transition"
        >
          We are Hiring
        </Link>
      </div>

      {/* Team Section */}
      <section className="mt-16">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center text-white">
          Meet the Team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center max-w-5xl mx-auto">
          {teamMembers.map(({ name, position, avatar }) => (
            <div key={name} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-md overflow-hidden border-2 border-gray-700 shadow-sm">
                <Image
                  src={avatar}
                  alt={name}
                  width={96}
                  height={96}
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-white">{name}</p>
              <p className="text-xs text-gray-400">{position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Backers Section */}
      <section className="mt-20 bg-gray-900 bg-opacity-50 py-12 rounded-lg shadow-inner">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center text-white">
          Built for the Best, Backed by the Best
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center text-white">
          {backers.map(({ name, position }) => (
            <div
              key={name}
              className="border border-gray-700 p-4 rounded-lg bg-gray-800 shadow-sm"
            >
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-400">{position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="mt-20 max-w-7xl mx-auto">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center text-white">
          News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {newsItems.map(({ title, date, image, link }) => (
            <Link
              href={link}
              key={title}
              className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
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
              <div className="p-4 bg-gray-900 text-white">
                <p className="text-xs text-gray-400 mb-1">{date}</p>
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
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
