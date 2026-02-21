import CalendlyButton from "./CalendlyButton";

export default function Founder() {
  return (
    <section className="relative py-20 px-6">
      <div className="container-bl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Photo placeholder */}
          <div className="lg:col-span-4 fade-in-section">
            <div className="aspect-square w-full max-w-xs mx-auto lg:mx-0 rounded-xl bg-bg-secondary border border-border overflow-hidden flex items-center justify-center">
              <div className="text-center p-6">
                <div className="h-20 w-20 mx-auto rounded-full bg-border/60 mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-silver">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
                    <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4Z" />
                  </svg>
                </div>
                <p className="text-xs text-text-muted italic">Photo coming soon</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8 fade-in-section">
            <p className="label-mono text-accent-blue mb-4">Meet the Founder</p>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl mb-6">
              Hi, I&rsquo;m Kyle.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-silver max-w-2xl">
              <p>
                I grew up in Houston, studied at the intersection of strategy and
                technology, and spent years helping large companies optimize their
                operations. Then I realized the businesses that needed this the
                most&mdash;local operators, service companies, growing
                teams&mdash;couldn&rsquo;t afford to hire McKinsey.
              </p>
              <p>
                So I built Bartlett Labs. I&rsquo;m not just the guy who draws the
                diagram&mdash;I&rsquo;m the one who actually builds the system,
                wires the automations, trains the AI, and makes sure it works
                before I hand it over.
              </p>
              <p>
                Every project gets my direct attention. No account managers, no
                handoffs, no fluff. Just clean systems that save you time starting
                week one.
              </p>
            </div>

            <div className="mt-8">
              <CalendlyButton className="btn-primary">
                Book a 15-Min Efficiency Audit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </CalendlyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
