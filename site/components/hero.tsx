"use client"

import { useEffect, useState, type MouseEvent } from "react"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScrollToLanguageSelector = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById("language-selector")
    if (!el) return
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    })
  }

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
      aria-label="Reverzní dveře - hlavní sekce"
    >
      {/* Animated background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-background" />
      
      {/* Subtle grain texture overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div
        className={`relative z-10 flex flex-col items-center gap-8 transition-all duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Logo */}
        <div className="relative">
          <div className="absolute -inset-4 bg-foreground/5 blur-2xl" />
          <Image
            src="/images/logo_rd.jpg"
            alt="Reverzní dveře - Logo nezávislého divadelního souboru"
            width={800}
            height={400}
            className="relative h-auto w-full max-w-lg md:max-w-2xl"
            priority
          />
        </div>

        {/* Title - visually hidden for SEO but using actual heading structure */}
        <h1 className="sr-only">
          Reverzní dveře - Nezávislý divadelní soubor z Brna
        </h1>

        {/* Tagline */}
        <div
          className={`flex flex-col items-center gap-2 text-center transition-all delay-300 duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-lg font-light tracking-[0.3em] text-foreground/80 md:text-xl">
            NEZÁVISLÝ DIVADELNÍ SOUBOR
          </p>
          <p className="text-sm tracking-[0.2em] text-muted-foreground">
            BRNO • EST. 2010
          </p>
        </div>
        
        {/* Line */}
        <div
          className={`h-px w-32 bg-foreground/20 transition-all delay-500 duration-1000 ${
            mounted ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        />
      </div>

      {/* Scroll hint */}
      <a
        href="#language-selector"
        onClick={handleScrollToLanguageSelector}
        aria-label="Sjet na sekci s výběrem jazyka"
        className="group absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-3 md:flex"
      >
        <span className="text-xs tracking-[0.2em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          scroll
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-background/30 backdrop-blur-sm transition-colors group-hover:border-foreground/40 group-focus-visible:border-foreground/40">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 text-foreground/70 transition-transform duration-300 motion-safe:animate-bounce group-hover:translate-y-0.5 group-focus-visible:translate-y-0.5 motion-reduce:animate-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </a>

      <a
        href="#language-selector"
        onClick={handleScrollToLanguageSelector}
        aria-label="Sjet na sekci s výběrem jazyka"
        className="group absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center md:hidden"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-background/30 backdrop-blur-sm transition-colors group-hover:border-foreground/40 group-focus-visible:border-foreground/40">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 text-foreground/70 transition-transform duration-300 motion-safe:animate-bounce group-hover:translate-y-0.5 group-focus-visible:translate-y-0.5 motion-reduce:animate-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </a>
    </section>
  )
}
