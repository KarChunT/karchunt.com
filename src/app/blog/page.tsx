import BlogClient from '@/components/BlogClient';
import { getBlogs } from './getBlogs';

export const metadata = {
  title: 'Blog',
};

const page = async () => {
  const blogs = await getBlogs();
  return <BlogClient blogs={blogs} />;
};

export default page;
