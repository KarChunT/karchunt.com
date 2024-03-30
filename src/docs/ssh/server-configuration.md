---
title: Server Configuration
titleTemplate: SSH
description: Understand server configuration
---

<h1>Server Configuration</h1>

## Disable password authentication

If you have set up your SSH keys, then my advice is to disable password authentication, as passwordless is more secure than password authentication.

1. Go to your remote server, find, and edit `/etc/ssh/sshd_config`.

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Search for `PasswordAuthentication` text and set it to "no".
   ::: code-group

   ```txt [sshd_config]
   PasswordAuthentication no
   ```

   :::

3. Restart the SSH service
   ```bash
   sudo service ssh restart
   ```

## Change SSH Daemon runs/listens on port

By default, SSH Daemon runs/listens on port 22. You can change it as well.

1. Go to your remote server, find, and open `/etc/ssh/sshd_config`.

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Search for `Port` text and edit it based on your needs
   ::: code-group

   ```txt [sshd_config]
   #Port 22
   Port 1234
   ```

   :::

3. Restart the SSH service
   ```bash
   sudo service ssh restart
   ```

## Limit authenticate users to login

1. Go to your remote server, find, and open `/etc/ssh/sshd_config`.

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Search for `AllowUsers` or `AllowGroups`, if not found, then create it anywhere. Either one should be fine, or you want to implement both too.

   ::: code-group

   ```txt [sshd_config]
   AllowUsers user1 user2 user3
   AllowGroups groupname
   ```

   :::

3. Restart the SSH service

   ```bash
   sudo service ssh restart
   ```

## Disable root login

It is a good practice to disable root login

1. Go to your remote server, find, and open `/etc/ssh/sshd_config`.

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Search for `PermitRootLogin` text and set it to "no".

   ::: code-group

   ```txt [sshd_config]
   PermitRootLogin no
   ```

   :::

3. Restart the SSH service
   ```bash
   sudo service ssh restart
   ```

<style scoped>
h2 {
  margin-top: 36px;
}
</style>
