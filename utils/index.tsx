import { compareDesc, parseISO } from "date-fns";

export const descSortPosts = (posts: any[]) => {
  return posts
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
