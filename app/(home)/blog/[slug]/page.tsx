import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { blog } from '@/lib/source';
import { createMetadata } from '@/lib/metadata';
import { getMDXComponents } from '@/mdx-components';
import Image from 'next/image';
import path from 'node:path';
import fs from 'node:fs/promises';
import { PERSONAL_IMAGE, NAME } from '@/app/constants';
import { getBasePath } from '@/lib/utils';
import { Control } from '@/components/ui/control';
import { tagToSlug } from '@/lib/utils';
import { FaBook, FaYoutube } from 'react-icons/fa6';
import {
  FaReadme,
  FaRegClock,
  FaGithub,
  FaExternalLinkAlt,
  FaHandshake,
} from 'react-icons/fa';
import { IoLibraryOutline } from 'react-icons/io5';
import { VscSymbolKeyword } from 'react-icons/vsc';
import { TbClockEdit } from 'react-icons/tb';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Comments from '@/components/Comments';
import readingTime from 'reading-time';

export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const basePath = getBasePath();
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const { body: Mdx, toc } = await page.data.load();
  const filePath = path.join(
    process.cwd(),
    'content/blog',
    `${params.slug}.mdx`,
  );

  const rawContent = await fs.readFile(filePath, 'utf-8');
  const content = rawContent
    .replace(/^---[\s\S]*?---\n*/, '')
    .replace(/\{(\/\*[\s\S]*?\*\/)\}/g, '');
  const stats = readingTime(content);

  const links = [
    {
      condition: page.data.documentation,
      icon: <FaBook size={16} />,
      href: page.data.documentation,
      label: 'Documentation',
    },
    {
      condition: page.data.repoUrl,
      icon: <FaGithub size={16} />,
      href: page.data.repoUrl,
      label: 'Source Code',
    },
    {
      condition: page.data.demoUrl,
      icon: <FaExternalLinkAlt size={16} />,
      href: page.data.demoUrl,
      label: 'Live Demo',
    },
    {
      condition: page.data.youtubeUrl,
      icon: <FaYoutube size={16} />,
      href: page.data.youtubeUrl,
      label: 'YouTube',
    },
    {
      condition: page.data.references,
      icon: <FaHandshake size={16} />,
      href: page.data.references,
      label: 'Ref',
    },
  ];

  return (
    <div className="container mx-auto mt-8 max-w-(--fd-layout-width) px-4">
      <div
        className="rounded-xl border px-8 py-12"
        style={{
          backgroundColor: '#fef9c3', // light yellow
          backgroundImage: [
            'linear-gradient(140deg, hsla(50,100%,70%,0.3), transparent 50%)',
            'linear-gradient(to left top, hsla(45,98%,60%,0.8), transparent 50%)',
            'radial-gradient(circle at 100% 100%, hsla(48,100%,85%,1), hsla(48,80%,60%,1) 17%, hsla(48,80%,60%,0.5) 20%, transparent)',
          ].join(', '),
          backgroundBlendMode: 'multiply, multiply, normal',
        }}
      >
        <h1 className="mb-2 text-3xl font-bold text-black">
          {page.data.title}
        </h1>
        <p className="mb-4 text-black/80">{page.data.description}</p>
      </div>

      <article className="flex flex-col gap-8 px-0 py-8 lg:flex-row">
        {/* metadata */}
        <div className="order-2 mt-2 flex flex-col gap-4 pr-4 text-sm sm:mt-0 lg:order-1 lg:w-62.5">
          <div className="mb-1 flex items-center gap-3">
            <Image
              src={`${basePath}${PERSONAL_IMAGE}`}
              alt="karchunt"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div className="flex flex-col text-base font-bold">
              <p className="text-primary">{NAME}</p>
              <p className="text-999">Creator</p>
            </div>
          </div>

          <p className="text-999 text-base font-bold">Metadata</p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <FaRegClock size={16} /> {new Date(page.data.date).toDateString()}
            </div>

            {page.data.lastUpdated && (
              <div className="flex items-center gap-2">
                <TbClockEdit size={16} />{' '}
                {new Date(page.data.lastUpdated).toDateString()}
              </div>
            )}

            <div className="flex items-center gap-2">
              <FaReadme size={16} /> <p>{stats.text}</p>
            </div>

            <div className="flex items-center gap-2">
              <VscSymbolKeyword size={16} /> <p>{stats.words} words</p>
            </div>

            <div className="flex items-center gap-2">
              <IoLibraryOutline size={16} className="shrink-0" />
              <div className="flex flex-wrap gap-2">
                {page.data.tags?.map((tag) => (
                  <Link key={tag} href={`/tags/${tagToSlug(tag)}`}>
                    <Badge>{tag}</Badge>
                  </Link>
                ))}
              </div>
            </div>

            {links
              .filter((item) => item.condition)
              .map((item, index) => {
                if (Array.isArray(item.href)) {
                  return (
                    <div key={index} className="flex items-center gap-2">
                      {item.icon}
                      <div className="flex flex-col gap-2">
                        {item.href.map((href, subIndex) => (
                          <Link
                            key={`${index}-${subIndex}`}
                            href={href}
                            target="_blank"
                            className="text-primary! font-medium! underline-offset-8! hover:underline"
                          >
                            {item.label}-#{subIndex + 1}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={index} className="flex items-center gap-2">
                    {item.icon}
                    <Link
                      href={item.href || ''}
                      target="_blank"
                      className="text-primary! font-medium! underline-offset-8! hover:underline"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
          </div>

          <Control url={page.url} />
        </div>

        <div className="prose order-1 min-w-0 flex-1 lg:order-2">
          <InlineTOC className="mb-4 lg:hidden" items={toc} />
          <div className="prose">
            <Mdx components={getMDXComponents()} />
          </div>
        </div>

        <div className="sticky top-20 order-3 hidden h-fit shrink-0 flex-col gap-4 pl-4 text-sm lg:flex lg:w-62.5">
          <p className="text-999 text-base font-bold tracking-wider uppercase">
            On this page
          </p>
          <nav className="relative flex flex-col gap-2">
            {toc.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="text-muted-foreground hover:text-primary hover:border-primary border-b-2 border-transparent transition-all duration-200"
                style={{ marginLeft: `${Math.max(0, item.depth - 2) * 16}px` }}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </article>
      <Comments />
    </div>
  );
}

export async function generateMetadata(
  props: PageProps<'/blog/[slug]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description ?? page.data.title,
  });
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
