---
title: OAuth Providers
nextjs:
  metadata:
    title: OAuth Providers
    description: Learn how to configure OAuth providers in staarter.dev.
---

OAuth providers allow users to sign in to your application using their existing accounts from popular services like Google or Facebook. By integrating OAuth providers, you can provide a seamless and secure login experience for your users.

## Integrating OAuth Providers

To integrate an OAuth provider in your application, follow these steps:

### Register with the provider

1. Go to the developer console of the OAuth provider (e.g., [Google Developers Console](https://console.developers.google.com/)).
1. Create a new project and configure the OAuth settings.
1. Set the return URL for your application to `https://your.app/api/oauth/providerId/callback`, replacing `your.app` with your domain and `providerId` with the ID of the OAuth provider (e.g., `google`).
1. Obtain the client ID and client secret for your application.

### Configure the provider in your application

{% figure src="/images/gen-provider.png" alt="Generate OAuth Provider" caption="Generate OAuth Provider" /%}

1. Add the client ID and client secret to your environment variables.
1. Generate a basic OAuth provider integration using a generator:

```shell
turbo gen provider
```

1. The generator will prompt you to select the OAuth provider you want to integrate (e.g., GitHub, Discord).
1. Write the logic to handle the OAuth flow in your application.

## Enabling OAuth Providers

To enable OAuth providers in your application, you need to configure the provider settings and add them to the list of available providers in `packages/auth/src/providers/index.ts`. Here is an example of how to enable Google and Facebook OAuth providers:

```javascript
import { FACEBOOK_PROVIDER_ID, provider as facebook } from './facebook'
import { GOOGLE_PROVIDER_ID, provider as google } from './google'

/**
 * List of OAuth providers, keyed by provider ID.
 * Add or remove providers here to enable or disable them.
 */
const providers: Record<string, OAuthProvider> = {
  [GOOGLE_PROVIDER_ID]: google,
  [FACEBOOK_PROVIDER_ID]: facebook,
}
```
