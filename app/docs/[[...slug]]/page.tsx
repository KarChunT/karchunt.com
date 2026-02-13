import { source, getPageImage } from '@/lib/source';
// import {
//   DocsBody,
//   DocsDescription,
//   DocsPage,
//   DocsTitle,
// } from 'fumadocs-ui/layouts/notebook/page';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  EditOnGitHub,
  PageLastUpdate,
} from 'fumadocs-ui/layouts/docs/page';
// import {
//   DocsBody,
//   DocsDescription,
//   DocsPage,
//   DocsTitle,
//   EditOnGitHub,
//   PageLastUpdate,
// } from 'fumadocs-ui/layouts/flux/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { LLMCopyButton, ViewOptions } from '@/components/page-actions';
import { GITHUB_URL } from '@/app/constants';
import { DocSelect } from '@/components/DocSelect';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
      }}
    >
      {page.url !== '/docs' && (
        <DocSelect currentHref={page.url} directShow={false} />
      )}
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <div className="flex flex-row items-center gap-2 border-b pt-2 pb-6">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`${GITHUB_URL}/blob/main/src/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />

        {page.data.lastModified && (
          <PageLastUpdate
            className="border-t pt-6"
            date={new Date(page.data.lastModified)}
          />
        )}
        {/* <EditOnGitHub
          href={`${GITHUB_URL}/blob/main/src/content/docs/${page.path}`}
        /> */}
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    // openGraph: {
    //   images: getPageImage(page).url,
    // },
  };
}
