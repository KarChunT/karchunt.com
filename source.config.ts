import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import { remarkMermaid } from '@theguild/remark-mermaid';
import {
  remarkHeading,
  remarkAdmonition,
  remarkImage,
  rehypeToc,
} from 'fumadocs-core/mdx-plugins';
import rehypeKatex from 'rehype-katex';
import { remarkInstall, remarkDocGen, fileGenerator } from 'fumadocs-docgen';
import remarkMath from 'remark-math';
import { z } from 'zod';

export const docs = defineDocs({
  dir: 'content/docs',
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  // async: true,
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()).optional(),
  }),
});

export const projects = defineCollections({
  type: 'doc',
  dir: 'content/projects',
  schema: frontmatterSchema.extend({
    tags: z.array(z.string()),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    rehypeCodeOptions: {
      lazy: true,
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
    remarkPlugins: [
      remarkMermaid,
      remarkMath,
      remarkHeading,
      remarkAdmonition,
      remarkImage,
      [remarkDocGen, { generators: [fileGenerator()] }],
      [remarkInstall, { persist: { id: 'package-manager' } }],
    ],
    rehypePlugins: (v) => [rehypeToc, rehypeKatex, ...v],
  },
});
