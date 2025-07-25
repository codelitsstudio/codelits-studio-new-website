'use client';

import React, { useEffect, useRef } from 'react';
import TeamPageVideo from '@/components/StudioPageVideo';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamAvatarUrl =
  'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA==';

const teamMembers = [ /* ... */ ];
const backers = [ /* ... */ ];
const newsItems = [ /* ... */ ];
const missionTitle = 'Our Mission';
const missionDesc = /* ... */;
const values = [ /* ... */ ];
const leadersSummary = /* ... */;

export default function TeamPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRefs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } });
      tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1 })
        .from(
          Array.from(gridRefs.current?.children ?? []),
          { opacity: 0, y: 100, stagger: 0.2, duration: 0.8 },
          '-=0.5'
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 max-w-7xl text-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter" ref={titleRef}>
            Codelits Studio is redefining the digital experience — one pixel at a time.
          </h1>
          <div className="mt-10">
            <TeamPageVideo />
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="category-card group relative rounded-2xl overflow-hidden border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/30 p-8">
            <h2 className="text-primary text-4xl font-bold mb-4">{missionTitle}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{missionDesc}</p>
          </div>

          <div className="category-card group relative rounded-2xl overflow-hidden border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/30 p-8">
            <h2 className="text-primary text-4xl font-bold mb-8">Our Values</h2>
            <div className="space-y-6">
              {values.map(({ title, desc }) => (
                <div key={title}>
                  <h3 className="text-white font-semibold text-2xl">{title}</h3>
                  <p className="text-muted-foreground mt-2 text-lg">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary/10 rounded-2xl p-10 mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-primary font-semibold text-3xl md:flex-1">
            Meet the leaders behind Shortcut
          </h3>
          <p className="text-muted-foreground text-lg md:flex-1">{leadersSummary}</p>
        </section>

        <div className="text-center mb-20">
          <Link href="/careers" passHref legacyBehavior>
            <Button as="a" size="lg" className="bg-primary text-black hover:bg-primary-dark">
              We are Hiring
            </Button>
          </Link>
        </div>

        <section className="mb-20">
          <h2 className="font-headline text-4xl font-bold mb-12 text-center">Meet the Team</h2>
          <div ref={gridRefs} className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {teamMembers.map(({ name, position, avatar }) => (
              <div
                key={name}
                className="category-card group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 p-6 text-center"
              >
                <div className="w-28 h-28 mx-auto rounded-xl overflow-hidden border border-gray-700 shadow-md">
                  <Image src={avatar} alt={name} width={112} height={112} className="object-cover" />
                </div>
                <p className="mt-4 text-lg font-semibold text-white">{name}</p>
                <p className="text-sm text-muted-foreground">{position}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-headline text-4xl font-bold mb-12 text-center">Built for the Best, Backed by the Best</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {backers.map(({ name, position }) => (
              <div
                key={name}
                className="category-card group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 p-6 text-center"
              >
                <p className="font-semibold text-lg text-white">{name}</p>
                <p className="text-sm text-muted-foreground">{position}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="font-headline text-4xl font-bold mb-12 text-center">News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {newsItems.map(({ title, date, image, link }) => (
              <Link
                href={link}
                key={title}
                className="category-card group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-background">
                  <p className="text-sm text-muted-foreground mb-2">{date}</p>
                  <h3 className="font-semibold text-xl flex items-center justify-between text-white">
                    {title}
                    <span aria-hidden="true" className="ml-3 inline-block transition-transform group-hover:translate-x-2">
                      &rarr;
                    </span>
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
