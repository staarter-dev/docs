import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  redirects: async () => [
    {
      source: '/docs',
      destination: '/docs/setup/getting-started',
      permanent: true,
    },
    {
      source: '/docs/setup',
      destination: '/docs/setup/getting-started',
      permanent: true,
    },
    {
      source: '/docs/core',
      destination: '/docs/core/project-structure',
      permanent: false,
    },
    {
      source: '/docs/web-app',
      destination: '/docs/web-app/overview',
      permanent: true,
    },
    {
      source: '/docs/api',
      destination: '/docs/api/overview',
      permanent: true,
    },
    {
      source: '/docs/auth',
      destination: '/docs/auth/overview',
      permanent: true,
    },
    {
      source: '/docs/analytics',
      destination: '/docs/analytics/overview',
      permanent: true,
    },
    {
      source: '/docs/billing',
      destination: '/docs/billing/overview',
      permanent: true,
    },
    {
      source: '/docs/mailing',
      destination: '/docs/mailing/overview',
      permanent: true,
    },
    {
      source: '/docs/storage',
      destination: '/docs/storage/s3',
      permanent: false,
    },
    {
      source: '/docs/deployment',
      destination: '/docs/deployment/vercel',
      permanent: false,
    },
  ],
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)
