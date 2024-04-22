---
title: Billing Overview
nextjs:
  metadata:
    title: Billing Overview
    description: Learn about the billing and subscription features in staarter.dev.
---

The billing and subscription features in staarter.dev allow you to manage your application's revenue streams and provide a seamless experience for your customers. With support for multiple payment gateways and subscription plans, you can easily monetize your application and scale your business.

## Supported Payment Gateways

staarter.dev supports the following payment gateways out of the box:

- [**Stripe**](https://stripe.com): A popular payment gateway that allows you to accept credit card payments and manage subscriptions.
- [**LemonSqueezy**](https://lemonsqueezy.com): A simple payment gateway that enables you to accept payments and manage subscriptions with ease.

{% quick-links %}

{% quick-link title="Stripe Integration" href="/docs/billing/stripe" icon="installation" description="Learn how to integrate Stripe with staarter.dev." /%}
{% quick-link title="LemonSqueezy Integration" href="/docs/billing/lemonsqueezy" icon="installation" description="Learn how to integrate LemonSqueezy with staarter.dev." /%}

{% /quick-links %}

## Localizing Plans

{% figure src="/images/plan-map.png" alt="Mapping Plans to Locales" caption="Mapping Plans to Locales" /%}

To localize your subscription plans and to show features on the pricing page based on the user's locale, you can map plans to locales in the database.

First, using Prisma studio, create a new plan in the database with the necessary details, such as name, description and features. These values should map to localized strings in your application.

You will want to map product as well as price/variant ids to your created plans.

## Testing Payments Locally

To test payments locally, you will need to expose your local server to the internet using a tool like [ngrok](https://ngrok.com/). ngrok creates a secure tunnel to your localhost, allowing you to receive webhooks from payment gateways and test payment flows in your development environment.

### Setting Up ngrok

1. [Download ngrok](https://ngrok.com/download) and install it on your machine.
2. Start a tunnel to your local server by running the following command in your terminal:

```shell
ngrok http 3000
```

3. Copy the ngrok URL provided in the terminal and use it as the webhook URL in your payment gateway dashboard.
