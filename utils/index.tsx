import { compareDesc, parseISO } from "date-fns";
import { slug } from "github-slugger";
import qs from "query-string";
import { UrlQueryParams, RemoveUrlQueryParams } from "@/types";
import { Post } from "@/.contentlayer/generated";
import fs from "fs";
import { Feed } from "feed";

export const descSortPosts = (posts: any[]) => {
  const publishedPosts = [];

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].isPublished) {
      publishedPosts.push(posts[i]);
    }
  }

  return publishedPosts
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
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

export const getPostUniqueTags = (post: Post) => {
  const tags: string[] = [];
  const postTags = post.tags;

  for (let i = 0; i < postTags.length; i++) {
    const slugified = slug(postTags[i]);
    if (!tags.includes(slugified)) {
      tags.push(slugified);
    }
  }
  return tags;
};

export function urlQueryForm({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

export function removeKeysFromQuery({ params, keys }: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params);
  keys.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

// generate rss
export async function generateRSSFeed(allPosts: Post[]) {
  const isProduction = process.env.GITHUB_ACTIONS || "false";
  const siteUrl =
    isProduction === "false" ? "http://localhost:3000" : "https://karchunt.com";

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/icon.png`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} KarChunT. All rights reserved.`,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
      json: `${siteUrl}/rss.json`,
      atom: `${siteUrl}/atom.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  // add each post to the feed
  // eslint-disable-next-line array-callback-return
  allPosts.map((post) => {
    const categories = [];
    for (let i = 0; i < post.tags.length; i++) {
      categories.push({ name: post.tags[i] });
    }

    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      date: new Date(post.publishedAt),
      published: new Date(post.publishedAt),
      copyright: `© ${new Date().getFullYear()} KarChunT. All rights reserved.`,
      author: [
        {
          name: "KarChunT",
          email: "karchuntan.1999@gmail.com",
          link: "https://www.linkedin.com/in/karchuntan/",
        },
      ],
      image: `${siteUrl}/assets/images/ispenguin-withbg.png`,
      category: categories,
    });
  });

  // write the RSS feed to XML file
  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/rss.json", feed.json1());
  fs.writeFileSync("./public/atom.xml", feed.atom1());
}
