---
title: Creating a new procedure
nextjs:
  metadata:
    title: Creating a new procedure
    description: Learn how to create a new tRPC procedure in your API server using staarter.dev.
---

In this guide, you will learn how to create a new tRPC procedure in your API server using staarter.dev. tRPC procedures are the core building blocks of your API server, providing a structured way to define and handle server-side operations.

## Creating a new procedure

{% figure src="/images/gen-procedure.png" alt="Generate a New Procedure" caption="Generate a New Procedure" /%}

To create a new procedure in your API server, follow these steps:

1. Open your terminal and navigate to the root of your project directory.
2. Run the following command to generate a new procedure:

```shell
turbo gen procedure
```

3. The generator will prompt you to enter the name of the new procedure. Enter a descriptive name for the procedure, such as `create post` or `list posts`.
4. After that, the generator will ask you what type of procedure you want to create. You can choose from the available types `query`, `mutation`.
5. The generator will ask you to specify the permission scope for the procedure. You can select from the available scopes, such as `public`, `admin`, or `authed`.
6. The last question will be what group the procedure should be in. You can select from the available groups, such as `auth`, `admin`, or create a new group.

Once you have provided all the necessary information, the generator will create a new tRPC procedure in the correct directory.
