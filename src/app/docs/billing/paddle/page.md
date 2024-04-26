---
title: Paddle Integration
nextjs:
  metadata:
    title: Paddle Integration
    description: Learn how to integrate Paddle with staarter.dev.
---

Paddle is a payment gateway that allows you to accept credit card payments and manage subscriptions. In this guide, you will learn how to integrate Paddle with staarter.dev and start accepting payments in your application.

## Prerequisites

Before you begin, make sure you have the following:

- A Paddle account: You can sign up for a free account on the [Paddle website](https://paddle.com).
- At least one product and price created in your Paddle account: You can create products and prices in the [Paddle Dashboard](https://vendors.paddle.com/products-v2).

If you want to use the sandbox environment, you can create a sandbox account in the [Paddle Sandbox](https://sandbox-vendors.paddle.com). Make sure to set the `PADDLE_ENVIRONMENT` environment variable to `sandbox`, or `production` for the live environment.

## Creating a Product and Price in Paddle

{% figure src="/images/paddle-products.png" alt="Paddle Products" caption="Paddle Products" /%}

On the [products page](https://vendors.paddle.com/products-v2) in the Paddle Dashboard, click the "Add product" button to create a new product. Enter the product details, such as name, description, and image. You can also create multiple prices for the product, each with different billing intervals, amounts and currencies.

Make sure to set the max quantity to 1 for each product to limit customers to one subscription at a time.

## Configure the Paddle Provider

### Locale Pricing

In `packages/config/billing.ts`, set the corresponding currency and locale:

```javascript
export const localeCurrencies: Record<Locale, Currency> = {
  en: "USD",
  de: "EUR",
};
```

### Webhook Configuration

{% figure src="/images/paddle-webhook.png" alt="Creating a Webhook in Paddle" caption="Creating a Webhook in Paddle" /%}

In the Paddle Dashboard, go to the [notifications page](https://vendors.paddle.com/notifications) and click the "New destination" button to create a new webhook. Enter the URL of your application's webhook endpoint (e.g., `https://your-app-url/api/webhook/paddle`) and select the following events:

- `subscription.created`
- `subscription.updated`
- `subscription.canceled`

Once created, copy the webhook secret (`Secret key`) provided by Paddle and add it to your environment variables as `PADDLE_WEBHOOK_SECRET`.

### API Key

In the Paddle Dashboard, go to the [developer tools page](https://vendors.paddle.com/authentication-v2) and copy your API key. Add the API key to your environment variables as `PADDLE_API_KEY`.

Create a client-side token for the Paddle SDK and add it to your environment variables as `NEXT_PUBLIC_PADDLE_PUBLIC_KEY`.
