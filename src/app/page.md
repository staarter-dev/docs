---
title: Welcome
---

Learn how to get your staarter.dev project set up in under ten minutes. {% .lead %}

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/docs/setup/getting-started" description="Step-by-step guides to setting up your project and environment." /%}

{% quick-link title="Generators" icon="lightbulb" href="/docs/core/generators" description="Learn how to use the included generators to iterate even faster." /%}

{% /quick-links %}

Here, you'll find comprehensive guides and detailed instructions to help you make the most of our NextJS SaaS boilerplate. Get ready to accelerate your development with optimized workflows, best practices, and powerful features integrated into staarter.dev.

---

## Quick start

Get up and running with staarter.dev in just a few steps. Follow these instructions to set up your SaaS platform quickly.

{% callout type="warning" title="You will need a license" %}
Before you can access the repository and start using staarter.dev, you need to purchase a license. You can do so on the [staarter.dev website](https://staarter.dev).
{% /callout %}

### Clone the Repository

To begin, clone the staarter.dev repository to your local machine using the following command in your terminal:

#### Using the Template

[Create a new repository from this template](https://github.com/new?template_name=next-template&template_owner=staarter-dev) on GitHub. After creating the repository, clone it to your local machine using the following command:

```shell
git clone [repository-url]
```

Replace `[repository-url]` with the URL of the repository you created from the template.

#### Using HTTPS

```shell
git clone https://github.com/staarter-dev/next-template.git [project-name]
```

#### Using SSH

```shell
git clone git@github.com:staarter-dev/next-template.git [project-name]
```

### Move into the Project Directory

```shell
cd [project-name]
```

### Set your Own Remote

Skip this step if you are using the template repository.

After cloning the repository, you should set your own remote to push your changes to your own repository. You can do this using the following commands:

```shell
git remote set-url origin [your-repository-url]
```

### Install Dependencies

Once you have the project on your local machine, move into the project directory and install the necessary dependencies using Yarn:

```shell
yarn install
```

### Fill in the Environment Variables

Next, you need to fill in the environment variables. Copy the `.env.example` file to `.env.local` and fill in the required values:

```shell
cp .env.example .env.local
```

### Start the Development Server

After the installation is complete, you're ready to start developing! Run the following command to start your local development server:

```shell
yarn dev
```

The development server will start, and you can access your project at [http://localhost:3000](http://localhost:3000).

You’re now ready to begin building your SaaS application with all the tools you need provided by staarter.dev.
