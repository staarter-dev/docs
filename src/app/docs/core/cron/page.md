---
title: Cron Jobs
nextjs:
  metadata:
    title: Cron Jobs
    description: Learn how to set up and manage cron jobs in staarter.dev.
---

Cron jobs are scheduled tasks that run at specific intervals or times on your server. They are commonly used for automating repetitive tasks, such as sending emails, generating reports, or cleaning up temporary files.

In Next.js applications, Cron jobs are typically just secured API endpoints that are called by a scheduled task manager like [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs), [GitHub Actions](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) or just regular cron jobs on your server.

In this guide, you will learn how to set up and manage cron jobs in staarter.dev. From creating a secure API endpoint to scheduling tasks using Vercel Cron Jobs, you'll discover how to automate tasks in your application and improve its efficiency.

## Ensure your `CRON_SECRET` is set and secure

When setting up a cron job in your Next.js application, it's essential to ensure that the API endpoint is secure and can only be accessed by authorized users or services. One way to achieve this is by using a `CRON_SECRET` environment variable that acts as a shared secret between your application and the scheduled task manager.

To generate a secure `CRON_SECRET`, you can use a random string generator or a password manager to create a unique and complex secret. Make sure to store the `CRON_SECRET` securely and avoid hardcoding it in your application code or configuration files.

Using OpenSSL to generate a secure `CRON_SECRET`:

```bash
openssl rand -base64 48
```

## Setting up a Cron Job

To set up a Cron job in staarter.dev, follow these steps:

1. **Create a secure API endpoint**: Create an API endpoint in your Next.js application that performs the task you want to automate. Make sure to use the `createCronHandler` utility from `@handler` to secure the endpoint and ensure that it can only be accessed when the appropriate `CRON_SECRET` is provided.
2. **Schedule the task**: Use a scheduled task manager like Vercel Cron Jobs or GitHub Actions to call the API endpoint at the desired interval or time. Configure the task manager to include the `CRON_SECRET` in the request headers to authenticate the request.

Here's an example of how you can create a secure API endpoint for a Cron job in your Next.js application:

```tsx
import { createCronHandler } from '@handler'

export default createCronHandler('example', async (req) => {
  // Perform the task you want to automate here
  return new Response('OK', { status: 200 })
})
```

## Managing Cron Jobs with Vercel Cron Jobs

When deploying your Next.js application to Vercel, you can use Vercel Cron Jobs to schedule tasks and automate repetitive processes. Vercel Cron Jobs allow you to define cron expressions to specify when the task should run and not have to worry about authorization, as the `CRON_SECRET` will automatically be included in the request headers.

To set up a Cron job using Vercel Cron Jobs, add a new cron job in your `apps/web/vercel.json` configuration file:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "crons": [
    {
      "path": "/api/cron/example",
      "schedule": "0 0 * * *"
    }
  ]
}
```

In this example, the Cron job will call the `/api/cron/example` endpoint every day at midnight (00:00).

Use [crontab.guru](https://crontab.guru/) to generate cron expressions for your desired schedule.
