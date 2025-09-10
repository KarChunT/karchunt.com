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
  'what-is-taskfile': {
    title: 'What is Taskfile?',
  },
  installation: {
    title: 'Installation',
  },
  basic: {
    title: 'Basic',
  },
  '##': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Core Topics',
  },
  'running-taskfile': {
    title: 'Running Taskfile',
  },
  variables: {
    title: 'Variables',
  },
  'environment-variable': {
    title: 'Environment Variable',
  },
  'internal-tasks': {
    title: 'Internal Tasks',
  },
  'task-directory': {
    title: 'Task Directory',
  },
  'include-other-taskfile': {
    title: 'Include Other Taskfile',
  },
  'task-dependencies-and-parallel-task-execution': {
    title: 'Task Dependencies and Parallel Task Execution',
  },
  'run-task-in-specific-order': {
    title: 'Run Task in Specific Order',
  },
  'platform-specific-tasks': {
    title: 'Platform Specific Tasks',
  },
  'prevent-unnecessary-task-execution': {
    title: 'Prevent Unnecessary Task Execution',
  },
  'if-else-condition': {
    title: 'If-Else Condition',
  },
  looping: {
    title: 'Looping',
  },
  'forward-cli-arguments-to-cmd': {
    title: 'Forward CLI Arguments to Cmd',
  },
  'wildcard-args': {
    title: 'Wildcard Args',
  },
  'ignore-errors': {
    title: 'Ignore Errors',
  },
  'task-cleanup-with-defer': {
    title: 'Task Cleanup with Defer',
  },
  'watch-tasks': {
    title: 'Watch Tasks',
  },
  '###': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Additional Topics',
  },
  'display-taskfile-summary': {
    title: 'Display Taskfile Summary',
  },
  'task-aliases': {
    title: 'Task Aliases',
  },
  'overriding-task-name': {
    title: 'Overriding Task Name',
  },
  'warning-prompts': {
    title: 'Warning Prompts',
  },
  'silent-mode': {
    title: 'Silent Mode',
  },
  'dry-run-mode': {
    title: 'Dry Run Mode',
  },
  'interactive-cli-application': {
    title: 'Interactive CLI Application',
  },
  '####': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Advanced',
  },
  'integrate-taskfile-with-cicd': {
    title: 'Integrate Taskfile with CI/CD',
  },
};

export default meta;
