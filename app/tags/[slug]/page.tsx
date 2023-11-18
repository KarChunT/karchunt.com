import PostCardLayout from "@/components/shared/blog/postCardLayout";
import { allPosts } from "@/.contentlayer/generated";
import { descSortPosts } from "@/utils";
import { slug } from "github-slugger";

const page = ({ params }) => {
  let posts = allPosts.filter((post) => {
    return post.tags?.some((tag) => {
      const slugified = slug(tag);
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });
  posts = descSortPosts(posts);

  return <PostCardLayout header="Tags" posts={posts} />;
};

export default page;
