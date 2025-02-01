---
sidebar_label: 'For Developers'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# QBot SDK

The QBot SDK is a set of libraries that provide seamless interaction with Kubernetes, Helm, Kustomize, and other cloud-native tools. It acts as the core engine powering K1s QBot, much like Kubernetes' kubelet, enabling both CLI-based and programmatic control over Kubernetes resources.

## Create an AI Tool and Components Overview

Click on the tabs below to learn more about the QBot SDK components: 👇🏻

<Tabs>
<TabItem value="video" label="Create a Tool">

Below is a video that shows how to create a tool for the QBot AI Agent. The video demonstrates how to create a MCP tool that can be used to interact with the QBot Engine and perform actions on the Kubernetes cluster. You can learn more about creating tools for the QBot AI Agent by visiting the [Agentico documentation](https://agentico.dev/docs/quickstart/create-a-server).

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

## Components Model Description

The QBot is composed of the following components:

- The **QBot `Engine`**: The main engine that processes the requests and executes the `tasks` through one or more `tools`.
- The QBot `Tools`: [AI Tools](https://agentico.dev/tools) allow LLMs to interact with the QBot Engine, see tools as the APIs for LLMs. The QBot can use multiple `tools` to process a single `task`.
- `Tasks`: The tasks are acions implemented by tools that the QBot can perform. For example, the QBot can detect the "drift configuration" of an `application`, or can perform a "root cause analysis" of a problem. By executing the `drift_detection` tool that will perform the actions needed. A `task` can be composed of multiple `tools`.

Both, the CLI and the QBot Engine, interact with the QBot SDK to perform the actions. The QBot SDK is a set of libraries that encapsulate the logic to interact with the Kubernetes API, Helm, Kustomize, etc.

In an analogy with Kubernetes applications, the QBot Engine is the `kubelet`, the QBot Tools are the `pods`, the QBot tasks are the `deployments`, and the QBot CLI is the `kubectl`, leveraging MCP (Model Context Protocol) to interact with LLMs, MCP would be the `kube-api-server` API. QBot is a `kubelet` for LLMs.

At "[La Rebelion](https://rebelion.la/)" we consider that MCP (Model Context Protocol) is the best way to interact with LLMs, so the QBot API is a group of [MCP Tools](https://agentico.com/tools) that can be used by LLMs to interact with the QBot Engine. The MCP server can expose the MCP API over HTTP, or `stdin` - for CLI, **important in airgapped environments**.

## How QBot SDK Works

K1s has implemented two main components to interact with the QBot SDK:

* **[QBot CLI](../devops/qbclt-cli/)** – A command-line interface that allows DevOps practitioners to interact with Kubernetes applications using the QBot SDK.
* **[QBot AI Agent](../devops/agentic-ai/)** – A service that leverages Large Language Models (LLMs) to perform actions on the Kubernetes cluster intelligently.

Both components communicate with the QBot SDK to execute tasks efficiently, helping you streamline Kubernetes management with AI-driven automation.

## QBot AI Agent Extensions (a.k.a. AI Tools)

The QBot AI Agent Extensions, also known as AI Tools, are a set of tools that Large Language Models (LLMs) can leverage to perform actions on the Kubernetes cluster intelligently. These tools are designed to help developers and DevOps practitioners quickly scaffold new microservices, tools, and utilities. Even though the K1s has a set of tools, the QBot AI Agent Extensions can be extended to include more tools and utilities. Use the [Agentico `mcp-create-tool`](https://agentico.dev/docs/quickstart/create-a-server) command to create your own AI Tool and extend the QBot AI Agent. Check the video below to learn more about how to create an AI Tool for the QBot AI Agent.
