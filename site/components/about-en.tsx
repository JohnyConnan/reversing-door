
export default function AboutEn() {
  return (
    <section
      className="relative min-h-screen bg-background px-4 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div
          className="mb-16 pb-4 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both motion-reduce:animate-none"
        >
          <h2
            id="about-heading"
            className="mb-0 text-2xl font-light tracking-wide md:text-3xl lg:text-4xl"
          >
            about us.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* English */}
          <article
            className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both motion-reduce:animate-none"
          >
            <h3 className="mb-6 text-lg font-semibold tracking-wide">
              reversing door.
            </h3>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                An 
                independent theatre ensemble founded in 2010 at the Studio of
                Theatre and Education at the Theatre Faculty of Janáček Academy of
                Music and Performing Arts in Brno.
              </p>
              <p>
                The ensemble focuses on <em>devised theatre</em> and{" "}
                <em>collective creation</em>, experimenting with various forms of
                theatrical expression. We perform at LUMOS Theatre and regularly
                participate in festivals and showcases both in the Czech Republic
                and internationally.
              </p>
              <p>
                Our productions are characterized by exploring new paths in
                theatrical art, connecting tradition with innovation, and
                emphasizing authentic experiences for our audiences.
              </p>
            </div>
          </article>

          {/* Czech */}
          <article
            className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both motion-reduce:animate-none"
            lang="cs"
          >
            <h3 className="mb-6 text-lg font-semibold tracking-wide">
              reverzní dveře.
            </h3>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Nezávislý divadelní soubor, který vznikl v roce 2010 na půdě
                Ateliéru divadla a výchovy na Divadelní fakultě Janáčkovy akademie
                múzických umění v Brně.
              </p>
              <p>
                Soubor se zaměřuje na <em>autorské divadlo</em> a{" "}
                <em>kolektivní tvorbu</em>, přičemž experimentuje s různými
                formami divadelního vyjádření. Působí v prostorách Divadla LUMOS a
                pravidelně se účastní festivalů a přehlídek v České republice i
                zahraničí.
              </p>
              <p>
                Naše inscenace se vyznačují hledáním nových cest v divadelním
                umění, propojením tradice s inovací a důrazem na autentický
                zážitek pro diváka.
              </p>
            </div>
          </article>
        </div>

        {/* Tags */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both motion-reduce:animate-none"
        >
          {[
            "devised theatre.",
            "collective creation.",
            "physical theatre.",
            "brněnská nezávislá divadla.",
            "lumos theatre.",
          ].map((tag) => (
            <span
              key={tag}
              className="border border-foreground/20 px-4 py-2 text-xs tracking-wider text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
