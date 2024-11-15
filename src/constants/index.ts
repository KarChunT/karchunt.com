export const CORE_VALUES = [
  {
    title: 'Build with Passion',
    content:
      'Passion means everything to me, as part of my passion and motivation, I love to inspire people and my ambition is to develop a new technology that can revolutionize the world.',
    srcImage: '/core-values/build-with-passion.png',
  },
  {
    title: 'Discover the beauty of coding and architecture design',
    content:
      'Exploring the synergy between coding and architectural design is the beauty of the software system in terms of principles of structure, creativity, and problem-solving.',
    srcImage: '/core-values/beauty-of-coding.png',
  },
  {
    title: 'Learn, build, and apply',
    content:
      'I learn technical skills from many sources, and then I will document them, but the main thing for me is understanding and knowing how to apply them.',
    srcImage: '/core-values/learn-apply.png',
  },
];

export const SKILLS_SLUGS = [
  'typescript',
  'java',
  'react',
  'html5',
  'css3',
  'nextdotjs',
  'postgresql',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'sonarqube',
  'dotenv',
  'terraform',
  'python',
  'fastapi',
  'argo',
  'trivy',
  'istio',
  'grafana',
  'prometheus',
  'githubactions',
  'gnubash',
  'kubernetes',
  'linux',
  'ubuntu',
  'jenkins',
  'ansible',
  'vagrant',
  'tailwindcss',
  'gitlfs',
  'javascript',
  'snyk',
];

export const BLOG = [
  {
    title: 'Setup self-hosted GitHub runner',
    href: '/blog/problem-solving#setup-self-hosted-github-runner',
    tags: ['self-hosted', 'github'],
  },
  {
    title: 'Setup k3s on Ubuntu',
    href: '/blog/problem-solving#setup-k3s-on-ubuntu',
    tags: ['kubernetes', 'ubuntu'],
  },
  {
    title: 'Run sudo command without a password',
    href: '/blog/problem-solving#run-sudo-command-without-a-password',
    tags: ['linux'],
  },
  {
    title: 'Install Java with APT on Ubuntu',
    href: '/blog/problem-solving#install-java-with-apt-on-ubuntu',
    tags: ['java', 'ubuntu'],
  },
  {
    title: 'Install Java OpenJDK 17',
    href: '/blog/problem-solving#install-java-openjdk-17',
    tags: ['java', 'ubuntu'],
  },
  {
    title: 'Install Maven (MVN)',
    href: '/blog/problem-solving#install-maven-mvn',
    tags: ['maven'],
  },
  {
    title: 'Install latest Git',
    href: '/blog/problem-solving#install-latest-git',
    tags: ['git'],
  },
  {
    title: 'Install packages using deb file',
    href: '/blog/problem-solving#install-packages-using-deb-file',
    tags: ['deb', 'linux'],
  },
  {
    title: 'Install KubeVirt',
    href: '/blog/problem-solving#install-kubevirt',
    tags: ['kubevirt'],
  },
  {
    title: 'Install Jenkins with Docker Compose',
    href: '/blog/problem-solving#install-jenkins-with-docker-compose',
    tags: ['jenkins', 'docker-compose'],
  },
  {
    title: 'Edit hostname on Ubuntu',
    href: '/blog/problem-solving#edit-hostname-on-ubuntu',
    tags: ['hostname', 'ubuntu'],
  },
  {
    title:
      'Fix docker-compose ERROR: max > virtual memory areas vm.max_map_count [65530] is too low, increase to > at least [262144]',
    href: '/blog/problem-solving#fix-docker-compose-error-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-increase-to-at-least-262144',
    tags: ['docker-compose'],
  },
  {
    title: 'Fix Git LFS Pointers issue',
    href: '/blog/problem-solving#fix-git-lfs-pointers-issue',
    tags: ['git lfs'],
  },
  {
    title: 'No Module named "apt_pkg"',
    href: '/blog/problem-solving#no-module-named-apt_pkg',
    tags: ['linux'],
  },
  {
    title: 'Share your local server with Ngrok',
    href: '/blog/problem-solving#share-your-local-server-with-ngrok',
    tags: ['ngrok', 'local'],
  },
  {
    title: 'add-apt-repository unable to support jammy',
    href: '/blog/problem-solving#add-apt-repository-unable-to-support-jammy',
    tags: ['linux', 'python'],
  },
  {
    title: 'Use different Python version to setup Pythonvirtual environment',
    href: '/blog/problem-solving#use-different-python-version-to-setup-python-virtual-environment',
    tags: ['python'],
  },
  {
    title:
      'Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock',
    href: '/blog/problem-solving#got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket-at-unixvarrundockersock',
    tags: ['docker'],
  },
  {
    title:
      'Nginx permission problem [nginx: [emerg] mkdir() "/var/cache/nginx/client_temp" failed (13: Permission denied)]',
    href: '/blog/problem-solving#nginx-permission-problem-nginx-emerg-mkdir-varcachenginxclient_temp-failed-13-permission-denied',
    tags: ['nginx'],
  },
];

export const ACKNOWLEDGMENTS = [
  {
    text: 'https://theodorusclarence.com/shorts/husky-commitlint-prettier',
  },
  {
    text: 'https://medium.com/naukri-engineering/elevating-code-and-commit-quality-with-husky-prettier-eslint-lint-staged-and-commitlint-8e9617583a61',
  },
  {
    text: 'https://dev.to/jsdevspace/setup-nextjs-14-project-with-eslint-prettier-tailwind-css-226j',
  },
  {
    text: 'https://medium.com/yavar/setting-up-a-eslint-prettier-husky-and-lint-staged-integration-with-typescript-in-next-js-13-14-68044dfae920',
  },
  { text: 'https://nextra.site/' },
  { text: 'https://github.com/seriouslysean/demo--auto-bump-forked-prs' },
  {
    text: 'https://dev.to/ghacosta/definitive-guide-for-commitizen-commitlint-husky-3of9',
  },
  {
    text: 'https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index',
  },
  { text: 'https://vitepress.dev/' },
  { text: 'https://github.com/jcamp-code/vitepress-blog-theme' },
  { text: 'https://kodekloud.com/' },
];

export const DOCUMENTATION = [
  {
    icon: '🍇',
    title: 'SSH',
    description:
      'SSH stands for Secure Shell (SSH) Protocol that is mainly used to connect to a Linux server remotely.',
    link: '/docs/ssh/ssh-overview',
  },
  {
    icon: '🍈',
    title: 'Git',
    description:
      'Git is a distributed version control system that tracks file changes.',
    link: '/docs/git/what-is-git',
  },
  {
    icon: '🍉',
    title: 'Docker',
    description:
      'Docker is an open platform for developing, shipping, and running applications.',
    link: '/docs/docker/what-is-docker',
  },
  {
    icon: '🍊',
    title: '12 Factor App',
    description:
      'It is a methodology for building software-as-a-service applications with best practices.',
    link: '/docs/twelve-factor-app/introduction',
  },
  {
    icon: '🍍',
    title: 'Kubernetes',
    description:
      'Kubernetes, also known as k8s, is an open source system to deploy, scalwe, and manage containerized applications.',
    link: '/docs/kubernetes/what-is-kubernetes',
  },
  {
    icon: '🍐',
    title: 'Data Structures and Algorithms',
    description:
      'Data structures are used to organize, store, and manipulate data in memory, while algorithms are used to solve specific problems.',
    link: '/docs/data-structures-and-algorithms/memory',
  },
  // {
  //   title: '🥑 Design Pattern',
  //   description: 'Solving typical software design problems.',
  //   link: '/docs/design-pattern/introduction',
  // },
];

export const PERSONAL = [
  {
    quote:
      'Passion is the key to success. Passion means everything to me, as part of my passion and motivation, I love to inspire people and my ambition is to develop a new technology that can revolutionize the world.',
    name: 'Tan Kar Chun',
    designation: 'Infrastructure & DevOps Engineer',
    src: '/personal/anotherme.webp',
  },
];
