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
