import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "KarChunT",
  description:
    "I'm an Infrastructure and DevOps Engineer at Intel. I love to code and design software architecture.",
  appearance: "dark",
  head: [],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    externalLinkIcon: true,
    logo: "/penguin-nobg.webp",
    // editLink: {},
    nav: [{ text: "Home", link: "/" }],
    search: {
      provider: "local",
    },
    sidebar: {},
    outline: {
      level: "deep",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/KarChunT" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/karchuntan/" },
    ],
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} KarChunT. All rights reserved`,
    },
  },
});
