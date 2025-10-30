import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  getBlogs,
  getTags,
  getTagCounts,
  getSortedTagCounts,
} from '../../blog/getBlogs';
import Link from 'next/link';

const page = async () => {
  const blogs = await getBlogs();
  const tags = await getTags();
  const allTags = getTagCounts(tags);
  const sortedTags = getSortedTagCounts(allTags);

  return (
    <div className="container mx-auto flex min-h-screen max-w-5xl gap-8 px-6 py-4 lg:py-8">
      {/* Main content */}
      <div className="flex-1">
        {Object.entries(sortedTags).map(([tag, count]) => {
          const taggedBlogs = blogs
            .filter((blog) => blog.frontMatter.tags.includes(tag))
            .sort((a, b) =>
              a.frontMatter.title.localeCompare(b.frontMatter.title),
            );
          if (taggedBlogs.length === 0) return null;
          return (
            <div key={tag} id={`tag-${tag}`} className="mt-6 scroll-mt-24">
              <Badge
                variant="secondary"
                className="bg-primary text-2xl font-bold tracking-tight text-black"
              >
                {tag} ({count})
              </Badge>
              <div className="mt-2 flex flex-col gap-2 pl-5">
                {taggedBlogs.map((post) => (
                  <div key={post.name} className="w-full text-lg font-medium">
                    -{' '}
                    <Link
                      href={post.route}
                      className="[text-decoration-thickness:3px] [text-underline-offset:10px] transition hover:underline hover:[text-decoration-color:hsl(var(--primary))]"
                    >
                      {post.frontMatter.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* TOC Sidebar */}
      <aside className="sticky top-20 hidden h-[70vh] w-64 pl-8 lg:block">
        <ScrollArea className="h-full rounded-lg shadow">
          <div className="p-4">
            <div className="mb-2 font-bold">Tags</div>
            <ul className="space-y-2">
              {Object.keys(sortedTags).map((tag) => (
                <li key={tag}>
                  <a
                    href={`#tag-${tag}`}
                    className="text-primary hover:underline"
                  >
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </aside>
    </div>
  );
};

export default page;
