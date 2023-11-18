import PostCardLayout from "@/components/shared/blog/postCardLayout";
import { allPosts } from "@/.contentlayer/generated";
import { descSortPosts } from "@/utils";

const page = () => {
  const posts = descSortPosts(allPosts);
  return <PostCardLayout header="Posts" posts={posts} />;
};

export default page;
