export default {
  index: {
    title: 'Home',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
      timestamp: false,
    },
  },
  404: {
    type: 'page',
    theme: {
      timestamp: false,
      typesetting: 'article',
    },
  },
  docs: {
    title: 'Docs',
    type: 'menu',
    items: {
      ssh: {
        title: 'SSH',
        href: '/docs/ssh/ssh-overview',
      },
      git: {
        title: 'Git',
        href: '/docs/git/what-is-git',
      },
      docker: {
        title: 'Docker',
        href: '/docs/docker/what-is-docker',
      },
      '12-factor-app': {
        title: '12 Factor App',
        href: '/docs/twelve-factor-app/introduction',
      },
      kubernetes: {
        title: 'Kubernetes',
        href: '/docs/kubernetes/what-is-kubernetes',
      },
      'data-structures-and-algorithms': {
        title: 'Data Structures & Algorithms',
        href: '/docs/data-structures-and-algorithms/memory',
      },
    },
    theme: {
      layout: 'raw',
      timestamp: false,
    },
  },
};

// {
//   "about": {
//     "title": "About",
// type: 'page',
//     "theme": {
//       "layout": "default",
//       "timestamp": false
//     }
//   },
//   "blog": {
//     "title": "Blog"
// type: 'page',
//   },
//   "gallery": {
//     "title": "Gallery",
// type: 'page',
//     "theme": {
//       "layout": "full",
//       "timestamp": false
//     }
//   }
// }
