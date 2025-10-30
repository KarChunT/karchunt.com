'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getBasePath } from '@/lib/utils';
import { GOOD_TOOLS_AND_WEBSITES_JSON_PATH } from '@/constants';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const uniqueTags = ['All'];
  const tagSet = new Set(uniqueTags);

  const basePath = getBasePath();
  const [good_tools_and_websites, setGoodToolsAndWebsites] = useState<
    GoodToolsProps[]
  >([]);

  useEffect(() => {
    fetch(`${basePath}${GOOD_TOOLS_AND_WEBSITES_JSON_PATH}`)
      .then((res) => res.json())
      .then((data) => setGoodToolsAndWebsites(data));
  }, []);

  for (const tools of good_tools_and_websites) {
    for (const tag of tools.tags) {
      const normalizedTag = tag.replaceAll(' ', '-').toLowerCase();
      if (!tagSet.has(normalizedTag)) {
        tagSet.add(normalizedTag);
        uniqueTags.push(tag);
      }
    }
  }

  const filteredTools = good_tools_and_websites.filter(
    (tool) =>
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || tool.tags.includes(filter)),
  );

  return (
    <div className="min-h-screen">
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
        <div className="mx-auto mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredTools.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="border-[oklch(1 0 0/10%)] mx-auto flex h-full w-full flex-col border-[#2e2c23]">
                <CardHeader className="flex flex-1 flex-col">
                  {/* <div>
                    <Image
                      className="rounded-md border border-[#2e2c23] p-[6px]"
                      width={36}
                      height={36}
                      src={`${basePath}${item.imageSrc}`}
                      alt={item.title}
                    />
                  </div> */}
                  <CardTitle className="text-primary mt-1">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-white">
                    <div className="py-2">
                      {item.tags.map((tag, index) => (
                        <Badge variant="default" key={index}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
