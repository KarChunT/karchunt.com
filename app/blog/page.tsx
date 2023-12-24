import PostCardLayout from "@/components/shared/blog/postCardLayout";
import { allPosts } from "@/.contentlayer/generated";
import { descSortPosts } from "@/utils";
import type { Metadata } from "next";
import { SearchParamProps } from "@/types";
import { slug } from "github-slugger";

export const metadata: Metadata = {
  title: "Blog",
};

const page = ({ searchParams }: SearchParamProps) => {
  const filterPosts = [];
  const searchText = (searchParams?.query as string) || "";
  const searchTag = (searchParams?.tag as string) || "all";

  for (let i = 0; i < allPosts.length; i++) {
    if (allPosts[i].title?.toLowerCase().includes(searchText.toLowerCase())) {
      if (searchTag !== "all") {
        const postTags = (allPosts[i].tags as string[]) || [];
        let foundTag = false;
        for (let y = 0; y < postTags.length; y++) {
          const slugified = slug(postTags[y]);
          if (searchTag === slugified) {
            foundTag = true;
            break;
          }
        }
        if (foundTag) {
          filterPosts.push(allPosts[i]);
        }
      } else {
        filterPosts.push(allPosts[i]);
      }
    }
  }

  const posts = descSortPosts(filterPosts);
  return <PostCardLayout header="Posts" posts={posts} />;
};

export default page;
