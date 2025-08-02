import Link from 'next/link';
import { source } from '@/lib/source';
import { createMetadata } from '@/lib/metadata';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Banner } from 'fumadocs-ui/components/banner';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { Heading } from 'fumadocs-ui/components/heading';
import Comments from '@/components/Comments';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import GenericComponent from '@/components/GenericComponent';

export const revalidate = false;

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const toc = page.data.toc;
  const MDXContent = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{ style: 'clerk' }}
      editOnGithub={{
        owner: 'KarChunT',
        repo: 'karchunt-docs',
        sha: 'main',
        path: `${page.file.path}`,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      {toc.length > 0 && (
        <InlineTOC className="xl:hidden" defaultOpen items={toc} />
      )}

      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            // this allows you to link to other pages with relative file paths
            a: ({ href, ...props }) => {
              const found = source.getPageByHref(href ?? '', {
                dir: page.file.dirname,
              });

              if (!found) return <Link href={href} {...props} />;

              return (
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link
                      href={
                        found.hash
                          ? `${found.page.url}#${found.hash}`
                          : found.page.url
                      }
                      {...props}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="text-sm">
                    <p className="font-medium">{found.page.data.title}</p>
                    <p className="text-fd-muted-foreground">
                      {found.page.data.description}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              );
            },
            // you can add other MDX components here
            Accordion,
            Accordions,
            Card,
            Cards,
            File,
            Files,
            Folder,
            Tabs,
            Tab,
            Step,
            Steps,
            Banner,
            DynamicCodeBlock,
            GithubInfo,
            TypeTable,
            GenericComponent,
            img: (props) => <ImageZoom {...(props as any)} />,
            strong: (props) => <strong className="text-primary" {...props} />,
            h1: (props) => <Heading as="h1" {...props} />,
            h2: (props) => <Heading as="h2" {...props} />,
            h3: (props) => <Heading as="h3" {...props} />,
            h4: (props) => <Heading as="h4" {...props} />,
            h5: (props) => <Heading as="h5" {...props} />,
            h6: (props) => <Heading as="h6" {...props} />,
          }}
        />
      </DocsBody>
      <Comments />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
  });
}
