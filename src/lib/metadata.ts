import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? 'KarChunT',
      description: override.description ?? "KarChunT's personal website",
      url: 'https://karchunt.com',
      images: '/penguin-nobg.png',
      siteName: 'KarChunT',
      ...override.openGraph,
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   creator: '@karchunt',
    //   title: override.title ?? 'KarChunT',
    //   description: override.description ?? "KarChunT's personal website",
    //   images: '/penguin-nobg.png',
    //   ...override.twitter,
    // },
  };
}
