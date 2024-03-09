---
title: "Git LFS Problems Solving"
description: "This article will teach you how to solve fix files that should been pointers in LFS but weren't."
date: 2024-01-01
publish: true
aside: "left"
tags:
  - git
---

## Fix Git LFS Pointers issue

```bash
git lfs migrate import --no-rewrite "file_path" "file_path"
git lfs ls-files | grep "file_path"
git lfs push origin --all
git push origin --all
```

Basically, the first comand is to reimport back those files into pointer files in LFS, without writing the history. Do take note that you can include as many `file_path` as you can.

Next, the second command is to help us to check whether the `file_path` already been imported as Git LFS pointers files.

Lastly, we just need to push back the LFS files and the contents to the repository itself.
