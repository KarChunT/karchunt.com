import { Post } from "@/.contentlayer/generated";
import BlogPost from "./blogPost";
import SearchBlog from "./searchBlog";
import TagFilter from "./tagFilter";

const PostCardLayout = ({
  header,
  posts,
}: {
  header: string;
  posts: Post[];
}) => {
  return (
    <div className="py-4 sm:py-10">
      <div className="flex flex-col gap-4">
        <h1 className="mt-4 text-[40px] font-bold leading-tight md:text-5xl">
          {header}
        </h1>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <SearchBlog />
          <TagFilter />
        </div>
      </div>

      <div className="mt-16 max-w-7xl">
        <div className="mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post, index) => (
            <article key={index}>
              <BlogPost post={post} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCardLayout;
