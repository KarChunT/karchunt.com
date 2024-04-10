---
title: Remote repository
titleTemplate: SSH
description: Understand on how to play with remote repositories
---

<h1>Remote repository</h1>

## Configuration and setup Git config

You can refer more details in [Create remote branches and push](/docs/git/branches#create-remote-branches-and-push) section.

```bash
git remote add <remote-name> <remote-repo-url>
git push -u <remote-name> <local-branch-name>
```

## Fetching and pulling

| Fetch                                                                                   | Pull                                                                                                     |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Only changes are copied into your local Git repository and does not reflect the changes | It copies changes from a remote repository directly into your working directory and reflect the changes. |
| Fetch just fetch                                                                        | pull = fetch + merge                                                                                     |

```bash
# one way
git fetch origin <branch-name>
git merge origin/<branch-name>

# another way
git pull origin <branch-name> # or just git pull
```

### Fetching

![git-sim-fetch](/docs/git/git-sim-fetch.png)

### Pulling

![git-sim-pull](/docs/git/git-sim-pull.png)

<a href="/docs/git/git-sim-pull.webm" target="_blank">Watch animation</a>

## List all remote repositories

```bash
git remote -v
```

<style scoped>
h2 {
  margin-top: 36px;
}
</style>
