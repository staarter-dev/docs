---
title: Upgrading
nextjs:
  metadata:
    title: Upgrading
    description: Learn how to upgrade your staarter.dev project to the latest version.
---

Upgrading your staarter.dev project to the latest version is a relatively straightforward process. This guide will walk you through the steps required to update your project.

## Overview

The staarter.dev project is continuously evolving, with new features, improvements, and bug fixes being released regularly. To take advantage of these updates, it's essential to keep your project up to date with the latest version of the framework and dependencies.

## Upgrading the Framework

To upgrade the staarter.dev framework to the latest version, follow these steps:

1. Check the [release notes](https://github.com/staarter-dev/next-template/releases) to see the changes introduced in the latest version.
2. Rebase your project on the latest `main` branch of the [staarter-dev/next-template](https://github.com/staarter-dev/next-template) repository.
3. Resolve any merge conflicts that may arise during the rebase process.
4. Run `yarn install` to update the project dependencies.

After completing these steps, your project should be upgraded to the latest version of the staarter.dev framework.

To rebase your project on the latest `main` branch, you can use the following commands:

```shell
git fetch upstream
git checkout main # or the branch you want to rebase on
git pull upstream main --rebase --allow-unrelated-histories
```

You will most likely encounter merge conflicts during the rebase process. To resolve these conflicts, follow the instructions provided by Git in your terminal.

## Missing the upstream remote?

If you don't have the `upstream` remote set up in your Git repository, you can add it using the following command:

### Using HTTPS

```shell
git remote add upstream https://github.com/staarter-dev/next-template.git
```

### Using SSH

```shell
git remote add upstream git@github.com:staarter-dev/next-template.git
```
