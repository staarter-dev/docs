---
title: Admin
nextjs:
  metadata:
    title: Admin
    description: Learn how to manage the admin dashboard in staarter.dev.
---

The admin dashboard in staarter.dev provides a centralized interface for managing users and other administrative tasks.

## Becoming an Admin

{% figure src="/images/become-admin.png" alt="Become an Admin" caption="Become an Admin" /%}

To become an admin in staarter.dev, follow these steps:

1. If not yet done, sign up as a user.
1. Start the Prisma Studio by running `yarn db:studio`.
1. Locate your user in the `User` table.
1. Update the `role` field to `ADMIN`.
1. Save the changes.

After completing these steps, you should have admin access to the dashboard.
