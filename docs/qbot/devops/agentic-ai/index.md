---
sidebar_position: 4
sidebar_label: 'Agentic AI for DevOps'
---

# Agentic AI for DevOps

Smarter DevOps with QBot, an AI-powered DevOps assistant that helps you to manage your Kubernetes clusters and cloud-native tools. QBot is built on top of the Model Context Protocol (MCP) to help developers and DevOps practitioners to get the most out of Kubernetes and cloud-native tools.

<!-- 
[AIOps and DevOps](https://www.bmc.com/blogs/aiops-vs-mlops-devops-itops-observability) are both IT methodologies that aim to improve efficiency and effectiveness. **AIOps uses AI to manage IT operations**, while **DevOps focuses on improving software development**.

At least on the first stage, QBot is focused on DevOps, and depending on the feedback and the community, we can improve the AI to help on the AIOps side as well.
-->

At "[La Rebelion](https://rebelion.la/)" we consider that MCP (Model Context Protocol) is the best way to interact with LLMs, so the QBot Agent is built on top of the MCP. The implementation is based on Agentico's MCP SDK, that provides a set of MCP tools to interact with the QBot SDK and to execute actions on the Kubernetes cluster on behalf of the LLM users.

We decided to implement the MCP server because we can expose the SDK over HTTP, or `stdin` - for CLI, **important in airgapped environments**.

## Acknowledgments

- [Helm](https://helm.sh/)
- [Kubernetes](https://kubernetes.io/)
- [Bitnami](https://bitnami.com/)
- ["La Rebelion" GitHub](https://github.com/la-rebelion/)
- ["La Rebelion" Website](https://rebelion.la/)
- [Agentico](https://agentico.com/)
- [Agentico GitHub](https://github.com/agentico-dev/)
- [K1s](https://k1s.sh/), simplifying Kubernetes for developers.