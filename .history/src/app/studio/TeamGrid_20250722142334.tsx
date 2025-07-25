'use client';

import React from 'react';
import Image from 'next/image';
import { GridPattern } from '@/components/decoration/GridPattern';

interface Member {
  name: string;
  position: string;
  avatar: string;
}

interface TeamGridProps {
  leaders: Member[];
  crew: Member[];
}

export default function TeamGrid({ leaders, crew }: TeamGridProps) {
  return (
    <section className="mb-20 w-full pt-16 pb-32 relative overflow-hidden">
         <GridPattern
                      width={40}
                      height={40}
                      x={-1}
                      y={-1}
                      className="absolute inset-0 h-full w-full stroke-primary/10"
                    />
         
                  <div className="max-w-6xl mx-auto px-4 relative z-20">
        {/* Leaders Heading */}
        <h2 className="font-headline text-3xl mt-10 font-bold mb-12 text-center text-white">
          Meet the <span className="text-primary underline">Leaders</span> behind Codelits Studio
        </h2>

        {/* Leaders Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {leaders.map(({ name, position, avatar }) => (
            <div key={name + '-leader'} className="group">
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
            </div>
          ))}
        </div>

        {/* Crew Heading */}
        <h2 className="font-headline text-3xl mt-10 font-bold mb-12 text-center text-white">
          Meet the <span className="text-primary underline">Crew</span> of Codelits Studio
        </h2>

        {/* Crew Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {crew.map(({ name, position, avatar }) => (
            <div key={name + '-crew'} className="group">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
