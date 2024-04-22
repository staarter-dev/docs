---
title: Umami
nextjs:
  metadata:
    title: Umami
    description: Learn how to integrate Umami with staarter.dev.
---

Umami is a simple, easy-to-use, self-hosted web analytics tool that provides valuable insights into user behavior on your website. By integrating Umami with staarter.dev, you can track page views, user interactions, and other events to optimize your application and improve user experience.

## Enabling Umami

In `apps/web/modules/analytics/index.tsx`, you can enable Umami by changing the export statement to the following:

```jsx
export { AnalyticsScript, useAnalytics } from './umami'
```

## Set Required Environment Variables

To enable Umami in your application, you need to set the following environment variables in your `.env.local` file:

```env
NEXT_PUBLIC_UMAMI_ID=UMAMI_ID
```

Replace `UMAMI_ID` with your Umami website ID.

If you are self-hosting Umami, you will also need to set the following environment variable:

```env
NEXT_PUBLIC_UMAMI_URL=umami.example.com
```

Replace `umami.example.com` with the URL of your Umami instance.
