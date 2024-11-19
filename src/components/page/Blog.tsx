'use client';

import { BLOG } from '@/constants';
import FeatureCard from '@/components/shared/feature-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const uniqueTags = [
    'All',
    ...Array.from(new Set(BLOG.flatMap((item) => item.tags))),
  ];

  const filteredPosts = BLOG.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || post.tags.includes(filter)),
  );

  return (
    <div className="container mx-auto min-h-screen px-4 py-10">
      {/* header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight">
          My <span className="text-primary">Blog</span>
        </h1>
        <p className="text-center text-lg">
          The road to freedom shares and introduces my blog from here.
        </p>
      </div>

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

      <div className="py-10">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500">No posts found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((b) => {
              return (
                <FeatureCard
                  key={b.title}
                  title={b.title}
                  description={b.tags.join(', ')}
                  icon={<></>}
                  href={b.href}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
