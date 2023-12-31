import { format } from "date-fns";
import { slug } from "github-slugger";
import { allPosts } from "@/.contentlayer/generated";
import Tag from "@/components/shared/blog/tag";
import MDXContent from "@/components/shared/mdx/mdxcontent";
import { siteMetaData } from "@/utils/siteMetaData";
import { notFound } from "next/navigation";
import Comments from "@/components/shared/blog/comments";
import { generateRSSFeed } from "@/utils";

export async function generateStaticParams() {
  generateRSSFeed(allPosts);
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace("posts/", ""),
  }));
}

export async function generateMetadata({ params }: { params: any }) {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath.replace("posts/", "") === params.slug
  );

  if (!post) {
    return;
  }

  const publishedAt = new Date(post.publishedAt).toISOString();
  const updatedAt = new Date(post.updatedAt).toISOString();

  const images = [siteMetaData.socialBanner];
  const ogImages = images.map((img) => {
    return { url: img.includes("http") ? img : siteMetaData.siteUrl + img };
  });

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: siteMetaData.siteUrl + post.url,
      siteName: siteMetaData.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      images: ogImages,
      authors: [siteMetaData.author],
    },
  };
}

const page = ({ params }: { params: any }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath.replace("posts/", "") === params.slug
  );

  if (!post) {
    return notFound();
  }

  const images = [siteMetaData.socialBanner];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.description,
    image: images,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: siteMetaData.author,
        url: siteMetaData.linkedin,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="py-4 sm:py-10">
        <div className="relative w-full">
          <div className="flex flex-col gap-4 text-center">
            <div className="flex-center gap-1 text-gray-500">
              <time>
                Updated on {format(new Date(post.updatedAt), "MMMM dd, yyyy")}
              </time>
              <span>-</span>
              <span>{post?.readingTime.text.replace("read", "")}</span>
            </div>

            <h1 className="text-[40px] font-bold leading-tight md:text-5xl">
              {post?.title}
            </h1>

            <div className="flex-center flex-wrap gap-3">
              {post?.tags?.map((tag, index) => (
                <Tag key={index} name={tag} tag={slug(tag)} />
              ))}
            </div>
            <p>{post?.description}</p>
          </div>
        </div>

        <div className="mt-8">
          <div
            className="prose prose-lg 
              max-w-max dark:prose-invert 
              prose-blockquote:rounded-r-lg 
              prose-blockquote:border-primary
              prose-blockquote:bg-primary/30
              prose-blockquote:p-2
              prose-blockquote:px-6 
              prose-code:rounded-md
              prose-code:bg-[#282c34]
              prose-code:p-[0.2em]
              prose-code:text-white
              prose-code:before:content-['']
              prose-code:after:content-['']
              prose-li:marker:text-primary"
          >
            <MDXContent data={post} />

            <h2 className="pb-4">Comments</h2>
          </div>
        </div>
        <Comments />
      </article>
    </>
  );
};

export default page;
