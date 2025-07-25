'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

// Team members data
const teamMembers = [
  { name: 'Karri Saarinen', position: 'Co-founder, CEO', image: '/images/team/karri.jpg', hint: 'Karri Saa CEO' },
  { name: 'Jori Lallo', position: 'Co-founder', image: '/images/team/jori.jpg', hint: 'Jori Lallo' },
  { name: 'Tuomas Artman', position: 'Co-founder, CTO', image: '/images/team/tuomas.jpg', hint: 'Tuomas Artman' },
  // add more members
];

// Backers data
const backers = [
  { name: 'Miles Clements', role: 'Partner' },
  { name: 'Stephanie Zhan', role: 'Partner' },
  { name: 'Dylan Field', role: 'CEO, Figma' },
  // add more backers
];

// News data
const news = [
  { author: 'Kevin Hartnett', date: 'Jul 16, 2025', title: 'Inside Mercury’s six-month journey building with AI agents' },
  { author: 'Karri Saarinen', date: 'Jun 10, 2025', title: 'Building our way: Announcing our Series C' },
  { author: 'Karri Saarinen', date: 'May 27, 2025', title: 'Why is quality so rare?' },
];

export default function StudioPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(storyRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: storyRef.current, start: 'top 80%' }
      });
      gsap.from(membersRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: membersRef.current, start: 'top 80%' }
      });
    });
    return () => ctx.revert();
  }, []);

  // Scroll drag logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastMouseX = useRef(0);
  const lastTime = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const startInertia = () => {
    const friction = 0.95;
    const step = () => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollLeft -= velocity.current * 20;
      velocity.current *= friction;
      if (Math.abs(velocity.current) > 0.02) {
        animationFrameId.current = requestAnimationFrame(step);
      }
    };
    animationFrameId.current = requestAnimationFrame(step);
  };
  const handleDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    lastMouseX.current = e.pageX;
    lastTime.current = Date.now();
    animationFrameId.current && cancelAnimationFrame(animationFrameId.current);
  };
  const handleMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    const now = Date.now();
    const dx = e.pageX - lastMouseX.current;
    const dt = now - lastTime.current;
    if (dt > 0) velocity.current = dx / dt;
    lastMouseX.current = e.pageX;
    lastTime.current = now;
  };
  const handleUp = () => {
    if (!scrollRef.current) return;
    isDown.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
    startInertia();
  };

  return (
    <main className="relative">
      {/* Hero video background */}
      <section className="relative h-[60vh] overflow-hidden">
        <video
          src="/videos/studio-hero.mp4"
          autoPlay muted loop
          className="absolute top-1/2 left-1/2 w-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">Studio</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">

        {/* Story */}
        <section ref={storyRef} className="max-w-3xl mx-auto text-center prose prose-white">
          <h2>Bringing Magic Back to Software</h2>
          <p>Computers used to be magical... (your story content)</p>
          <p>What started as a simple issue tracker... (continue)</p>
        </section>

        {/* Team scroll */}
        <section ref={membersRef} className="relative">
          <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto cursor-grab px-8 pb-4 no-scrollbar"
            onMouseDown={handleDown}
            onMouseMove={handleMove}
            onMouseUp={handleUp}
            onMouseLeave={handleUp}
          >
            {teamMembers.map((m) => (
              <div key={m.name} className="flex-shrink-0 w-[300px]snap-start bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <Avatar className="w-full h-64">
                  <AvatarImage src={m.image} alt={m.name} data-ai-hint={m.hint} />
                  <AvatarFallback>{m.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Manifesto etc... similar approach */}
        {/* Add manifesto, backers, news, CTA here with gsap animations... */}

      </div>
    </main>
  );
}