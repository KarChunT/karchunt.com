import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {
  GITHUBURL,
  LINKEDINURL,
  APPNAME,
  APPICON,
  DOCUMENTATION,
} from '@/constants';
import {
  IconBrandLinkedinFilled,
  IconCertificate,
  IconColorFilter,
} from '@tabler/icons-react';

const allDocItems = DOCUMENTATION.map((doc, index) => ({
  text: doc.title,
  description: doc.description,
  url: doc.link,
  icon: doc.icon,
  menu: { className: `lg:col-start-${index + 1}` },
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
        {APPNAME}
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
      url: '/docs',
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
          text: 'Color Picker',
          description: 'A color picker tool for developers.',
          url: '/hub/color-picker',
          icon: <IconColorFilter />,
          menu: {
            className: 'lg:col-start-2',
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
      text: 'Gallery',
      url: '/gallery',
      active: 'url',
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
