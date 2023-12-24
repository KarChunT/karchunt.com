"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const MDXContent = ({ data }: { data: any }) => {
  const MDXDataContent = useMDXComponent(data.body.code);
  return <MDXDataContent components={mdxComponents} />;
};

export default MDXContent;
