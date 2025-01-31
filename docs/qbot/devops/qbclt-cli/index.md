---
sidebar_label: 'qbclt - QBot CLI'
sidebar_position: 1
---

# `qbclt` - QBot CLI

`QBot control` (qbctl) is a CLI tool part of the [QBot project](https://k1s.sh/qbot), a bot to help developers and DevOps practitioners quickly scaffold new microservices, tools, and utilities AI supported. The CLI tool provides a set of commands to interact with the QBot SDK.

## Actions

- **init**: Scaffold a new project with a directory structure and configuration files aligned with a `helm` Chart and Kubernetes `kustomize` setup. The project is created with no files, only directories and configuration files, unless a template is specified.
  - **\<projectName\>**: The name of the project.
  - **-t, --template [template]**: The template to use for the project. Default: `default`. If not found, the default template will be used.
- **clone**: Clone a repository from a remote URL and scaffold a new project with a directory structure and configuration files aligned with a `helm` Chart and Kubernetes `kustomize` setup.
- **fork**: Fork a repository from a remote URL and scaffold a new project with a directory structure and configuration files aligned with a `helm` Chart and Kubernetes `kustomize` setup.
  - **\<repositoryUrl\>**: The URL of the repository to clone.
- **snapshot**: Create a snapshot of the current project state and save it to a file. Semantically, a snapshot is a representation of the project state at a specific point in time.
  - **[snapshotName]**: The name of the snapshot, if not provided, a default name will be used. All the snapshots are saved in the `.qbot/snapshots` directory, and the naming convention is `snapshotName-<timestamp>.yaml`. We encorage to use semantic versioning for the snapshot names.
  - **-g, --golden**: Save the snapshot as a golden snapshot. Golden snapshots are used as the reference for comparison.
- **diff**: Compare the current project state with a snapshot.
  - **[snapshotName]**: The name of the snapshot to compare with the current project state, if not provided, the golden snapshot will be used, but if no golden snapshot is found, the latest snapshot will be used.
- **rollback**: Rollback the project state to the golden snapshot or a specific snapshot.
  - **[snapshotName]**: The name of the snapshot to rollback to, if not provided, the latest snapshot will be used.
- **deploy**: Deploy the project to a Kubernetes cluster.
  - **-e, --environment [environment]**: The environment to deploy the project to. Default: `development`.
  - **-r, --release [release]**: The release version to deploy. Default: `latest`. In this context, the release version can be a snapshot name or a semantic version.