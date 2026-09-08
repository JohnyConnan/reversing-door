import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import SiteHtml from "../_shared/site-html"
import { siteMetadata, siteViewport } from "../_shared/site-metadata"

export const metadata: Metadata = siteMetadata
export const viewport: Viewport = siteViewport

export default function EnLayout({ children }: { children: ReactNode }) {
  return <SiteHtml lang="en">{children}</SiteHtml>
}
