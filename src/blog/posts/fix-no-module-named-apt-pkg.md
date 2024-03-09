---
title: "Linux Problems Solving - No Module named 'apt_pkg'"
description: "This article will teach you how to solve no module named 'apt_pkg'."
date: 2023-12-31
publish: true
aside: "left"
tags:
  - linux
---

## Method 1 - Install `python-apt` package

```bash
sudo apt-get install python-apt
```

## Method 2 - Reinstall `python3-apt` package

```bash
sudo apt-get python3-apt --reinstall
```

## Method 3 - Properly set `.so` file location

```bash
cd /usr/lib/python3/dist-packages
sudo cp apt_pkg.cpython-310-x86_64-linux-gnu.so apt_pkg.so
```
