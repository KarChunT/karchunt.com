import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import lastModified from 'fumadocs-mdx/plugins/last-modified';
import { transformerMetaHighlight } from '@shikijs/transformers';
import { z } from 'zod';

export const docs = defineDocs({
  dir: 'src/content/docs',
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'src/content/blog',
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
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [transformerMetaHighlight()],
    },
  },
  plugins: [lastModified()],
});
