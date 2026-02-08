'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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
import { tagToSlug } from '@/lib/utils';

export type BlogPost = {
  url: string;
  title: string;
  description?: string;
  lastUpdated?: string;
  date: string;
  author: string;
  tags: string[];
};

const BlogDisplay = ({
  title,
  description,
  url,
  date,
  author,
  tags,
}: BlogPost) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-1 flex-col py-2">
        <Link href={url}>
          <h1 className="mb-4 text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground mb-4">{description}</p>
        </Link>

        <div className="mt-auto flex flex-col gap-3">
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
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
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} href={`/tags/${tagToSlug(tag)}`}>
                <Badge variant="secondary" className="bg-primary text-black">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href={url}>
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

const DisplayBlogClient = ({
  blogs,
  allTags,
}: {
  blogs: BlogPost[];
  allTags: Record<string, number>;
}) => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;

  const totalCount = blogs.length;

  const uniqueTags = ['All', ...Object.keys(allTags)];
  const filteredBlogsFull = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || blog.tags.includes(filter)),
  );

  const pageCount = Math.max(
    1,
    Math.ceil(filteredBlogsFull.length / postsPerPage),
  );
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedBlogs = filteredBlogsFull.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, searchTerm]);

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
                <span className="text-muted-foreground text-xs">
                  ({category === 'All' ? totalCount : allTags[category]})
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mx-auto mt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {paginatedBlogs.map((blog) => (
            <BlogDisplay
              key={blog.url}
              title={blog.title}
              description={blog.description || ''}
              url={blog.url}
              date={blog.lastUpdated || blog.date}
              author={blog.author || 'KarChunT'}
              tags={blog.tags || []}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </Button>
            <Button
              variant="secondary"
              disabled={currentPage === pageCount}
              onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
            >
              Next
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <Button
                key={i}
                size="sm"
                variant={currentPage === i + 1 ? 'secondary' : 'ghost'}
                onClick={() => setCurrentPage(i + 1)}
                aria-current={currentPage === i + 1 ? 'page' : undefined}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBlogClient;
