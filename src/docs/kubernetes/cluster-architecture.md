---
title: Architecture
titleTemplate: Kubernetes
description: Understand how the Kubernetes architecture works
---

<h1>Architecture</h1>

## Cluster Architecture

![Cluster-Architecture](/docs/kubernetes/cluster-architecture.gif)

Each Kubernetes cluster has a **master node** (control plane) and one or more **worker nodes**. It's responsible for **managing the cluster**, while the worker nodes (Nodes) are responsible for **hosting application as containers** and **running the applications**.

### Cluster

A cluster is a **set of nodes grouped**, with multiple nodes within a cluster, it can help to **distribute** or **share** the **workload** as well. As a result, your application will still be **accessible** even if one of the nodes **fails**.

### Nodes

A node is a **worker machine**, it can be either a physical or virtual one depending on the Kubernetes cluster. Each of the node is **managed by the control plane** (master node) and a node can have **multiple pods** within it. This is where **containers will be launched** by Kubernetes.

### Master node (Control Plane)

::: tip
Master node can be **hosted** in the form of **containers**.
:::

A master node is a **node** that is **responsible** for;

- **managing** the cluster
- **managing**, **planning**, **scheduling**, and **monitoring** the nodes
- **storing** the information regarding the **cluster** such as nodes, pods, configs, etc
- **transferring** the **workload** of the **failed node** to another **worker node**

These tasks are performed by the master node through a set of **components** known as the control plane components.

- ETCD Cluster
- kube controller manager
- scheduler (kube-scheduler)
- kube-apiserver

#### ETCD Cluster

[Reference](https://etcd.io/)

ETCD is a **distributed, reliable key-value stored database** to store **information** regarding the **cluster** such as the nodes, pods, configs, secrets, accounts, roles, bindings, and others in a **key-value format (JSON)**.

All information you see when you run the `kubectl get` command is from the **ETCD server**. Remember all changes made to the cluster like adding additional nodes, deploying pods, etc, will be **updated** in the **ETCD server**.

There are two ways to deploy ETCD in Kubernetes environment.

- Manual installation

  - [ETCD releases](https://github.com/etcd-io/etcd/releases)
  - [ETCD installation instructions](https://etcd.io/docs/v3.5/install/)
    - `--advertise-client-urls 'http://{IPADDRESS}:2379'` = This is the address that ETCD listens, `2379` is the **default port** of ETCD listens. `kube-apiserver` will use this URL when trying to connect to ETCD, so this URL has to be configured on **kube-apiserver configuration file**.

- kubeadm
  - ![kubeadm etcd](/docs/kubernetes/kubeadm-etcd.png)
    Normally, we set up our cluster using `kubeadm` tool, the `kubeadm` tool will auto-deploy the ETCD server as a Pod in the `kube-system` namespace. Of course, you can `exec` into that pod to use the `etcdctl` command.
    - `kubectl exec etcd-controlplane -n kube-system -- etcdctl get / --prefix --keys-only`. With this command, you can get all keys stored by Kubernetes, you will notice the root directory is the **registry**, and below that are various Kubernetes objects like nodes, pods, deployments, etc, as it stores data in a specific directory structure.

#### Kube Controller Manager

![kube-controller-manager](/docs/kubernetes/kube-controller-manager.png)

The kube controller manager **manage various controllers** in Kubernetes, for example;

- node-controller
- replication-controller
- namespace-controller
- deployment-controller
- endpoint-controller
- job-controller, etc

The controller is a **process** that is responsible for **monitoring the state** of various components and **resolving situations** as necessary to the **desired state**. There are two ways to deploy kube controller manager in Kubernetes environment.

- Manual installation

  - [kube controller manager releases](https://kubernetes.io/releases/download/)

- kubeadm
  - Similar to above, we can use `kubectl get pods -n kube-system` command to find the **kube controller manager pod**.
  - Run on control-plane (master node)
    - If you want to see the kube-controller-manager pod config options, then you have to `cat /etc/kubernetes/manifests/kube-controller-manager.yaml`.
    - If you want to see the kube-controller-manager service options, then you have to `cat /etc/systemd/system/kube-controller-manager.service`.
    - If you want to see the kube-controller-manager running process, then you have to `ps -aux | grep kube-controller-manager`.

##### Node-controller

![node-controller-gif](/docs/kubernetes/node-controller.gif)

The node controller **monitors node status** and **takes necessary action** to ensure that **applications** are **running** through the **kube-apiserver**.

![node-controller](/docs/kubernetes/node-controller.png)

Nodes are **tested every 5 seconds** to ensure the node is **healthy** by the node controller. After **40 seconds** of **not receiving heartbeats** from a node, it **marks the node as unreachable**. The system **gives a node 5 minutes to return** after it has been marked unreachable. As a result, if the **PODs** are **part** of a **replicaset**, those pods will be **removed** from that node and will be **provisioned** those pods on the **healthy nodes**.

##### Replication-controller

![replication-controller-gif](/docs/kubernetes/replication-controller.gif)

The replication controller **monitors the replicaset status** and **takes necessary action** to ensure that the **desired number of PODs** are **available** at all times within the replication group. The POD creates a new one if it dies.

#### Kube Scheduler

::: tip
It only **decides** which pod goes to which node.  
Additional add-on

- Taints and tolerations
- Node Selectors
- Node Affinity
  :::

The kube scheduler **identifies** and **schedules** the **pods** on **nodes** based on the **pod resource requirements**, but it does **not place** the pod on the nodes. The **kubelet** is the one who will **place** and **create** the pod on the node.

The reason why we need a scheduler is because there could be **different sizes of nodes and pods**. You will need to ensure that the **node** has **sufficient resources** so that the **pod** can **proceed**. Therefore, each pod is **analyzed** by the scheduler to **determine the best node**.

![kube-scheduler-ranking](/docs/kubernetes/kube-scheduler-ranking.gif)

Here is an example, currently we have one pod with **CPU requirements of 10**. The kube scheduler will be going through **2 phases** to identify and schedule the pod on the **best node**.

1. The kube scheduler will **filter out** those **nodes** that **do not fit the requirements**. So in this case, node 1 will be filtered out as node 1 only has 4 CPUs.
2. (**Rank nodes**) By using a **priority function** or class, the kube scheduler **assigns a score** and **calculates** how much **free space** is available on the nodes after the pod is placed. The **highest score** after calculation will place the pod on that node.
   - Assuming the priority score is **5**
     - Score on node 2 = `10 - 5 = 5`
     - Score on node 3 = `20 - 5 = 15` (Win)

There are two ways to deploy kube scheduler in Kubernetes environment.

- Manual installation

  - [kube scheduler releases](https://kubernetes.io/releases/download/)

- kubeadm
  - Similar to above, we can use `kubectl get pods -n kube-system` command to find the **kube scheduler pod**.
  - Run on control-plane (master node)
    - If you want to see the kube-scheduler pod config options, then you have to `cat /etc/kubernetes/manifests/kube-scheduler.yaml`.
    - If you want to see the kube-scheduler running process, then you have to `ps -aux | grep kube-scheduler`.

#### Kube API Server

::: tip More details
It **orchestrates (manage) all cluster operations**. The **Kubernetes API** is **exposed** for **external users** to **manage the cluster**, as well as for the **controllers** to **monitor the state of the cluster** and make the necessary changes, and for the **worker nodes** to **communicate with the server**.
:::

In Kubernetes, the kube-apiserver is the **primary management component**, which **acts** as the **frontend** to the **cluster**, that means **all internal** (controller-manager, ETCD, kube-scheduler, kubelet) and **external communication** to the cluster is **via** the **kube-apiserver** component.

<style scoped>
h2 {
  margin-top: 36px;
}
</style>
