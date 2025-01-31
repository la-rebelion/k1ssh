---
slug: /
sidebar_position: 1
title: Introduction
description: The best way to learn Kubernetes is by doing, and K1s, a Kubernetes serverless cluster will help you quickly get to grips with the technology.
keywords:
  - Kubernetes
  - learn Kubernetes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start to get Kubernetes in 1 Second

K1s is a platform designed to make Kubernetes and cloud-native tools accessible to developers of all experience levels. It eliminates the complexities of setup and configuration, offering a serverless Kubernetes cluster and an intelligent terminal integrated with Kubernetes and cloud-native tools.

## What is K1s?

- **[K1s Serverless](./k1s-serverless) Cluster** – Instantly spin up a Kubernetes environment without installation or configuration hassles. K1sS is a simulated Kubernetes cluster—accessible via a public API endpoint— that allows you to explore Kubernetes features and resources effortlessly.

- **[K1s Terminal](./k1s-terminal) (K1sT)** – A Kubernetes-native web-terminal with interactive, color-coded, and cached outputs to simplify resource navigation and streamline workflows.

- **K1s [QBot](./qbot)** – An AI-powered assistant built powered with Agentic AI on Model Context Protocol (MCP) to enhance Kubernetes and cloud-native development without replacing human expertise, but rather augmenting it.

## Why Use K1s?

- **Zero Setup:** No complex installation - just start using Kubernetes instantly!
- **Enhanced Productivity:** A seamless CLI experience optimized for DevOps workflows.
- **AI Assistance:** QBot helps you maximize Kubernetes efficiency through AI-powered insights.
- **Community-Driven:** Currently in Technical Preview, with no authentication required - your feedback shapes the future of K1s.

## Get Started

1. [Sign up](./getting-started/sign-up) for advanced features.
2. Ensure `kubectl` is [installed](https://kubectl.docs.kubernetes.io/installation/kubectl/) (required for K1s Serverless and QBot).
3. Start exploring Kubernetes effortlessly.

Lighter, faster, and easier than ever. 🪶

The best way to learn Kubernetes is by doing, and K1s, a **Kubernetes serverless cluster** will help you quickly get to grips with the technology.

All users are anonymous by default and have access to the default namespace, some examples you can try immediately:

<Tabs>
<TabItem value="k1s-terminal" label="K1sT">

Access the [K1s terminal](https://k1s.sh) and type command below, yes, that's all!

```k1s
kubectl get pods
```

<!-- <img src={k1stUrl} alt="K1s Terminal Demo" width="600" /> -->
![K1s](https://cdn.statically.io/img/cdn.rebelion.la/img/K1s-v0.2.0.gif?w=500&f=auto)

</TabItem>
<TabItem value="k1s-serverless" label="Local">

You can also access the K1s serverless cluster from your local terminal if you have `kubectl` installed.

```k1s
kubectl get pods --server=https://api.k1s.me/kubernetes
```

Ok, NO need to install anything, just use the terminal and type the command.

```cr
curl https://api.k1s.me/kubernetes/api/v1/pods
```

</TabItem>

</Tabs>

---

:::tip Get Early Access!

<a href="https://go.rebelion.la/k1s-access">Register here</a>

:::

## What you'll need

- [kubectl](https://kubectl.docs.kubernetes.io/installation/kubectl/) version 1.27+ installed in your local PC or server from where K1s Serverless is going to be accessed.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}>
    {children}
  </span>
);