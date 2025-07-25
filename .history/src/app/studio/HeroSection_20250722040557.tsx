'use client';

import React, { useRef, useEffect } from 'react';
import TeamPageVideo from '@/components/StudioPageVideo';
import gsap from 'gsap';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });
    }
    if (videoRef.current) {
      gsap.from(videoRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h1
        className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white"
        ref={titleRef}
      >
        Redefining digital — one pixel at a time.
      </h1>
      <div className="mt-10" ref={videoRef}>
        <TeamPageVideo />
      </div>
    </div>
  );
}
