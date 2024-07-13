import { Icon } from '@tabler/icons-react';

export type Doc = {
  title: string;
  description: string;
  link: string;
};

export type Project = {
  title: string;
  description: string;
  href: string;
};

export type Blog = {
  title: string;
  href: string;
  category: string;
  tags: string[];
};

export type Tool = {
  title: string;
  href: string;
  description: string;
  icon: Icon;
};
