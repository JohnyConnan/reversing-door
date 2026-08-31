"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function LanguageSelector() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-card px-4 py-24 md:py-32"
      aria-labelledby="language-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2
            id="language-heading"
            className="mb-4 text-2xl font-light tracking-wide md:text-3xl"
          >
            Více informací
          </h2>
          <p className="text-sm text-muted-foreground">
            Select your language / Vyberte jazyk
          </p>
        </div>

        {/* Language options */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          {/* Czech version */}
          <Link
            href="https://janouchfilip93.wixsite.com/rdweb"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative transition-all delay-200 duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            aria-label="Navštívit českou verzi webu Reverzní dveře"
          >
            <div className="relative overflow-hidden transition-all duration-500">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-foreground/0 opacity-0 blur-md transition-all duration-500 group-hover:bg-foreground/30 group-hover:opacity-100" />
              <Image
                src="/images/link_cs.gif"
                alt="Reverzní dveře - Česká verze"
                width={280}
                height={280}
                className="relative h-auto w-48 transition-transform duration-500 group-hover:scale-[1.03] md:w-56"
              />
            </div>
          </Link>

          {/* Divider */}
          <div
            className={`hidden h-32 w-px bg-foreground/20 md:block transition-all delay-300 duration-1000 ${
              isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}
          />
          <div
            className={`h-px w-32 bg-foreground/20 md:hidden transition-all delay-300 duration-1000 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />

          {/* English version */}
          <Link
            href="http://old.difa.jamu.cz/adv/rd_en.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative transition-all delay-400 duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            aria-label="Visit Reversing Door English website"
          >
            <div className="relative overflow-hidden transition-all duration-500">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-foreground/0 opacity-0 blur-md transition-all duration-500 group-hover:bg-foreground/30 group-hover:opacity-100" />
              <Image
                src="/images/link_en.gif"
                alt="Reversing Door - English version"
                width={280}
                height={280}
                className="relative h-auto w-48 transition-transform duration-500 group-hover:scale-[1.03] md:w-56"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
