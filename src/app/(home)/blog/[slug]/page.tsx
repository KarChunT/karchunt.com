import type { Metadata } from 'next';
import { blog } from '@/lib/source';
import { createMetadata } from '@/lib/metadata';
import { notFound } from 'next/navigation';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Banner } from 'fumadocs-ui/components/banner';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Control } from '@/components/page/blog/control';
import Comments from '@/components/Comments';

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const { body: Mdx, toc } = page.data;

  return (
    <div className="container py-4 lg:py-8">
      <div
        className="rounded-xl border px-8 py-12"
        style={{
          backgroundColor: 'black',
          backgroundImage: [
            'linear-gradient(140deg, hsla(220,94%,54%,0.3), transparent 50%)',
            'linear-gradient(to left top, hsla(160,90%,50%,0.8), transparent 50%)',
            'radial-gradient(circle at 100% 100%, hsla(280,100%,82%,1), hsla(280,40%,40%,1) 17%, hsla(280,40%,40%,0.5) 20%, transparent)',
          ].join(', '),
          backgroundBlendMode: 'difference, difference, normal',
        }}
      >
        <h1 className="mb-2 text-3xl font-bold text-white">
          {page.data.title}
        </h1>
        <p className="mb-4 text-white/80">{page.data.description}</p>
      </div>

      <article className="flex flex-col px-0 py-8 lg:flex-row">
        <div className="prose min-w-0 flex-1 p-4">
          <InlineTOC items={toc} />
          <Mdx
            components={{
              ...defaultMdxComponents,
              Accordion,
              Accordions,
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
              img: (props) => <ImageZoom {...(props as any)} />,
              strong: (props) => <strong className="text-primary" {...props} />,
            }}
          />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
          <div>
            <p className="text-fd-muted-foreground mb-1">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="text-fd-muted-foreground mb-1 text-sm">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          <Control url={page.url} />
        </div>
      </article>
      <Comments />
    </div>
  );
};

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
  });
}

export default Page;
