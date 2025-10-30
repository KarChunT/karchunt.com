import type { MetaRecord } from 'nextra';
import { DOCUMENTATION } from '@/constants';

const docsItems = Object.entries(DOCUMENTATION)
  .sort(([, a], [, b]) => a.title.localeCompare(b.title))
  .reduce(
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
  '*': {
    display: 'hidden',
  },
  docs: {
    title: 'Docs',
    type: 'menu',
    items: docsItems,
    display: 'normal',
  },
  blog: {
    title: 'Blog',
    type: 'page',
    display: 'normal',
  },
};

export default meta;
