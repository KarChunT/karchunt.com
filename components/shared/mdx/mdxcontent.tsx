import { useMDXComponent } from "next-contentlayer/hooks";

const MDXContent = ({ data }: { data: any }) => {
  const MDXDataContent = useMDXComponent(data.body.code);
  return <MDXDataContent />;
};

export default MDXContent;
