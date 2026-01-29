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
  'what-is-linux': {
    title: 'What is Linux?',
  },
  'linux-shell': {
    title: 'Linux Shell',
  },
  'basic-commands': {
    title: 'Basic Commands',
  },
  'help-command': {
    title: 'Help Command',
  },
  'bash-shell': {
    title: 'Bash Shell',
  },
  'env-variables': {
    title: 'Environment Variables',
  },
};

export default meta;
