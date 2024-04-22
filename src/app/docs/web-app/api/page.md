---
title: Using the API
nextjs:
  metadata:
    title: Using the API
    description: Learn how to use the API in staarter.dev.
---

For any web application, the API serves as the backbone that connects the frontend to the backend. In staarter.dev, we provide a robust API layer powered by [tRPC](https://trpc.io/) to handle data fetching, mutations, and other server-side operations efficiently. See [API Server](/docs/api/overview) for more information on the API server in staarter.dev.

## Accessing API Procedures

### Client-Side

To access API procedures in your web app, you can use the `trpc` client provided by tRPC. The `trpc` client is a type-safe client that allows you to call API procedures with the correct input and output types. Here's an example of how you can use the `trpc` client in a client-side component:

```jsx
import { trpc } from '@ui/shared/lib'

export default function SomeComponent() {
  const { data, error, isLoading } = trpc.auth.user.useQuery()

  if (error) return <div>Error: {error.message}</div>
  if (isLoading) return <div>Loading...</div>

  return <div>Data: {data}</div>
}
```

In this example, we use the `trpc.auth.user.useQuery()` hook to fetch the current user's data from the API server. The `useQuery` hook returns the data, error, loading state and some other properties that you can use to render the component based on the API response.

### Server-Side

Here's an example of how you can call an API procedure in a server-side function:

```jsx
import { createApiCaller } from 'api'

export default async function SomePage() {
  const caller = await createApiCaller()
  const plans = await caller.billing.plans()

  // ...
}
```

In this example, we create an API caller using the `createApiCaller` function and call the `billing.plans` procedure to fetch the available pricing plans from the API server. You can then use the fetched data to render the pricing table component on the server.
