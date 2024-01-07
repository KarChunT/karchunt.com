import Link from "next/link";
import { format } from "date-fns";
import Tag from "./tag";
import { slug } from "github-slugger";
import { Key } from "react";
import { Post } from "@/.contentlayer/generated";
import { getPostUniqueTags } from "@/utils";

const BlogPost = ({ post }: { post: Post }) => {
  const tags: string[] = getPostUniqueTags(post);

  return (
    <article className="rounded-lg border p-6">
      <div className="mb-5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-x-4 overflow-hidden">
          {tags.map((tag: string, index: Key | null | undefined) => (
            <Tag key={index} name={tag} tag={slug(tag)} />
          ))}
        </div>

        <time className="text-sm text-gray-500">
          {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
        </time>
      </div>

      <h2 className="mb-2 text-2xl font-semibold">
        <Link href={post.url}>
          {/* <span className="absolute inset-0"></span> */}
          {post.title}
        </Link>
      </h2>

      <p className="mb-5 font-light text-gray-500">{post.description}</p>
    </article>
  );
};

export default BlogPost;
