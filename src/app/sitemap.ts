import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kpnroofingsheds.com'
  const lastMod = '2026-08-24'

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Core pages
    {
      url: `${baseUrl}/about-us`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/corporate-social-responsibility`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ultimate-guide-to-roofing-sheds`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Service Category Pages
    {
      url: `${baseUrl}/services/agriculture-animal-husbandry-sheds`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/industrial-sheds`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/home-roofing-sheds`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/sports-turf-sheds`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Agriculture & Animal Husbandry Sub-pages
    {
      url: `${baseUrl}/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/agriculture-animal-husbandry-sheds/goat-farm-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/agriculture-animal-husbandry-sheds/poultry-farm-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Industrial Sub-pages
    {
      url: `${baseUrl}/services/industrial-sheds/factory-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/industrial-sheds/garment-factory-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/industrial-sheds/warehouse-godown-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Home Roofing Sub-pages
    {
      url: `${baseUrl}/services/home-roofing-sheds/car-parking-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/home-roofing-sheds/terrace-roofing-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Sports Turf Sub-pages
    {
      url: `${baseUrl}/services/sports-turf-sheds/badminton-court-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/sports-turf-sheds/cricket-turf-shed`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]
}
