import Link from "next/link";
import { Button } from "@/components/ui/button";
import Post from "@/components/shared/blog/post";
import { allPosts } from "@/.contentlayer/generated";
import { descSortPosts, getAllTags } from "@/utils";

const page = () => {
  const posts = descSortPosts(allPosts);
  const allTags = getAllTags(posts);

  return (
    <div className="py-4 sm:py-10">
      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="mt-4 text-[40px] font-bold leading-tight md:text-5xl">
          Blogs
        </h1>

        <div className="break-words py-4">
          <span className="flex flex-wrap gap-3">
            {allTags.map((tag, i) => (
              <div key={i}>
                <Button asChild className="rounded-full">
                  <Link href={`tags/${tag}`}>
                    {tag.replace("-", " ").toLowerCase()}
                  </Link>
                </Button>
              </div>
            ))}
          </span>
        </div>
      </div>

      <div className="mt-16 max-w-7xl">
        <div className="mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post, index) => (
            <article key={index}>
              <Post post={post} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
