import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import lastModified from 'fumadocs-mdx/plugins/last-modified';
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from '@shikijs/transformers';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { z } from 'zod';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
      extractLinkReferences: true,
    },
  },
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    date: z.date(),
    lastUpdated: z.date().optional(),
    author: z.string(),
    tags: z.array(z.string()),
    documentation: z.string().nullable().optional(),
    repoUrl: z.string().nullable().optional(),
    demoUrl: z.string().nullable().optional(),
    youtubeUrl: z.string().nullable().optional(),
    references: z.array(z.string()).nullable().optional(),
  }),
  async: true,
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid, remarkMath],
    rehypePlugins: (v) => [rehypeKatex, ...v],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
      ],
    },
  },
  plugins: [lastModified()],
});
