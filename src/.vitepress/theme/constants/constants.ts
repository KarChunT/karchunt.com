import { RoadmapContent } from "../types/types";
import { formatDate } from "../utils/common";

const sshBasePath = "/docs/ssh";
const gitBasePath = "/docs/git";
const howToBasePath = "/docs/how-to";
const dockerBasePath = "/docs/docker";
const twelveFactorBasePath = "/docs/twelve-factor-app";

const sshMainPage = `${sshBasePath}/ssh-overview`;
const gitMainPage = `${gitBasePath}/what-is-git`;
const howToMainPage = `${howToBasePath}/overview`;
const dockerMainPage = `${dockerBasePath}/what-is-docker`;
const twelveFactorMainPage = `${twelveFactorBasePath}/introduction`;

const sshSideBar = [
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

const gitSideBar = [
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

const howToSideBar = [
  {
    text: "Overview",
    link: `${howToBasePath}/overview`,
  },
  {
    text: "Contents",
    collapsed: false,
    items: [
      {
        text: "Setup & Installation",
        link: `${howToBasePath}/setup-and-install`,
      },
      {
        text: "Edit & Fix",
        link: `${howToBasePath}/edit-and-fix`,
      },
      {
        text: "Technology",
        link: `${howToBasePath}/technology`,
      },
    ],
  },
];

const dockerSideBar = [
  {
    text: "Docker Introduction",
    collapsed: false,
    items: [
      {
        text: "What is Docker",
        link: `${dockerBasePath}/what-is-docker`,
      },
      {
        text: "Docker Architecture",
        link: `${dockerBasePath}/docker-architecture`,
      },
      {
        text: "Docker Installation",
        link: `${dockerBasePath}/docker-installation`,
      },
      {
        text: "Daemon Configuration",
        link: `${dockerBasePath}/daemon-configuration`,
      },
    ],
  },
  {
    text: "Docker Topics",
    collapsed: false,
    items: [
      {
        text: "Container",
        link: `${dockerBasePath}/container`,
      },
      {
        text: "Image",
        link: `${dockerBasePath}/image`,
      },
      {
        text: "Volume",
        link: `${dockerBasePath}/volume`,
      },
      {
        text: "Network",
        link: `${dockerBasePath}/network`,
      },
      {
        text: "Resource Limits",
        link: `${dockerBasePath}/resource-limits`,
      },
      {
        text: "Docker Compose",
        link: `${dockerBasePath}/docker-compose`,
      },
    ],
  },
  {
    text: "Additional",
    collapsed: false,
    items: [
      {
        text: "Useful commands",
        link: `${dockerBasePath}/useful-commands`,
      },
      {
        text: "Future",
        link: `${dockerBasePath}/future`,
      },
    ],
  },
  // {
  //   text: "Best practices",
  //   collapsed: false,
  //   items: [
  //     {
  //       text: "Dockerfile",
  //       link: `${dockerBasePath}/best-practice-dockerfile`,
  //     },
  //   ],
  // },
];

export const roadmapContents: RoadmapContent[] = [
  {
    title: "SSH",
    description:
      "SSH stands for Secure Shell (SSH) Protocol that is mainly used to connect to a Linux server remotely.",
    date: formatDate("2024-03-30"),
    link: sshMainPage,
    isComplete: "true",
  },
  {
    title: "Git",
    description:
      "Git is a distributed version control system that tracks file changes.",
    date: formatDate("2024-04-12"),
    link: gitMainPage,
    isComplete: "true",
  },
  {
    title: "Docker",
    description:
      "Docker is an open platform for developing, shipping, and running applications.",
    date: formatDate("2024-05-01"),
    link: dockerMainPage,
    isComplete: "true",
  },
  {
    title: "Twelve Factor App",
    description:
      "It is a methodology for building software-as-a-service applications with best practices.",
    date: formatDate("2024-05-12"),
    link: twelveFactorMainPage,
    isComplete: "true",
  },
];

export const navItems = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  {
    text: "Blog",
    items: [
      { text: "Blog Home", link: "/blog" },
      { text: "Tags", link: "/blog/tags" },
      { text: "Archives", link: "/blog/archives" },
    ],
  },
  {
    text: "Docs",
    items: [
      { text: "SSH", link: sshMainPage },
      { text: "Git", link: gitMainPage },
      { text: "How-to?", link: howToMainPage },
      { text: "Docker", link: dockerMainPage },
      { text: "12 Factor App", link: twelveFactorMainPage },
    ],
  },
  { text: "Gallery", link: "/gallery" },
];

export const navSideBar = {
  "/docs/ssh/": sshSideBar,
  "/docs/git/": gitSideBar,
  "/docs/how-to/": howToSideBar,
  "/docs/docker/": dockerSideBar,
};
