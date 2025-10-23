import type { MetaRecord } from 'nextra';

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
    theme: {
      sidebar: true,
      layout: 'default',
    },
  },
  'singly-linked-lists': {
    title: 'Singly Linked Lists',
  },
  'doubly-linked-lists': {
    title: 'Doubly Linked Lists',
  },
};

export default meta;
