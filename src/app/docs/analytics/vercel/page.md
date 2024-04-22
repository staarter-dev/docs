---
title: Vercel Analytics
nextjs:
  metadata:
    title: Vercel Analytics
    description: Learn how to use Vercel Analytics with staarter.dev.
---

Vercel Analytics is a powerful web analytics tool that provides real-time insights into user behavior on your website. By integrating Vercel Analytics with staarter.dev, you can track page views, user interactions, and other events to optimize your application and improve user experience.

## Enabling Vercel Analytics

In `apps/web/modules/analytics/index.tsx`, you can enable Vercel Analytics by changing the export statement to the following:

```jsx
export { AnalyticsScript, useAnalytics } from './vercel-analytics'
```
