import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {
  BookIcon,
  BookTextIcon,
  PersonStandingIcon,
  LinkedinIcon,
} from 'lucide-react';
import {
  APP_NAME,
  APP_ICON,
  GITHUB_URL,
  LINKEDIN_URL,
  DOCUMENTATION,
} from '@/app/constants';
import { getBasePath } from '@/lib/utils';

const basePath = getBasePath();

const logo = (
  <>
    <Image
      src={`${basePath}${APP_ICON}`}
      alt={APP_NAME}
      width={24}
      height={24}
    />
  </>
);

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {logo}
          KarChunT
        </>
      ),
      url: '/',
    },
    links: [
      {
        icon: <PersonStandingIcon />,
        text: 'About',
        url: '/about',
        secondary: false,
      },
      {
        icon: <BookIcon />,
        text: 'Blog',
        url: '/blog',
        secondary: false,
        active: 'nested-url',
      },
      {
        type: 'menu',
        text: 'Docs',
        icon: <BookTextIcon />,
        items: Object.values(DOCUMENTATION).map((doc) => {
          const Icon = doc.icon;
          return {
            text: doc.title,
            description: doc.description,
            url: doc.href,
            icon: <Icon />,
          };
        }),
      },
      {
        icon: <LinkedinIcon />,
        text: 'LinkedIn',
        url: LINKEDIN_URL,
        type: 'icon',
        secondary: true,
        external: true,
      },
    ],
    githubUrl: GITHUB_URL,
    themeSwitch: {
      enabled: false,
    },
  };
}
