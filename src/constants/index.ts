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
    href: '/blog/setup-self-hosted-github-runner',
    tags: ['self-hosted', 'github'],
  },
  {
    title: 'Setup k3s on Ubuntu',
    href: '/blog/setup-k3s-on-ubuntu',
    tags: ['kubernetes', 'ubuntu'],
  },
  {
    title: 'Run sudo command without a password',
    href: '/blog/run-sudo-command-without-a-password',
    tags: ['linux'],
  },
  {
    title: 'Install Java with APT on Ubuntu',
    href: '/blog/install-java-with-apt-on-ubuntu',
    tags: ['java', 'ubuntu'],
  },
  {
    title: 'Install Java OpenJDK 17',
    href: '/blog/install-java-openjdk-17',
    tags: ['java', 'ubuntu'],
  },
  {
    title: 'Install Maven (MVN)',
    href: '/blog/install-maven-mvn',
    tags: ['maven'],
  },
  {
    title: 'Install latest Git',
    href: '/blog/install-latest-git',
    tags: ['git'],
  },
  {
    title: 'Install packages using deb file',
    href: '/blog/install-packages-using-deb-file',
    tags: ['deb', 'linux'],
  },
  {
    title: 'Install KubeVirt',
    href: '/blog/install-kubevirt',
    tags: ['kubevirt'],
  },
  {
    title: 'Install Jenkins with Docker Compose',
    href: '/blog/install-jenkins-with-docker-compose',
    tags: ['jenkins', 'docker-compose'],
  },
  {
    title: 'Edit hostname on Ubuntu',
    href: '/blog/edit-hostname-on-ubuntu',
    tags: ['hostname', 'ubuntu'],
  },
  {
    title:
      'Fix docker-compose ERROR: max > virtual memory areas vm.max_map_count [65530] is too low, increase to > at least [262144]',
    href: '/blog/fix-docker-compose-error-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-increase-to-at-least-262144',
    tags: ['docker-compose'],
  },
  {
    title: 'Fix Git LFS Pointers issue',
    href: '/blog/fix-git-lfs-pointers-issue',
    tags: ['git lfs'],
  },
  {
    title: 'No Module named "apt_pkg"',
    href: '/blog/no-module-named-apt_pkg',
    tags: ['linux'],
  },
  {
    title: 'Share your local server with Ngrok',
    href: '/blog/share-your-local-server-with-ngrok',
    tags: ['ngrok', 'local'],
  },
  {
    title: 'add-apt-repository unable to support jammy',
    href: '/blog/add-apt-repository-unable-to-support-jammy',
    tags: ['linux', 'python'],
  },
  {
    title: 'Use different Python version to setup Pythonvirtual environment',
    href: '/blog/use-different-python-version-to-setup-python-virtual-environment',
    tags: ['python'],
  },
  {
    title:
      'Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock',
    href: '/blog/got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket-at-unixvarrundockersock',
    tags: ['docker'],
  },
  {
    title:
      'Nginx permission problem [nginx: [emerg] mkdir() "/var/cache/nginx/client_temp" failed (13: Permission denied)]',
    href: '/blog/nginx-permission-problem-nginx-emerg-mkdir-varcachenginxclient_temp-failed-13-permission-denied',
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

export const DOCUMENTATION: DocItem[] = [
  {
    icon: '🍇',
    title: 'SSH',
    description:
      'SSH stands for Secure Shell (SSH) Protocol that is mainly used to connect to a Linux server remotely.',
    link: '/docs/ssh/ssh-overview',
    hierarchy: [
      {
        name: 'Introduction',
        hierarchy: [
          {
            name: 'SSH overview',
            link: '/docs/ssh/ssh-overview',
            hierarchy: [
              {
                name: 'What is SSH?',
                link: '/docs/ssh/ssh-overview#what-is-ssh',
              },
              {
                name: 'How SSH Works?',
                link: '/docs/ssh/ssh-overview#how-ssh-works',
              },
              {
                name: 'How SSH Authenticate Users?',
                link: '/docs/ssh/ssh-overview#how-ssh-authenticate-users',
                hierarchy: [
                  { name: 'Password', link: '/docs/ssh/ssh-overview#password' },
                  { name: 'SSH Keys', link: '/docs/ssh/ssh-overview#ssh-keys' },
                ],
              },
            ],
          },
          {
            name: 'SSH Installation',
            hierarchy: [
              {
                name: 'Install SSH on Linux',
                link: '/docs/ssh/installation#install-ssh-on-linux',
              },
            ],
          },
        ],
      },
      {
        name: 'SSH Keys',
        hierarchy: [
          {
            name: 'Play with SSH Keys',
            link: '/docs/ssh/play-with-ssh-keys',
            hierarchy: [
              {
                name: 'Generating an SSH Key Pair',
                link: '/docs/ssh/play-with-ssh-keys#generating-an-ssh-key-pair',
                hierarchy: [
                  {
                    name: 'Optional Parameters',
                    link: '/docs/ssh/play-with-ssh-keys#optional-parameters',
                  },
                ],
              },
              {
                name: 'Copy the public SSH key to the server',
                link: '/docs/ssh/play-with-ssh-keys#copy-the-public-ssh-key-to-the-server',
                hierarchy: [
                  {
                    name: 'Using ssh-copy-id command',
                    link: '/docs/ssh/play-with-ssh-keys#using-ssh-copy-id-command',
                  },
                  {
                    name: 'Manually copy SSH public key from local to a server',
                    link: '/docs/ssh/play-with-ssh-keys#manually-copy-ssh-public-key-from-local-to-a-server',
                  },
                ],
              },
              {
                name: 'Using an SSH agent to avoid typing your private key passphrase',
                link: '/docs/ssh/play-with-ssh-keys#using-an-ssh-agent-to-avoid-typing-your-private-key-passphrase',
              },
              {
                name: 'Forward SSH credentials to use on a server',
                link: '/docs/ssh/play-with-ssh-keys#forward-ssh-credentials-to-use-on-a-server',
              },
            ],
          },
        ],
      },
      {
        name: 'Host & Server',
        hierarchy: [
          {
            name: 'Remote Server Connection',
            link: '/docs/ssh/remote-server-connection',
            hierarchy: [
              {
                name: 'Connecting to a remote server',
                link: '/docs/ssh/remote-server-connection#connecting-to-a-remote-server',
              },
              {
                name: 'known_hosts',
                link: '/docs/ssh/remote-server-connection#known_hosts',
              },
            ],
          },
          {
            name: 'Host Configuration',
            link: '/docs/ssh/host-configuration',
            hierarchy: [
              {
                name: 'Host Specific Configuration file',
                link: '/docs/ssh/host-configuration#host-specific-configuration-file',
              },
            ],
          },
          {
            name: 'Server Configuration',
            link: '/docs/ssh/server-configuration',
            hierarchy: [
              {
                name: 'Disable password authentication',
                link: '/docs/ssh/server-configuration#disable-password-authentication',
              },
              {
                name: 'Change SSH Daemon runs/listens on port',
                link: '/docs/ssh/server-configuration#change-ssh-daemon-runslistens-on-port',
              },
              {
                name: 'Limit authenticate users to login',
                link: '/docs/ssh/server-configuration#limit-authenticate-users-to-login',
              },
              {
                name: 'Disable root login',
                link: '/docs/ssh/server-configuration#disable-root-login',
              },
            ],
          },
        ],
      },
      {
        name: 'SSH Tunnels',
        hierarchy: [
          {
            name: 'Local tunneling',
            link: '/docs/ssh/local-tunneling',
            hierarchy: [
              {
                name: 'Local tunneling to a server',
                link: '/docs/ssh/local-tunneling#local-tunneling-to-a-server',
                hierarchy: [
                  {
                    name: 'Local tunneling local network',
                    link: '/docs/ssh/local-tunneling#local-tunneling-local-network',
                  },
                  {
                    name: 'Local tunneling private network',
                    link: '/docs/ssh/local-tunneling#local-tunneling-private-network',
                  },
                ],
              },
            ],
          },
          {
            name: 'Remote tunneling',
            link: '/docs/ssh/remote-tunneling',
            hierarchy: [
              {
                name: 'Remote tunneling to a server',
                link: '/docs/ssh/remote-tunneling#remote-tunneling-to-a-server',
                hierarchy: [
                  {
                    name: 'Remote tunneling local network',
                    link: '/docs/ssh/remote-tunneling#remote-tunneling-local-network',
                  },
                  {
                    name: 'Remote tunneling private network',
                    link: '/docs/ssh/remote-tunneling#remote-tunneling-private-network',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: '🍈',
    title: 'Git',
    description:
      'Git is a distributed version control system that tracks file changes.',
    link: '/docs/git/what-is-git',
    hierarchy: [],
  },
  {
    icon: '🍉',
    title: 'Docker',
    description:
      'Docker is an open platform for developing, shipping, and running applications.',
    link: '/docs/docker/what-is-docker',
    hierarchy: [],
  },
  {
    icon: '🍊',
    title: '12 Factor App',
    description:
      'It is a methodology for building software-as-a-service applications with best practices.',
    link: '/docs/twelve-factor-app/introduction',
    hierarchy: [
      {
        name: 'What is 12 Factor App?',
        link: '/docs/twelve-factor-app/introduction#what-is-12-factor-app',
      },
      {
        name: 'The Twelve Factors',
        link: '/docs/twelve-factor-app/introduction#the-twelve-factors',
        hierarchy: [
          {
            name: 'Codebase',
            link: '/docs/twelve-factor-app/introduction#codebase',
          },
          {
            name: 'Dependencies',
            link: '/docs/twelve-factor-app/introduction#dependencies',
          },
          {
            name: 'Config',
            link: '/docs/twelve-factor-app/introduction#config',
          },
          {
            name: 'Backing Services',
            link: '/docs/twelve-factor-app/introduction#backing-services',
          },
          {
            name: 'Build, release, run',
            link: '/docs/twelve-factor-app/introduction#build-release-run',
          },
          {
            name: 'Processes',
            link: '/docs/twelve-factor-app/introduction#processes',
          },
          {
            name: 'Port binding',
            link: '/docs/twelve-factor-app/introduction#port-binding',
          },
          {
            name: 'Concurrency',
            link: '/docs/twelve-factor-app/introduction#concurrency',
          },
          {
            name: 'Disposability',
            link: '/docs/twelve-factor-app/introduction#disposability',
          },
          {
            name: 'Dev/prod parity',
            link: '/docs/twelve-factor-app/introduction#devprod-parity',
          },
          {
            name: 'Logs',
            link: '/docs/twelve-factor-app/introduction#logs',
          },
          {
            name: 'Admin processes',
            link: '/docs/twelve-factor-app/introduction#admin-processes',
          },
        ],
      },
    ],
  },
  {
    icon: '🍍',
    title: 'Kubernetes',
    description:
      'Kubernetes, also known as k8s, is an open source system to deploy, scalwe, and manage containerized applications.',
    link: '/docs/kubernetes/what-is-kubernetes',
    hierarchy: [],
  },
  {
    icon: '🍐',
    title: 'Data Structures and Algorithms',
    description:
      'Data structures are used to organize, store, and manipulate data in memory, while algorithms are used to solve specific problems.',
    link: '/docs/data-structures-and-algorithms/memory',
    hierarchy: [],
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

export const GALLERY = [
  { src: '/gallery/penguin-challenge.webp', category: 'Penguin' },
  { src: '/gallery/penguin-document.webp', category: 'Penguin' },
  { src: '/gallery/penguin-learn.webp', category: 'Penguin' },
  { src: '/gallery/penguin1.webp', category: 'Penguin' },
  { src: '/gallery/penguin2.webp', category: 'Penguin' },
  { src: '/gallery/penguin3.webp', category: 'Penguin' },
  { src: '/gallery/penguin4.webp', category: 'Penguin' },
  { src: '/gallery/penguin5.webp', category: 'Penguin' },
  { src: '/gallery/penguin6.webp', category: 'Penguin' },
  { src: '/gallery/penguin7.webp', category: 'Penguin' },
  { src: '/gallery/penguin8.webp', category: 'Penguin' },
  { src: '/gallery/penguin9.webp', category: 'Penguin' },
  { src: '/gallery/penguin10.webp', category: 'Penguin' },
  { src: '/gallery/penguin11.webp', category: 'Penguin' },
  { src: '/gallery/penguin12.webp', category: 'Penguin' },
  { src: '/gallery/penguin13.webp', category: 'Penguin' },
  { src: '/gallery/penguin14.webp', category: 'Penguin' },
];
