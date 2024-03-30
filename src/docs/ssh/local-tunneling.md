---
title: Local Tunneling
titleTemplate: SSH
description: Understand local tunneling
---

<h1>Local Tunneling</h1>

More information: [A Visual Guide to SSH Tunnels: Local and Remote Port Forwarding](https://iximiuz.com/en/posts/ssh-tunnels/)

## Local tunneling to a server

Traffic between the localhost and remote host can be **tunneled** via SSH connections. To establish a local tunnel on your remote server, use `-L` parameter when connecting and must provide

- Local port for accessing the tunneled connection
- Remote host IP/name
- Remote host port

For general usage, connect to `10.0.0.12` on port 80 on your remote host, then your local machine is able to ping or make the connection to the remote host through port 8080.

```bash
ssh -f -N -L <local-port>:<remote-host-ip-address/name>:<remote-port> <username>@<host>
# example
ssh -L 8080:10.0.0.12:80 username@host
```

Now if you go to your browser/curl to `localhost:8080`, you are able to see the content that hosted at `10.0.0.12:80`.

| Parameters | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| -f         | let SSH go into the background before executing               |
| -N         | does not open a shell or execute a program on the remote side |
| -L         | establish a local tunnel to your remote server                |

If you want to terminate the background connection, you have to find the PID and kill it.

```bash
ps aux | grep <local-port>
kill <process-id>
```

### Local tunneling local network

You can tunnel remote host local network to your local. Here is the animation diagram of the local network web server and common SSH server.

![Local tunneling local network](/docs/ssh/local_tunneling_local_network.gif)

```bash
ssh -L 8080:localhost:8080 user@server
```

### Local tunneling private network

You can tunnnel remote host private network to your local. Here is the animation diagram of the private network web server and common SSH server.

![Local tunneling private network](/docs/ssh/local_tunneling_private_network.gif)

```bash
ssh -L <local-port>:<server-ip-address>:<server-port> <username>@<bastion-server-ip-address>
ssh -L 8080:10.0.0.12:8080 user@bastion
```

## Remote tunneling to a server

::: tip
The concept is same as local tunneling.
:::

A remote tunnel makes a connection to a remote server. The remote port must be specified when creating the remote tunnel. As a result, the remote computer able to connect or access your localhost. To establish a remote tunnel to your remote server, use `-R` parameter when connecting and must provide

- Remote port for accessing the tunneled connection
- Local host IP/name
- Local host port

For general usage, connect to `localhost` on port 8080 on our local computer, then your remote machine is able to ping or make the connetion to the localhost through port 8080.

```bash
ssh -f -N -R <remote-port>:<local-host-ip-address/name>:<local-port> <username>@<remote-host-ip-address/name/gateway>
# example
ssh -R 8080:localhost:8080 user@remote-host-ip-address/gateway
```

Now if you go to your **remote** browser/curl to `localhost:8080`, you are able to see the content that hosted at `localhost:80`.

| Parameters | Description                                     |
| ---------- | ----------------------------------------------- |
| -R         | establish a remote tunnel to your remote server |

### Remote tunneling local network

![Remote tunneling local network](/docs/ssh/remote_tunneling_local_network.gif)

You can tunnel your local network to remote host. Here is the animation diagram of the local network web server and common SSH server.

Here is the animation diagram of the local network web server and common SSH server.

```bash
ssh -R 8080:localhost:8080 user@remote-host-ip-address/gateway
ssh -R 0.0.0.0:8080:localhost:8080 user@remote-host-ip-address/gateway
```

### Remote tunneling private network

![Remote tunneling private network](/docs/ssh/remote_tunneling_private_network.gif)

You can tunnel your local private network to remote host. Here is the animation diagram of the private network web server and common SSH server.

```bash
ssh -R 8080:<local-server-ip-address>:8080 user@remote-host-ip-address/gateway
ssh -R 0.0.0.0:8080:<local-server-ip-address>:8080 user@remote-host-ip-address/gateway
```

<style scoped>
h2 {
  margin-top: 36px;
}
</style>
