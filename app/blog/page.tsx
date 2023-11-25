import PostCardLayout from "@/components/shared/blog/postCardLayout";
import { allPosts } from "@/.contentlayer/generated";
import { descSortPosts } from "@/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const page = () => {
  const posts = descSortPosts(allPosts);
  return <PostCardLayout header="Posts" posts={posts} />;
};

export default page;
