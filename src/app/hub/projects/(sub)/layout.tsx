'use client';

import ProjectBlogLayout from '@/components/ProjectBlogLayout';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProjectBlogLayout>{children}</ProjectBlogLayout>;
}
