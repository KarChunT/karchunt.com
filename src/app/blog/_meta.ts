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
      sidebar: false,
      layout: 'full',
      breadcrumb: false,
      pagination: false,
    },
  },
  index: {
    display: 'hidden',
  },
};

export default meta;
