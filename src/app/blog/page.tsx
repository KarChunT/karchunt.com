import BlogClient from '@/components/BlogClient';
import { ALLOWED_TAGS } from '@/constants';
import { getBlogs, getTags } from './getBlogs';

export const metadata = {
  title: 'Blog',
};

const page = async () => {
  const blogs = await getBlogs();
  const tags = await getTags();
  const invalidTags = tags.filter((tag) => !ALLOWED_TAGS.includes(tag));
  if (invalidTags.length > 0) {
    console.error('Invalid tags found:', invalidTags);
    return;
  }
  const uniqueTags = Array.from(new Set(tags));
  const allTags = {};
  for (const tag of uniqueTags) {
    allTags[tag] = tags.filter((t) => t === tag).length;
  }
  return <BlogClient allTags={allTags} blogs={blogs} />;
};

export default page;
