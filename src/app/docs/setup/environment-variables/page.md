---
title: Environment Variables
nextjs:
  metadata:
    title: Environment Variables
    description: Learn how to set up environment variables in staarter.dev.
---

One of the key aspects of setting up a new project is configuring environment variables. These variables are used to store sensitive information, such as API keys, database credentials, and other configuration settings that should not be exposed in your codebase.

In this guide, you will learn how to set up environment variables in staarter.dev and ensure that your project is secure and well-organized.

## Setting up environment variables

To get started with environment variables in staarter.dev, follow these steps:

### Copy the example file

1. Locate the `.env.example` file in the root of your project directory.
2. Copy this file and create a new file named `.env.local`.

### Update the variables

1. Open the `.env.local` file in your code editor.
2. Update the variables with the appropriate values for your project.

Note: not all variables in the `.env.example` file are required. You can choose to update only the variables that are relevant to your project.

## Accessing environment variables

In your Next.js application, you can access environment variables using the `process.env` object. For example, to access an environment variable named `API_KEY`, you can use:

```javascript
const apiKey = process.env.API_KEY
```
