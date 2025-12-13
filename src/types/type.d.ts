interface GoodToolsProps {
  title: string;
  description: string;
  imageSrc?: string;
  href: string;
  tags: string[];
}

interface GalleryProps {
  src: string;
  category: string;
}

// JSON schema for algorithm visualizer
interface AlgorithmVisualizerSchema {
  [category: string]: {
    [algorithm: string]: {
      title: string;
      description: string;
      VisualizerComponent: React.ComponentType<any>;
    };
  };
}

interface GlossaryItem {
  term: string;
  definition: string;
  category: string;
}

interface QuizItem {
  title: string;
  description: string;
  icon: string;
  slug?: string;
}
