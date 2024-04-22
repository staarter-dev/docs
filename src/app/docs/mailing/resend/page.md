---
title: Resend Configuration
nextjs:
  metadata:
    title: Resend Configuration
    description: Learn how to configure Resend settings in staarter.dev.
---

Resend is a cloud-based email service that provides reliable email delivery for your applications. staarter.dev includes built-in support for sending emails using Resend, allowing you to configure your Resend settings in the environment variables and start sending emails from your application.

## Configuring Resend Settings

To configure Resend settings in staarter.dev, follow these steps:

### Update the environment variables

1. Open the `.env.local` file in the root of your project directory.
2. Add the following environment variables to configure your Resend settings:

```plaintext
RESEND_API_KEY=your-api-key
```

Replace `your-api-key` with your Resend API key. Read more about [how to obtain a Resend API key](https://resend.com/docs/dashboard/api-keys/introduction).

### Change the email provider

In `packages/mailing/providers/index.ts`, you can change the export instruction to use the Resend provider:

```typescript
export { send } from './resend'
```
