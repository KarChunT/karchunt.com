interface DocItem {
  title: string;
  href?: string;
  items?: DocItem[];
}

interface DocSection {
  key: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  items: DocItem[];
}

type DocSlug = {
  title: string;
};
