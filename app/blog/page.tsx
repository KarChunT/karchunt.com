import PostCardLayout from "@/components/shared/blog/postCardLayout";
import { allPosts } from "@/.contentlayer/generated";
import { descSortPosts } from "@/utils";
import type { Metadata } from "next";
import { SearchParamProps } from "@/types";

export const metadata: Metadata = {
  title: "Blog",
};

const page = ({ searchParams }: SearchParamProps) => {
  const filterPosts = [];
  const searchText = (searchParams?.query as string) || "";

  for (let i = 0; i < allPosts.length; i++) {
    if (allPosts[i].title?.toLowerCase().includes(searchText.toLowerCase())) {
      filterPosts.push(allPosts[i]);
    }
  }

  const posts = descSortPosts(filterPosts);
  return <PostCardLayout header="Posts" posts={posts} />;
};

export default page;
