---
title: Reflog
titleTemplate: Git
description: Understand what is reflog
---

<h1>Reflog</h1>

## Git Reflog

The `git reflog` command shows us all the actions that have been taken on our repository. Everyone will make mistake and if you make a mistake, you can simply undo that change by resetting your **HEAD** based on the information (commit-id) that reflog provides to us.

```bash
git reflog
git reset --hard <commit-id>
```

![reflog](/docs/git/reflog.png)

<style scoped>
h2 {
  margin-top: 36px;
}
</style>
