---
title: Email Templates
nextjs:
  metadata:
    title: Email Templates
    description: Learn how to customize email templates in staarter.dev.
---

Email templates in staarter.dev are used to create engaging and consistent email communications with your users. By customizing the appearance and content of your emails, you can enhance the user experience and reinforce your brand identity.

## Overview

Email templates in staarter.dev are built using [React](https://reactjs.org/) components and [react-email](https://react.email/), a library for rendering responsive HTML emails. The email templates are designed to be flexible and easy to customize, allowing you to create personalized email communications for various use cases.

## Customizing Templates

To customize email templates in staarter.dev, you can modify the React components located in the `packages/mailing/emails` directory. Each email template is defined as a separate React component that includes the necessary HTML for rendering the email content.

Here's an example of a simple email template component:

```jsx
import { Link } from "@react-email/components";
import type { MailProps, MailTemplate } from "../types";
import Body from "./components/Body";
import CTA from "./components/CTA";

type TestProps = MailProps<
  {
    url: string;
  },
  {
    greeting: string;
  }
>;

const defaultMessages: TestProps["messages"] = {
  greeting: "Hello!",
};

const Test: MailTemplate<TestProps> = ({ url = "test", messages = defaultMessages }) => {
  return (
    <Body>
      <Link href={url}>
        {messages.greeting}
      </Link>
    </Body>
  );
};

export default Test;
```

In this example, the `Test` component defines a simple email template that displays a greeting message. You can customize the content of the email by updating the `messages` object with your desired text and styling.

The `MailProps` type defines the context and messages variables that the email template expects, while the `MailTemplate` type specifies the structure of the email template component. By following this pattern, you can create reusable email templates that can be easily customized, localized and extended for different use cases.

## Generating a Template

To generate a new email template you can use the `mailing/email` generator. To create a new template, follow these steps:

1. Open your terminal and navigate to the root of your project directory.
2. Run the following command:

```bash
turbo gen email
```

3. Enter the name of the new email template when prompted.
4. The generator will create a new email template component in the `packages/mailing/emails` directory with the specified name.
