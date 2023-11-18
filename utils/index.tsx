import { compareDesc, parseISO } from "date-fns";
import { slug } from "github-slugger";

export const descSortPosts = (posts: any[]) => {
  return posts
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const getAllTags = (posts: any[]) => {
  const allTags = ["all"];
  for (let i = 0; i < posts.length; i++) {
    const postTags = posts[i].tags;
    for (let y = 0; y < postTags.length; y++) {
      const slugified = slug(postTags[y]);
      if (!allTags.includes(slugified)) {
        allTags.push(slugified);
      }
    }
  }
  return allTags;
};
