'use client';

import React, { useEffect, useRef } from 'react';
import TeamPageVideo from '@/components/StudioPageVideo';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Users, Award, Handshake, BookOpen } from 'lucide-react';
import { GridPattern } from '@/components/decoration/GridPattern';
gsap.registerPlugin(ScrollTrigger);

const teamAvatarUrl = 'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA==';

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
    icon: Users,
  },
  {
    title: 'Spread joy',
    desc: 'Our work should make people smile. There’s plenty of boring software in the world, we don’t need to add to the list.',
    icon: Award,
  },
  {
    title: 'Take ownership',
    desc: 'We own our decisions, take action, and independently adapt to circumstances to deliver the best possible results.',
    icon: Handshake,
  },
  {
    title: 'Be open by default',
    desc: 'We work and communicate openly, honestly, and responsibly.',
    icon: BookOpen,
  },
];

const leadersSummary =
  'We break down barriers so teams can focus on what matters – working together to create products for their customers.';

export default function TeamPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.from(videoRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden" ref={sectionRef}>
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1
            className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white"
            ref={titleRef}
          >
            Codelits Studio is redefining the digital experience — one pixel at a time.
          </h1>

          <div className="mt-10" ref={videoRef}>
            <TeamPageVideo />
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20 p-8 rounded-2xl bg-background border border-primary/20">
          <h2 className="text-primary text-4xl font-bold">{missionTitle}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{missionDesc}</p>
        </div>

        {/* Values Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-primary text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={cardsRef}>
            {values.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="group relative rounded-2xl overflow-hidden border border-primary/20 p-8 bg-background hover:border-primary/40 transition-colors"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-white font-semibold text-2xl mb-3">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leaders Summary Section */}
        <div className="max-w-5xl mx-auto rounded-2xl p-10 mb-20 flex flex-col md:flex-row items-center justify-between gap-6 bg-background border border-primary/20">
          <h3 className="text-primary font-semibold text-3xl md:flex-1">
            Meet the leaders behind Shortcut
          </h3>
          <p className="text-muted-foreground text-lg md:flex-1">{leadersSummary}</p>
        </div>

        {/* Hiring Button */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <Link href="/careers" passHref legacyBehavior>
            <Button as="a" size="lg" className="bg-primary text-black hover:bg-primary-dark">
              We are Hiring
            </Button>
          </Link>
        </div>

        {/* Team Grid Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="font-headline text-4xl font-bold mb-12 text-center text-white">
            Meet the Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" ref={cardsRef}>
            {teamMembers.map(({ name, position, avatar }) => (
              <div
                key={name}
                className="group relative rounded-xl overflow-hidden border border-primary/20 bg-background p-4 text-center hover:border-primary/40 transition-colors"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <Image
                    src={avatar}
                    alt={name}
                    width={96}
                    height={96}
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-4 font-semibold text-white group-hover:text-primary transition-colors">
                  {name}
                </p>
                <p className="text-sm text-muted-foreground">{position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Backers Section */}
        <section className="max-w-6xl mx-auto mb-20 p-8 rounded-2xl bg-background border border-primary/20">
          <h2 className="font-headline text-4xl font-bold mb-12 text-center text-white">
            Built for the Best, Backed by the Best
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {backers.map(({ name, position }) => (
              <div
                key={name}
                className="border border-primary/20 p-4 rounded-xl bg-background hover:bg-primary/10 transition-colors text-center"
              >
                <p className="font-semibold text-white">{name}</p>
                <p className="text-sm text-muted-foreground">{position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* News Section */}
        <section className="max-w-6xl mx-auto p-8 rounded-2xl bg-background border border-primary/20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline text-4xl font-bold text-white">News</h2>
            <Link href="/blog">
              <Button variant="outline" className="flex items-center gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(0, 6).map(({ title, date, image, link }) => (
              <Link
                href={link}
                key={title}
                className="group block rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="relative w-full h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">{date}</p>
                  <h3 className="font-semibold text-lg text-white flex items-center justify-between">
                    {title}
                    <span
                      aria-hidden="true"
                      className="ml-3 inline-block transition-transform group-hover:translate-x-2"
                    >
                      &rarr;
                    </span>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Decorative Elements */}
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className="absolute inset-0 h-full w-full stroke-primary/10 opacity-10 pointer-events-none"
        />
      </div>
    </div>
  );
}