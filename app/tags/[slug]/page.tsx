import PostCardLayout from "@/components/shared/blog/postCardLayout";
import { allPosts } from "@/.contentlayer/generated";
import { descSortPosts } from "@/utils";
import { slug } from "github-slugger";

export async function generateStaticParams() {
  const tags: string[] = [];
  const paths = [{ slug: "all" }];

  allPosts.map((post) => {
    if (post.isPublished) {
      post.tags?.map((tag) => {
        const slugified = slug(tag);
        if (!tags.includes(slugified)) {
          tags.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });
  return paths;
}

export async function generateMetadata({ params }: { params: any }) {
  return {
    title: `Tag: ${params.slug.replaceAll("-", " ")}`,
  };
}

const page = ({ params }: { params: any }) => {
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
