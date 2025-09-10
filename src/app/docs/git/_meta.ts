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
  'what-is-git': {
    title: 'What is Git?',
  },
  'git-installation': {
    title: 'Git Installation',
  },
  'git-in-depth': {
    title: 'Git in Depth',
  },
  '##': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Getting Started with Git',
  },
  'setup-repository': {
    title: 'Setting Up a Repository',
  },
  'save-changes': {
    title: 'Saving Changes',
  },
  branches: {
    title: 'Branches',
  },
  'remote-repositories': {
    title: 'Remote Repositories',
  },
  rebasing: {
    title: 'Rebasing',
  },
  'reset-and-revert': {
    title: 'Reset and Revert',
  },
  stashing: {
    title: 'Stashing',
  },
  '###': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Advanced',
  },
  reflog: {
    title: 'Reflog',
  },
};

export default meta;
