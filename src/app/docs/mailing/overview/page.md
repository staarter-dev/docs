---
title: Mailing Overview
nextjs:
  metadata:
    title: Mailing Overview
    description: Learn about the mailing features in staarter.dev.
---

The mailing features in staarter.dev allow you to send transactional emails and other types of email communications to your users. With support for popular email providers and customizable templates, you can create engaging email correspondence that enhances your user experience.

## Supported Email Providers

staarter.dev supports the following email providers out of the box:

- [**SendGrid**](https://sendgrid.com): A cloud-based email service that provides reliable delivery and analytics for your email campaigns.
- [**Resend**](https://resend.com): A simple email service that allows you to send transactional emails and track email opens and clicks.
- **SMTP**: staarter.dev includes built-in support for sending emails using SMTP. You can configure your SMTP settings in the environment variables to start sending emails from your application.

{% quick-links %}

{% quick-link title="Templates" href="/docs/mailing/templates" icon="theming" description="Learn how to customize email templates in staarter.dev." /%}
{% quick-link title="SendGrid Integration" href="/docs/mailing/sendgrid" icon="installation" description="Learn how to integrate SendGrid with staarter.dev." /%}
{% quick-link title="Resend Integration" href="/docs/mailing/resend" icon="installation" description="Learn how to integrate Resend with staarter.dev." /%}
{% quick-link title="SMTP Configuration" href="/docs/mailing/smtp" icon="installation" description="Learn how to configure SMTP settings in staarter.dev." /%}

{% /quick-links %}

## Configuring the send address

In `packages/config/mail.ts` you can configure the sender address for your emails. This is the address that will appear in the "From" field of the email.

```typescript
export const mail = {
  from: 'noreply@example.com',
}
```

## Sending Emails

To send an email in your application, you can use the `sendMail` function from the `mailing` package. Here's an example of sending a welcome email to a new user:

```typescript
import { getTranslations } from 'intl'
import { sendMail } from 'mailing'

const t = await getTranslations(user.locale)
await sendMail('signup', {
  subject: t('emails.signup.subject'),
  to: user.email,
  ctx: {
    url: url.toString(),
  },
  messages: {
    greeting: t('emails.signup.greeting'),
    explanation: t('emails.signup.explanation'),
    useLink: t('emails.signup.useLink'),
    rawLink: t('emails.signup.rawLink'),
    cta: t('emails.signup.cta'),
  },
})
```

Note that the `sendMail` function takes a template name (e.g., `signup`) and an object with the email details, such as the subject, recipient, and context variables for the template. The `mailing` package includes a set of default email templates that you can customize to fit your application's branding and content.

You may omit the `messages` object if you want to use the default messages for the template.
