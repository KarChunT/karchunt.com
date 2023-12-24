import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Tag = ({ name, tag }: { name: string; tag: string }) => {
  return (
    <Badge className="py-1.5">
      <Link href={`/blog?tag=${tag}`}>{name.toLowerCase()}</Link>
    </Badge>
  );
};

export default Tag;
