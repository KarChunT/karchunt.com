import { compareDesc, parseISO } from "date-fns";
import { slug } from "github-slugger";

export const descSortPosts = (posts: any[]) => {
  const publishedPosts = [];

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].isPublished) {
      publishedPosts.push(posts[i]);
    }
  }

  return publishedPosts
    .slice()
    .sort((a, b) => compareDesc(parseISO(a.updatedAt), parseISO(b.updatedAt)));
};

export const getAllUniqueTags = (posts: any[]) => {
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
