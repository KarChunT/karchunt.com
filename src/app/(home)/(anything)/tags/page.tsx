import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { getBlogs, getTags, getSortedTags } from '@/app/(home)/blog/page';
import { tagToSlug } from '@/lib/utils';

const page = async () => {
  const blogs = await getBlogs();
  const tags = getTags(blogs);
  const sortedTags = getSortedTags(tags);

  return (
    <div className="container mx-auto flex min-h-screen max-w-5xl gap-8 px-6 py-4 lg:py-8">
      {/* Main content */}
      <div className="flex-1">
        {Object.entries(sortedTags).map(([tag, count]) => {
          const taggedBlogs = blogs
            .filter((blog) => blog.tags.includes(tag))
            .sort((a, b) => a.title.localeCompare(b.title));
          if (taggedBlogs.length === 0) return null;
          return (
            <div
              key={tag}
              id={`tag-${tagToSlug(tag)}`}
              className="mt-6 scroll-mt-24"
            >
              <Badge
                variant="secondary"
                className="bg-primary text-2xl font-bold tracking-tight text-black"
              >
                {tag} ({count})
              </Badge>
              <div className="mt-2 flex flex-col gap-2 pl-5">
                {taggedBlogs.map((post) => (
                  <div key={post.title} className="w-full text-lg font-medium">
                    -{' '}
                    <Link
                      href={post.url}
                      className="hover:decoration-primary decoration-[3px] underline-offset-10 transition hover:underline"
                    >
                      {post.title}
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
                  <Link
                    href={`#tag-${tagToSlug(tag)}`}
                    className="text-primary hover:underline"
                    replace
                  >
                    {tag}
                  </Link>
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
