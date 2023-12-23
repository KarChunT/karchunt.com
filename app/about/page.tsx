import Image from "next/image";
import { allAbouts } from "@/.contentlayer/generated";
import MDXContent from "@/components/shared/mdx/mdxcontent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

const page = () => {
  const aboutme = allAbouts.find(
    (aboutme) => aboutme._raw.flattenedPath.replace("about/", "") === "aboutme"
  );

  return (
    <div className="py-4 sm:py-10 ">
      <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex flex-1 flex-col pr-0 md:pr-4">
          <h1 className="text-[40px] font-bold leading-tight md:text-5xl">
            Meee 😎
          </h1>
          <div
            className="prose prose-lg mt-6 
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
            <MDXContent data={aboutme} />
          </div>
        </div>

        <div className="relative flex">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/anotherme.png`}
            alt="karchunt"
            width={300}
            height={400}
            className="max-h-[400px] max-w-[300px] rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default page;
