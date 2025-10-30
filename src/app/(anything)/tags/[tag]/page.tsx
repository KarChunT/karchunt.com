import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { getBlogs, getTags } from '../../../blog/getBlogs';
import { tagToSlug } from '@/lib/utils';

export async function generateMetadata(props) {
  const params = await props.params;
  const allTags = await getTags();
  // Find the real tag name by matching the slug
  const realTag =
    allTags.find((t) => tagToSlug(t) === decodeURIComponent(params.tag)) ||
    decodeURIComponent(params.tag);
  return {
    title: realTag,
  };
}

export async function generateStaticParams() {
  const allTags = await getTags();
  return [...new Set(allTags)].map((tag) => ({ tag: tagToSlug(tag) }));
}

const page = async ({ params }) => {
  const awaitedParams = await params;
  const tagSlug = awaitedParams.tag;

  const blogs = await getBlogs();
  const allTags = await getTags();
  // Find the real tag name by matching the slug
  const realTag =
    allTags.find((t) => tagToSlug(t) === decodeURIComponent(tagSlug)) ||
    decodeURIComponent(tagSlug);

  // Filter blogs by matching the slug of each tag
  const allPosts = blogs
    .filter((blog) =>
      blog.frontMatter.tags.some((t) => tagToSlug(t) === tagSlug),
    )
    .sort((a, b) => a.frontMatter.title.localeCompare(b.frontMatter.title));
  return (
    <div className="@container container mx-auto min-h-screen max-w-5xl px-6 py-4 lg:py-8">
      <div className="mt-2">
        <Badge
          variant="secondary"
          className="bg-primary text-2xl font-bold tracking-tight text-black"
        >
          {realTag} ({allPosts.length})
        </Badge>
      </div>
      <div className="mt-8 flex flex-col gap-4 pl-5">
        {allPosts.map((post) => (
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
};

export default page;
