import { compareDesc, parseISO } from "date-fns";
import { slug } from "github-slugger";
import qs from "query-string";
import { UrlQueryParams, RemoveUrlQueryParams } from "@/types";
import { Post } from "@/.contentlayer/generated";

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
