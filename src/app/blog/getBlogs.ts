import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';

export async function getBlogs() {
  const route = '/blog';
  const { directories } = normalizePages({
    list: await getPageMap(route),
    route: route,
  });
  return directories
    .filter((project) => project.name != 'index')
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime(),
    );
}

export async function getTags() {
  const posts = await getBlogs();
  const tags = posts.flatMap((post) => post.frontMatter.tags);
  return tags;
}

export function getTagCounts(tags: string[]) {
  const uniqueTags = Array.from(new Set(tags));
  const allTags: { [key: string]: number } = {};
  for (const tag of uniqueTags) {
    allTags[tag] = tags.filter((t) => t === tag).length;
  }
  return allTags;
}

export function getSortedTagCounts(tags: { [key: string]: number }) {
  return Object.fromEntries(
    Object.entries(tags).sort(([a], [b]) => a.localeCompare(b)),
  );
}
