import Image from 'next/image';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  docsRepositoryBase:
    'https://github.com/KarChunT/karchunt.com/tree/v2(brand-new-design)',
  logo: (
    <>
      <Image src="/penguin-nobg.png" width={24} height={24} alt="Penguin" />
      <span className="ml-[.4em] font-extrabold">KarChunT</span>
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
  footer: {
    text: (
      <span className="mx-auto">
        Copyright © {new Date().getFullYear()} KarChunT. All rights reserved
      </span>
    ),
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  },
  primaryHue: {
    dark: 143,
    light: 143,
  },
  primarySaturation: {
    dark: 100,
    light: 100,
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    const titleTemplate = frontMatter.titleTemplate
      ? `%s - ${frontMatter.titleTemplate}`
      : 'KarChunT';
    return {
      titleTemplate,
    };
  },
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath } = useRouter();
    const rootPath = 'https://www.karchunt.com';
    const url = `${rootPath}${asPath}`;
    const ogImage = `${rootPath}/penguin-nobg.png`;

    return (
      <>
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
      </>
    );
  },
};

export default config;
