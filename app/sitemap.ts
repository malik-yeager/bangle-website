import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual production URL
  const baseUrl = 'https://belanche.in'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
