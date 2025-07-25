'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface NewsItem {
  title: string;
  date: string;
  image: string;
  link: string;
}

interface NewsSectionProps {
  newsItems: NewsItem[];
}

export default function NewsSection({ newsItems }: NewsSectionProps) {
  return (
    <section className="max-w-6xl md:mx-auto mb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-headline text-3xl font-bold text-white">News</h2>
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
            View All <ArrowRight className="h-3 w-3" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsItems.slice(0, 6).map(({ title, date, image, link }) => (
          <Link href={link} key={title} className="group block rounded-lg overflow-hidden">
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="mt-3">
              <p className="text-xs text-muted-foreground mb-1">{date}</p>
              <h3 className="font-medium text-sm text-white group-hover:text-primary transition-colors">
                {title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
