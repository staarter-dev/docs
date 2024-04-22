---
title: Google Analytics
nextjs:
  metadata:
    title: Google Analytics
    description: Learn how to integrate Google Analytics with staarter.dev.
---

Google Analytics is a powerful web analytics tool that allows you to track user interactions, page views, and other events on your website. By integrating Google Analytics with staarter.dev, you can gain valuable insights into user behavior, optimize your application, and make data-driven decisions to improve user experience.

## Enabling Google Analytics

In `apps/web/modules/analytics/index.tsx`, you can enable Google Analytics by changing the export statement to the following:

```jsx
export { AnalyticsScript, useAnalytics } from './google-analytics'
```

## Set Required Environment Variables

To enable Google Analytics in your application, you need to set the following environment variables in your `.env.local` file:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

Replace `UA-XXXXXXXXX-X` with your Google Analytics tracking ID.
