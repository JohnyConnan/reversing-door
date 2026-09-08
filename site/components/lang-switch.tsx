import Link from "next/link"

export default function LangSwitch({
  href,
  label,
  ariaLabel,
}: {
  href: string
  label: string
  ariaLabel: string
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="absolute right-6 top-6 z-30 text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
    >
      {label}
    </Link>
  )
}
