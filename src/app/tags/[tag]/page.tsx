import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { getBlogs, getTags } from '../../blog/getBlogs';

export async function generateMetadata(props) {
  const params = await props.params;
  return {
    title: decodeURIComponent(params.tag),
  };
}

export async function generateStaticParams() {
  const allTags = await getTags();
  return [...new Set(allTags)].map((tag) => ({ tag: encodeURIComponent(tag) }));
}

const page = async ({ params }) => {
  const awaitedParams = await params;
  const tag = decodeURIComponent(awaitedParams.tag);
  const blogs = await getBlogs();
  const allPosts = blogs.filter((blog) => blog.frontMatter.tags.includes(tag));
  return (
    <div className="@container container mx-auto min-h-screen max-w-5xl px-6 py-4 lg:py-8">
      <div className="mt-2">
        <Badge
          variant="secondary"
          className="bg-primary text-2xl font-bold tracking-tight text-black"
        >
          {tag} ({allPosts.length})
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
