import { data as posts } from "../components/posts.data";
import type { Post } from "../components/posts.data";

export const postsTags = (): Record<string, Post[]> => {
  let data: Record<string, Post[]> = {};
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const tags = post.tags;

    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        if (tag in data) {
          data[tag].push(post);
        } else {
          data[tag] = [];
          data[tag].push(post);
        }
      });
    }
  }
  return data;
};

export const getTagPath = (tag: string): string => {
  return `/blog/tags?tag=${tag}`;
};
