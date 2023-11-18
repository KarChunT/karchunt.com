import Link from "next/link";
import { format } from "date-fns";
import Tag from "./tag";
import { slug } from "github-slugger";
import { Key } from "react";

const Post = ({ post }) => {
  return (
    <div className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time className="text-gray-500">
          {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
        </time>
        {post.tags.map((tag: string, index: Key | null | undefined) => (
          <Tag key={index} name={tag} tag={slug(tag)} />
        ))}
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6">
          <Link href={post.url}>
            <span className="absolute inset-0"></span>
            {post.title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default Post;
