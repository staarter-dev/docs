---
title: SendGrid Configuration
nextjs:
  metadata:
    title: SendGrid Configuration
    description: Learn how to configure SendGrid settings in staarter.dev.
---

SendGrid is a cloud-based email service that provides reliable email delivery for your applications. staarter.dev includes built-in support for sending emails using SendGrid, allowing you to configure your SendGrid settings in the environment variables and start sending emails from your application.

## Configuring SendGrid Settings

To configure SendGrid settings in staarter.dev, follow these steps:

### Update the environment variables

1. Open the `.env.local` file in the root of your project directory.
2. Add the following environment variables to configure your SendGrid settings:

```plaintext
SENDGRID_API_KEY=your-api-key
```

Replace `your-api-key` with your SendGrid API key. Read more about [how to obtain a SendGrid API key](https://docs.sendgrid.com/ui/account-and-settings/api-keys).

### Change the email provider

In `packages/mailing/providers/index.ts`, you can change the export instruction to use the SendGrid provider:

```typescript
export { send } from './sendgrid'
```
