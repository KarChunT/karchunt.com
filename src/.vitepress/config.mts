import { HeadConfig, defineConfig } from "vitepress";
import { sshSideBar } from "./theme/constants/docsConstants";

const title = "KarChunT";
const description =
  "I'm an Infrastructure and DevOps Engineer at Intel. I love to code and design software architecture.";

const baseUrl = process.env.VUE_APP_BASE_URL;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: title,
  titleTemplate: ":title",
  description: description,
  appearance: "dark",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", href: "/penguin-nobg.png" }],
    ["meta", { name: "robots", content: "index, follow" }],
    [
      "meta",
      {
        name: "googlebot",
        content:
          "index, follow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
      },
    ],
  ],
  transformHead({ pageData }) {
    const head: HeadConfig[] = [];

    const relativePath = (
      pageData.relativePath.startsWith("index")
        ? pageData.relativePath.replace("index", "")
        : pageData.relativePath
    ).replace(".md", "");

    const rootPath = `https://www.${baseUrl}`;
    const ogUrl = `${rootPath}/${relativePath}`;
    const ogImage = `${rootPath}/penguin-nobg.png`;

    head.push([
      "meta",
      {
        name: "og:title",
        content:
          pageData.frontmatter.layout === "home"
            ? title
            : pageData.frontmatter.title
            ? pageData.frontmatter.title
            : title,
      },
    ]);
    head.push([
      "meta",
      {
        name: "og:description",
        content: pageData.frontmatter.description
          ? pageData.frontmatter.description
          : description,
      },
    ]);
    head.push(["meta", { name: "og:url", content: ogUrl }]);
    head.push(["meta", { name: "og:image", content: ogImage }]);
    head.push([
      "meta",
      {
        name: "og:type",
        content: relativePath.startsWith("blog/posts") ? "article" : "website",
      },
    ]);

    if (relativePath.startsWith("blog/posts")) {
      let modifiedTime = pageData.frontmatter.date;
      if (pageData.lastUpdated) {
        modifiedTime = new Date(pageData.lastUpdated * 1000).toUTCString();
      }

      head.push([
        "meta",
        {
          name: "article:published_time",
          content: pageData.frontmatter.date,
        },
      ]);

      head.push([
        "meta",
        {
          name: "article:modified_time",
          content: modifiedTime,
        },
      ]);

      head.push(["meta", { name: "article:author", content: "Tan, Kar Chun" }]);

      if (pageData.frontmatter.tags) {
        for (let i = 0; i < pageData.frontmatter.tags.length; i++) {
          head.push([
            "meta",
            { name: "article:tag", content: pageData.frontmatter.tags[i] },
          ]);
        }
      }
    }

    return head;
  },
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    externalLinkIcon: false,
    logo: "/penguin-nobg.webp",
    editLink: {
      pattern: ({ filePath }) => {
        const githubUrl = "https://github.com/KarChunT/karchunt.com";
        return `${githubUrl}/edit/main/src/${filePath}`;
      },
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      {
        text: "Blog",
        items: [
          { text: "Blog Home", link: "/blog" },
          { text: "Tags", link: "/blog/tags" },
          { text: "Archives", link: "/blog/archives" },
        ],
      },
      { text: "Gallery", link: "/gallery" },
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      "/docs/ssh/": sshSideBar,
    },
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
  ignoreDeadLinks: true,
});
