import type { MetaRecord } from 'nextra';
import { DOCUMENTATION, HUB_ITEMS } from '@/constants';

const docsItems = Object.entries(DOCUMENTATION).reduce(
  (acc, [key, item]) => {
    acc[key] = {
      title: item.title,
      href: item.href,
    };
    return acc;
  },
  {} as Record<string, { title: string; href: string }>,
);

const hubItems = Object.entries(HUB_ITEMS).reduce(
  (acc, [key, item]) => {
    acc[key] = {
      title: item.title,
      href: item.href,
    };
    return acc;
  },
  {} as Record<string, { title: string; href: string }>,
);

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  index: {
    type: 'page',
    display: 'hidden',
  },
  about: {
    title: 'About',
    type: 'page',
  },
  docs: {
    title: 'Docs',
    type: 'menu',
    items: docsItems,
  },
  blogger: {
    title: 'Blog',
    type: 'page',
    href: '/blog',
  },
  blog: {
    title: 'Blog1',
    type: 'page',
    display: 'normal',
  },
  hub: {
    title: 'Hub',
    type: 'menu',
    items: hubItems,
  },
  tags: {
    display: 'hidden',
  },
};

export default meta;
