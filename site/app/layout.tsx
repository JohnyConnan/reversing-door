import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Cormorant } from 'next/font/google'

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans"
})

const cormorant = Cormorant({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: {
    default: 'Reverzní dveře | Nezávislý divadelní soubor Brno',
    template: '%s | Reverzní dveře'
  },
  description: 'Reverzní dveře (Reversing Door) je nezávislý divadelní soubor založený v roce 2010 v Brně. Autorské divadlo, kolektivní tvorba, experimentální inscenace. Independent theatre ensemble from Brno, Czech Republic.',
  keywords: [
    'Reverzní dveře',
    'Reversing Door',
    'divadelní soubor',
    'nezávislý divadelní soubor',
    'theatre group',
    'independent theatre',
    'Brno',
    'autorské divadlo',
    'kolektivní tvorba',
    'Divadlo LUMOS',
    'JAMU',
    'Kamila Kostřicová',
    'experimental theatre',
    'Czech theatre'
  ],
  authors: [{ name: 'Reverzní dveře z.s.' }],
  creator: 'Reverzní dveře',
  publisher: 'Reverzní dveře z.s.',
  metadataBase: new URL('https://reverznidvere.cz'),
  alternates: {
    canonical: '/',
    languages: {
      'cs-CZ': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    alternateLocale: 'en_US',
    url: 'https://reverznidvere.cz',
    siteName: 'Reverzní dveře',
    title: 'Reverzní dveře | Nezávislý divadelní soubor',
    description: 'Nezávislý divadelní soubor z Brna. Autorské divadlo a kolektivní tvorba od roku 2010.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Reverzní dveře - Nezávislý divadelní soubor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reverzní dveře | Independent Theatre Ensemble',
    description: 'Independent theatre ensemble from Brno, Czech Republic. Collective creation and experimental performances since 2010.',
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'arts & entertainment',
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TheaterGroup',
  name: 'Reverzní dveře',
  alternateName: 'Reversing Door',
  description: 'Nezávislý divadelní soubor založený v roce 2010 v Brně. Independent theatre ensemble from Brno, Czech Republic.',
  foundingDate: '2010',
  foundingLocation: {
    '@type': 'Place',
    name: 'Brno',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brno',
      addressCountry: 'CZ'
    }
  },
  url: 'https://reverznidvere.cz',
  sameAs: [
    'https://janouchfilip93.wixsite.com/rdweb'
  ],
  knowsAbout: ['Theatre', 'Performing Arts', 'Experimental Theatre', 'Collective Creation'],
  areaServed: {
    '@type': 'Country',
    name: 'Czech Republic'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" hrefLang="cs" href="https://reverznidvere.cz" />
        <link rel="alternate" hrefLang="en" href="https://reverznidvere.cz/en" />
        <link rel="alternate" hrefLang="x-default" href="https://reverznidvere.cz" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
