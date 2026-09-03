import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 bg-background px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8">
          {/* Contact & Info */}
          <address className="not-italic text-center text-sm text-muted-foreground">
            <p>brno. česká republika.</p>
          </address>

          {/* Links */}
          <nav
            aria-label="Patičkové odkazy"
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
            <p>
              © {currentYear} Reverzní dveře z.s. Všechna práva vyhrazena.
            </p>
            <p className="mt-1">
              © {currentYear} Reversing Door. All rights reserved.
            </p>
          </div>

          {/* SEO-friendly hidden content */}
          <div className="sr-only">
            <p>
              Reverzní dveře je nezávislý divadelní soubor založený v roce 2010 
              v Brně na Divadelní fakultě JAMU. Zaměřujeme se na autorské divadlo 
              a kolektivní tvorbu. Reversing Door is an independent theatre ensemble 
              from Brno, Czech Republic, specializing in devised theatre and 
              collective creation since 2010.
            </p>
            <p>
              Klíčová slova: divadelní soubor, nezávislé divadlo, Brno, JAMU, 
              Divadlo LUMOS, autorské divadlo, experimentální divadlo, theatre group, 
              independent theatre, Czech theatre, performing arts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
