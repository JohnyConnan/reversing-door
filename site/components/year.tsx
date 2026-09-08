"use client"

import { useEffect, useState } from "react"

// Under `output: 'export'` a server-rendered `new Date()` is frozen at build time.
// Render the build year for the static HTML, then correct it once in the browser.
export default function Year({ initial }: { initial: number }) {
  const [year, setYear] = useState(initial)
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  return <>{year}</>
}
