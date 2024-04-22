---
title: Deploying with Docker
nextjs:
  metadata:
    title: Deploying with Docker
    description: Learn how to deploy your staarter.dev project using Docker.
---

Docker is a popular platform for building, shipping, and running applications in containers. With Docker, you can package your application and its dependencies into a container image, which can then be deployed to any environment that supports Docker.

In this guide, you will learn how to build your staarter.dev project into a Docker container.

## Prerequisites

Before you begin, make sure you have the following prerequisites:

- A working staarter.dev project: If you don't have a project set up yet, follow the [Getting Started](/docs/setup/getting-started) guide to create a new project.
- Docker installed on your machine: You can download and install Docker from the [official Docker website](https://www.docker.com/get-started).

## Set `output` in `next.config.js`

Next.js can automatically create a standalone folder that copies only the necessary files for a production deployment including select files in `node_modules`.

To do this, add the following configuration to your `next.config.js` file:

```javascript
/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  output: 'standalone',
  // ... other configurations
})
```

## Create a Dockerfile

Create a new file named `Dockerfile` in the root of your web app directory with the content from [this example](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile).

### Create a .dockerignore File

Create a new file named `.dockerignore` in the root of your web app directory with content from [this example](https://github.com/vercel/next.js/blob/canary/examples/with-docker/.dockerignore).

## Build the Docker Image

To build the Docker image, run the following command in your terminal from the root of your web app directory:

```shell
docker build -t my-next-app .
```

This command builds the Docker image with the tag `my-next-app`. You can replace `my-next-app` with any name you prefer.

## Run the Docker Container

To run the Docker container, use the following command:

```shell
docker run -p 3000:3000 my-next-app --env-file .env.local
```

This command runs the Docker container with the tag `my-next-app` and maps port `3000` on your local machine to port `3000` in the container. It also loads environment variables from the `.env.local` file.
