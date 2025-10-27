import Icon from '@mdi/react';
import { mdiSsh } from '@mdi/js';
import { TbNumber12Small, TbBrandDocker, TbBinaryTree } from 'react-icons/tb';
import { FaGitAlt, FaPython } from 'react-icons/fa';
import { BiCube } from 'react-icons/bi';
import { SiKubernetes } from 'react-icons/si';
import { FaPeopleArrows } from 'react-icons/fa6';

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

export const AUDIO_PATH: string =
  '/audio/lofi-study-calm-peaceful-chill-hop.mp3';

export const GOOD_TOOLS_AND_WEBSITES_JSON_PATH =
  '/data/good-tools-and-websites.json';
export const SOFTWARE_GLOSSARY_JSON_PATH = '/data/software-glossary.json';
export const CERTIFICATES_JSON_PATH = '/data/certificates.json';

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
  'software-glossary': {
    title: 'Software Glossary',
    href: '/hub/software-glossary',
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

export const ALLOWED_TAGS = [
  'Chinese',
  'Chrome',
  'Customization',
  'DevOps',
  'Docker',
  'Docker Compose',
  'Documentation',
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
  'PDF',
  'Schema',
  'Sphinx',
  'self-hosted',
  'Troubleshooting',
  'TypeScript',
  'Tutorial',
  'Ubuntu',
  'venv',
  'Windows',
  'Youtube',
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
  'Data Structures & Algorithms': {
    title: 'Data Structures & Algorithms',
    href: '/docs/data-structures-and-algorithms/what-is-data-structures-and-algorithms',
    description:
      'Data structures are used to organize, store, and manipulate data in memory, while algorithms are used to solve specific problems.',
    icon: TbBinaryTree,
  },
  interview: {
    title: 'Interview',
    href: '/docs/interview/welcome',
    description:
      'A collection of commonly asked interview questions and answers in the software industry.',
    icon: FaPeopleArrows,
  },
};
