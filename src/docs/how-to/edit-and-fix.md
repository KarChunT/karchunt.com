---
title: Edit & Fix
titleTemplate: How to?
description: Learn how to edit and fix those and issues
---

<h1>Edit & Fix</h1>

## Edit hostname on Ubuntu

1. Edit `/etc/hostname`

   ```bash
   sudo nano /etc/hostname
   ```

2. Replace any hostname you like. Save the file.
   ::: code-group

   ```bash [/etc/hostname]
   hello-laptop
   ```

   :::

3. Reboot the system

   ```bash
   sudo reboot
   ```

4. Check your hostname
   ```bash
   hostname
   ```

## Fix docker-compose ERROR: max > virtual memory areas vm.max_map_count [65530] is too low, increase to > at least [262144]

Increase VM max map count to the respective value

```bash
sudo sysctl -w vm.max_map_count=262144
```

<style scoped>
h2 {
  margin-top: 36px;
}
</style>
