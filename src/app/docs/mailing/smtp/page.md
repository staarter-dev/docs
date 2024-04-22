---
title: SMTP Configuration
nextjs:
  metadata:
    title: SMTP Configuration
    description: Learn how to configure SMTP settings in staarter.dev.
---

SMTP (Simple Mail Transfer Protocol) is a standard protocol used for sending emails over the internet. staarter.dev includes built-in support for sending emails using SMTP, allowing you to configure your SMTP settings in the environment variables and start sending emails from your application.

## Configuring SMTP Settings

To configure SMTP settings in staarter.dev, follow these steps:

### Update the environment variables

1. Open the `.env.local` file in the root of your project directory.
2. Add the following environment variables to configure your SMTP settings:

```plaintext
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=test
SMTP_PASS=password
```

Replace the values with your SMTP server details, including the hostname, port, username, and password. If your SMTP server requires SSL/TLS encryption, set the `SMTP_SECURE` variable to `true`.

### Change the email provider

In `packages/mailing/providers/index.ts`, you can change the export instruction to use the SMTP provider:

```typescript
export { send } from './smtp'
```
