export const sshBasePath = "/docs/ssh";
export const sshSideBar = [
  {
    text: "Introduction",
    collapsed: false,
    items: [
      {
        text: "SSH overview",
        link: `${sshBasePath}/ssh-overview`,
      },
      {
        text: "SSH installation",
        link: `${sshBasePath}/installation`,
      },
    ],
  },
  {
    text: "SSH Keys",
    collapsed: false,
    items: [
      {
        text: "Play with SSH Keys",
        link: `${sshBasePath}/play-with-ssh-keys`,
      },
    ],
  },
  {
    text: "Host & Server",
    collapsed: false,
    items: [
      {
        text: "Remote server connection",
        link: `${sshBasePath}/remote-server-connection`,
      },
      {
        text: "Host configuration",
        link: `${sshBasePath}/host-configuration`,
      },
      {
        text: "Server configuration",
        link: `${sshBasePath}/server-configuration`,
      },
    ],
  },
  {
    text: "SSH Tunnels",
    collapsed: false,
    items: [
      {
        text: "Local tunneling",
        link: `${sshBasePath}/local-tunneling`,
      },
      {
        text: "Remote tunneling",
        link: `${sshBasePath}/remote-tunneling`,
      },
    ],
  },
];

export const gitBasePath = "/docs/git";
export const gitSideBar = [
  {
    text: "Git Introduction",
    collapsed: false,
    items: [
      {
        text: "What is Git?",
        link: `${gitBasePath}/what-is-git`,
      },
      {
        text: "Git Installation",
        link: `${gitBasePath}/git-installation`,
      },
      {
        text: "Git in Depth",
        link: `${gitBasePath}/git-in-depth`,
      },
    ],
  },
  {
    text: "Getting Started with Git",
    collapsed: false,
    items: [
      {
        text: "Setup repository",
        link: `${gitBasePath}/setup-repository`,
      },
      {
        text: "Save changes",
        link: `${gitBasePath}/save-changes`,
      },
      {
        text: "Branches",
        link: `${gitBasePath}/branches`,
      },
      {
        text: "Remote repository",
        link: `${gitBasePath}/remote-repositories`,
      },
      {
        text: "Rebasing",
        link: `${gitBasePath}/rebasing`,
      },
      {
        text: "Reset and Revert",
        link: `${gitBasePath}/reset-and-revert`,
      },
      {
        text: "Stashing",
        link: `${gitBasePath}/stashing`,
      },
    ],
  },
  {
    text: "Advanced",
    collapsed: false,
    items: [
      {
        text: "Reflog",
        link: `${gitBasePath}/reflog`,
      },
    ],
  },
];
