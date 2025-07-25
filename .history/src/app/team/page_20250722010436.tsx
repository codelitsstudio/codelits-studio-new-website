'use client';

import React, { useEffect, useRef } from 'react';
import TeamPageVideo from '@/components/StudioPageVideo';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const backersRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
        }
      });

      tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1 })
        .from(missionRef.current, { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(valuesRef.current.children, { y: 30, opacity: 0, stagger: 0.2, duration: 0.6 })
        .from(leadersRef.current, { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(teamRef.current.children, { y: 50, opacity: 0, stagger: 0.1, duration: 0.6 })
        .from(backersRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.6 })
        .from(newsRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.6 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-16 max-w-7xl text-white">
      {/* Title & Hero Video */}
      <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          Codelits Studio is redefining the digital experience — one pixel at a time.
        </h1>
        <div className="mt-10">
          <TeamPageVideo />
        </div>
      </div>

      {/* Mission */}
      <section
        ref={missionRef}
        className="category-card group relative rounded-2xl border border-gray-700 shadow-lg p-8 mb-16"
      >
        <h2 className="text-primary text-3xl font-bold mb-4">{missionTitle}</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">{missionDesc}</p>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((v) => (
          <div
            key={v.title}
            className="category-card group relative rounded-2xl border border-gray-700 shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-2">{v.title}</h3>
            <p className="text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </section>

      {/* Leaders */}
      <section
        ref={leadersRef}
        className="category-card group relative rounded-2xl border border-gray-700 shadow-lg p-10 mb-16 flex flex-col md:flex-row gap-6"
      >
        <h3 className="text-3xl font-semibold md:flex-1">
          Meet the leaders behind Shortcut
        </h3>
        <p className="text-lg text-muted-foreground md:flex-1">{leadersSummary}</p>
        <Link href="/careers" passHref>
          <Button
            as="a"
            size="lg"
            className="bg-primary text-black hover:bg-primary-dark self-start"
          >
            We are Hiring
          </Button>
        </Link>
      </section>

      {/* Team Grid */}
      <section className="mb-16">
        <h2 className="font-headline text-4xl font-bold mb-8 text-center">Meet the Team</h2>
        <div
          ref={teamRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {teamMembers.map(({ name, position, avatar }) => (
            <div
              key={name}
              className="category-card group relative rounded-2xl border border-gray-700 shadow-lg p-6 text-center"
            >
              <div className="mx-auto w-24 h-24 rounded-xl overflow-hidden mb-4">
                <Image src={avatar} alt={name} width={96} height={96} className="object-cover" />
              </div>
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">{position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Backers */}
      <section className="mb-16">
        <h2 className="font-headline text-4xl font-bold mb-8 text-center">
          Built for the Best, Backed by the Best
        </h2>
        <div
          ref={backersRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {backers.map(({ name, position }) => (
            <div
              key={name}
              className="category-card group relative rounded-2xl border border-gray-700 shadow-lg p-6 text-center"
            >
              <p className="text-lg font-semibold mb-1">{name}</p>
              <p className="text-sm text-muted-foreground">{position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section>
        <h2 className="font-headline text-4xl font-bold mb-12 text-center">News</h2>
        <div
          ref={newsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {newsItems.map(({ title, date, image, link }) => (
            <Link
              key={title}
              href={link}
              className="category-card group relative rounded-2xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-40">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-background">
                <p className="text-sm text-muted-foreground mb-2">{date}</p>
                <h3 className="font-semibold text-xl flex items-center justify-between">
                  {title}
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
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