import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Tag = ({ name, tag }: { name: string; tag: string }) => {
  return (
    <Badge className="py-1.5">
      <Link href={`/tags/${tag}`}>{name.replace("-", " ").toLowerCase()}</Link>
    </Badge>
  );
};

export default Tag;
