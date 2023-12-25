import PostCardLayout from "@/components/shared/blog/postCardLayout";
import { Post, allPosts } from "@/.contentlayer/generated";
import { slug } from "github-slugger";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const tags: string[] = [];
  const paths = [{ slug: "all" }];

  // eslint-disable-next-line array-callback-return
  allPosts.map((post: Post) => {
    if (post.isPublished) {
      // eslint-disable-next-line array-callback-return
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
  const posts = allPosts.filter((post) => {
    return post.tags?.some((tag) => {
      const slugified = slug(tag);
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  if (!posts) {
    return notFound();
  }

  return (
    <PostCardLayout
      header="Tags"
      posts={posts}
      tagFilter={params.slug.replace("-", " ")}
    />
  );
};

export default page;
