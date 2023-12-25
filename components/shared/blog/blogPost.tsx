import Link from "next/link";
import { format } from "date-fns";
import Tag from "./tag";
import { slug } from "github-slugger";
import { Key } from "react";
import { Post } from "@/.contentlayer/generated";
import { getPostUniqueTags } from "@/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
          {format(new Date(post.updatedAt), "MMMM dd, yyyy")}
        </time>
      </div>

      <h2 className="mb-2 text-2xl font-semibold">
        <Link href={post.url}>
          {/* <span className="absolute inset-0"></span> */}
          {post.title}
        </Link>
      </h2>

      <p className="mb-5 font-light text-gray-500">{post.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              width={48}
              height={48}
              alt="karchunt"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/karchunt.jpeg`}
            />
            <AvatarFallback>KC</AvatarFallback>
          </Avatar>

          <p className="font-bold sm:block">
            Kar<span className="text-primary">ChunT</span>
          </p>
        </div>

        <Link
          href={post.url}
          className="inline-flex items-center font-medium text-primary hover:underline"
        >
          Read more
          <svg
            className="ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
