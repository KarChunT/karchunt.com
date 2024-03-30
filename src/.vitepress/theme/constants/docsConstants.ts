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
