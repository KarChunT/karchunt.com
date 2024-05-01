---
title: Setup & Install
titleTemplate: How to?
description: Learn how to setup and install those tools
---

<h1>Setup & Install</h1>

## Setup self-hosted GitHub runner

::: tip Important
All the **following commands** you will get it from the page that you choose Runner image and Architecture.
:::

1. Go to your repository under **Settings -> Actions -> Runners**.

2. Click on **New self-hosted runner** button.

3. Choose your Runner image and Architecture.

4. For my case is **Linux** and **x64**.

   ```bash
   mkdir actions-runner && cde actions-runner

   curl -o actions-runner-linux-x64-2.306.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.306.0/actions-runner-linux-x64-2.306.0.tar.gz

   # Optional step
   echo "<value>  actions-runner-linux-x64-2.306.0.tar.gz" | shasum -a 256 -c

   tar xzf ./actions-runner-linux-x64-2.306.0.tar.gz
   ```

5. Create, label, and run the runner

   ```bash
   ./config.sh --url <github-repo-url> --token <token> --labels <lists-of-label>

   ./run.sh
   ```

6. Using your self-hosted runner

   ```yaml
   runs-on: [self-hosted, <label-you-defined>]
   ```

7. Optional: You can configure the [self-hosted runner application as a service](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/configuring-the-self-hosted-runner-application-as-a-service)

## Setup k3s on Ubuntu

:::tip Documentation
[k3s Documentation](https://docs.k3s.io/)  
[k3s GitHub](https://github.com/k3s-io/k3s)
:::

1. Install k3s as a service

   ```bash
   curl -sfL https://get.k3s.io | sh -
   ```

2. Fix k3s permission denied issues

   ```bash
   mkdir ~/.kube 2> /dev/null
   export KUBECONFIG=~/.kube/config
   sudo k3s kubectl config view --raw > "$KUBECONFIG"
   chmod 600 "$KUBECONFIG"
   ```

   - More [details](https://devops.stackexchange.com/questions/16043/error-error-loading-config-file-etc-rancher-k3s-k3s-yaml-open-etc-rancher) in fixing k3s permission denied issues.

3. export `KUBECONFIG=~/.kube/config` to either `~/.profile` or `~/.bashrc` to make it persist on reboot(Optional).

   ```bash
   nano ~/.bashrc
   source ~/.bashrc
   ```

   Navigate to the last line

   ::: code-group

   ```bash [~/.bashrc]
   # last line
   export KUBECONFIG=~/.kube/config
   ```

   :::

4. Test connection
   ```bash
   kubectl get all
   ```

## Run sudo command without a password

1. Open `/etc/sudoers` with `visudo` editor, as if straight away edit `/etc/sudoers` file with text editor, it won't validate the syntax.

   ```bash
   sudo visudo
   ```

2. Append this line `username   ALL=(ALL:ALL) NOPASSWD:ALL` at the end of the `/etc/sudoers` file

   ::: code-group

   ```bash [/etc/sudoers]
   # User privilege specification
   root    ALL=(ALL:ALL) ALL

   # Members of the admin group may gain root privileges
   %admin ALL=(ALL) ALL

   # Allow members of group sudo to execute any command
   %sudo   ALL=(ALL:ALL) ALL

   # See sudoers(5) for more information on "@include" directives:

   @includedir /etc/sudoers.d
   kc      ALL=(ALL:ALL) NOPASSWD:ALL
   ```

   :::

3. Open a new terminal window and test the command with **root** privileges
   ```bash
   sudo apt-get update
   ```

## Install Java with APT on Ubuntu

[Documentation](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-22-04)

1. Update **apt** package

   ```bash
   sudo apt update
   ```

2. Install JRE

   ```bash
   sudo apt install default-jre
   ```

3. Verify Java installation

   ```bash
   java -version
   ```

4. Install Java JDK

   ```bash
   sudo apt install default-jdk
   ```

5. Verify Java JDK installation
   ```bash
   javac -version
   ```

## Install Java OpenJDK 17

1. Update **apt** package

   ```bash
   sudo apt update
   ```

2. Install OpenJDK and JRE 17

   ```bash
   sudo apt-get install openjdk-17-jdk openjdk-17-jre -y
   ```

3. Check Java Version
   ```bash
   java -version
   ```

## Install Maven (MVN)

1. Update **apt** package

   ```bash
   sudo apt update
   ```

2. Install Maven

   ```bash
   sudo apt-get install maven -y
   ```

3. Check Maven Version
   ```bash
   mvn -version
   ```

## Install latest Git

[PPA Git](https://launchpad.net/~git-core/+archive/ubuntu/ppa?ref=itsfoss.com)

1. Install stable Git version

   ```bash
   sudo add-apt-repository ppa:git-core/ppa
   sudo apt-get update
   sudo apt-get install git
   ```

2. Check Git version
   ```bash
   git --version
   ```

## Install packages using deb file

1. Navigate to your deb file location

2. Install a .deb file
   ```bash
   sudo dpkg -i <file-name>.deb
   ```

## Install KubeVirt

::: tip Documentation
[KubeVirt Releases](https://github.com/kubevirt/kubevirt/releases)  
[KubeVirt Installation Documentation](https://kubevirt.io/quickstart_cloud/)
:::

1. Install KubeVirt operator

   ```bash
   export VERSION=$(curl -s https://api.github.com/repos/kubevirt/kubevirt/releases | grep tag_name | grep -v -- '-rc' | sort -r | head -1 | awk -F': ' '{print $2}' | sed 's/,//' | xargs)
   echo $VERSION
   kubectl create -f https://github.com/kubevirt/kubevirt/releases/download/${VERSION}/kubevirt-operator.yaml
   ```

2. Deploy KubeVirt Custom Resource

   ```bash
   kubectl create -f https://github.com/kubevirt/kubevirt/releases/download/${VERSION}/kubevirt-cr.yaml
   ```

3. Install Virtctl

   ```bash
   ARCH=$(uname -s | tr A-Z a-z)-$(uname -m | sed 's/x86_64/amd64/')
   curl -L -o virtctl https://github.com/kubevirt/kubevirt/releases/download/${VERSION}/virtctl-${VERSION}-${ARCH}
   chmod +x virtctl
   sudo install virtctl /usr/local/bin
   ```

## Install Jenkins with Docker Compose

[Dockerhub Jenkins](https://hub.docker.com/r/jenkins/jenkins)

1. Create docker-compose.yml
   ::: code-group [docker-compose.yml]

   ```yaml
   version: "3.8"
   services:
     jenkins:
       image: jenkins/jenkins:jdk11
       restart: always
       privileged: true
       user: root
       ports:
         - "8081:8080"
         - "50000:5000"
       container_name: jenkins_jdk11
       volumes:
         - ~/Desktop/self-hosted/jenkins_home:/var/jenkins_home
         - /var/run/docker.sock:/var/run/docker.sock
   ```

   :::

   - You can map `/var/jenkins_home` to any local location you liked

2. Start docker-compose.yml as background

   ```bash
   docker-compose up -d
   ```

3. Verify Jenkins container service

   ```bash
   docker-compose ps
   ```

4. Get the Jenkins admin password

   ```bash
   docker exec jenkins_jdk11 cat /var/jenkins_home/secrets/initialAdminPassword
   ```

5. Open your browser, navigate to `localhost:8081`, and paste your password

<style scoped>
h2 {
  margin-top: 36px;
}
</style>
