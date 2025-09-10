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
  'what-is-kubernetes': {
    title: 'What is Kubernetes?',
  },
  'cluster-architecture': {
    title: 'Cluster Architecture',
  },
  'container-runtime': {
    title: 'Container Runtime',
  },
  '##': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Core Topics',
  },
  pod: {
    title: 'Pod',
  },
  'replica-set': {
    title: 'Replica Set',
  },
  deployment: {
    title: 'Deployment',
  },
  namespace: {
    title: 'Namespace',
  },
  'command-and-args': {
    title: 'Command and Args',
  },
  'env-and-secrets-setup': {
    title: 'Env and Secrets Setup',
  },
  'labels-selectors-and-annotations': {
    title: 'Labels, Selectors and Annotations',
  },
  services: {
    title: 'Services',
  },
  'port-forward': {
    title: 'Port Forward',
  },
  'resource-requirements-and-limits': {
    title: 'Resource Requirements and Limits',
  },
  'daemon-set': {
    title: 'Daemon Set',
  },
  job: {
    title: 'Job',
  },
  'cron-job': {
    title: 'Cron Job',
  },
  volume: {
    title: 'Volume',
  },
  'persistent-volume-and-claim': {
    title: 'Persistent Volume and Claim',
  },
  ingress: {
    title: 'Ingress',
  },
  '###': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Scheduling',
  },
  'manual-scheduling': {
    title: 'Manual Scheduling',
  },
  'taints-and-tolerations': {
    title: 'Taints and Tolerations',
  },
  'node-selectors': {
    title: 'Node Selectors',
  },
  'node-affinity': {
    title: 'Node Affinity',
  },
  'static-pod': {
    title: 'Static Pod',
  },
  'multiple-schedulers': {
    title: 'Multiple Schedulers',
  },
  '####': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Observability',
  },
  'readiness-probes': {
    title: 'Readiness Probes',
  },
  'liveness-probes': {
    title: 'Liveness Probes',
  },
  logging: {
    title: 'Logging',
  },
  monitoring: {
    title: 'Monitoring',
  },
  'audit-logging': {
    title: 'Audit Logging',
  },
  '#####': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Cluster Maintenance',
  },
  'os-upgrades': {
    title: 'OS Upgrades',
  },
  'cluster-upgrade': {
    title: 'Cluster Upgrade',
  },
  'backup-and-restore-methods': {
    title: 'Backup and Restore Methods',
  },
  '######': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Security',
  },
  '4c-cloud-native-k8s-security': {
    title: '4C Cloud Native K8s Security',
  },
  benchmarks: {
    title: 'Benchmarks',
  },
  authentication: {
    title: 'Authentication',
  },
  'pull-image-with-secret': {
    title: 'Pull Image with Secret',
  },
  'security-context': {
    title: 'Security Context',
  },
  'service-account': {
    title: 'Service Account',
  },
  tls: {
    title: 'TLS',
  },
  'cluster-components-security': {
    title: 'Cluster Components Security',
  },
  'certificate-api': {
    title: 'Certificate API',
  },
  kubeconfig: {
    title: 'Kubeconfig',
  },
  'api-groups': {
    title: 'API Groups',
  },
  authorization: {
    title: 'Authorization',
  },
  'cluster-role': {
    title: 'Cluster Role',
  },
  'pod-security-policy': {
    title: 'Pod Security Policy',
  },
  'pod-security-standard-and-admissions': {
    title: 'Pod Security Standard and Admissions',
  },
  'mutual-tls': {
    title: 'Mutual TLS',
  },
  '########': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Advanced',
  },
  'encrypting-secret-data-at-rest': {
    title: 'Encrypting Secret Data at Rest',
  },
  'scan-images-using-admission-controller': {
    title: 'Scan Images using Admission Controller',
  },
  'kubernetes-threat-model': {
    title: 'Kubernetes Threat Model',
  },
  'overview-of-kubernetes-compliance-and-security-frameworks': {
    title: 'Overview of Kubernetes Compliance and Security Frameworks',
  },
  '#########': {
    type: 'separator', // or 'doc' if it's a document
    title: 'Tips & Tools',
  },
  'exam-tips': {
    title: 'Exam Tips',
  },
  'useful-tools': {
    title: 'Useful Tools',
  },
};

export default meta;
