---
title: Teams
nextjs:
  metadata:
    title: Teams
    description: Learn how to set up and manage teams in staarter.dev.
---

By default, staarter.dev is a single-tenant application, meaning that one user owns their resources and data. However, you can enable multi-tenancy by setting up teams in your application. Teams allow you to group users together and share resources, such as projects, tasks, and documents, among team members.

## Enabling Teams

To enable teams, you must simply merge the `with/teams` branch into your project. The `with/teams` branch contains the necessary changes to support multi-tenancy in staarter.dev. You can merge the `with/teams` branch into your project by following these steps:

1. Open your terminal and navigate to the root of your project directory.
2. Run the following command to fetch the `with/teams` branch:

```bash
git fetch upstream with/teams
```

3. Merge the `with/teams` branch into your project:

```bash
git merge upstream/with/teams
```

4. Resolve any merge conflicts that may arise during the merge process if you have made changes to the same files in your project.
5. Once the merge is complete, you can start using teams in your application.

## Database Relationships

When you enable teams, shared resources should be associated with a team rather than an individual user. To achieve this, you need to update the database schema to include relationships between resources and teams. For example, you can create a `Post` model that belongs to the `Team` model, allowing team members to share posts within the team.
