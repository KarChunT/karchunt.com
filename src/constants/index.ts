export const WORLD_DOTS_LAT_AND_LNG = [
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: 34.0522,
      lng: -118.2437,
    }, // Los Angeles
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: 40.7128,
      lng: -74.006,
    }, // New York
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: 51.5074,
      lng: -0.1278,
    }, // London
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: 35.6895,
      lng: 139.6917,
    }, // Tokyo
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: -33.8688,
      lng: 151.2093,
    }, // Sydney
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: 48.8566,
      lng: 2.3522,
    }, // Paris
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: 55.7558,
      lng: 37.6173,
    }, // Moscow
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: 39.9042,
      lng: 116.4074,
    }, // Beijing
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: -23.5505,
      lng: -46.6333,
    }, // São Paulo
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: 19.4326,
      lng: -99.1332,
    }, // Mexico City
  },
  {
    start: {
      lat: 5.4164, // Penang, Malaysia
      lng: 100.3327,
    },
    end: {
      lat: 1.3521,
      lng: 103.8198,
    }, // Singapore
  },
];

export const BOOKS: Book[] = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    url: '/hub/books/atomic-habit',
    pdfUrl: '/pdf/Atomic Habits.pdf',
    genre: 'Self-help',
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    coverColor: '#fefdf7',
    coverUrl: '/book-cover/atomic-habit.webp',
  },
];

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

export const PERSONAL = [
  {
    quote:
      'Passion is the key to success. Passion means everything to me, as part of my passion and motivation, I love to inspire people and my ambition is to develop a new technology that can revolutionize the world.',
    name: 'Tan Kar Chun',
    designation: 'Infrastructure & DevOps Engineer',
    src: '/personal/anotherme.webp',
  },
];

export const CERTIFICATES = [
  {
    year: '2025',
    certificates: [
      {
        name: 'Certified Kubernetes Administrator (CKA)',
        src: '/certificates/cka.png',
        link: 'https://www.credly.com/badges/8fff7b8d-3415-4263-b4fe-4f96ff52484e',
        certified: true,
      },
      {
        name: 'Kubernetes and Cloud Native Associate (KCNA)',
        src: '/certificates/kcna.png',
        link: 'https://www.credly.com/badges/66e3e661-2a7f-44ba-b137-a4ecab838370',
        certified: true,
      },
      {
        name: 'Kubernetes and Cloud Native Security Associate (KCSA)',
        src: '/certificates/kcsa.png',
        link: 'https://www.credly.com/badges/c97c8086-4abc-4450-84ca-1f33d8cc5824',
        certified: true,
      },
      {
        name: 'Certified Kubernetes Security Specialist (CKS)',
        src: '',
        link: '',
        certified: false,
      },
      {
        name: 'Kubestronaut',
        src: '',
        link: '',
        certified: false,
      },
    ],
  },
  {
    year: '2024',
    certificates: [
      {
        name: 'LFD121: Developing Secure Software',
        src: '/certificates/lfd121.png',
        link: 'https://www.credly.com/badges/cad91d1d-0327-46d8-aa99-21ccaf91c589',
        certified: true,
      },
    ],
  },
  {
    year: '2023',
    certificates: [
      {
        name: 'Professional Scrum Master™ I (PSM I)',
        src: '/certificates/psm1.png',
        link: 'https://www.credly.com/badges/a9a3bcd4-bfec-44bf-be2f-fb91579c0ee6',
        certified: true,
      },
      {
        name: 'CKAD: Certified Kubernetes Application Developer',
        src: '/certificates/ckad.png',
        link: 'https://www.credly.com/badges/0cf9e91e-2736-46cb-a987-f558e099b30e',
        certified: true,
      },
    ],
  },
  {
    year: '2022',
    certificates: [
      {
        name: 'Certified Jenkins Engineer 2022',
        src: '/certificates/cje.png',
        link: 'https://certificates.cloudbees.com/dc763bc8-1f25-4335-9bfd-f8f13ae03cf4#acc.jet6FUmf',
        certified: true,
      },
      {
        name: '[PCAP-31-03] PCAP™ – Certified Associate Python Programmer',
        src: '/certificates/pcap.png',
        link: 'https://www.credly.com/badges/c2d73e1d-d0b4-4e27-a4fa-2a805f202fbc',
        certified: true,
      },
      {
        name: '[PCEP-30-01] PCEP – Certified Entry-Level Python Programmer',
        src: '/certificates/pcep.png',
        link: 'https://www.credly.com/badges/3bac6f7f-53dd-40d8-a195-61284a31d8fd',
        certified: true,
      },
    ],
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
    hierarchy: [
      {
        name: 'Git Introduction',
        hierarchy: [
          {
            name: 'What is Git?',
            link: '/docs/git/what-is-git',
            hierarchy: [
              {
                name: 'Git Introduction',
                link: '/docs/git/what-is-git#git-introduction',
                hierarchy: [],
              },
              {
                name: 'Local vs Remote repositories',
                link: '/docs/git/what-is-git#local-vs-remote-repositories',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Git Installation',
            link: '/docs/git/git-installation',
            hierarchy: [
              {
                name: 'Install Git on Windows',
                link: '/docs/git/git-installation#install-git-on-windows',
                hierarchy: [],
              },
              {
                name: 'Install Git on Ubuntu/Linux',
                link: '/docs/git/git-installation#install-git-on-ubuntulinux',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Git in Depth',
            link: '/docs/git/git-in-depth',
            hierarchy: [
              {
                name: 'A real Git',
                link: '/docs/git/git-in-depth#a-real-git',
                hierarchy: [
                  {
                    name: 'hash-object',
                    link: '/docs/git/git-in-depth#hash-object',
                    hierarchy: [],
                  },
                  {
                    name: 'cat-file',
                    link: '/docs/git/git-in-depth#cat-file',
                    hierarchy: [],
                  },
                ],
              },
              {
                name: 'Git Object Contents',
                link: '/docs/git/git-in-depth#git-object-contents',
                hierarchy: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Getting Started with Git',
        hierarchy: [
          {
            name: 'Setup repository',
            link: '/docs/git/setup-repository',
            hierarchy: [
              {
                name: 'Initialize a new Git repo',
                link: '/docs/git/setup-repository#initialize-a-new-git-repo',
                hierarchy: [],
              },
              {
                name: 'Clone an existing repo',
                link: '/docs/git/setup-repository#clone-an-existing-repo',
                hierarchy: [
                  {
                    name: 'Clone to a specific folder',
                    link: '/docs/git/setup-repository#clone-to-a-specific-folder',
                    hierarchy: [],
                  },
                  {
                    name: 'Clone a specific branch',
                    link: '/docs/git/setup-repository#clone-a-specific-branch',
                    hierarchy: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'Save changes',
            link: '/docs/git/save-changes',
            hierarchy: [
              {
                name: 'git add',
                link: '/docs/git/save-changes#git-add',
                hierarchy: [],
              },
              {
                name: 'git status',
                link: '/docs/git/save-changes#git-status',
                hierarchy: [],
              },
              {
                name: 'git commit',
                link: '/docs/git/save-changes#git-commit',
                hierarchy: [],
              },
              {
                name: 'git log',
                link: '/docs/git/save-changes#git-log',
                hierarchy: [],
              },
              {
                name: 'git diff',
                link: '/docs/git/save-changes#git-diff',
                hierarchy: [],
              },
              {
                name: 'git restore',
                link: '/docs/git/save-changes#git-restore',
                hierarchy: [],
              },
              {
                name: '.gitignore',
                link: '/docs/git/save-changes#gitignore',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Branches',
            link: '/docs/git/branches',
            hierarchy: [
              {
                name: 'What is Git Branch?',
                link: '/docs/git/branches#what-is-git-branch',
                hierarchy: [],
              },
              {
                name: 'Git branch commands',
                link: '/docs/git/branches#git-branch-commands',
                hierarchy: [
                  {
                    name: 'Create branch',
                    link: '/docs/git/branches#create-branch',
                    hierarchy: [],
                  },
                  {
                    name: 'Checkout/Switch branch',
                    link: '/docs/git/branches#checkoutswitch-branch',
                    hierarchy: [],
                  },
                  {
                    name: 'Merge branch (Fast-forward)',
                    link: '/docs/git/branches#merge-branch-fast-forward',
                    hierarchy: [
                      {
                        name: 'Merge conflicts',
                        link: '/docs/git/branches#merge-conflicts',
                        hierarchy: [],
                      },
                    ],
                  },
                  {
                    name: 'List branches',
                    link: '/docs/git/branches#list-branches',
                    hierarchy: [],
                  },
                  {
                    name: 'Delete branch',
                    link: '/docs/git/branches#delete-branch',
                    hierarchy: [],
                  },
                  {
                    name: 'Rename branch',
                    link: '/docs/git/branches#rename-branch',
                    hierarchy: [],
                  },
                  {
                    name: 'Create remote branches and push',
                    link: '/docs/git/branches#create-remote-branches-and-push',
                    hierarchy: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'Remote repository',
            link: '/docs/git/remote-repositories',
            hierarchy: [
              {
                name: 'Configuration and setup Git config',
                link: '/docs/git/remote-repositories#configuration-and-setup-git-config',
                hierarchy: [],
              },
              {
                name: 'Fetching and pulling',
                link: '/docs/git/remote-repositories#fetching-and-pulling',
                hierarchy: [
                  {
                    name: 'Fetching',
                    link: '/docs/git/remote-repositories#fetching',
                    hierarchy: [],
                  },
                  {
                    name: 'Pulling',
                    link: '/docs/git/remote-repositories#pulling',
                    hierarchy: [],
                  },
                ],
              },
              {
                name: 'List all remote repositories',
                link: '/docs/git/remote-repositories#list-all-remote-repositories',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Rebasing',
            link: '/docs/git/rebasing',
            hierarchy: [
              {
                name: 'Rebase',
                link: '/docs/git/rebasing#rebase',
                hierarchy: [],
              },
              {
                name: 'Interactive rebasing',
                link: '/docs/git/rebasing#interactive-rebasing',
                hierarchy: [],
              },
              {
                name: 'Cherry-pick',
                link: '/docs/git/rebasing#cherry-pick',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Reset and Revert',
            link: '/docs/git/reset-and-revert',
            hierarchy: [
              {
                name: 'Revert',
                link: '/docs/git/reset-and-revert#revert',
                hierarchy: [],
              },
              {
                name: 'Reset',
                link: '/docs/git/reset-and-revert#reset',
                hierarchy: [
                  {
                    name: 'soft',
                    link: '/docs/git/reset-and-revert#soft',
                    hierarchy: [],
                  },
                  {
                    name: 'hard',
                    link: '/docs/git/reset-and-revert#hard',
                    hierarchy: [],
                  },
                  {
                    name: 'mixed',
                    link: '/docs/git/reset-and-revert#mixed',
                    hierarchy: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'Stashing',
            link: '/docs/git/stashing',
            hierarchy: [
              {
                name: 'Git Stash',
                link: '/docs/git/stashing#git-stash',
                hierarchy: [
                  {
                    name: 'stash push',
                    link: '/docs/git/stashing#stash-push',
                    hierarchy: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Advanced',
        hierarchy: [
          {
            name: 'Reflog',
            link: '/docs/git/reflog',
            hierarchy: [
              {
                name: 'Git Reflog',
                link: '/docs/git/reflog#git-reflog',
                hierarchy: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: '🍉',
    title: 'Docker',
    description:
      'Docker is an open platform for developing, shipping, and running applications.',
    link: '/docs/docker/what-is-docker',
    hierarchy: [
      {
        name: 'Docker Introduction',
        hierarchy: [
          {
            name: 'What is Docker',
            link: '/docs/docker/what-is-docker',
            hierarchy: [
              {
                name: 'Docker Introduction',
                link: '/docs/docker/what-is-docker#docker-introduction',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Docker Architecture',
            link: '/docs/docker/docker-architecture',
            hierarchy: [
              {
                name: 'Docker Engine Architecture',
                link: '/docs/docker/docker-architecture#docker-engine-architecture',
                hierarchy: [
                  {
                    name: 'containerd',
                    link: '/docs/docker/docker-architecture#containerd',
                    hierarchy: [],
                  },
                  {
                    name: 'libcontainer/runC',
                    link: '/docs/docker/docker-architecture#libcontainerrunc',
                    hierarchy: [],
                  },
                  {
                    name: 'containerd-shim',
                    link: '/docs/docker/docker-architecture#containerd-shim',
                    hierarchy: [],
                  },
                ],
              },
              {
                name: 'Docker Objects',
                link: '/docs/docker/docker-architecture#docker-objects',
                hierarchy: [
                  {
                    name: 'Images',
                    link: '/docs/docker/docker-architecture#images',
                    hierarchy: [],
                  },
                  {
                    name: 'Containers',
                    link: '/docs/docker/docker-architecture#containers',
                    hierarchy: [],
                  },
                  {
                    name: 'Volumes',
                    link: '/docs/docker/docker-architecture#volumes',
                    hierarchy: [],
                  },
                  {
                    name: 'Networks',
                    link: '/docs/docker/docker-architecture#networks',
                    hierarchy: [],
                  },
                ],
              },
              {
                name: 'Registry',
                link: '/docs/docker/docker-architecture#registry',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Docker Installation',
            link: '/docs/docker/docker-installation',
            hierarchy: [
              {
                name: 'Install Docker Engine on Ubuntu',
                link: '/docs/docker/docker-installation#install-docker-engine-on-ubuntu',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Daemon Configuration',
            link: '/docs/docker/daemon-configuration',
            hierarchy: [
              {
                name: 'Docker Service Configuration',
                link: '/docs/docker/daemon-configuration#docker-service-configuration',
                hierarchy: [],
              },
              {
                name: 'Start Docker Daemon manually',
                link: '/docs/docker/daemon-configuration#start-docker-daemon-manually',
                hierarchy: [],
              },
              {
                name: 'Unix Socket',
                link: '/docs/docker/daemon-configuration#unix-socket',
                hierarchy: [],
              },
              {
                name: 'Logging Driver',
                link: '/docs/docker/daemon-configuration#logging-driver',
                hierarchy: [],
              },
              {
                name: 'Storage Driver',
                link: '/docs/docker/daemon-configuration#storage-driver',
                hierarchy: [],
              },
              {
                name: 'Troubleshoot Docker Daemon',
                link: '/docs/docker/daemon-configuration#troubleshoot-docker-daemon',
                hierarchy: [
                  {
                    name: 'View Docker Daemon Logs',
                    link: '/docs/docker/daemon-configuration#view-docker-daemon-logs',
                    hierarchy: [],
                  },
                  {
                    name: 'Check free disk space on host',
                    link: '/docs/docker/daemon-configuration#check-free-disk-space-on-host',
                    hierarchy: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Docker Topics',
        hierarchy: [
          {
            name: 'Container',
            link: '/docs/docker/container',
            hierarchy: [
              {
                name: 'Create container',
                link: '/docs/docker/container#create-container',
                hierarchy: [],
              },
              {
                name: 'List container details',
                link: '/docs/docker/container#list-container-details',
                hierarchy: [],
              },
              {
                name: 'Start container',
                link: '/docs/docker/container#start-container',
                hierarchy: [],
              },
              {
                name: 'Run a container',
                link: '/docs/docker/container#run-a-container',
                hierarchy: [],
              },
              {
                name: 'Expose container port (Capital P)',
                link: '/docs/docker/container#expose-container-port-capital-p',
                hierarchy: [],
              },
              {
                name: 'Rename container',
                link: '/docs/docker/container#rename-container',
                hierarchy: [],
              },
              {
                name: 'Run a new command in a running container',
                link: '/docs/docker/container#run-a-new-command-in-a-running-container',
                hierarchy: [],
              },
              {
                name: "Attach the terminal's I/O to a running container",
                link: '/docs/docker/container#attach-the-terminals-io-to-a-running-container',
                hierarchy: [],
              },
              {
                name: 'Inspect container',
                link: '/docs/docker/container#inspect-container',
                hierarchy: [],
              },
              {
                name: 'Display a live stream of containers resource usage statistics',
                link: '/docs/docker/container#display-a-live-stream-of-containers-resource-usage-statistics',
                hierarchy: [],
              },
              {
                name: 'Display running processes of a container',
                link: '/docs/docker/container#display-running-processes-of-a-container',
                hierarchy: [],
              },
              {
                name: 'Container Logs',
                link: '/docs/docker/container#container-logs',
                hierarchy: [],
              },
              {
                name: 'Pause and Unpause container',
                link: '/docs/docker/container#pause-and-unpause-container',
                hierarchy: [],
              },
              {
                name: 'Restart container',
                link: '/docs/docker/container#restart-container',
                hierarchy: [],
              },
              {
                name: 'Update container',
                link: '/docs/docker/container#update-container',
                hierarchy: [],
              },
              {
                name: 'Stop, remove, and prune the container',
                link: '/docs/docker/container#stop-remove-and-prune-the-container',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Image',
            link: '/docs/docker/image',
            hierarchy: [
              {
                name: 'Image Operations',
                link: '/docs/docker/image#image-operations',
                hierarchy: [
                  {
                    name: 'List images',
                    link: '/docs/docker/image#list-images',
                    hierarchy: [],
                  },
                  {
                    name: 'Search images',
                    link: '/docs/docker/image#search-images',
                    hierarchy: [],
                  },
                  {
                    name: 'Pull / Download the image',
                    link: '/docs/docker/image#pull--download-the-image',
                    hierarchy: [],
                  },
                  {
                    name: 'Push image',
                    link: '/docs/docker/image#push-image',
                    hierarchy: [],
                  },
                  {
                    name: 'Tag image',
                    link: '/docs/docker/image#tag-image',
                    hierarchy: [],
                  },
                  {
                    name: 'Inspect image',
                    link: '/docs/docker/image#inspect-image',
                    hierarchy: [],
                  },
                  {
                    name: 'Remove image and remove all unused image',
                    link: '/docs/docker/image#remove-image-and-remove-all-unused-image',
                    hierarchy: [],
                  },
                  {
                    name: 'Display image layers',
                    link: '/docs/docker/image#display-image-layers',
                    hierarchy: [],
                  },
                  {
                    name: 'Save or load image',
                    link: '/docs/docker/image#save-or-load-image',
                    hierarchy: [],
                  },
                  {
                    name: 'Convert container into image in a tar format using Import and Export operations',
                    link: '/docs/docker/image#convert-container-into-image-in-a-tar-format-using-import-and-export-operations',
                    hierarchy: [],
                  },
                ],
              },
              {
                name: 'Image naming convention and Authenticate to registries',
                link: '/docs/docker/image#image-naming-convention-and-authenticate-to-registries',
                hierarchy: [],
              },
              {
                name: 'Dockerfile (Build a custom image)',
                link: '/docs/docker/image#dockerfile-build-a-custom-image',
                hierarchy: [
                  {
                    name: 'Dockerfile explanation',
                    link: '/docs/docker/image#dockerfile-explanation',
                    hierarchy: [
                      {
                        name: 'WORKDIR',
                        link: '/docs/docker/image#workdir',
                        hierarchy: [],
                      },
                      {
                        name: 'HEALTHCHECK',
                        link: '/docs/docker/image#healthcheck',
                        hierarchy: [],
                      },
                      {
                        name: 'COPY vs ADD',
                        link: '/docs/docker/image#copy-vs-add',
                        hierarchy: [],
                      },
                      {
                        name: 'CMD vs ENTRYPOINT (Utility container)',
                        link: '/docs/docker/image#cmd-vs-entrypoint-utility-container',
                        hierarchy: [],
                      },
                    ],
                  },
                  {
                    name: 'Build cache',
                    link: '/docs/docker/image#build-cache',
                    hierarchy: [],
                  },
                  {
                    name: 'Multi-stage builds',
                    link: '/docs/docker/image#multi-stage-builds',
                    hierarchy: [],
                  },
                ],
              },
              {
                name: 'Create custom image from running container',
                link: '/docs/docker/image#create-custom-image-from-running-container',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Volume',
            link: '/docs/docker/volume',
            hierarchy: [
              {
                name: 'Volume types',
                link: '/docs/docker/volume#volume-types',
                hierarchy: [
                  {
                    name: 'Anonymous and named volumes',
                    link: '/docs/docker/volume#anonymous-and-named-volumes',
                    hierarchy: [],
                  },
                  {
                    name: 'Bind mounts',
                    link: '/docs/docker/volume#bind-mounts',
                    hierarchy: [],
                  },
                  {
                    name: 'Read-only volume',
                    link: '/docs/docker/volume#read-only-volume',
                    hierarchy: [],
                  },
                ],
              },
              {
                name: 'List volume',
                link: '/docs/docker/volume#list-volume',
                hierarchy: [],
              },
              {
                name: 'Create volume',
                link: '/docs/docker/volume#create-volume',
                hierarchy: [],
              },
              {
                name: 'Inspect volume',
                link: '/docs/docker/volume#inspect-volume',
                hierarchy: [],
              },
              {
                name: 'Remove volume',
                link: '/docs/docker/volume#remove-volume',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Network',
            link: '/docs/docker/network',
            hierarchy: [
              {
                name: 'Network types',
                link: '/docs/docker/network#network-types',
                hierarchy: [
                  {
                    name: 'None',
                    link: '/docs/docker/network#none',
                    hierarchy: [],
                  },
                  {
                    name: 'Host (local)',
                    link: '/docs/docker/network#host-local',
                    hierarchy: [],
                  },
                  {
                    name: 'Bridge',
                    link: '/docs/docker/network#bridge',
                    hierarchy: [
                      {
                        name: 'User-defined bridge network',
                        link: '/docs/docker/network#user-defined-bridge-network',
                        hierarchy: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'List neworks',
                link: '/docs/docker/network#list-neworks',
                hierarchy: [],
              },
              {
                name: 'Inspect networks',
                link: '/docs/docker/network#inspect-networks',
                hierarchy: [],
              },
              {
                name: 'Remove network',
                link: '/docs/docker/network#remove-network',
                hierarchy: [],
              },
              {
                name: 'Connect/Disconnect container to network',
                link: '/docs/docker/network#connectdisconnect-container-to-network',
                hierarchy: [],
              },
              {
                name: 'Container Communication',
                link: '/docs/docker/network#container-communication',
                hierarchy: [
                  {
                    name: 'Container to host (local) communication',
                    link: '/docs/docker/network#container-to-host-local-communication',
                    hierarchy: [],
                  },
                  {
                    name: 'Container to container communication',
                    link: '/docs/docker/network#container-to-container-communication',
                    hierarchy: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'Resource Limits',
            link: '/docs/docker/resource-limits',
            hierarchy: [
              {
                name: 'CPU',
                link: '/docs/docker/resource-limits#cpu',
                hierarchy: [
                  {
                    name: 'CPU Shares',
                    link: '/docs/docker/resource-limits#cpu-shares',
                    hierarchy: [],
                  },
                  {
                    name: 'CPU Sets',
                    link: '/docs/docker/resource-limits#cpu-sets',
                    hierarchy: [],
                  },
                  {
                    name: 'CPU Count',
                    link: '/docs/docker/resource-limits#cpu-count',
                    hierarchy: [],
                  },
                ],
              },
              {
                name: 'Memory',
                link: '/docs/docker/resource-limits#memory',
                hierarchy: [],
              },
            ],
          },
          {
            name: 'Docker Compose',
            link: '/docs/docker/docker-compose',
            hierarchy: [
              {
                name: 'compose.yaml',
                link: '/docs/docker/docker-compose#composeyaml',
                hierarchy: [],
              },
              {
                name: 'Commands',
                link: '/docs/docker/docker-compose#commands',
                hierarchy: [
                  {
                    name: 'List containers',
                    link: '/docs/docker/docker-compose#list-containers',
                    hierarchy: [],
                  },
                  {
                    name: 'Build or rebuild containers',
                    link: '/docs/docker/docker-compose#build-or-rebuild-containers',
                    hierarchy: [],
                  },
                  {
                    name: 'Create and start containers',
                    link: '/docs/docker/docker-compose#create-and-start-containers',
                    hierarchy: [],
                  },
                  {
                    name: 'Execute a command in a running container',
                    link: '/docs/docker/docker-compose#execute-a-command-in-a-running-container',
                    hierarchy: [],
                  },
                  {
                    name: 'Display service log output',
                    link: '/docs/docker/docker-compose#display-service-log-output',
                    hierarchy: [],
                  },
                  {
                    name: 'Stop services',
                    link: '/docs/docker/docker-compose#stop-services',
                    hierarchy: [],
                  },
                  {
                    name: 'Stop and remove containers, networks',
                    link: '/docs/docker/docker-compose#stop-and-remove-containers-networks',
                    hierarchy: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Additional',
        hierarchy: [
          {
            name: 'Useful commands',
            link: '/docs/docker/useful-commands',
            hierarchy: [
              {
                name: 'Docker system events',
                link: '/docs/docker/useful-commands#docker-system-events',
                hierarchy: [],
              },
              {
                name: 'Disk usage metrics for docker objects',
                link: '/docs/docker/useful-commands#disk-usage-metrics-for-docker-objects',
                hierarchy: [],
              },
              {
                name: 'Copy',
                link: '/docs/docker/useful-commands#copy',
                hierarchy: [],
              },
            ],
          },
          { name: 'Future', link: '/docs/docker/future', hierarchy: [] },
        ],
      },
    ],
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
    link: '/docs/kubernetes/introduction/what-is-kubernetes',
    hierarchy: [],
  },
  // {
  //   icon: '🍐',
  //   title: 'Data Structures and Algorithms',
  //   description:
  //     'Data structures are used to organize, store, and manipulate data in memory, while algorithms are used to solve specific problems.',
  //   link: '/docs/data-structures-and-algorithms/memory',
  //   hierarchy: [],
  // },
  // {
  //   title: '🥑 Design Pattern',
  //   description: 'Solving typical software design problems.',
  //   link: '/docs/design-pattern/introduction',
  // },
];
