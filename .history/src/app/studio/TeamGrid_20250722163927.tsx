'use client';

import React, { useRef } from 'react';
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
  const renderMember = ({ name, position, fullPosition, avatar }: Member, key: string) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
      if (tooltipRef.current) {
        tooltipRef.current.style.display = 'block';
        gsap.to(tooltipRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      if (tooltipRef.current) {
        gsap.to(tooltipRef.current, {
          opacity: 0,
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

    const handleMouseMove = (e: React.MouseEvent) => {
      if (tooltipRef.current && cardRef.current) {
        const bounds = cardRef.current.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        gsap.to(tooltipRef.current, {
          x,
          y,
          duration: 0.3,
          ease: 'power3.out',
        });
      }
    };

    return (
      <div
        key={key}
        className="group relative"
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Avatar Image */}
        <div className="w-32 aspect-square rounded-xl overflow-hidden group">
          <Image
            src={avatar}
            alt={name}
            width={144}
            height={144}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Name and Short Position */}
        <div className="mt-4 flex items-center justify-start gap-14">
          <div>
            <p className="font-semibold text-lg text-white transition-colors">
              {name}
            </p>
            <p className="text-sm group-hover:text-primary  text-muted-foreground">{position}</p>
          </div>
        </div>

        {/* Animated Tooltip */}
        <div
          ref={tooltipRef}
          className="absolute left-0 top-0 px-4 py-1 text-xs text-black bg-white rounded-lg shadow-lg pointer-events-none z-30"
          style={{
            opacity: 0,
            transform: 'scale(0.95)',
            display: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {fullPosition}
        </div>
      </div>
    );
  };

  return (
    <section className="mb-20 w-full pt-16 pb-32 relative overflow-hidden">
      <div className="max-w-6xl mx-4 md:mx-auto px-4 relative z-20">
        {/* Leaders Heading */}
        <h2 className="font-headline text-3xl mt-10 font-bold mb-12 text-center text-white">
          Meet the <span className="text-primary underline">Leaders</span> behind cLs
        </h2>

{/* Leaders Grid */}
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {leaders.map((member) => (
    <div key={member.name + '-leader'}>
      {renderMember(member, member.name + '-leader')}
    </div>
  ))}
</div>

        {/* Crew Heading */}
        <h2 className="font-headline text-3xl mt-10 font-bold mb-12 text-center text-white">
          Meet the <span className="text-primary underline">Crew</span> of Codelits Studio
        </h2>

        {/* Crew Grid */}
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {crew.map((member) => (
    <div key={member.name + '-crew'}>
      {renderMember(member, member.name + '-crew')}
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
