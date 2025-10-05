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
  welcome: {
    title: 'Welcome',
  },
  technical: {
    title: 'Technical',
  },
  // '#': {
  //   type: 'separator', // or 'doc' if it's a document
  //   title: 'Technical',
  // },
};

export default meta;
