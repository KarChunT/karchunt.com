interface DocItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface GoodToolsProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  tags: string[];
}

interface GalleryProps {
  src: string;
  category: string;
}
