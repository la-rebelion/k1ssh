---
sidebar_label: 'For Developers'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# QBot SDK

The QBot SDK is a set of libraries that provide seamless interaction with Kubernetes, Helm, Kustomize, and other cloud-native tools. It acts as the core engine powering K1s QBot, much like Kubernetes' kubelet, enabling both CLI-based and programmatic control over Kubernetes resources.

## How QBot SDK Works

K1s has implemented two main components to interact with the QBot SDK:

* **[QBot CLI](../devops/qbclt-cli/)** – A command-line interface that allows DevOps practitioners to interact with Kubernetes applications using the QBot SDK.
* **[QBot AI Agent](../devops/agentic-ai/)** – A service that leverages Large Language Models (LLMs) to perform actions on the Kubernetes cluster intelligently.

Both components communicate with the QBot SDK to execute tasks efficiently, helping you streamline Kubernetes management with AI-driven automation.

## QBot AI Agent Extensions (aka AI Tools)

The QBot AI Agent Extensions, also known as AI Tools, are a set of tools that Large Language Models (LLMs) can leverage to perform actions on the Kubernetes cluster intelligently. These tools are designed to help developers and DevOps practitioners quickly scaffold new microservices, tools, and utilities. Even though the K1s has a set of tools, the QBot AI Agent Extensions can be extended to include more tools and utilities. Use the [Agentico `mcp-create-tool`](https://agentico.dev/docs/quickstart/create-a-server) command to create your own AI Tool and extend the QBot AI Agent. Check the video below to learn more about how to create an AI Tool for the QBot AI Agent.

Click on the tabs below to learn more about the QBot SDK components: 👇🏻

<Tabs>
<TabItem value="video" label="Create a Tool">
<iframe width="100%"  style={{"aspect-ratio": "16 / 9"}} src="https://www.youtube.com/embed/DIl3gVmvf0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>

</TabItem>
<TabItem value="components-overview" label="QBot Components Overview">

![QBot Components](https://cdn.statically.io/img/cdn.rebelion.la/img/qbot/qbot-components-overview.png)

</TabItem>
<TabItem value="components-details" label="QBot Components details">

![QBot Components Diagram](https://cdn.statically.io/img/cdn.rebelion.la/img/qbot/qbot-components.png)

</TabItem>

</Tabs>