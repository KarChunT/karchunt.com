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
  'what-is-docker': {
    title: 'What is Docker?',
  },
  'docker-architecture': {
    title: 'Docker Architecture',
  },
  'docker-installation': {
    title: 'Docker Installation',
  },
  'daemon-configuration': {
    title: 'Daemon Configuration',
  },
  '##': {
    type: 'separator',
    title: 'Core Topics',
  },
  container: {
    title: 'Container',
  },
  image: {
    title: 'Image',
  },
  volume: {
    title: 'Volume',
  },
  network: {
    title: 'Network',
  },
  'resource-limits': {
    title: 'Resource Limits',
  },
  'docker-compose': {
    title: 'Docker Compose',
  },
  '###': {
    type: 'separator',
    title: 'Additional',
  },
  'useful-commands': {
    title: 'Useful Commands',
  },
  'best-practices-for-creating-docker-image': {
    title: 'Best Practices for Creating Docker Image',
  },
  future: {
    title: 'Future Enhancements',
  },
};

export default meta;
