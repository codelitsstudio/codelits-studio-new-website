'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface Member {
  name: string;
  position: string;
  fullPosition: string;
  avatar: string;
}

interface TeamGridProps {
  leaders: Member[];
  crew: Member[];
}

export default function TeamGrid({ leaders, crew }: TeamGridProps) {
  const handleMouseEnter = (tooltipRef: React.RefObject<HTMLDivElement>) => {
    if (tooltipRef.current) {
      gsap.to(tooltipRef.current, {
        opacity: 1,
        y: -10,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        display: 'block',
      });
    }
  };

  const handleMouseLeave = (tooltipRef: React.RefObject<HTMLDivElement>) => {
    if (tooltipRef.current) {
      gsap.to(tooltipRef.current, {
        opacity: 0,
        y: 0,
        scale: 0.95,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          if (tooltipRef.current) {
            tooltipRef.current.style.display = 'none';
          }
        },
      });
    }
  };

  const renderMember = ({ name, position, fullPosition, avatar }: Member, key: string) => {
    const tooltipRef = useRef<HTMLDivElement>(null);

    return (
      <div
        key={key}
        className="group relative"
        onMouseEnter={() => handleMouseEnter(tooltipRef)}
        onMouseLeave={() => handleMouseLeave(tooltipRef)}
      >
        <div className="w-32 aspect-square rounded-xl overflow-hidden group">
          <Image
            src={avatar}
            alt={name}
            width={144}
            height={144}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="mt-4 flex items-center justify-start gap-14">
          <div>
            <p className="font-semibold text-lg text-white group-hover:text-primary transition-colors">
              {name}
            </p>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </div>

        {/* Tooltip */}
        <div
          ref={tooltipRef}
          className="absolute left-36 top-0 bg-black text-white text-xs px-4 py-2 rounded-lg shadow-lg z-30"
          style={{ opacity: 0, transform: 'scale(0.95)', display: 'none' }}
        >
          {fullPosition}
        </div>
      </div>
    );
  };

  return (
    <section className="mb-20 w-full pt-16 pb-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-20">
        {/* Leaders */}
        <h2 className="font-headline text-3xl mt-10 font-bold mb-12 text-center text-white">
          Meet the <span className="text-primary underline">Leaders</span> behind Codelits Studio
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {leaders.map((member) => renderMember(member, member.name + '-leader'))}
        </div>

        {/* Crew */}
        <h2 className="font-headline text-3xl mt-10 font-bold mb-12 text-center text-white">
          Meet the <span className="text-primary underline">Crew</span> of Codelits Studio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {crew.map((member) => renderMember(member, member.name + '-crew'))}
        </div>
      </div>
    </section>
  );
}
