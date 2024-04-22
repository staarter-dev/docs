---
title: Web App Overview
nextjs:
  metadata:
    title: Web App Overview
    description: Learn about the structure and features of the web app in staarter.dev.
---

The web app in staarter.dev is the main project that serves as the frontend for your application. Built with [Next.js](https://nextjs.org/), the web app provides a modern and performant user interface that interacts with the API server and other backend services.

## Features

The web app in staarter.dev includes the following features:

### Authentication

User authentication is handled using [Lucia](https://lucia-auth.com/) and [Oslo](https://oslo.js.org/), providing a secure and flexible authentication system that supports passwordless authentication, OAuth providers, and two-factor authentication.

- **Passwordless Authentication**: Using Email Magic links, users can sign in without entering a password, providing a seamless and secure authentication experience.
- **OAuth Providers**: staarter.dev includes built-in support for Google and Facebook OAuth providers, but you can easily add additional providers by following the [OAuth Provider](/docs/core/generators) generator.
- **Two-Factor Authentication**: Users can enable two-factor authentication for an extra layer of security when signing in.
- **User Management**: Users can sign up, log in, and manage their account settings, including profile information and password changes.

See [Authentication](/docs/auth/overview) for more information on working with authentication in staarter.dev.

### Styling and Design

- **Tailwind CSS**: The web app uses [Tailwind CSS](https://tailwindcss.com/) for styling and design. Tailwind CSS provides a utility-first approach to styling, allowing you to build custom designs quickly and efficiently.
- **shadcn/ui**: The web app includes a set of reusable UI components and hooks provided by [`shadcn/ui`](https://ui.shadcn.com/). These components help you build consistent and accessible user interfaces across your application.

See [Styling and Design](/docs/web-app/styling) for more information on working with Tailwind CSS and `shadcn/ui` in staarter.dev.

### API Integration

- **tRPC**: The web app communicates with the API server using [tRPC](https://trpc.io/), a type-safe RPC framework for TypeScript. tRPC provides a seamless way to define and call API procedures, ensuring type safety and consistency in your API interactions.

See [Using the API](/docs/web-app/api) for more information on working with the API server in staarter.dev.

### Internationalization

- **next-intl**: The web app supports internationalization (i18n) using [next-intl](https://next-intl-docs.vercel.app/). With next-intl, you can easily manage translations and support multiple languages in your project, ensuring that your application is accessible to users in different regions.

See [Internationalization](/docs/core/internationalization) for more information on managing translations in staarter.dev.

### Routing and Navigation

- **Next.js Router**: The web app uses the [Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing) for routing and navigation. With the Next.js App Router, you can define dynamic routes, handle query parameters, and navigate between pages in your application.

### Blog and Content Management

- **next-mdx-remote**: The web app includes support for rendering Markdown content using [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote#readme). With next-mdx-remote, you can create blog posts, legal pages, documentation pages, and other content using Markdown syntax.

See [Content Management](/docs/web-app/content-management) for more information on managing content in staarter.dev.

### Admin Dashboard

- **Batteries Included**: The web app includes an admin dashboard with built-in features for managing users other settings. The admin dashboard provides a convenient interface for administrators to view and manage application data.
- **Customizable**: You can customize the admin dashboard by adding new pages, components, and features to suit your project's requirements. The admin dashboard is built using the same technologies as the rest of the web app, ensuring consistency and maintainability.

See [Admin](/docs/web-app/admin) for more information on working with the admin dashboard in staarter.dev.
