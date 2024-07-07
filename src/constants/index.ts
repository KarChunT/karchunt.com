import { Doc, Project } from '../types/type';

export const PROJECTS: Project[] = [
  {
    title: 'karchunt.com (latest)',
    description: 'Hey, this is my current personal website.',
    href: 'https://github.com/KarChunT/karchunt.com',
  },
  {
    title: 'karchunt.com (v1)',
    description: 'Hey, this is my v1 personal website.',
    href: 'https://github.com/KarChunT/karchunt.com/tree/v1.1.7',
  },
];

export const PERSONAL_IMAGES = [
  {
    id: 1,
    name: 'Intel KarChunT',
    designation: 'Infrastructure & DevOps Engineer',
    image: '/personal/anotherme.webp',
    width: 300,
    height: 300,
  },
];

export const IMAGES: string[] = [
  '/gallery/penguin-challenge.webp',
  '/gallery/penguin-document.webp',
  '/gallery/penguin-learn.webp',
  '/gallery/penguin1.webp',
  '/gallery/penguin10.webp',
  '/gallery/penguin11.webp',
  '/gallery/penguin12.webp',
  '/gallery/penguin13.webp',
  '/gallery/penguin14.webp',
  '/gallery/penguin2.webp',
  '/gallery/penguin3.webp',
  '/gallery/penguin4.webp',
  '/gallery/penguin5.webp',
  '/gallery/penguin6.webp',
  '/gallery/penguin7.webp',
  '/gallery/penguin8.webp',
  '/gallery/penguin9.webp',
];

export const DOCUMENTATION: Doc[] = [
  {
    title: '🍇 SSH',
    description:
      'SSH stands for Secure Shell (SSH) Protocol that is mainly used to connect to a Linux server remotely.',
    link: '/docs/ssh/ssh-overview',
  },
  {
    title: '🍈 Git',
    description:
      'Git is a distributed version control system that tracks file changes.',
    link: '/docs/git/what-is-git',
  },
  {
    title: '🍉 Docker',
    description:
      'Docker is an open platform for developing, shipping, and running applications.',
    link: '/docs/docker/what-is-docker',
  },
  {
    title: '🍊 12 Factor App',
    description:
      'It is a methodology for building software-as-a-service applications with best practices.',
    link: '/docs/twelve-factor-app/introduction',
  },
  {
    title: '🍍 Kubernetes',
    description:
      'Kubernetes, also known as k8s, is an open source system to deploy, scalwe, and manage containerized applications.',
    link: '/docs/kubernetes/what-is-kubernetes',
  },
  // {
  //   title: '🥑 Design Pattern',
  //   description: 'Solving typical software design problems.',
  //   link: '/docs/design-pattern/introduction',
  // },
];
