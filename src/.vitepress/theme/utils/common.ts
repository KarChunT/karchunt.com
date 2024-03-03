import type { Post } from "../components/posts.data";

export const getDateTime = (date: Post["date"]): string => {
  return new Date(date.time).toISOString();
};
