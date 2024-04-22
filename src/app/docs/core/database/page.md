---
title: Database
nextjs:
  metadata:
    title: Database
    description: Learn how to set up and work with databases in staarter.dev.
---

One of the key components of any web application is the database. Databases are used to store and manage data, making it accessible to the application and ensuring that it is persisted across sessions. Thanks to modern database technologies, developers have a wide range of options to choose from when setting up a database for their projects.

In this guide, you will learn how to set up and work with databases in staarter.dev. From configuring your database client to interacting with the database using Prisma, you'll discover how to leverage databases to build powerful and scalable applications.

## Prisma

[Prisma](https://www.prisma.io/) is a modern database toolkit that simplifies database access and management in your application. By using Prisma, you can interact with your database using a type-safe and auto-generated query builder, making it easier to work with databases and ensuring that your code is free of avoidable errors.

In staarter.dev, Prisma is used as the primary database client for interacting with the database. Prisma supports various database providers, including PostgreSQL, MySQL, SQLite, and MongoDB, allowing you to choose the database that best suits your project's requirements.

## Choosing a database

When setting up a new project, one of the first decisions you'll need to make is choosing a database. The choice of database depends on various factors, including the type of data you're working with, the scalability requirements of your application, and your familiarity with different database technologies.

There are two main types of databases you can choose from:

- **Relational databases**: Relational databases store data in tables with predefined relationships between them. Examples of relational databases include [PostgreSQL](https://www.postgresql.org/), [MySQL](https://www.mysql.com/), and [SQLite](https://www.sqlite.org/).
- **NoSQL databases**: NoSQL databases store data in a non-tabular format, making them more flexible and scalable than relational databases. The only NoSQL database supported by Prisma is [MongoDB](https://www.mongodb.com/).

When choosing a database for your project, consider the following factors:

- **Data structure**: Relational databases are ideal for structured data with predefined relationships, while NoSQL databases are better suited for unstructured or semi-structured data.
- **Scalability**: NoSQL databases are generally more scalable than relational databases, making them a better choice for applications that require high availability and performance.
- **Complexity**: Relational databases are more mature and well-established, making them easier to work with for developers who are familiar with SQL and relational database concepts.

By default, staarter.dev uses PostgreSQL as the primary database provider. However, you can easily switch to another database provider by updating the Prisma schema in your project.

## Setting up your database

Once you've chosen a database for your project, you'll need to set it up and configure it to work with your application. The exact steps for setting up your database will depend on the database provider you've chosen and the tools you're using to interact with the database.

Generally, the process of setting up a database involves the following steps:

1. **Set the database connection URL**: Configure the connection URL for your database, including the host, port, username, password, and database name.
2. **Push the schema**: You'll need to push the schema to the database to create the necessary tables and relationships for your application.
3. **Seed the database**: If you have initial data that needs to be populated in the database, you can seed the database with this data.

See [Environment Variables](/docs/setup/environment-variables) and [Commands](#commands) for more information on setting up your database in staarter.dev.

## Working with Prisma

Prisma provides a powerful set of tools for working with databases in your application. By using Prisma, you can define your database schema using a declarative language called Prisma Schema, generate a type-safe client for interacting with the database, and execute queries and mutations using the Prisma Client.

Here are some key concepts and features of Prisma that you'll need to be familiar with when working with databases in staarter.dev:

- **Prisma Schema**: The Prisma Schema is a declarative language that allows you to define your database schema, including models, fields, and relationships between models.
- **Prisma Client**: The Prisma Client is an auto-generated type-safe query builder that allows you to interact with the database.
- **Queries and mutations**: Prisma supports a wide range of queries and mutations that allow you to read, write, update, and delete data in the database.

To learn more about working with Prisma, refer to the [Prisma documentation](https://www.prisma.io/docs/).

## Commands

Here are some of the common commands you'll use when working with databases in staarter.dev:

- `yarn db:push`: Push the schema to the database.
- `yarn db:gen`: Generate the Prisma Client.
- `yarn db:seed`: Seed the database with initial data (if applicable).
- `yarn db:studio`: Open Prisma Studio to interact with the database.
