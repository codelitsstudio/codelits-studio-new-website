'use client';

import React, { useRef, useEffect } from 'react';
import TeamPageVideo from '@/components/StudioPageVideo';
import gsap from 'gsap';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Studio – CodeLits Studio | Next-Gen Software AI, and Digital Innovation Firm',
  description: 'Discover the creative team and culture behind CodeLits Studio.',
};
export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !videoRef.current) return;

    // Set initial styles before animation to avoid flicker
    gsap.set([titleRef.current, videoRef.current], { opacity: 0 });
    gsap.set(titleRef.current, { y: 50 });
    gsap.set(videoRef.current, { y: 30 });

    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out',
    })
      .to(
        videoRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8' // overlap animations slightly
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="max-w-4xl  md:mx-auto mx-4  text-center mb-16">
      <h1
        className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white"
        ref={titleRef}
        style={{ opacity: 0 }} // Ensure hidden by default
      >
        Redefining digital — one pixel at a time.
      </h1>
      <div className="mt-10" ref={videoRef} style={{ opacity: 0 }}>
        <TeamPageVideo />
      </div>
    </div>
  );
}
