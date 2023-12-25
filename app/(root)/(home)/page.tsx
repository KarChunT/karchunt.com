"use client";

import Hero from "@/components/shared/home/hero";
import Newsletter from "@/components/shared/home/newsletter";
import BlogPost from "@/components/shared/blog/blogPost";
import { Button } from "@/components/ui/button";

import { allPosts } from "@/.contentlayer/generated";
import { descSortPosts } from "@/utils";
import Link from "next/link";

const Home = () => {
  const posts = descSortPosts(allPosts).slice(0, 3);

  return (
    <div>
      <Hero />
      {/* <Gallery /> */}
      <section className="padding-y">
        <div className="flex-between">
          <h2 className="text-[27px] font-semibold leading-tight md:text-4xl">
            Latest Posts
          </h2>

          <Button variant="default" asChild>
            <Link href="/blog">View more</Link>
          </Button>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post, index: number) => (
              <div key={index}>
                <BlogPost post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
