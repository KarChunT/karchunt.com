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
  'ssh-overview': {
    title: 'SSH Overview',
  },
  installation: {
    title: 'Installation',
  },
  '##': {
    type: 'separator', // or 'doc' if it's a document
    title: 'SSH Keys',
  },
  'play-with-ssh-keys': {
    title: 'Play with SSH Keys',
  },
  '###': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Host & Server',
  },
  'remote-server-connection': {
    title: 'Remote Server Connection',
  },
  'host-configuration': {
    title: 'Host Configuration',
  },
  'server-configuration': {
    title: 'Server Configuration',
  },
  '####': {
    type: 'separator', // or 'doc' if it's a document
    title: 'SSH Tunnels',
  },
  'local-tunneling': {
    title: 'Local Tunneling',
  },
  'remote-tunneling': {
    title: 'Remote Tunneling',
  },
};

export default meta;
