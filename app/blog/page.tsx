import type { Metadata } from "next";
import PostCardLayout from "@/components/shared/blog/postCardLayout";
import { allPosts } from "@/.contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
};

const page = () => {
  return <PostCardLayout header="Posts" posts={allPosts} tagFilter="all" />;
};

export default page;
