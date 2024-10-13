import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

export const NAV_LINKS = [
  { href: '/docs', key: 'docs', label: 'Docs' },
  { href: '/about', key: 'about', label: 'About' },
  { href: '/blog', key: 'blog', label: 'Blog' },
  { href: '/gallery', key: 'gallery', label: 'Gallery' },
];

export const SOCIAL_MEDIAS = [
  {
    href: 'https://github.com/KarChunT',
    label: 'GitHub',
    icon: IconBrandGithub,
  },
  {
    href: 'https://www.linkedin.com/in/karchuntan/',
    label: 'LinkedIn',
    icon: IconBrandLinkedin,
  },
];

export const CORE_VALUES = [
  {
    title: 'Build with Passion',
    content:
      'Passion means everything to me, as part of my passion and motivation, I love to inspire people and my ambition is to develop a new technology that can revolutionize the world.',
    srcImage: '/assets/images/build-with-passion.png',
  },
  {
    title: 'Discover the beauty of coding and architecture design',
    content:
      'Exploring the synergy between coding and architectural design is the beauty of the software system in terms of principles of structure, creativity, and problem-solving.',
    srcImage: '/assets/images/beauty-of-coding.png',
  },
  {
    title: 'Learn, build, and apply',
    content:
      'I learn technical skills from many sources, and then I will document them, but the main thing for me is understanding and knowing how to apply them.',
    srcImage: '/assets/images/learn-apply.png',
  },
];
