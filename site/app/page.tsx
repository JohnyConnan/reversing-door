import { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import LanguageSelector from "@/components/language-selector"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Reverzní dveře | Nezávislý divadelní soubor Brno",
  description:
    "Reverzní dveře (Reversing Door) je nezávislý divadelní soubor založený v roce 2010 v Brně. Autorské divadlo, kolektivní tvorba, experimentální inscenace.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <LanguageSelector />
      <Footer />
    </main>
  )
}
