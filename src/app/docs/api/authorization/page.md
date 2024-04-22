---
title: Permissions and Authorization
nextjs:
  metadata:
    title: Permissions and Authorization
    description: Learn more about permissions and authorization in staarter.dev API.
---

Permissions and authorization in the API server are handled using tRPC's built-in middleware system. You can define permission scopes for each API procedure and restrict access based on user roles and permissions.

By default, staarter.dev includes the following permission scopes:

- `admin`: Allows access to administrative procedures such as user management and settings.
- `user`: Allows access to user-specific procedures such as profile updates and account settings.
- `public`: Allows access to public procedures that do not require authentication.

In addition, a TOTP (Time-based One-Time Password) middleware is included for two-factor authentication (2FA) procedures. You can easily add custom middleware to handle additional authentication and authorization logic in your application.

## Defining Permissions

To define permissions for an API procedure, you can use the `middleware` method provided by tRPC. The `middleware` method allows you to specify one or more middleware functions that should be applied to the API procedure.
