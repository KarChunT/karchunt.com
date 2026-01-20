import BlogClient from '@/components/BlogClient';
import { ALLOWED_TAGS } from '@/constants';
import {
  getBlogs,
  getTags,
  getTagCounts,
  getSortedTagCounts,
} from './getBlogs';

export const metadata = {
  title: 'Blog',
};

const page = async () => {
  const blogs = await getBlogs();
  const tags = await getTags();
  // const invalidTags = tags.filter((tag) => !ALLOWED_TAGS.includes(tag));
  // if (invalidTags.length > 0) {
  //   console.error('Invalid tags found:', invalidTags);
  //   return;
  // }

  const allTags = getTagCounts(tags);
  const sortedTags = getSortedTagCounts(allTags);
  return <BlogClient allTags={sortedTags} blogs={blogs} />;
};

export default page;
