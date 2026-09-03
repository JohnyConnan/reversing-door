import Link from "next/link"

export default function FooterEn() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 bg-background px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8">
          {/* Address */}
          <address className="text-center text-sm not-italic text-muted-foreground">
            <p>brno. czech republic.</p>
          </address>

          {/* Nav */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <Link
              href="https://www.instagram.com/reversingdoor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              instagram.
            </Link>
            <span className="text-foreground/20">|</span>
            <Link
              href="https://www.facebook.com/Reverznidvere/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              facebook.
            </Link>
            <span className="text-foreground/20">|</span>
            <Link
              href="https://lumos-brno.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              lumos.
            </Link>
            <span className="text-foreground/20">|</span>
            <Link
              href="https://brnenskadivadla.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              bnd.
            </Link>
          </nav>

          {/* Copyright */}
          <div className="border-t border-foreground/10 pt-8 text-center text-xs text-muted-foreground">
            <p>© {currentYear} Reversing Door. All rights reserved.</p>
            <p className="mt-1">
              © {currentYear} Reverzní dveře z.s. Všechna práva vyhrazena.
            </p>
          </div>

          {/* SEO hidden content */}
          <div className="sr-only">
            <p>
              Reversing Door is an independent theatre ensemble founded in 2010 in
              Brno at the Theatre Faculty of JAMU. We specialize in devised theatre
              and collective creation. Reverzní dveře je nezávislý divadelní soubor
              založený v roce 2010 v Brně.
            </p>
            <p>
              Keywords: theatre ensemble, independent theatre, Brno, JAMU, LUMOS
              Theatre, devised theatre, experimental theatre, divadelní soubor,
              nezávislé divadlo, Czech theatre, performing arts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
