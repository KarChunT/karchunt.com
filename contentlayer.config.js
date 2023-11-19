import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm"; // this is for table
import rehypeSlug from "rehype-slug"; // adding id for each heading
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import GithubSlugger from "github-slugger";

const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: "about/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    avatar: { type: "string" },
    job: { type: "string" },
    company: { type: "string" },
    email: { type: "string" },
    linkedin: { type: "string" },
    github: { type: "string" },
    newsletter: { type: "string" },
  },
  computedFields: {
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    isPublished: {
      type: "boolean",
      default: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("posts/", "")}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(headingsRegex)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level:
                flag?.length === 1
                  ? "one"
                  : flag?.length === 2
                    ? "two"
                    : flag?.length === 3
                      ? "three"
                      : flag?.length === 4
                        ? "four"
                        : flag?.length === 5
                          ? "five"
                          : "six",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );
        return headings;
      },
    },
  },
}));

const codeOptions = {
  theme: "one-dark-pro",
};

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post, About],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ],
  },
});
