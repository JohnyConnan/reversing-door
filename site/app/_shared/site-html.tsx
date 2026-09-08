import type { ReactNode } from "react"
import { preload } from "react-dom"
import "../globals.css"
import LangSwitch from "@/components/lang-switch"
import { siteJsonLd } from "./site-metadata"

export type SiteLang = "cs" | "en"

const langSwitch: Record<SiteLang, { href: string; label: string; ariaLabel: string }> = {
  cs: { href: "/en", label: "EN", ariaLabel: "English version" },
  en: { href: "/", label: "CZ", ariaLabel: "Česká verze" },
}

// One <html> shell per locale so each page can declare its own document language.
export default function SiteHtml({ lang, children }: { lang: SiteLang; children: ReactNode }) {
  // Latin + Latin Extended cover every glyph on both pages; the other subsets load on demand.
  for (const subset of ["latin", "latin-ext"]) {
    preload(`/fonts/advent-pro-${subset}.woff2`, { as: "font", type: "font/woff2", crossOrigin: "anonymous" })
  }
  return (
    <html lang={lang} className="dark">
      <head>
        <meta name="msapplication-config" content="/ico/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LangSwitch {...langSwitch[lang]} />
        {children}
      </body>
    </html>
  )
}
