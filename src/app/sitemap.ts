import { MetadataRoute } from 'next'
import { navigation } from '../lib/navigation'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.staarter.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const links = navigation.flatMap((section) =>
    section.links.map((link) => link.href),
  )

  return links.map((href) => ({
    url: new URL(href, baseUrl).toString(),
    changeFrequency: href === '/' ? 'weekly' : 'monthly',
    priority: href === '/' ? 1 : 0.5,
  }))
}
