---
title: LemonSqueezy Integration
nextjs:
  metadata:
    title: LemonSqueezy Integration
    description: Learn how to integrate LemonSqueezy with staarter.dev.
---

LemonSqueezy is a simple payment gateway that enables you to accept payments and manage subscriptions with ease. In this guide, you will learn how to integrate LemonSqueezy with staarter.dev and start monetizing your application.

## Prerequisites

Before you begin, make sure you have the following:

- A LemonSqueezy account: You can sign up for a free account on the [LemonSqueezy website](https://lemonsqueezy.com).
- At least one product and variant created in your LemonSqueezy account: You can create products and variants in the LemonSqueezy Dashboard.

## Creating a Product and Variant in LemonSqueezy

{% figure src="/images/lemonsqueezy-products.png" alt="LemonSqueezy Products" caption="LemonSqueezy Products" /%}

On the [products page](https://app.lemonsqueezy.com/products) in the LemonSqueezy Dashboard, click the "New Product" button to create a new product. Enter the product details, such as name, description, and image. You can also create multiple variants for the product, each with different pricing and billing intervals.

## Configure the LemonSqueezy Provider

### Locale Pricing

LemonSqueezy only supports one currency at the moment. You can set your store's currency on the [settings page](https://app.lemonsqueezy.com/settings/general).

In `packages/config/billing.ts`, set all the locales to your store's currency:

```javascript
export const localeCurrencies: Record<Locale, Currency> = {
  en: "USD",
  de: "USD",
};
```

Make sure to set `currencies` to only include your store's currency:

```javascript
export const currencies = ["USD"] as const;
```

### Webhook Configuration

{% figure src="/images/lemonsqueezy-webhook.png" alt="Creating a Webhook in LemonSqueezy" caption="Creating a Webhook in LemonSqueezy" /%}

In the LemonSqueezy Dashboard, go to the [webhooks page](https://app.lemonsqueezy.com/settings/webhooks) and click the "Add Webhook" button to create a new webhook. Enter the URL of your application's webhook endpoint (e.g., `https://your-app-url/api/webhook/lemonsqueezy`) and select the following events:

- `subscription_created`
- `subscription_updated`
- `subscription_cancelled`
- `subscription_resumed`
- `subscription_expired`
- `subscription_paused`
- `subscription_unpaused`

Generate a signing secret using the following command:

```shell
openssl rand -base64 24
```

Copy the signing secret, fill it into the LemonSqueezy Dashboard, and add it to your environment variables as `LEMONSQUEEZY_WEBHOOK_SECRET`.

### API Key

In your LemonSqueezy Dashboard, go to the [API keys page](https://app.lemonsqueezy.com/settings/api) to obtain your secret API key. Add this key to your environment variables as `LEMONSQUEEZY_API_KEY`.

## Enable LemonSqueezy as the Payment Gateway

In `packages/billing/src/providers/index.ts`, change the export instruction to include the LemonSqueezy provider:

```javascript
export { provider, providerId, webhook } from './lemonsqueezy'
```
