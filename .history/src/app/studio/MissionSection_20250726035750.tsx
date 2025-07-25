'use client';

import React, { useRef, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { GridPattern } from '@/components/decoration/GridPattern';
import gsap from 'gsap';

interface MissionSectionProps {
  title: string;
  desc: string;
}

export default function MissionSection({ title, desc }: MissionSectionProps) {
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!missionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(missionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
          // markers: true,
        },
        immediateRender: false,
      });
    }, missionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={missionRef}
      className="category-card group  md:mx-auto mx-4  sm:mx-4 relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 col-span-2 max-w-[1160px] mb-20"
    >
      <div className="relative z-10 flex flex-col h-full p-8 justify-between">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-headline text-2xl font-bold text-white">{title}</h2>
        </div>
        <p className="mt-4 text-base text-muted-foreground w-full">{desc}</p>
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
    </section>
  );
}
