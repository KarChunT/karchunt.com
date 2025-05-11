'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { GOODTOOLSANDWEBSITES } from '@/constants';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const uniqueTags = ['All'];
  const tagSet = new Set(uniqueTags);
  for (const tools of GOODTOOLSANDWEBSITES) {
    for (const tag of tools.tags) {
      const normalizedTag = tag.replaceAll(' ', '-').toLowerCase();
      if (!tagSet.has(normalizedTag)) {
        tagSet.add(normalizedTag);
        uniqueTags.push(tag);
      }
    }
  }

  const filteredTools = GOODTOOLSANDWEBSITES.filter(
    (tool) =>
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || tool.tags.includes(filter)),
  );

  return (
    <div>
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Good <span className="text-primary">Tools & Websites</span>
          </h1>
          <p className="mt-4">
            The road to freedom shares and introduces good tools and websites
            from here.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Input
            type="search"
            placeholder="Search tools..."
            className="flex-grow"
            aria-label="Search tools"
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
          <Cards>
            {filteredTools.map((item, index) => (
              <Card
                key={index}
                href={item.href}
                title={item.title}
                icon={
                  <Image
                    width={24}
                    alt="test"
                    height={24}
                    src={item.imageSrc}
                  />
                }
              >
                <div className="py-2">
                  {item.tags.map((tag, index) => (
                    <Badge variant="default" key={index}>
                      {tag}
                    </Badge>
                  ))}
                </div>

                {item.description}
              </Card>
            ))}
          </Cards>
        </div>
      </div>
    </div>
  );
};

export default Page;
