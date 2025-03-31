'use client';

import Link from 'next/link';
import { useState } from 'react';
import { APPNAME } from '@/constants';
import { blog } from '@/lib/source';
import { Input } from '@/components/ui/input';

export default function Page(): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState('');
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );

  const filteredPosts = posts.filter((post) =>
    post.data.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const svg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.65' 
      numOctaves='3' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>`;

  return (
    <div className="container py-12">
      <div
        className="h-[300px] p-8 md:p-12"
        style={{
          backgroundImage: [
            'radial-gradient(circle at 50% 50%, rgba(0,100,0,0.6), transparent)',
            'radial-gradient(circle at 70% 10%, rgba(34,139,34,0.6), transparent)',
            'radial-gradient(circle at 0% 80%, rgba(0,190,100,0.5), transparent)',
            `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
          ].join(', '),
        }}
      >
        <h1 className="border-fd-foreground mb-4 border-b-4 pb-2 text-4xl font-bold md:text-5xl">
          {APPNAME} Blog
        </h1>
        <p className="text-sm md:text-base">
          Deep roots, vibrant growth. Explore ideas that inspire and stories
          that thrive.
        </p>

        <div className="pt-4">
          <Input
            type="search"
            placeholder="Search posts..."
            className="flex-grow"
            aria-label="Search posts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {filteredPosts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground flex flex-col p-4 transition-colors"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-fd-muted-foreground text-sm">
              {post.data.description}
            </p>

            <p className="text-fd-muted-foreground mt-auto pt-4 text-xs">
              {new Date(post.data.date ?? post.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
