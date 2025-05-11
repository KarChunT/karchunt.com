'use client';

import Link from 'next/link';
import { useState } from 'react';
import { APPNAME } from '@/constants';
import { blog } from '@/lib/source';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Page(): React.ReactElement {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );

  const uniqueTags = ['All'];
  const tagSet = new Set(uniqueTags);
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const normalizedTag = tag.replaceAll(' ', '-').toLowerCase();
      if (!tagSet.has(normalizedTag)) {
        tagSet.add(normalizedTag);
        uniqueTags.push(tag);
      }
    }
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.data.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || post.data.tags.includes(filter)),
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
          backgroundColor: 'black',
          backgroundImage: [
            'linear-gradient(140deg, hsla(220,94%,54%,0.3), transparent 50%)',
            'linear-gradient(to left top, hsla(160,90%,50%,0.8), transparent 50%)',
            'radial-gradient(circle at 100% 100%, hsla(280,100%,82%,1), hsla(280,40%,40%,1) 17%, hsla(280,40%,40%,0.5) 20%, transparent)',
          ].join(', '),
          backgroundBlendMode: 'difference, difference, normal',
        }}
        // style={{
        //   backgroundImage: [
        //     'radial-gradient(circle at 50% 50%, rgba(0,100,0,0.6), transparent)',
        //     'radial-gradient(circle at 70% 10%, rgba(34,139,34,0.6), transparent)',
        //     'radial-gradient(circle at 0% 80%, rgba(0,190,100,0.5), transparent)',
        //     `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        //   ].join(', '),
        // }}
      >
        <h1 className="border-fd-foreground mb-4 border-b-4 pb-2 text-4xl font-bold md:text-5xl">
          {APPNAME} Blog
        </h1>
        <p className="text-sm md:text-base">
          Deep roots, vibrant growth. Explore ideas that inspire and stories
          that thrive.
        </p>

        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <Input
            type="search"
            placeholder="Search posts..."
            className="flex-grow"
            aria-label="Search posts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select tag" />
            </SelectTrigger>
            <SelectContent>
              {uniqueTags.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {filteredPosts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground flex flex-col p-4 transition-colors"
          >
            <p className="font-bold">{post.data.title}</p>
            {/* <p className="text-muted-foreground mb-4">
              {post.data.description}
            </p> */}
            <div className="mt-auto flex flex-col gap-3">
              <div className="mt-3 flex flex-wrap gap-2">
                {post.data.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary text-black"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-fd-muted-foreground text-xs">
                {new Date(post.data.date ?? post.file.name).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
