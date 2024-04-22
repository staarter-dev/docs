---
title: API Overview
nextjs:
  metadata:
    title: API Overview
    description: Learn about the API server in staarter.dev and how to build with tRPC.
---

The API server in staarter.dev is built using tRPC, a type-safe RPC framework for TypeScript. tRPC allows you to define API procedures as TypeScript functions and call them from the client with type safety and consistency.

Here are some of the key features of the API server in staarter.dev:

- **Type-Safe**: tRPC ensures that your API interactions are type-safe by generating TypeScript types for your API procedures. This helps catch errors at compile time and provides a seamless developer experience.
- **Flexible**: You can define API procedures with custom input and output types, making it easy to handle complex data structures and business logic in your application.
- **Authorization**: staarter.dev includes built-in support for authentication and authorization in the API server. You can define permission scopes for each API procedure and restrict access based on user roles and permissions.
- **Validation**: tRPC provides built-in validation for input parameters, ensuring that your API procedures receive valid data and handle errors gracefully.

## API Procedures

API procedures in staarter.dev are defined as TypeScript functions that handle specific server-side operations. Each API procedure is associated with a route and can be called from the client using the tRPC client library.

Here's an example of an API procedure that bans a user by ID:

```typescript
// packages/api/src/procedures/admin/ban-user.ts
import { db } from 'db'
import { z } from 'zod'
import { adminProcedure } from '../../trpc'

export const banUser = adminProcedure
  .input(
    z.object({
      userId: z.string(),
      reason: z.string(),
      expiration: z.date().optional(),
    }),
  )
  .mutation(async ({ input: { userId, reason, expiration } }) => {
    await db.user.update({
      where: { id: userId },
      data: {
        bans: {
          create: {
            reason,
            expiresAt: expiration,
          },
        },
      },
      select: {
        id: true,
      },
    })
  })
```

In this example, the `banUser` API procedure takes an input object with the user ID, ban reason, and optional expiration date. It then updates the user record in the database to add a ban entry with the specified details.

Note that the `banUser` procedure is defined as a mutation, indicating that it modifies the server state. You can also define API procedures as queries for read-only operations.
