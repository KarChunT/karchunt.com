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

interface ProjectProps {
  title: string;
  description: string;
  href: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
}
