import type { Metadata } from "next";
import PostCardLayout from "@/components/shared/blog/postCardLayout";

export const metadata: Metadata = {
  title: "Blog",
};

const page = () => {
  return <PostCardLayout header="Posts" />;
};

export default page;
