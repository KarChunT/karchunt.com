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
  '#': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Introduction',
  },
  'what-is-data-structures-and-algorithms': {
    title: 'What is Data Structures and Algorithms?',
  },
  ram: {
    title: 'Memory (RAM)',
  },
  '##': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Linear Data Structures',
  },
  'static-array': {
    title: 'Static Array',
  },
  'dynamic-array': {
    title: 'Dynamic Array',
  },
  stack: {
    title: 'Stack',
  },
  'linked-lists': {
    title: 'Linked Lists',
  },
  '###': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Algorithms',
  },
  sorting: {
    title: 'Sorting',
  },
};

export default meta;
