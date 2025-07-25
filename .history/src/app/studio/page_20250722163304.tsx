'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  HeroSection,
  MissionSection,
  ValuesSection,
  TeamGrid,
  NewsSection,
  leaders,
  crew,
  newsItems,
  missionTitle,
  missionDesc,
  values,
} from './';

gsap.registerPlugin(ScrollTrigger);

export default function StudioPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // We do animations in sub-components, so no animation here

  return (
    <div className="relative min-h-screen w-full" ref={sectionRef}>
      <div className="relative mx-auto py-16 md:py-24">
        <HeroSection />
        <MissionSection title={missionTitle} desc={missionDesc} />
        <ValuesSection values={values} />
        <TeamGrid leaders={leaders} crew={crew} />
        <NewsSection newsItems={newsItems} />
      </div>
    </div>
  );
}
