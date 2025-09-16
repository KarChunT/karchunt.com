import Icon from '@mdi/react';
import { mdiSsh } from '@mdi/js';
import { TbNumber12Small, TbBrandDocker } from 'react-icons/tb';
import { FaGitAlt, FaPython } from 'react-icons/fa';
import { BiCube } from 'react-icons/bi';
import { SiKubernetes } from 'react-icons/si';

export const APP_NAME: string = 'KarChunT';
export const APP_ICON: string = '/penguin-nobg.webp';
export const JOB_POSITION: string = 'Infrastructure and DevOps Engineer';
export const JOB_COMPANY: string = 'Intel';
export const GITHUB_URL: string = 'https://github.com/KarChunT/karchunt.com';
export const DOCS_REPO_BASE: string = `${GITHUB_URL}/tree/main`;
export const LINKEDIN_URL: string = 'https://www.linkedin.com/in/karchuntan';
export const CREDLY_URL: string = 'https://www.credly.com/users/kar-chun-tan';
export const PERSONAL_IMAGE: string = '/personal/karchunt.webp';
export const NAME: string = 'Kar Chun Tan';

export const CHANNELS = {
  github: {
    title: 'GitHub',
    href: GITHUB_URL,
  },
  linkedin: {
    title: 'Linkedin',
    href: LINKEDIN_URL,
  },
  newsletter: {
    title: 'Newsletter',
    href: 'https://karchunt.substack.com/',
  },
  email: {
    title: 'karchuntan.1999@gmail.com',
    href: 'mailto:karchuntan.1999@gmail.com',
  },
};

export const PERSONAL = [
  {
    quote:
      'Passion is the key to success. Passion means everything to me, as part of my passion and motivation, I love to inspire people and my ambition is to develop a new technology that can revolutionize the world.',
    name: 'Tan Kar Chun',
    designation: 'Infrastructure & DevOps Engineer',
    src: '/personal/anotherme.webp',
  },
];

export const TOP_TAGLINE = [
  { text: 'Welcome', delay: 0 },
  { text: 'to', delay: 200 },
  { text: <b>{APP_NAME}</b>, delay: 400 },
  { text: '—', delay: 600 },
  { text: 'Public', delay: 800 },
  { text: 'Engineering', delay: 1000 },
  { text: 'digital', delay: 1200 },
  { text: 'notebook', delay: 1400 },
];

export const MAIN_HEADLINE = [
  { text: 'Blending', delay: 1600 },
  { text: 'and', delay: 1750 },
  { text: 'amplifying', delay: 1900 },
  { text: 'each', delay: 2050 },
  { text: "skill's", delay: 2200 },
  { text: 'strength', delay: 2350 },
];

export const HERO_SUB_HEADLINE = [
  { text: 'Reinforces', delay: 2600 },
  { text: 'continuous', delay: 2750 },
  { text: 'growth', delay: 2900 },
  { text: 'and', delay: 3050 },
  { text: 'adaptation', delay: 3200 },
];

export const HERO_BOTTOM_TAGLINE = [
  { text: 'Curated', delay: 3500 },
  { text: 'hub', delay: 3650 },
  { text: 'for', delay: 3800 },
  { text: 'documentating', delay: 3950 },
  { text: '—', delay: 4050 },
  { text: 'my', delay: 4100 },
  { text: 'journeys', delay: 4250 },
];

export const HUB_ITEMS = {
  journey: {
    title: 'Journey',
    href: '/hub/journey',
  },
  kubestronaut: {
    title: 'Kubestronaut',
    href: '/hub/kubestronaut',
  },
  'color-picker': {
    title: 'Color Picker',
    href: '/hub/color-picker',
  },
  gallery: {
    title: 'Gallery',
    href: '/hub/gallery',
  },
  projects: {
    title: 'Projects',
    href: '/hub/projects',
  },
  tools: {
    title: 'Tools',
    href: '/hub/tools',
  },
  'md-playground': {
    title: 'MarkDown Playground',
    href: '/hub/md-playground',
  },
  'algorithm-visualizer': {
    title: 'Algorithm Visualizer',
    href: '/hub/algorithm-visualizer',
  },
};

export const KUBESTRONAUT = {
  certificates: [
    '/certificates/kcna.png',
    '/certificates/kcsa.png',
    '/certificates/cka.png',
    '/certificates/ckad.png',
    '/certificates/cks.png',
  ],
  kubestronautCert: '/certificates/kubestronaut.png',
  linkedinPost:
    'https://www.linkedin.com/posts/karchuntan_im-happy-to-share-that-ive-obtained-a-new-activity-7305101498244288512-Osxo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHh4I0BsleIJAHeRMGtjJ7CEb5NduAUtYg',
  cncfImage: '/kubestronaut/cncf-kubestronaut.png',
};

export const CERTIFICATES = [
  {
    year: '2025',
    certificates: [
      {
        name: 'Certified Kubernetes Administrator (CKA)',
        src: '/certificates/cka.png',
        link: 'https://www.credly.com/badges/8fff7b8d-3415-4263-b4fe-4f96ff52484e',
        certified: true,
      },
      {
        name: 'Certified Kubernetes Security Specialist (CKS)',
        src: '/certificates/cks.png',
        link: 'https://www.credly.com/badges/d044d10b-35b0-4103-8c39-cbc956320578',
        certified: true,
      },
      {
        name: 'Kubernetes and Cloud Native Associate (KCNA)',
        src: '/certificates/kcna.png',
        link: 'https://www.credly.com/badges/66e3e661-2a7f-44ba-b137-a4ecab838370',
        certified: true,
      },
      {
        name: 'Kubernetes and Cloud Native Security Associate (KCSA)',
        src: '/certificates/kcsa.png',
        link: 'https://www.credly.com/badges/c97c8086-4abc-4450-84ca-1f33d8cc5824',
        certified: true,
      },
      {
        name: 'Kubestronaut',
        src: '/certificates/kubestronaut.png',
        link: 'https://www.credly.com/badges/e22d7205-9c6f-40d5-b62f-d94a2e5a805a',
        certified: true,
      },
    ],
  },
  {
    year: '2024',
    certificates: [
      {
        name: 'LFD121: Developing Secure Software',
        src: '/certificates/lfd121.png',
        link: 'https://www.credly.com/badges/cad91d1d-0327-46d8-aa99-21ccaf91c589',
        certified: true,
      },
    ],
  },
  {
    year: '2023',
    certificates: [
      {
        name: 'Professional Scrum Master™ I (PSM I)',
        src: '/certificates/psm1.png',
        link: 'https://www.credly.com/badges/a9a3bcd4-bfec-44bf-be2f-fb91579c0ee6',
        certified: true,
      },
      {
        name: 'CKAD: Certified Kubernetes Application Developer',
        src: '/certificates/ckad.png',
        link: 'https://www.credly.com/badges/0cf9e91e-2736-46cb-a987-f558e099b30e',
        certified: true,
      },
    ],
  },
  {
    year: '2022',
    certificates: [
      {
        name: 'Certified Jenkins Engineer 2022',
        src: '/certificates/cje.png',
        link: 'https://certificates.cloudbees.com/dc763bc8-1f25-4335-9bfd-f8f13ae03cf4#acc.jet6FUmf',
        certified: true,
      },
      {
        name: '[PCAP-31-03] PCAP™ – Certified Associate Python Programmer',
        src: '/certificates/pcap.png',
        link: 'https://www.credly.com/badges/c2d73e1d-d0b4-4e27-a4fa-2a805f202fbc',
        certified: true,
      },
      {
        name: '[PCEP-30-01] PCEP – Certified Entry-Level Python Programmer',
        src: '/certificates/pcep.png',
        link: 'https://www.credly.com/badges/3bac6f7f-53dd-40d8-a195-61284a31d8fd',
        certified: true,
      },
    ],
  },
];

export const ALLOWED_TAGS = [
  'Chinese',
  'Chrome',
  'Customization',
  'DevOps',
  'Docker',
  'Docker Compose',
  'Git',
  'GitHub',
  'GitHub Actions',
  'Installation',
  'Java',
  'Jenkins',
  'JSON',
  'Kerberos',
  'Kubernetes',
  'kinit',
  'krb5-config',
  'kubevirt',
  'Language Support',
  'Linux',
  'Manim',
  'Maven',
  'Multipass',
  'Nektos Act',
  'Ngrok',
  'Nginx',
  'NodeJS',
  'NPM',
  'PowerShell',
  'Python',
  'Schema',
  'self-hosted',
  'Troubleshooting',
  'TypeScript',
  'Ubuntu',
  'venv',
  'Windows',
];

export const GOOD_TOOLS_AND_WEBSITES: GoodToolsProps[] = [
  {
    title: 'Magic UI',
    description:
      'UI library for Design Engineers. 150+ free and open-source animated components and effects built with React, Typescript, Tailwind CSS, and Motion.',
    imageSrc: '/good-tools-and-websites/magicui.ico',
    href: 'https://magicui.design/',
    tags: ['UI'],
  },
  {
    title: 'Aceternity UI',
    description:
      'Beautiful Tailwind CSS and Framer Motion Components, built with Next.js and TypeScript.',
    imageSrc: '/good-tools-and-websites/aceternity.ico',
    href: 'https://ui.aceternity.com/',
    tags: ['UI'],
  },
  {
    title: 'Cult UI',
    description:
      'Shadcn templates & components that you can copy and paste into react apps. Customizable. Open Source. Typed.',
    imageSrc: '/good-tools-and-websites/cultui.ico',
    href: 'https://www.cult-ui.com/',
    tags: ['UI'],
  },
  {
    title: 'ui-layouts',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    imageSrc: '/good-tools-and-websites/ui-layouts.ico',
    href: 'https://www.ui-layouts.com/',
    tags: ['UI'],
  },
  {
    title: 'Shadcn Marketing Blocks',
    description:
      'Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.',
    imageSrc: '/good-tools-and-websites/Shadcn Marketing Blocks.ico',
    href: 'https://nsui.irung.me',
    tags: ['UI'],
  },
  {
    title: 'Supabase UI Library',
    description: 'Provides a library of components for your project.',
    imageSrc: '/good-tools-and-websites/Supabase UI Library.ico',
    href: 'https://supabase.com/ui',
    tags: ['UI'],
  },
  {
    title: 'Shadcnblocks shadcn/ui blocks & components',
    description:
      'Hundreds of new shadcn/ui blocks and Shadcn components. A premium UI library built with Shadcn UI, React & Tailwind.',
    imageSrc: '/good-tools-and-websites/shadcnblocks.ico',
    href: 'https://www.shadcnblocks.com/',
    tags: ['UI'],
  },
  {
    title: 'Shadcn UI Blocks',
    description:
      'Discover more than 330 fully responsive UI blocks and 120+ versatile components that effortlessly integrate into your Shadcn UI projects.',
    imageSrc: '/good-tools-and-websites/shadcn-ui-blocks.ico',
    href: 'https://shadcn-ui-blocks.vercel.app/',
    tags: ['UI'],
  },
];

export const DOCUMENTATION = {
  '12 Factor App': {
    title: '12 Factor App',
    href: '/docs/12-factor-app',
    description:
      'It is a methodology for building software-as-a-service applications with best practices.',
    icon: TbNumber12Small,
  },
  Docker: {
    title: 'Docker',
    href: '/docs/docker/what-is-docker',
    description:
      'Docker is an open platform for developing, shipping, and running applications.',
    icon: TbBrandDocker,
  },
  SSH: {
    title: 'SSH',
    href: '/docs/ssh/ssh-overview',
    description:
      'SSH stands for Secure Shell (SSH) Protocol that is mainly used to connect to a Linux server remotely.',
    icon: () => (
      <Icon
        className="rounded-md border border-[#2e2c23] p-[6px]"
        path={mdiSsh}
        size={1.5}
      />
    ),
  },
  Git: {
    title: 'Git',
    href: '/docs/git/what-is-git',
    description:
      'Git is a distributed version control system that tracks file changes.',
    icon: FaGitAlt,
  },
  'Python OOP': {
    title: 'Python OOP',
    href: '/docs/python-oop/concepts-of-oop',
    description:
      'Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure software programs.',
    icon: FaPython,
  },
  Taskfile: {
    title: 'Taskfile',
    href: '/docs/taskfile/what-is-taskfile',
    description:
      'Taskfile is a task runner / build tool that simplifies the automation of routine development tasks.',
    icon: BiCube,
  },
  Kubernetes: {
    title: 'Kubernetes',
    href: '/docs/kubernetes/what-is-kubernetes',
    description:
      'Kubernetes, also known as k8s, is an open source system for automating deployment, scaling, and management of containerized applications.',
    icon: SiKubernetes,
  },
};

//   title: 'Data Structures and Algorithms',
//   description:
//     'Data structures are used to organize, store, and manipulate data in memory, while algorithms are used to solve specific problems.',
//   title: 'Design Pattern',
//   description: 'Solving typical software design problems.',
