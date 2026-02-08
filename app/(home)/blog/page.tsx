import { blog } from '@/lib/source';
import { PathUtils } from 'fumadocs-core/source';
import DisplayBlogClient, { BlogPost } from '@/components/DisplayBlogClient';

export const metadata = {
  title: 'Blog',
};

function getName(path: string) {
  return PathUtils.basename(path, PathUtils.extname(path));
}

export const getBlogs = async () => {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? getName(b.path)).getTime() -
      new Date(a.data.date ?? getName(a.path)).getTime(),
  );
  const blogs: BlogPost[] = posts.map((post) => ({
    url: post.url,
    title: post.data.title,
    description: post.data.description,
    lastUpdated: post.data.lastUpdated?.toString(),
    date: (post.data.date ?? getName(post.path)).toString(),
    author: post.data.author,
    tags: post.data.tags,
  }));
  return blogs;
};

export const getTags = (blogs: BlogPost[]) => {
  return blogs.flatMap((post) => post.tags || []);
};

export const getSortedTags = (tags: string[]) => {
  const allTagsCount = tags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const sortedTags = Object.fromEntries(
    Object.entries(allTagsCount).sort(([a], [b]) => a.localeCompare(b)),
  );
  return sortedTags;
};

const page = async () => {
  // Extract type based on user request: url, data (title, description, date, author, tags)
  const blogs = await getBlogs();
  const tags = getTags(blogs);
  const sortedTags = getSortedTags(tags);

  return <DisplayBlogClient blogs={blogs} allTags={sortedTags} />;
};

export default page;
