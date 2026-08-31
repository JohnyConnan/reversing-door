"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroEn() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
      aria-label="Reversing Door - main section"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-background" />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
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
            alt="Reversing Door - Independent theatre ensemble logo"
            width={800}
            height={400}
            className="relative h-auto w-full max-w-lg md:max-w-2xl"
            priority
          />
        </div>

        <h1 className="sr-only">
          Reversing Door - Independent Theatre Ensemble from Brno
        </h1>

        {/* Tagline */}
        <div
          className={`flex flex-col items-center gap-2 text-center transition-all delay-300 duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-lg font-light tracking-[0.3em] text-foreground/80 md:text-xl">
            INDEPENDENT THEATRE ENSEMBLE
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

        {/* Decorative bottom element */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-700 duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-12 w-px animate-pulse bg-foreground/20" />
        </div>
      </div>
    </section>
  )
}
