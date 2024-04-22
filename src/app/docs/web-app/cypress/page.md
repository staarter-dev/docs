---
title: Testing with Cypress
nextjs:
  metadata:
    title: Testing with Cypress
    description: Learn how to write end-to-end tests for your web app using Cypress.
---

Cypress is a powerful end-to-end testing framework that allows you to write tests for your web app with ease. In staarter.dev, we use Cypress to test the functionality of our web app and ensure that everything works as expected.

## Starting the Cypress Test Runner

To start the Cypress test runner, run the following command in your terminal within the `apps/web` directory:

```shell
yarn test:e2e-open
```

This command will open the Cypress test runner, where you can see a list of test files and run them individually.

### Running Tests in Headless Mode

If you prefer to run tests in headless mode (without the graphical interface), you can use the following command:

```shell
yarn test:e2e
```

This command will run all tests in headless mode and output the results in the terminal.

## Writing Cypress Tests

Cypress tests are written using TypeScript and follow a simple syntax. Here's an example of a basic test file:

```typescript
describe('Example Test', () => {
  it('Visits the homepage', () => {
    cy.visit('/')
    cy.contains('Welcome to staarter.dev')
  })
})
```

In this test, we're visiting the homepage of our web app and checking if the text "Welcome to staarter.dev" is present on the page.

You can write more complex tests by using Cypress commands to interact with elements on the page, simulate user actions, and make assertions about the state of your application. See some of the existing test files in the `cypress/e2e` directory for examples of how to write Cypress tests.
