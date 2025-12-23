'use client';

import Link from 'next/link';
import { useState } from 'react';
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

const goodToolsAndWebsites = [
  {
    title: 'Magic UI',
    description:
      'UI library for Design Engineers. 150+ free and open-source animated components and effects built with React, Typescript, Tailwind CSS, and Motion.',
    href: 'https://magicui.design/',
    tags: ['UI'],
  },
  {
    title: 'Aceternity UI',
    description:
      'Beautiful Tailwind CSS and Framer Motion Components, built with Next.js and TypeScript.',
    href: 'https://ui.aceternity.com/',
    tags: ['UI'],
  },
  {
    title: 'Cult UI',
    description:
      'Shadcn templates & components that you can copy and paste into react apps. Customizable. Open Source. Typed.',
    href: 'https://www.cult-ui.com/',
    tags: ['UI'],
  },
  {
    title: 'ui-layouts',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    href: 'https://www.ui-layouts.com/',
    tags: ['UI'],
  },
  {
    title: 'Shadcn Marketing Blocks',
    description:
      'Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.',
    href: 'https://nsui.irung.me',
    tags: ['UI'],
  },
  {
    title: 'Supabase UI Library',
    description: 'Provides a library of components for your project.',
    href: 'https://supabase.com/ui',
    tags: ['UI'],
  },
  {
    title: 'Shadcnblocks',
    description:
      'Hundreds of new shadcn/ui blocks and Shadcn components. A premium UI library built with Shadcn UI, React & Tailwind.',
    href: 'https://www.shadcnblocks.com/',
    tags: ['UI'],
  },
  {
    title: 'Shadcn UI Blocks',
    description:
      'Discover more than 330 fully responsive UI blocks and 120+ versatile components that effortlessly integrate into your Shadcn UI projects.',
    href: 'https://shadcn-ui-blocks.vercel.app/',
    tags: ['UI'],
  },
  {
    title: 'coss.com origin',
    description:
      'An open-source collection of copy-and-paste components for quickly build application UIs.',
    href: 'https://coss.com/origin',
    tags: ['UI'],
  },
  {
    title: 'Mvpblocks',
    description:
      'Copy-paste beautiful, responsive components without worrying about styling or animations. Build faster, launch sooner.',
    href: 'https://blocks.mvp-subha.me/',
    tags: ['UI'],
  },
  {
    title: 'Kibo UI',
    description:
      'Kibo UI is a custom registry of composable, accessible and extensible components designed for use with shadcn/ui. Free and open source, forever.',
    href: 'https://www.kibo-ui.com/',
    tags: ['UI'],
  },
  {
    title: 'ShadcnStore',
    description:
      'Supercharge your workflow with 150+ responsive, production-ready Shadcn UI blocks for any modern web project. Built for speed, flexibility, and clarity—so you can focus on what matters most.',
    href: 'https://shadcnstore.com/',
    tags: ['UI'],
  },
  {
    title: 'React Bits',
    description:
      'Highly customizable animated components that make your React projects truly stand out.',
    href: 'https://reactbits.dev/',
    tags: ['UI'],
  },
  {
    title: 'tailark',
    description:
      'Modern, Responsive, pre-built UI blocks designed for marketing websites.',
    href: 'https://tailark.com/',
    tags: ['UI'],
  },
  {
    title: 'Skiper-UI',
    description:
      'Discover 73+ premium React components built on shadcn/ui. From scroll effects to interactive animations, enhance your Next.js projects with our unique component library.',
    href: 'https://skiper-ui.com/',
    tags: ['UI'],
  },
  {
    title: 'Efferd',
    description:
      'Efferd is a collection of beautifully crafted Shadcn UI blocks and components, designed to help developers build modern websites with ease.',
    href: 'https://efferd.com/',
    tags: ['UI'],
  },
  {
    title: 'Smooth UI',
    description:
      'Explore smooth animated UI components for React, powered by TailwindCSS and Framer Motion. shadcn/ui compatible components for modern web development.',
    href: 'https://smoothui.dev/',
    tags: ['UI'],
  },
  {
    title: 'RepoFlow',
    description:
      'Simplify package management for npm, PyPI, Docker, Go, Helm, and more. Try it for free with 10GB storage, 10GB bandwidth, 100 packages, and unlimited users in the cloud, or self-hosted for personal use only.',
    href: 'https://selfhostedworld.com/software/repoflow/',
    tags: ['self-hosted'],
  },
  {
    title: 'UV',
    description:
      'An extremely fast Python package and project manager, written in Rust.',
    href: 'https://docs.astral.sh/uv/',
    tags: ['Python'],
  },
  {
    title: 'Wokwi',
    description: "World's most advanced ESP32 simulator",
    href: 'https://wokwi.com/',
    tags: ['ESP32', 'Simulator'],
  },
  {
    title: '中国家谱知识服务平台',
    description: '家谱检索-踏上寻根问祖的文化之旅',
    href: 'https://jiapu.library.sh.cn/',
    tags: ['家谱'],
  },
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const uniqueTags = ['All'];
  const tagSet = new Set(uniqueTags);

  for (const tools of goodToolsAndWebsites) {
    for (const tag of tools.tags) {
      const normalizedTag = tag.replaceAll(' ', '-').toLowerCase();
      if (!tagSet.has(normalizedTag)) {
        tagSet.add(normalizedTag);
        uniqueTags.push(tag);
      }
    }
  }
  const filteredTools = goodToolsAndWebsites.filter(
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
                    <div className="flex flex-wrap gap-1 py-2">
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
