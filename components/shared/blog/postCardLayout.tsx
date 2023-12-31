"use client";

import BlogPost from "./blogPost";
import { descSortPosts, getAllUniqueTags } from "@/utils";
import { useEffect, useState } from "react";
import { Post, allPosts } from "@/.contentlayer/generated";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { slug } from "github-slugger";

const PostCardLayout = ({
  header,
  posts,
  tagFilter = "all",
}: {
  header: string;
  posts: Post[];
  tagFilter: string;
}) => {
  const allTags = getAllUniqueTags(allPosts);

  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [postTitles] = useState<string[]>(
    allPosts.map((post: Post) => post.title.toLowerCase())
  );

  const [searchText, setSearchText] = useState("");
  const [tag, setTag] = useState<string>("all");

  useEffect(() => {
    const filteredPostsTitles: string[] = [...postTitles].filter(
      (title: string) => title.indexOf(searchText.trim().toLowerCase()) !== -1
    );

    let refilteredPosts: Post[] = [];

    if (header === "Tags") {
      refilteredPosts = posts;
    } else {
      refilteredPosts = [...allPosts].filter((post: Post) =>
        filteredPostsTitles.includes(post.title.toLowerCase())
      );
    }

    refilteredPosts = refilteredPosts.filter((post: Post) => {
      return post.tags.some((postTag: string) => {
        const slugified = slug(postTag);
        if (tag === "all") {
          return true;
        }
        return slugified === tag;
      });
    });
    setFilteredPosts(descSortPosts(refilteredPosts));
  }, [searchText, postTitles, posts, tag, header]);

  return (
    <div className="py-4 sm:py-10">
      <div className="flex flex-col gap-4">
        <h1 className="mt-4 text-[40px] font-bold leading-tight md:text-5xl">
          {header !== "Tags" ? header : `${header}: ${tagFilter}`}
        </h1>

        {header !== "Tags" ? (
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Post"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Select onValueChange={(value: string) => setTag(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a tag (Default: all)" />
                </SelectTrigger>
                <SelectContent>
                  {allTags.map((tag) => (
                    <SelectItem value={tag} key={tag}>
                      {tag.replace("-", " ").toLowerCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8">
          {/* eslint-disable-next-line array-callback-return */}
          {filteredPosts.map((post: Post, index: number) => (
            <div key={index}>
              <BlogPost post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCardLayout;
