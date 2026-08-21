import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kpnroofingsheds.com'
  const date = new Date().toISOString() // This is fine if dynamic='force-static'

  const routes = [
    '',
    '/about-us',
    '/contact',
    '/gallery',
    '/blog',
    '/services',
    '/services/agriculture-animal-husbandry-sheds',
    '/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed',
    '/services/agriculture-animal-husbandry-sheds/goat-farm-shed',
    '/services/agriculture-animal-husbandry-sheds/poultry-farm-shed',
    '/services/home-roofing-sheds',
    '/services/home-roofing-sheds/car-parking-shed',
    '/services/home-roofing-sheds/terrace-roofing-shed',
    '/services/industrial-sheds',
    '/services/industrial-sheds/factory-shed',
    '/services/industrial-sheds/garment-factory-shed',
    '/services/industrial-sheds/warehouse-godown-shed',
    '/services/sports-turf-sheds',
    '/services/sports-turf-sheds/badminton-court-shed',
    '/services/sports-turf-sheds/cricket-turf-shed'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: date,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services/') ? 0.8 : 0.9,
  }));
}
