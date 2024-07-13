import { Doc, Project, Blog, Tool } from '../types/type';
import {
  IconWriting,
  IconAi,
  IconBrandVite,
  IconBrandNextjs,
  IconBrandDocker,
  IconBrandGithub,
  IconLetterP,
  IconWheel,
} from '@tabler/icons-react';

// find icons from here https://tabler.io/icons
export const TOOL: Tool[] = [
  {
    title: 'draw.io (diagrams.net)',
    href: 'https://app.diagrams.net/',
    description:
      'Free online diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams',
    icon: IconWriting,
  },
  {
    title: 'Perplexity AI',
    href: 'https://www.perplexity.ai/',
    description:
      'Free AI-powered answer engine that provides accurate, trusted, and real-time answers to any question.',
    icon: IconAi,
  },
  {
    title: 'VitePress',
    href: 'https://vitepress.dev/',
    description:
      'VitePress is a Static Site Generator (SSG) designed for building fast, content-centric websites.',
    icon: IconBrandVite,
  },
  {
    title: 'Next.js',
    href: 'https://nextjs.org/',
    description:
      'Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.',
    icon: IconBrandNextjs,
  },
  {
    title: 'Docker',
    href: 'https://www.docker.com/',
    description:
      'Docker is a platform designed to help developers build, share, and run container applications.',
    icon: IconBrandDocker,
  },
  {
    title: 'Kubernetes',
    href: 'https://kubernetes.io/',
    description:
      'Kubernetes, also known as K8s, is an open source system for automating deployment, scaling, and management of containerized applications.',
    icon: IconWheel,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/',
    description:
      'GitHub is a developer platform that allows developers to create, store, manage and share their code.',
    icon: IconBrandGithub,
  },
  {
    title: 'Prettier',
    href: 'https://prettier.io/',
    description:
      'An opinionated code formatter, support many languages, and integrates with most editors.',
    icon: IconLetterP,
  },
];

export const BLOG: Blog[] = [
  {
    title: 'Setup self-hosted GitHub runner',
    href: '/blog/setup-and-install#setup-self-hosted-github-runner',
    category: 'Setup & Installation',
    tags: ['self-hosted', 'github'],
  },
  {
    title: 'Setup k3s on Ubuntu',
    href: '/blog/setup-and-install#setup-k3s-on-ubuntu',
    category: 'Setup & Installation',
    tags: ['kubernetes', 'ubuntu'],
  },
  {
    title: 'Run sudo command without a password',
    href: '/blog/setup-and-install#run-sudo-command-without-a-password',
    category: 'Setup & Installation',
    tags: ['linux'],
  },
  {
    title: 'Install Java with APT on Ubuntu',
    href: '/blog/setup-and-install#install-java-with-apt-on-ubuntu',
    category: 'Setup & Installation',
    tags: ['java', 'ubuntu'],
  },
  {
    title: 'Install Java OpenJDK 17',
    href: '/blog/setup-and-install#install-java-openjdk-17',
    category: 'Setup & Installation',
    tags: ['java', 'ubuntu'],
  },
  {
    title: 'Install Maven (MVN)',
    href: '/blog/setup-and-install#install-maven-mvn',
    category: 'Setup & Installation',
    tags: ['maven'],
  },
  {
    title: 'Install latest Git',
    href: '/blog/setup-and-install#install-latest-git',
    category: 'Setup & Installation',
    tags: ['git'],
  },
  {
    title: 'Install packages using deb file',
    href: '/blog/setup-and-install#install-packages-using-deb-file',
    category: 'Setup & Installation',
    tags: ['deb', 'linux'],
  },
  {
    title: 'Install KubeVirt',
    href: '/blog/setup-and-install#install-kubevirt',
    category: 'Setup & Installation',
    tags: ['kubevirt'],
  },
  {
    title: 'Install Jenkins with Docker Compose',
    href: '/blog/setup-and-install#install-jenkins-with-docker-compose',
    category: 'Setup & Installation',
    tags: ['jenkins', 'docker-compose'],
  },
  {
    title: 'Edit hostname on Ubuntu',
    href: '/blog/edit-and-fix#edit-hostname-on-ubuntu',
    category: 'Edit & Fix',
    tags: ['hostname', 'ubuntu'],
  },
  {
    title:
      'Fix docker-compose ERROR: max > virtual memory areas vm.max_map_count [65530] is too low, increase to > at least [262144]',
    href: '/blog/edit-and-fix#fix-docker-compose-error-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-increase-to-at-least-262144',
    category: 'Edit & Fix',
    tags: ['docker-compose'],
  },
  {
    title: 'Fix Git LFS Pointers issue',
    href: '/blog/edit-and-fix#fix-git-lfs-pointers-issue',
    category: 'Edit & Fix',
    tags: ['git lfs'],
  },
  {
    title: 'No Module named "apt_pkg"',
    href: '/blog/edit-and-fix#no-module-named-apt_pkg',
    category: 'Edit & Fix',
    tags: ['linux'],
  },
  {
    title: 'Share your local server with Ngrok',
    href: '/blog/technology#share-your-local-server-with-ngrok',
    category: 'Technology',
    tags: ['ngrok', 'local'],
  },
];

export const ACKNOWLEDGMENTS = [
  {
    text: 'https://theodorusclarence.com/shorts/husky-commitlint-prettier',
  },
  {
    text: 'https://medium.com/naukri-engineering/elevating-code-and-commit-quality-with-husky-prettier-eslint-lint-staged-and-commitlint-8e9617583a61',
  },
  {
    text: 'https://dev.to/jsdevspace/setup-nextjs-14-project-with-eslint-prettier-tailwind-css-226j',
  },
  {
    text: 'https://medium.com/yavar/setting-up-a-eslint-prettier-husky-and-lint-staged-integration-with-typescript-in-next-js-13-14-68044dfae920',
  },
  { text: 'https://nextra.site/' },
  { text: 'https://github.com/seriouslysean/demo--auto-bump-forked-prs' },
  {
    text: 'https://dev.to/ghacosta/definitive-guide-for-commitizen-commitlint-husky-3of9',
  },
  {
    text: 'https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index',
  },
  { text: 'https://vitepress.dev/' },
  { text: 'https://github.com/jcamp-code/vitepress-blog-theme' },
  { text: 'https://kodekloud.com/' },
];

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
