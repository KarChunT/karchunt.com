import { RoadmapContent } from "../types/types";
import { sshBasePath, gitBasePath } from "./docsConstants";
import { formatDate } from "../utils/common";

export const roadmapContents: RoadmapContent[] = [
  {
    title: "SSH",
    description:
      "SSH stands for Secure Shell (SSH) Protocol that is mainly used to connect to a Linux server remotely.",
    date: formatDate("2024-03-30"),
    link: `${sshBasePath}/ssh-overview`,
    isComplete: "true",
  },
  {
    title: "Git",
    description:
      "Git is a distributed version control system that tracks file changes.",
    date: formatDate("2024-04-12"),
    link: `${gitBasePath}/what-is-git`,
    isComplete: "true",
  },
];
