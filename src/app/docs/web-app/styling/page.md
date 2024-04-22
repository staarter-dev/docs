---
title: Styling
nextjs:
  metadata:
    title: Styling
    description: Learn how to style your web app using shadcn/ui themes.
---

Thanks to the utility-first design of Tailwind CSS, you can easily customize the look and feel of your web app by leveraging the built-in themes provided by [shadcn/ui](https://ui.shadcn.com/). These themes offer a range of color palettes and layout options that you can use to create a cohesive design system for your project.

## Using Themes

To use a different theme in your web app, you can visit the [shadcn/ui themes](https://ui.shadcn.com/themes) page and select a theme that matches your project's requirements. Each theme includes a set of predefined colors and layout components that you can use to style your application.

Once you have chosen a theme, you can import it into your project by copying and pasting the theme configuration into your `globals.css` file.

Note that `.dark` will need to be replaced with:

```css
.dark,
:root[class~="dark"]
```

## Getting more components

If you need more components, you can visit the [shadcn/ui components](https://ui.shadcn.com/docs/components) page and select the components that you want to use in your project. Each component includes a set of usage examples and code snippets that you can copy and paste into your project.

By combining the themes and components provided by shadcn/ui, you can create a visually appealing and user-friendly interface for your web app.