---
title: Content Management
nextjs:
  metadata:
    title: Content Management
    description: Learn how to manage static content in staarter.dev.
---

Content management in staarter.dev is handled using the `content` directory in the web app root. This directory contains all the static content for your web application, such as blog posts and legal pages.

## Front Matter

To define metadata for a static page, you can use front matter in the Markdown file. Front matter is a block of YAML at the beginning of the file that contains metadata for the page.

For simple pages, you can define the following front matter:

```yaml
---
title: Page Title
description: This is the description of the page.
---
```

Blog posts may have additional front matter fields such as `authorName`, `publishedAt`, and `keywords`.

```yaml
---
title: Hello World
description: A simple page that says Hello World.
image: https://source.unsplash.com/random/1024x600?fruit
author: John Doe
authorImage: /images/blog/author.jpeg
publishedAt: 2024-04-14
---
```

## Creating a New Page

To create a new static page in your web app, follow these steps:

1. Navigate to the `content` directory in your web app.
1. Create a new Markdown file with the desired page content, the name must include the language code, e.g., `page.en.mdx`.
1. Add the necessary front matter to the Markdown file, including the title and metadata.
1. Write the content of the page using Markdown syntax.

Here's an example of a simple page:

```markdown
---
title: Hello World
description: A simple page that says Hello World.
---

# Hello World

This is a simple page that says Hello World.
```

You can now access the page by its URL, e.g., `/hello-world`.

## Creating a Blog Post

To create a new blog post in your web app, follow these steps:

1. Navigate to the `content/blog` directory in your web app.
1. Create a new Markdown file with the desired blog post content, the name must include the language code, e.g., `hello-world.en.mdx`.
1. Add the necessary front matter to the Markdown file, including the title, description, author, and published date.
1. Write the content of the blog post using Markdown syntax.

Here's an example of a blog post:

```markdown
---
title: Hello World
description: A simple page that says Hello World.
image: https://source.unsplash.com/random/1024x600?fruit
author: John Doe
authorImage: /images/blog/author.jpeg
publishedAt: 2024-04-14
---

# Hello World

This is a simple page that says Hello World.
```

You can now access the blog post by its URL, e.g., `/blog/hello-world`.
