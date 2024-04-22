---
title: Getting started
nextjs:
  metadata:
    title: Getting started
    description: Get up and running with staarter.dev in just a few steps.
---

## Prerequisites

Before you can start using staarter.dev, you need to have the following tools installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (version 20 or higher)
- [Yarn](https://yarnpkg.com/getting-started/install) (version 1.22 or higher)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/download) (or any other code editor, but VS Code is recommended)

Also, make sure you have the following accounts set up:

- [GitHub account](https://github.com/join) (for cloning the repository)

## Clone the Repository

To begin, clone the staarter.dev repository to your local machine using the following command in your terminal:

{% callout type="warning" title="Replace [project-name] with your project name" %}
Make sure to replace `[project-name]` with the name of your project.
{% /callout %}

### Using the Template

[Create a new repository from this template](https://github.com/new?template_name=next-template&template_owner=staarter-dev) on GitHub. After creating the repository, clone it to your local machine using the following command:

```shell
git clone [repository-url]
```

Replace `[repository-url]` with the URL of the repository you created from the template.

### Using HTTPS

```shell
git clone https://github.com/staarter-dev/next-template.git [project-name]
```

### Using SSH

```shell
git clone git@github.com:staarter-dev/next-template.git [project-name]
```

## Move into the Project Directory

```shell
cd [project-name]
```

## Set your Own Remote

Skip this step if you are using the template repository.

After cloning the repository, you should set your own remote to push your changes to your own repository. You can do this using the following commands:

```shell
git remote set-url origin [your-repository-url]
```

## Add the upstream remote

To receive updates from the staarter.dev repository, you need to add the `upstream` remote to your Git repository. You can do this using the following commands:

### Using HTTPS

```shell
git remote add upstream https://github.com/staarter-dev/next-template.git
```

### Using SSH

```shell
git remote add upstream git@github.com:staarter-dev/next-template.git
```

## Install Dependencies

Once you have the project on your local machine, move into the project directory and install the necessary dependencies using Yarn:

```shell
yarn install
```

## Fill in the Environment Variables

Next, you need to fill in the environment variables. Copy the `.env.example` file to `.env.local` and fill in the required values:

```shell
cp .env.example .env.local
```

For more information on setting up environment variables, refer to the [Environment Variables](/docs/setup/environment-variables) documentation.

## Start the Development Server

After the installation is complete, you're ready to start developing! Run the following command to start your local development server:

```shell
yarn dev
```

The development server will start, and you can access your project at [http://localhost:3000](http://localhost:3000).
