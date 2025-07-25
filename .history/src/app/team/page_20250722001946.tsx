'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

// Team members data
const teamMembers = \[
{ name: 'Karri Saarinen', position: 'Co-founder, CEO', image: '/images/team/karri.jpg', hint: 'Karri Saarinen' },
{ name: 'Jori Lallo', position: 'Co-founder', image: '/images/team/jori.jpg', hint: 'Jori Lallo' },
{ name: 'Tuomas Artman', position: 'Co-founder, CTO', image: '/images/team/tuomas.jpg', hint: 'Tuomas Artman' },
{ name: 'Tom Moor', position: 'Head of Engineering', image: '/images/team/tom.jpg', hint: 'Tom Moor' },
{ name: 'Nan Yu', position: 'Head of Product', image: '/images/team/nan.jpg', hint: 'Nan Yu' },
{ name: 'Cristina Cordova', position: 'COO', image: '/images/team/cristina.jpg', hint: 'Cristina Cordova' },
{ name: 'Casey Bertenthal', position: 'Head of Sales', image: '/images/team/casey.jpg', hint: 'Casey Bertenthal' },
// ... add additional members
];

const TeamCard = ({ member }: { member: typeof teamMembers\[0] }) => {
const cardRef = useRef<HTMLDivElement>(null);

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
if (!cardRef.current) return;
const { left, top, width, height } = cardRef.current.getBoundingClientRect();
const x = (e.clientX - left) / width;
const y = (e.clientY - top) / height;
const rotateX = gsap.utils.mapRange(0, 1, -3, 3, y);
const rotateY = gsap.utils.mapRange(0, 1, 3, -3, x);
gsap.to(cardRef.current, { rotateX, rotateY, scale: 1.02, ease: 'power2.out', duration: 0.3 });
};
const handleMouseLeave = () => {
if (!cardRef.current) return;
gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, scale: 1, ease: 'power2.out', duration: 0.3 });
};

return (
\<div
ref={cardRef}
className="relative p-4 rounded-lg bg-card shadow-lg flex-shrink-0 w-\[300px] h-\[380px] cursor-grab"
style={{ transformStyle: 'preserve-3d' }}
onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
\> <Avatar className="w-full h-72"> <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} /> <AvatarFallback>{member.name.charAt(0)}</AvatarFallback> </Avatar> <div className="mt-4 text-center"> <h3 className="font-semibold text-lg text-white">{member.name}</h3> <p className="text-sm text-muted-foreground">{member.position}</p> </div> </div>
);
};

export default function StudioPage() {
const sectionRef = useRef<HTMLDivElement>(null);
const scrollRef = useRef<HTMLDivElement>(null);

// GSAP entry animation
useEffect(() => {
const ctx = gsap.context(() => {
gsap.from(sectionRef.current, { opacity: 0, y: 100, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
}, sectionRef);
return () => ctx.revert();
}, \[]);

// Drag scroll logic
const isDown = useRef(false);
const startX = useRef(0);
const scrollLeft = useRef(0);
const velocity = useRef(0);
const lastX = useRef(0);
const lastTime = useRef(0);
const animId = useRef\<number | null>(null);

const startInertia = () => {
const friction = 0.96;
const step = () => {
if (!scrollRef.current) return;
scrollRef.current.scrollLeft -= velocity.current \* 20;
velocity.current \*= friction;
if (Math.abs(velocity.current) > 0.01) animId.current = requestAnimationFrame(step);
};
animId.current = requestAnimationFrame(step);
};
const onDown = (e: React.MouseEvent) => {
if (!scrollRef.current) return;
isDown.current = true;
scrollRef.current.classList.add('cursor-grabbing');
startX.current = e.pageX - scrollRef.current.offsetLeft;
scrollLeft.current = scrollRef.current.scrollLeft;
lastX.current = e.pageX;
lastTime.current = Date.now();
animId.current && cancelAnimationFrame(animId.current);
};
const onMove = (e: React.MouseEvent) => {
if (!isDown.current || !scrollRef.current) return;
e.preventDefault();
const x = e.pageX - scrollRef.current.offsetLeft;
const walk = (x - startX.current) \* 1.5;
scrollRef.current.scrollLeft = scrollLeft.current - walk;
const now = Date.now();
velocity.current = (e.pageX - lastX.current) / (now - lastTime.current);
lastX.current = e.pageX;
lastTime.current = now;
};
const endDrag = () => {
if (!scrollRef.current) return;
isDown.current = false;
scrollRef.current.classList.remove('cursor-grabbing');
startInertia();
};

return ( <main className="bg-[#0E0E0E] text-white">
{/\* Hero Section \*/} <section className="relative h-[50vh] overflow-hidden"> <video src="/videos/studio-hero.mp4" autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" /> <div className="absolute inset-0 bg-black/50 flex items-center justify-center"> <h1 className="text-5xl md:text-6xl font-bold">Studio</h1> </div> </section>

```
  <div className="container mx-auto px-4 py-16 space-y-24">
    {/* Story Section */}
    <section ref={sectionRef} className="max-w-3xl mx-auto prose prose-invert text-center">
      <h2>Bringing Magic Back to Software</h2>
      <p>We're crafting the project planning tool for teams that care about quality. Computers used to be magical...</p>
      <p>Frustrated with the status quo, we decided to build something better... We named it Linear to signify progress.</p>
      <p>Today, thousands of teams around the globe use Linear to build their products...</p>
    </section>

    {/* Team Carousel */}
    <section>
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">Our Team</p>
        <h2 className="text-3xl font-semibold">Meet the Team</h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto cursor-grab py-4 px-8 -mx-8 snap-x snap-mandatory no-scrollbar"
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        style={{ scrollbarWidth: 'none' }}
      >
        {teamMembers.map(member => (
          <div key={member.name} className="snap-start">
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </section>

    {/* Manifesto, Backers, News & CTA... replicate scroll-trigger fade-in similarly */}
  </div>
</main>
```

);
}
