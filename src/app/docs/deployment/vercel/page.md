---
title: Deploying to Vercel
nextjs:
  metadata:
    title: Deploying to Vercel
    description: Learn how to deploy your staarter.dev project to Vercel.
---

Vercel is a cloud platform that enables developers to deploy web applications with ease. With Vercel, you can deploy your staarter.dev project in minutes and take advantage of features like automatic deployments, serverless functions, and more.

## Create a Vercel Account

If you don't already have a Vercel account, you can sign up for free at [vercel.com](https://vercel.com/signup). Once you have created an account, you can proceed to deploy your staarter.dev project.

## Deploy to Vercel

To deploy your staarter.dev project to Vercel, follow these steps:

### Connect your Repository

1. Log in to your Vercel account.
2. Click on the "Import Project" button in the top right corner.
3. Select your Git provider (GitHub, GitLab, or Bitbucket) and choose the repository that contains your staarter.dev project.
4. Click on the "Import" button to connect your repository to Vercel.

### Configure Deployment Settings

1. Once your repository is connected, you will be prompted to configure the deployment settings.
2. Select the branch you want to deploy (e.g., `main` or `master`).
3. Keep the default settings for the build command and output directory.
4. Add any environment variables required for your project (e.g., API keys, database URLs).

Tip: You can copy the environment variables from your `.env.local` file and add them to the Vercel dashboard.

### Add a Custom Domain (Optional)

If you have a custom domain that you want to use for your project, you can add it in the Vercel dashboard. Follow these steps to add a custom domain:

1. Go to the "Settings" tab in the Vercel dashboard.
2. Click on the "Domains" section.
3. Add your custom domain and follow the instructions to verify ownership.
