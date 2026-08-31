import Link from "next/link"

export default function FooterEn() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 bg-background px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em]">
              REVERSING DOOR
            </h2>
          </div>

          {/* Address */}
          <address className="text-center text-sm not-italic text-muted-foreground">
            <p>Independent Theatre Ensemble</p>
            <p>Brno, Czech Republic</p>
          </address>

          {/* Nav */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <Link
              href="https://janouchfilip93.wixsite.com/rdweb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Web CZ
            </Link>
            <span className="text-foreground/20">|</span>
            <Link
              href="http://old.difa.jamu.cz/adv/rd_en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Web EN
            </Link>
            <span className="text-foreground/20">|</span>
            <Link
              href="https://difa.jamu.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              DIFA JAMU
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
