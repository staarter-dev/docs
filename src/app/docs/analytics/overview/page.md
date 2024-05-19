---
title: Analytics Overview
nextjs:
  metadata:
    title: Analytics Overview
    description: Learn about the analytics features in staarter.dev.
---

Analytics are an essential part of any modern application, providing valuable insights into user behavior, performance, and other key metrics. staarter.dev includes built-in support for analytics, allowing you to track user interactions, monitor application performance, and make data-driven decisions to improve your application.

## Supported Analytics Providers

staarter.dev supports the following analytics providers out of the box:

- [**Google Analytics**](https://analytics.google.com/): Track user interactions, page views, and other events on your website using Google Analytics. Google Analytics provides detailed reports and insights to help you understand user behavior and optimize your application.
- [**Umami**](https://umami.is/): A simple, self-hosted analytics solution that respects user privacy and provides essential metrics for your website. Umami is lightweight, easy to set up, and does not rely on third-party services.
- [**Vercel Analytics**](https://vercel.com/docs/analytics): Monitor your application's performance and usage with Vercel Analytics. Vercel Analytics provides real-time data on request volume, latency, and other metrics to help you optimize your application's performance.

{% quick-links %}

{% quick-link title="Google Analytics Integration" href="/docs/analytics/google-analytics" icon="installation" description="Learn how to integrate Google Analytics with staarter.dev." /%}
{% quick-link title="Umami Integration" href="/docs/analytics/umami" icon="installation" description="Learn how to integrate Umami with staarter.dev." /%}
{% quick-link title="Vercel Analytics" href="/docs/analytics/vercel" icon="installation" description="Learn how to use Vercel Analytics with staarter.dev." /%}
{% quick-link title="Custom Analytics" href="/docs/analytics/custom" icon="installation" description="Learn how to implement custom analytics solutions in staarter.dev." /%}

{% /quick-links %}

## Disabling Analytics

If you prefer not to use any analytics provider, you can disable analytics in your application by removing the AnalyticsScript component from your layout in `apps/web/app/layout.tsx`.
