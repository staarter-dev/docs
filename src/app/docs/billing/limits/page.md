---
title: Configuring Usage Limits
nextjs:
  metadata:
    title: Configuring Usage Limits
    description: Learn how to configure usage limits in staarter.dev.
---

Usage limits allow you to control the amount of resources that users can consume in your application. By setting usage limits, you can prevent abuse, manage costs, and ensure that your application remains performant for all users.

## The `Limits` Type

Limits are configured in the `Plan` model in the database. The `Plan` model includes a `limits` field that defines the usage limits for the plan. The `limits` field is of type `Limits`, which you will want to define in `packages/db/src/json/index.ts`.

Here is an example of the `Limits` type:

```typescript
export type Limits = {
  maxProjects: number
  maxTasks: number
  maxStorage: number
}
```

## Default Limits

If a user does not have a plan or the plan does not define any limits, the application will use the default limits defined in the `packages/billing/src/limits/index.ts` file. You can customize these default limits to suit your application's needs.

## Enforcing Limits

To enforce usage limits in your application, you can check the user's usage against the limits defined in their plan. If the user exceeds any of the limits, you can prevent them from performing certain actions or prompt them to upgrade to a higher plan.

### Getting the User's Limits

To get the user's limits, you can call the `getLimits` function from the `billing/limits` package. This function takes the user object from the Lucia session and returns the limits defined in the user's plan. You can see an example of how to use this function in the `apps/web/app/[locale]/(saas)/app/ai/completion/route.ts` file.

In the API you can simply call `ctx.permissions.getPlanLimits()` to get the limits for the current user.

```typescript
// ...
  .mutation(async ({ input: { userId }, ctx: { permissions } }) => {
    const projects = // Count the number of projects for the user
    const limits = await permissions.getPlanLimits();

    // Check if the user has reached the limit
    if (projects >= limits.maxProjects) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'You have reached the maximum number of projects allowed in your plan.',
      });
    }
  });
```
