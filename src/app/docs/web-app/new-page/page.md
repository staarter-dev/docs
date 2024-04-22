---
title: Creating a new page
nextjs:
  metadata:
    title: Creating a new page
    description: Learn how to create a new page in your web app using staarter.dev.
---

In staarter.dev, you can create new pages for your web app using the `web/page` generator. This generator creates a new page component with a corresponding route, making it easy to add new content to your application.

## Creating a New Page

{% figure src="/images/gen-page.png" alt="Generate a New Page" caption="Generate a New Page" /%}

To create a new page in your web app, follow these steps:

1. Open your terminal and navigate to the root of your project directory.
2. Run the following command to generate a new page:

```shell
turbo gen page
```

3. The generator will prompt you to enter the name of the new page. Enter a descriptive name for the page, such as `about` or `posts`.
4. After that, the generator will ask you to choose the category for the page. You can select from the available categories, such as `saas`, `marketing`, or `shared`.
5. Lastly, the generator will ask for the route path for the new page. You can specify the route path, such as `/about` or `/app/posts`.
6. Once you have provided all the necessary information, the generator will create a new page component in the correct directory.

Your new page is now ready to be customized with content and styles. You can access the page by navigating to the specified route path in your web app.
