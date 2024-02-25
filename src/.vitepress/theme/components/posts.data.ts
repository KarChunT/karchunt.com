import { createContentLoader } from "vitepress";

export interface Post {
  title: string;
  url: string;
  date: {
    year: string;
    time: number;
    string: string;
  };
  tags: string[];
  excerpt: string | undefined;
}

declare const data: Post[];
export { data };

export default createContentLoader("blog/posts/*.md", {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        tags: formatTags(frontmatter.tags),
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

const formatDate = (raw: string): Post["date"] => {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    year: date.getFullYear().toString(),
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};

const formatTags = (raw: string | string[]): Array<string> => {
  if (typeof raw === "string") {
    if (raw.includes(",")) {
      return raw.split(",").map((value) => value.trim());
    }
    return [raw];
  } else {
    if (Array.isArray(raw)) {
      return raw;
    }
  }
  return [];
};
