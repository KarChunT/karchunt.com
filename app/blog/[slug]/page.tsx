import { format } from "date-fns";
import { slug } from "github-slugger";
import { allPosts } from "@/.contentlayer/generated";
import Tag from "@/components/shared/blog/tag";
import MDXContent from "@/components/shared/mdx/mdxcontent";

const page = ({ params }: { params: any }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath.replace("posts/", "") === params.slug
  );

  return (
    <article className="py-4 sm:py-10">
      <div className="relative w-full">
        <div className="flex flex-col gap-4 text-center">
          <div className="flex-center gap-1 text-gray-500">
            <time>{format(new Date(post.updatedAt), "MMMM dd, yyyy")}</time>
            <span>-</span>
            <span>{post?.readingTime.text.replace("read", "")}</span>
          </div>

          <h1 className="text-[40px] font-bold capitalize leading-tight md:text-5xl">
            {post?.title}
          </h1>

          <div className="flex-center flex-wrap gap-3">
            {post?.tags?.map((tag, index) => (
              <Tag key={index} name={tag} tag={slug(tag)} />
            ))}
          </div>
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
          {/* <h2 id="introduction">
            Introduction
            <Link href="#introduction">
              <span className="text-[0.8rem]">#</span>
            </Link>
          </h2> */}
          {/* {post?.description} */}

          {/* toc */}
          {/* <ul>
            {post?.toc.map((heading) => (
              <li key={`#${heading.slug}`}>
                <a
                  href={`#${heading.slug}`}
                  data-level={heading.level}
                  className="no-underline data-[level=five]:pl-12 data-[level=four]:pl-8 data-[level=one]:pl-0 data-[level=six]:pl-16 data-[level=three]:pl-4 data-[level=two]:pl-0"
                >
                  <span className="hover:underline">{heading.text}</span>
                </a>
              </li>
            ))}
          </ul> */}

          <MDXContent data={post} />
        </div>
      </div>
    </article>
  );
};

export default page;
