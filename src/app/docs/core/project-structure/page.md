---
title: Project Structure
nextjs:
  metadata:
    title: Project Structure
    description: Learn about the project structure of staarter.dev and how to navigate the codebase.
---

## Overview

The project structure of staarter.dev is designed to provide a clear and organized layout for developers to work with. By following a consistent structure, you can easily navigate the codebase, understand the relationships between different files and components, and maintain a scalable and maintainable project.

In this guide, you will explore the project structure of staarter.dev and learn how to navigate the various directories and files that make up the codebase. From the top-level folders to the individual components, you'll gain insights into how the project is organized and how you can leverage this structure to enhance your development workflow.

## Top-level folders

The staarter.dev codebase is a [Turborepo](https://turborepo.dev/) monorepo that contains multiple packages and projects. Each package is located in a separate directory within the `packages` folder. The main website project is located in the `apps/web` directory, while other packages such as the API server, billing, mailing and other abstractions are located in their respective directories.

Here are some of the key top-level folders in the staarter.dev codebase:

- `apps/web`: Contains the main website project built with [Next.js](https://nextjs.org/).
- `packages/api`: Contains the API server built with [tRPC](https://trpc.io/).
- `packages/auth`: Contains the authentication logic and OAuth providers.
- `packages/billing`: Contains the payment provider integrations.
- `packages/config`: Contains the configuration files for the project.
- `packages/db`: Contains the [Prisma](https://www.prisma.io/) database client and schema.
- `packages/intl`: Contains the translation files and internationalization logic for other packages.
- `packages/mailing`: Contains the email service provider integrations.
- `packages/storage`: Contains the file storage provider integrations.
- `packages/utils`: Contains utility functions and shared logic used across the project.

## Application structure

Within each package, you will find a consistent structure that organizes the codebase into logical components and directories. This structure helps maintain a clean and scalable project by separating concerns and providing clear boundaries between different parts of the application.

Here are some of the key directories and files you will find in the `apps/web` project:

- `app`: Contains the main application logic, mainly pages and layouts.
- `content`: Contains static content such as legal pages like Terms of Service and Privacy Policy and blog posts.
- `cypress`: Contains end-to-end tests written with [Cypress](https://www.cypress.io/).
- `modules`: Contains reusable modules and components that can be shared across the application.
- `modules/ui`: Contains UI components, hooks and utilities.
- `public`: Contains static assets such as images and other resources.
