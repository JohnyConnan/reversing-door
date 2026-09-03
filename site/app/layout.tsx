import React from "react"
import type { Metadata, Viewport } from 'next'
import { Advent_Pro } from 'next/font/google'
import './globals.css'

const adventPro = Advent_Pro({
  subsets: ["latin", "latin-ext"],
  variable: "--font-main"
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
  icons: {
    icon: [
      { url: '/ico/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/ico/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/ico/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/ico/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [
      { url: '/ico/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/ico/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/ico/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/ico/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/ico/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/ico/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/ico/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/ico/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/ico/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
    ],
  },
  manifest: '/ico/manifest.json',
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
        url: 'https://reverznidvere.cz/og-image.jpg',
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
    images: ['https://reverznidvere.cz/og-image.jpg'],
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
        <meta name="msapplication-config" content="/ico/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" hrefLang="cs" href="https://reverznidvere.cz" />
        <link rel="alternate" hrefLang="en" href="https://reverznidvere.cz/en" />
        <link rel="alternate" hrefLang="x-default" href="https://reverznidvere.cz" />
      </head>
      <body className={`${adventPro.variable} font-main antialiased`}>
        {children}
      </body>
    </html>
  )
}
