import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {
  GITHUBURL,
  LINKEDINURL,
  APP_NAME,
  APPICON,
  DOCUMENTATION,
} from '@/constants';
import {
  IconBrandLinkedinFilled,
  IconCertificate,
  IconCertificate2,
  IconColorFilter,
  IconTools,
  IconHierarchy3,
  IconImageInPicture,
  IconBriefcase,
} from '@tabler/icons-react';

const allDocItems = DOCUMENTATION.map((doc, index) => ({
  text: doc.title,
  description: doc.description,
  url: doc.link,
  icon: doc.icon,
  menu: {
    className: index % 3 === 0 ? 'lg:col-start-1' : `lg:col-start-${index + 1}`,
  },
}));

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: GITHUBURL,
  themeSwitch: {
    enabled: false,
    mode: 'light-dark-system',
  },
  nav: {
    title: (
      <>
        <Image src={APPICON} width={24} height={24} alt="Penguin-KarChunT" />
        {APP_NAME}
      </>
    ),
  },
  links: [
    {
      text: 'About',
      url: '/about',
      active: 'url',
    },
    {
      type: 'menu',
      text: 'Docs',
      items: allDocItems,
    },
    {
      type: 'menu',
      text: 'Hub',
      items: [
        {
          text: 'Journey',
          description: 'My certification journey in the tech world.',
          url: '/hub/journey',
          icon: <IconCertificate />,
          menu: {
            className: 'lg:col-start-1',
          },
        },
        {
          text: 'Kubestronaut',
          description: 'My Kubestronaut journey.',
          url: '/hub/kubestronaut',
          icon: <IconCertificate2 />,
          menu: {
            className: 'lg:col-start-2',
          },
        },
        {
          text: 'Color Picker',
          description: 'A color picker tool for developers.',
          url: '/hub/color-picker',
          icon: <IconColorFilter />,
          menu: {
            className: 'lg:col-start-3',
          },
        },
        {
          text: 'Good Tools & Websites',
          description: 'A collection of useful tools and websites.',
          url: '/hub/tools',
          icon: <IconTools />,
          menu: {
            className: 'lg:col-start-1',
          },
        },
        {
          text: 'Algorithm Visualizer',
          description:
            'Interactive animations of data structures and algorithms.',
          url: '/hub/algorithm-visualizer',
          icon: <IconHierarchy3 />,
          menu: {
            className: 'lg:col-start-2',
          },
        },
        {
          text: 'Gallery',
          description: 'A collection of images.',
          url: '/hub/gallery',
          icon: <IconImageInPicture />,
          menu: {
            className: 'lg:col-start-3',
          },
        },
        {
          text: 'Projects',
          description: 'A collection of my projects.',
          url: '/hub/projects',
          icon: <IconBriefcase />,
          active: 'nested-url',
          menu: {
            className: 'lg:col-start-1',
          },
        },
      ],
    },
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
    {
      type: 'icon',
      label: 'Visit my Linkedin',
      icon: <IconBrandLinkedinFilled />,
      text: 'Linkedin',
      url: LINKEDINURL,
    },
  ],
};
