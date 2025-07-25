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
  const missionRef = useRef<HTMLDivElement>(null);

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

      gsap.from(missionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
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
Redefining digital — one pixel at a time.          </h1>

          <div className="mt-10" ref={videoRef}>
            <TeamPageVideo />
          </div>
        </div>

        {/* Mission Section - Updated as requested */}
        <section
          ref={missionRef}
          className="category-card group relative rounded-2xl border border-gray-700 shadow-lg p-8 mb-16 max-w-5xl mx-auto"
        >
          <h2 className="text-primary text-3xl font-bold mb-4">{missionTitle}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{missionDesc}</p>
        </section>

        {/* Values Section - Made smaller */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-primary text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={cardsRef}>
            {values.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="group relative rounded-xl overflow-hidden border border-primary/20 p-6 bg-background hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
                    <p className="text-muted-foreground text-base">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leaders Summary Section */}
        <div className="max-w-5xl mx-auto rounded-xl p-8 mb-20 flex flex-col md:flex-row items-center justify-between gap-6 bg-background border border-primary/20">
          <h3 className="text-primary font-semibold text-2xl md:flex-1">
            Meet the leaders behind Shortcut
          </h3>
          <p className="text-muted-foreground text-base md:flex-1">{leadersSummary}</p>
        </div>

        {/* Hiring Button */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <Link href="/careers">
            <Button size="lg" className="bg-primary text-black hover:bg-primary-dark">
              We are Hiring
            </Button>
          </Link>
        </div>

        {/* Team Grid Section */}
<section className="max-w-6xl mx-auto mb-20">
  <h2 className="font-headline text-3xl font-bold mb-20 text-center text-white">
Meet the <span className="text-primary">Leaders</span> behind Codelits Studio
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {teamMembers.map(({ name, position, avatar }) => (
      <div key={name} className="group">
        {/* Portrait-style image */}
        <div className="w-32 aspect-square rounded-xl overflow-hidden group">
          <Image
            src={avatar}
            alt={name}
            width={144}
            height={144}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Name, position and LinkedIn icon */}
<div className="mt-4 flex items-center justify-start gap-14">
          <div>
            <p className="font-semibold text-lg text-white group-hover:text-primary transition-colors">
              {name}
            </p>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
         
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Backers Section */}
        <section className="max-w-6xl mx-auto mb-20 p-6 rounded-xl bg-background border border-primary/20">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center text-white">
            Built for the Best, Backed by the Best
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {backers.map(({ name, position }) => (
              <div
                key={name}
                className="border border-primary/20 p-3 rounded-lg bg-background hover:bg-primary/10 transition-colors text-center"
              >
                <p className="font-medium text-sm text-white">{name}</p>
                <p className="text-xs text-muted-foreground">{position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* News Section - Transparent cards without borders */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline text-3xl font-bold text-white">News</h2>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                View All <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {newsItems.slice(0, 6).map(({ title, date, image, link }) => (
              <Link
                href={link}
                key={title}
                className="group block rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
                <div className="mt-3">
                  <p className="text-xs text-muted-foreground mb-1">{date}</p>
                  <h3 className="font-medium text-sm text-white group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>


       
      </div>
    </div>
  );
}