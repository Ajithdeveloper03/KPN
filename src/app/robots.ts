import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'CCBot', 'OmgiliBot'],
        allow: ['/llms.txt'],
        disallow: ['/'],
      }
    ],
    sitemap: 'https://kpnroofingsheds.com/sitemap.xml',
  }
}
