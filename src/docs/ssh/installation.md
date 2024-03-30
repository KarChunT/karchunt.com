---
title: SSH Installation
titleTemplate: SSH
description: Understand how to install SSH
---

<h1>SSH Installation</h1>

## Install SSH on Linux

```bash
sudo apt-get update
sudo apt-get install -y openssh-client openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh

# you can trigger either one will do
sudo systemctl status ssh
sudo systemctl status sshd
```

You can find all the files under `/home/<username>/.ssh`

::: tip
For Windows Users: Enable WSL and SSH into Windows with Bash.  
[Get started with OpenSSH for Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui)
:::

<style scoped>
h2 {
  margin-top: 36px;
}
</style>
