'use client';

import { useState } from 'react';
import { PROJECTS } from '@/constants';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ProjectDisplay from '@/components/page/project/projectDisplay';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const uniqueTags = [
    'All',
    ...Array.from(new Set(PROJECTS.flatMap((item) => item.tags))),
  ];

  const filteredProject = PROJECTS.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || project.tags.includes(filter)),
  );

  return (
    <div>
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="mt-4">
            The road to freedom shares and introduces my projects from here.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Input
            type="search"
            placeholder="Search projects..."
            className="flex-grow"
            aria-label="Search projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select tag" />
            </SelectTrigger>
            <SelectContent>
              {uniqueTags.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mx-auto mt-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProject.map((project) => (
              <ProjectDisplay
                key={project.title}
                title={project.title}
                description={project.description}
                href={project.href}
                tags={project.tags}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
