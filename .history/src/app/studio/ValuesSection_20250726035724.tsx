'use client';

import React, { useRef, useEffect } from 'react';
import { GridPattern } from '@/components/decoration/GridPattern';
import gsap from 'gsap';

interface Value {
  title: string;
  desc: string;
  icon: React.ElementType;
}

interface ValuesSectionProps {
  values: Value[];
}

export default function ValuesSection({ values }: ValuesSectionProps) {
  const cardsRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  if (!cardsRef.current) return;

  // Set initial styles (to avoid flicker)
  gsap.set(cardsRef.current.children, { opacity: 0, y: 50 });

  const ctx = gsap.context(() => {
    if (!cardsRef.current) return;
    gsap.to(cardsRef.current.children, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 85%',
        end: 'top 50%',
        scrub: 0.5,
         once: true,
      },
    });
  }, cardsRef);

  return () => ctx.revert();
}, []);

  return (
    <section className="max-w-6xl  md:mx-auto mx-4  mb-20">
      <h2 className="text-3xl font-bold font-headline mb-8 text-center">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={cardsRef}>
        {values.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="category-card group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 p-8"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                className="absolute inset-0 h-full w-full stroke-primary/10"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
