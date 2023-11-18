import Link from "next/link";

const Tag = ({ tag }) => {
  return (
    <Link
      href={`tags/${tag}`}
      className="relative z-10 rounded-full bg-primary px-3 py-1.5 font-medium text-primary-foreground hover:bg-primary/90"
    >
      {tag}
    </Link>
  );
};

export default Tag;
