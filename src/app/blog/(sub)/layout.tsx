'use client';

import ProjectBlogLayout from '@/components/ProjectBlogLayout';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProjectBlogLayout>{children}</ProjectBlogLayout>;
}
