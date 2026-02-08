import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { getBlogs, getTags } from '@/app/(home)/blog/page';
import { tagToSlug } from '@/lib/utils';

type Params = Promise<{ tag: string }>;

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const blogs = await getBlogs();
  const allTags = getTags(blogs);
  // Find the real tag name by matching the slug
  const realTag =
    allTags.find((t) => tagToSlug(t) === decodeURIComponent(params.tag)) ||
    decodeURIComponent(params.tag);
  return {
    title: realTag,
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  const allTags = getTags(blogs);
  return [...new Set(allTags)].map((tag) => ({ tag: tagToSlug(tag) }));
}

const page = async ({ params }: { params: Params }) => {
  const awaitedParams = await params;
  const tagSlug = awaitedParams.tag;

  const blogs = await getBlogs();
  const allTags = getTags(blogs);
  // Find the real tag name by matching the slug
  const realTag =
    allTags.find((t) => tagToSlug(t) === decodeURIComponent(tagSlug)) ||
    decodeURIComponent(tagSlug);

  // Filter blogs by matching the slug of each tag
  const allPosts = blogs
    .filter((blog) => blog.tags.some((t) => tagToSlug(t) === tagSlug))
    .sort((a, b) => a.title.localeCompare(b.title));
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
};

export default page;
