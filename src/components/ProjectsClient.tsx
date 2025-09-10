'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Item } from 'nextra/normalize-pages';
import { reactNodeToString } from '@/lib/utils';
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';

const ProjectDisplay = ({
  title,
  description,
  href,
  languages,
  demoUrl,
  repoUrl,
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-1 flex-col py-2">
        <Link href={href}>
          <h1 className="mb-4 text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground mb-4">{description}</p>
        </Link>

        <div className="mt-auto flex flex-col gap-3">
          <div className="mb-2 flex flex-wrap gap-2">
            {languages.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-primary text-black"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {demoUrl && (
              <Button asChild variant="default">
                <Link href={demoUrl} target="_blank">
                  <IconExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {repoUrl && (
              <Button asChild variant="secondary">
                <Link href={repoUrl} target="_blank">
                  <IconBrandGithub className="mr-2 h-4 w-4" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsClient = ({ projects }: { projects: Item[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const uniqueLanguages = ['All'];
  const tagSet = new Set(uniqueLanguages);

  for (const project of projects) {
    for (const tag of project.frontMatter.languages) {
      const normalizedTag = tag.replaceAll(' ', '-').toLowerCase();
      if (!tagSet.has(normalizedTag)) {
        tagSet.add(normalizedTag);
        uniqueLanguages.push(tag);
      }
    }
  }

  const filteredProject = projects.filter(
    (project) =>
      project.frontMatter.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || project.frontMatter.languages.includes(filter)),
  );

  return (
    <div className="@container container mx-auto min-h-screen max-w-5xl px-6 py-4 lg:py-8">
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
              key={reactNodeToString(project.title)}
              title={reactNodeToString(project.title)}
              description={project.frontMatter.description || ''}
              href={project.route}
              languages={project.frontMatter.languages}
              demoUrl={project.frontMatter.demoUrl}
              repoUrl={project.frontMatter.repoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsClient;
