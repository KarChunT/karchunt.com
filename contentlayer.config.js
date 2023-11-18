import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm"; // this is for table
import rehypeSlug from "rehype-slug"; // adding id for each heading
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
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
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

const codeOptions = {
  theme: "one-dark-pro",
};

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ],
  },
});
