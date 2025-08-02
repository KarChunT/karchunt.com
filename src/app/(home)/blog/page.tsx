'use client';

import { useState } from 'react';
import { blog } from '@/lib/source';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import BlogDisplay from '@/components/page/blog/blogDisplay';

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

  return (
    <div className="@container container mx-auto mt-16 max-w-5xl px-6 py-4 lg:py-8">
      <div className="px-4 text-center">
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          My <span className="text-primary"> Blog</span>
        </h1>
        <p className="mt-4">
          Deep roots, vibrant growth. Explore ideas that inspire and stories
          that thrive.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
      <div className="mx-auto mt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogDisplay
              key={post.data.title}
              title={post.data.title}
              description={post.data.description || ''}
              href={post.url}
              date={post.data.date}
              author={post.data.author}
              tags={post.data.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
