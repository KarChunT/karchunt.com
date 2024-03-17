export interface DateContent {
  year: string;
  time: number;
  string: string;
}

export interface RoadmapContent {
  title: string;
  description: string;
  date: DateContent;
  link: string;
  isComplete: string;
}
