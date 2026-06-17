import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Replace with your actual production URL
  const baseUrl = 'https://belanche.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Add any specific paths you want to hide from search engines here
      // disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
