---
title: Technology
titleTemplate: How to?
description: Learn how to use technology
---

<h1>Technology</h1>

## Share your local server with Ngrok

:::tip Documentation
[Ngrok](https://ngrok.com/)  
[Ngrok Documentation](https://ngrok.com/docs)
:::

1. Sign up for Ngrok

2. [Optional] You can free claim 1 subdomain from Ngrok

3. Download ngrok packages based on your OS.

4. Unzip to install

   ```bash
   tar -xvzf ngrok-v3-stable-linux-amd64.tgz
   ```

5. [Optional] Copy to `/usr/local/bin`

   ```bash
   cp ngrok /usr/local/bin
   ```

6. Connect your account

   ```bash
   ngrok config add-authtoken <auth-token>
   ```

   - The auth-token saved to configuration file: `/home/<username>/.config/ngrok/ngrok.yml`

7. Start a HTTP tunnel forwarding to your local port 80

   ```bash
   ngrok http 80
   ngrok http --domain=<domain-name> 80
   ```

8. Go to your browser and type your domain name.

<style scoped>
h2 {
  margin-top: 36px;
}
</style>
