"use client";

import Hero from "@/components/shared/home/hero";
import Newsletter from "@/components/shared/home/newsletter";
import BlogPost from "@/components/shared/blog/blogPost";

import { allPosts } from "@/.contentlayer/generated";
import { descSortPosts } from "@/utils";

const Home = () => {
  const posts = descSortPosts(allPosts).slice(0, 6);

  return (
    <div>
      <Hero />
      {/* <Gallery /> */}
      <section className="padding-y">
        <h2 className="text-[27px] font-semibold leading-tight md:text-4xl">
          Latest Posts
        </h2>
        <div className="mt-6 max-w-7xl">
          <div className="mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post, index) => (
              <article key={index}>
                <BlogPost post={post} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
