'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { allProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProxyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray<HTMLElement>('.project-wrapper');
      const images = gsap.utils.toArray<HTMLElement>('.oval-image');
      const total = wrappers.length;
      const vh = window.innerHeight;

      // Set all wrappers absolutely stacked
      gsap.set(wrappers, { position: 'absolute', top: 0, left: 0, width: '100%', autoAlpha: 0 });
      gsap.set(wrappers[0], { autoAlpha: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollProxyRef.current,
          start: 'top top',
          end: () => `+=${vh * total}`,
          scrub: 1.5,
          pin: containerRef.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
      });

      wrappers.forEach((wrapper, i) => {
        if (i === 0) return; // first is visible initially

        // Spin previous image 8 times while fading out
        tl.to(
          images[i - 1],
          {
            rotate: 360 * 8,
            duration: 1,
            ease: 'power2.inOut',
          },
          (i - 1) * 2
        );

        // Fade out previous wrapper after spin
        tl.to(
          wrappers[i - 1],
          {
            autoAlpha: 0,
            duration: 0.5,
            ease: 'power1.inOut',
          },
          (i - 1) * 2 + 1
        );

        // Reset rotation of previous image (optional)
        tl.set(images[i - 1], { rotate: 0 });

        // Fade in current wrapper
        tl.to(
          wrappers[i],
          {
            autoAlpha: 1,
            duration: 1,
            ease: 'power1.inOut',
          },
          (i - 1) * 2 + 1.5
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={scrollProxyRef}
        style={{ height: `${window.innerHeight * allProjects.length}px` }}
      />
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-background"
        style={{ pointerEvents: 'none' }}
      >
        {allProjects.map((project) => (
          <div
            key={project.slug}
            className="project-wrapper flex flex-col md:flex-row items-center justify-center gap-10 px-10 h-full pointer-events-auto"
          >
            {/* Oval image box */}
            <div
              className="w-full md:w-2/3 h-[500px] bg-card border border-border overflow-hidden relative select-none"
              style={{ borderRadius: '50% / 30%' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="oval-image w-full h-full object-cover rounded-full"
                style={{ borderRadius: '50% / 30%' }}
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>

            {/* Text */}
            <div className="w-full md:flex-1 flex flex-col justify-center text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground text-sm md:text-base mb-5 max-w-md">
                {project.longDescription}
              </p>
              <Button asChild variant="outline" size="sm" className="text-sm px-4 py-2 w-fit">
                <Link href={`/portfolio/${project.slug}`}>
                  View Live Project <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
