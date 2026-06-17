import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Belanche – Handmade Thread Bangles',
  description: 'Customized thread bangles crafted with love for weddings, festivals, and special occasions.',
  keywords: [
    'handmade bangles',
    'thread bangles',
    'custom bangles',
    'wedding bangles',
    'silk thread bangles',
    'bridal bangles',
    'traditional Indian jewelry',
    'festival jewelry',
    'Belanche'
  ],
  openGraph: {
    title: 'Belanche – Handmade Thread Bangles',
    description: 'Customized thread bangles crafted with love for weddings, festivals, and special occasions.',
    url: 'https://belanche.com',
    siteName: 'Belanche',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Belanche Thread Bangles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belanche – Handmade Thread Bangles',
    description: 'Customized thread bangles crafted with love for weddings, festivals, and special occasions.',
    creator: '@belanche',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  )
}
