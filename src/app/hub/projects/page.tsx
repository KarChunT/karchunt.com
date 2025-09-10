import ProjectsClient from '@/components/ProjectsClient';
import { getProjects } from './getProjects';

export const metadata = {
  title: 'Projects',
};

const page = async () => {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
};

export default page;
