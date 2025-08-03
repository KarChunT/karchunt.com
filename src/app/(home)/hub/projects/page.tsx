'use client';

import { useState } from 'react';
import { projects } from '@/lib/source';
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
  const myProjects = projects.getPages();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const uniqueLanguages = ['All'];
  const tagSet = new Set(uniqueLanguages);
  for (const project of myProjects) {
    for (const tag of project.data.languages) {
      const normalizedTag = tag.replaceAll(' ', '-').toLowerCase();
      if (!tagSet.has(normalizedTag)) {
        tagSet.add(normalizedTag);
        uniqueLanguages.push(tag);
      }
    }
  }

  const filteredProject = myProjects.filter(
    (project) =>
      project.data.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || project.data.languages.includes(filter)),
  );

  return (
    <div className="@container container mx-auto mt-16 max-w-5xl px-6 py-4 lg:py-8">
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
            {uniqueLanguages.map((category) => (
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
              key={project.data.title}
              title={project.data.title}
              description={project.data.description || ''}
              href={project.url}
              languages={project.data.languages}
              demoUrl={project.data.demoUrl}
              repoUrl={project.data.repoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
