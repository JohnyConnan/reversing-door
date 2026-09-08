import { Metadata } from "next"
import HeroEn from "@/components/hero-en"
import AboutEn from "@/components/about-en"
import LanguageSelectorEn from "@/components/language-selector-en"
import FooterEn from "@/components/footer-en"

export const metadata: Metadata = {
  title: "Reversing Door | Independent Theatre Ensemble Brno",
  description:
    "Reversing Door (Reverzní dveře) is an independent theatre ensemble founded in 2010 in Brno, Czech Republic. Devised theatre, collective creation, experimental performances.",
  alternates: {
    canonical: "/en",
    languages: {
      "cs-CZ": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "cs_CZ",
    url: "https://reverznidvere.cz/en",
    siteName: "Reverzní dveře",
    title: "Reversing Door | Independent Theatre Ensemble",
    description:
      "Independent theatre ensemble from Brno, Czech Republic. Devised theatre and collective creation since 2010.",
    images: [
      {
        url: "https://reverznidvere.cz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reversing Door - Independent Theatre Ensemble",
      },
    ],
  },
}

export default function HomeEn() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroEn />
      <AboutEn />
      <LanguageSelectorEn />
      <FooterEn />
    </main>
  )
}
