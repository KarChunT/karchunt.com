'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconArrowRight, IconCalendar, IconUser } from '@tabler/icons-react';
import { Item } from 'nextra/normalize-pages';

const BlogDisplay = ({ title, description, href, date, author, tags }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-1 flex-col py-2">
        <Link href={href}>
          <h1 className="mb-4 text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground mb-4">{description}</p>
        </Link>

        <div className="text-muted-foreground mb-2 flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <IconCalendar className="h-4 w-4" />
            {date &&
              new Date(date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
          </span>
          <span className="flex items-center gap-1">
            <IconUser className="h-4 w-4" />
            {author}
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-primary text-black"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href={href}>
                <IconArrowRight className="mr-2 h-4 w-4" />
                Read More
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BlogClient = ({ blogs }: { blogs: Item[] }) => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const uniqueTags = ['All'];
  const tagSet = new Set(uniqueTags);
  blogs.forEach((blog) => {
    blog.frontMatter.tags.forEach((tag) => {
      const normalizedTag = tag.replaceAll(' ', '-').toLowerCase();
      if (!tagSet.has(normalizedTag)) {
        tagSet.add(normalizedTag);
        uniqueTags.push(tag);
      }
    });
  });

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.frontMatter.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || blog.frontMatter.tags.includes(filter)),
  );

  return (
    <div className="@container container mx-auto min-h-screen max-w-5xl px-6 py-4 lg:py-8">
      <div className="px-4 text-center">
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          My <span className="text-primary">Blog</span>
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
          {filteredBlogs.map((blog) => (
            <BlogDisplay
              key={blog.route}
              title={blog.frontMatter.title}
              description={blog.frontMatter.description || ''}
              href={blog.route}
              date={blog.frontMatter.date}
              author={blog.frontMatter.author || 'KarChunT'}
              tags={blog.frontMatter.tags || []}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogClient;
