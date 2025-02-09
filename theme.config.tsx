import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/KarChunT/karchunt.com/tree/main',
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    const rootPath = 'https://www.karchunt.com';
    const url = `${rootPath}${asPath}`;
    const ogImage = `${rootPath}/penguin-nobg.png`;
    const title = frontMatter.titleTemplate
      ? `${frontMatter.title} - ${frontMatter.titleTemplate}`
      : frontMatter.title
        ? `${frontMatter.title} - KarChunT`
        : 'KarChunT';

    return (
      <>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/penguin-nobg.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="KarChunT" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={ogImage} />
        <meta name="og:title" content={title} />
        <meta
          name="og:description"
          content={frontMatter.description || "KarChunT's personal website"}
        />
      </>
    );
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  },
  // color: {
  //   hue: {
  //     dark: 143,
  //     light: 143,
  //   },
  //   saturation: {
  //     dark: 100,
  //     light: 100,
  //   },
  // },
  primaryHue: {
    dark: 143,
    light: 143,
  },
  primarySaturation: {
    dark: 100,
    light: 100,
  },
  logo: (
    <>
      <Image src="/penguin-nobg.png" width={24} height={24} alt="Penguin" />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>KarChunT</span>
    </>
  ),
  project: {
    link: 'https://github.com/KarChunT/karchunt.com',
  },
  chat: {
    link: 'https://linkedin.com/in/karchuntan/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        />
      </svg>
    ),
  },
  search: {
    placeholder: 'Search content...',
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  footer: {
    text: (
      <span className="mx-auto text-center">
        Copyright © {new Date().getFullYear()} KarChunT. All rights reserved.
      </span>
    ),
  },
};

export default config;
