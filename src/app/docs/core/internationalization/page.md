---
title: Internationalization
nextjs:
  metadata:
    title: Internationalization
    description: Learn how to manage translations and support multiple languages in staarter.dev.
---

Internationalization (i18n) is an essential aspect of modern web development, especially when building applications that cater to a global audience. With staarter.dev, you can easily manage translations and support multiple languages in your project using [next-intl](https://next-intl-docs.vercel.app/) and the [i18n Ally](https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally) extension for Visual Studio Code.

By default, staarter.dev includes translations for English and German, but you can easily add support for additional languages by following the steps outlined in this guide.

## Overview

The internationalization logic in staarter.dev is powered by [next-intl](https://next-intl-docs.vercel.app/), a lightweight and flexible library for managing translations in Next.js applications. next-intl provides a simple API for defining and using translations, making it easy to support multiple languages in your project.

In addition to next-intl, staarter.dev also includes the i18n Ally extension for Visual Studio Code. i18n Ally is a powerful tool that helps you manage translation keys and synchronize translations across your codebase. With i18n Ally, you can easily extract, update, and organize translations, ensuring that your application is fully localized and accessible to users in different regions.

## Translations

Translations in staarter.dev are organized into language-specific JSON files located in the `packages/intl/messages` directory. Each language file contains a set of key-value pairs representing translation keys and their corresponding values in the target language.

Here's an example of a translation file for English (`en.json`):

```json
{
  "hello": "Hello, World!",
  "welcome": "Welcome to staarter.dev"
}
```

And here's an example of a translation file for German (`de.json`):

```json
{
  "hello": "Hallo, Welt!",
  "welcome": "Willkommen bei staarter.dev"
}
```

To add support for a new language, you can create a new JSON file with the appropriate translations and follow the steps outlined in the next section to configure the language settings in your project.

## Translation keys

Translation keys are used to reference specific translations in your codebase. By using translation keys instead of hardcoding text in your components, you can easily switch between languages and ensure that your application is fully localized.

Here's an example of how to use translation keys in your components:

```jsx
// in a client-side component
import { useTranslations } from 'next-intl'

const MyComponent = () => {
  const t = useTranslations()

  return (
    <div>
      <h1>{t('hello')}</h1>
      <p>{t('welcome')}</p>
    </div>
  )
}
```

In this example, the `t` function is used to retrieve the translations for the `hello` and `welcome` keys from the language file. By using translation keys in your components, you can easily switch between languages and provide a seamless experience for users in different regions.

## Translating in other packages

To use translations in other packages, for example, the API, you can import the `getTranslations` function from the `intl` package and pass the language code to retrieve the translations for that language.

Here's an example of how to use translations in the API package:

```typescript
import { getTranslations } from 'intl'

const t = await getTranslations('en')
const hello = t('hello') // Hello, World!
```

## Configuration

To configure internationalization in staarter.dev, follow these steps:

### Update the supported languages

1. Open the `i18n.ts` file located in the `packages/config` directory.
2. Update the `locales` array with the language codes you want to support in your project.
3. Update the `localeLabels` object with the display names of the supported languages.
4. If necessary, update the `defaultLocale` variable with the default language code.

```typescript
export const locales = ['en', 'de', 'fr'] as const
export const localeLabels: Record<
  (typeof locales)[number],
  {
    /**
     * Used for the flag emoji
     */
    countryCode: string
    /**
     * Used for the dropdown label
     */
    label: string
  }
> = {
  en: {
    countryCode: 'us',
    label: 'English',
  },
  de: {
    countryCode: 'de',
    label: 'Deutsch',
  },
  fr: {
    countryCode: 'fr',
    label: 'Français',
  },
}

export const defaultLocale: (typeof locales)[number] = 'en'
```
