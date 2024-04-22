---
title: Stripe Integration
nextjs:
  metadata:
    title: Stripe Integration
    description: Learn how to integrate Stripe with staarter.dev.
---

Stripe is a popular payment gateway that allows you to accept credit card payments and manage subscriptions. In this guide, you will learn how to integrate Stripe with staarter.dev and start accepting payments in your application.

## Prerequisites

Before you begin, make sure you have the following:

- A Stripe account: You can sign up for a free account on the [Stripe website](https://stripe.com).
- At least one product and price created in your Stripe account: You can create products and prices in the [Stripe Dashboard](https://dashboard.stripe.com/products).

## Creating a Product and Price in Stripe

{% figure src="/images/stripe-products.png" alt="Stripe Products" caption="Stripe Products" /%}

On the [products page](https://dashboard.stripe.com/products) in the Stripe Dashboard, click the "Add product" button to create a new product. Enter the product details, such as name, description, and image. You can also create multiple prices for the product, each with different billing intervals, amounts and currencies.

## Configure the Stripe Provider

### Limit Subscriptions to One Plan

{% figure src="/images/stripe-limit-subscriptions.png" alt="Stripe Checkout Settings" caption="Stripe Checkout Settings" /%}

In your Stripe Dashboard, go to the [Checkout settings page](https://dashboard.stripe.com/settings/checkout) and enable the "Limit customers to 1 subscription" option. This setting ensures that customers can only subscribe to one plan at a time.

Make sure to set "Direct customers to manage their subscription on" to "Your website" to allow customers to manage their subscriptions directly from your application.

The "Customer portal" URL should be set to `https://your-app-url/app/settings/account/billing`. Replace `your-app-url` with the URL of your application.

### Locale Pricing

In `packages/config/billing.ts`, set the corresponding currency and locale:

```javascript
export const localeCurrencies: Record<Locale, Currency> = {
  en: "USD",
  de: "EUR",
};
```

### Webhook Configuration

{% figure src="/images/stripe-webhook.png" alt="Creating a Webhook in Stripe" caption="Creating a Webhook in Stripe" /%}

In the Stripe Dashboard, go to the [webhooks page](https://dashboard.stripe.com/webhooks) and click the "Add endpoint" button to create a new webhook. Enter the URL of your application's webhook endpoint (e.g., `https://your-app-url/api/webhook/stripe`) and select the following events:

- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`

Copy the signing secret provided by Stripe and add it to your environment variables as `STRIPE_WEBHOOK_SECRET`.

### API Key

In your Stripe Dashboard, go to the [API keys page](https://dashboard.stripe.com/apikeys) to obtain your secret API key. Add this key to your environment variables `STRIPE_SECRET_KEY`.

## Enable Stripe as the Payment Gateway

In `packages/billing/src/providers/index.ts`, change the export instruction to include the Stripe provider:

```javascript
export { provider, providerId, webhook } from './stripe'
```
