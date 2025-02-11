interface HierarchyItem {
  name: string;
  link?: string;
  hierarchy?: HierarchyItem[];
}

interface DocItem {
  icon: string;
  title: string;
  description: string;
  link: string;
  hierarchy: HierarchyItem[];
}

interface Book {
  title: string;
  author: string;
  url: string;
  genre: string;
  description: string;
  coverColor: string;
  coverUrl: string;
}
