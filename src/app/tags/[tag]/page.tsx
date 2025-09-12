import Link from 'next/link';
import { getBlogs, getTags } from '../../blog/getBlogs';

// export async function generateMetadata(props) {
//   const params = await props.params
//   return {
//     title: `Posts Tagged with “${decodeURIComponent(params.tag)}”`
//   }
// }

export async function generateStaticParams() {
  const allTags = await getTags();
  return [...new Set(allTags)].map((tag) => ({ tag: encodeURIComponent(tag) }));
}

const page = async ({ params }) => {
  const tag = decodeURIComponent(params.tag);
  const blogs = await getBlogs();
  const allPosts = blogs.filter((blog) => blog.frontMatter.tags.includes(tag));

  console.log(allPosts);
  return (
    <div className="@container container mx-auto min-h-screen max-w-5xl px-6 py-4 lg:py-8">
      <div>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          <span className="text-primary">
            {tag} ({allPosts.length})
          </span>
        </h1>
      </div>
      <div className="mt-8 flex flex-col gap-4">
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
