import type { MetadataRoute } from 'next';
import { source, blog } from '@/lib/source';

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string =>
    new URL(path, 'https://karchunt.com').toString();
  const items = await Promise.all([
    ...source.getPages().map(async (page) => {
      return {
        url: url(page.url),
        changeFrequency: 'monthly',
        priority: 0.5,
      } as MetadataRoute.Sitemap[number];
    }),
    ...blog.getPages().map(async (page) => {
      return {
        url: url(page.url),
        changeFrequency: 'monthly',
        lastModified: new Date(page.data.date).toISOString(),
        priority: 0.5,
      } as MetadataRoute.Sitemap[number];
    }),
  ]);

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/about'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url('/docs'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...items.filter((v) => v !== undefined),
  ];
}
