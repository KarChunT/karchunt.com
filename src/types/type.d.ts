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

interface Goal {
  title: string;
  status: 'achieved' | 'in-progress' | 'not-started';
  achievedDate?: string;
  link?: string;
}
