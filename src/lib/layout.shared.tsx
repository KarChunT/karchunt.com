import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, PersonStandingIcon, LinkedinIcon } from 'lucide-react';
import {
  APP_NAME,
  APP_ICON,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/src/app/constants';
import { getBasePath } from '@/src/lib/utils';

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
