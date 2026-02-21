import CalendlyButton from "./CalendlyButton";

export default function Hero() {
  return (
    <section className="relative bg-bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-bl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left column — text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {["AI Automation", "Business Systems", "Houston, TX"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="label-mono inline-block rounded-full border border-border px-3 py-1 text-silver"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-navy leading-[1.1] sm:text-5xl lg:text-6xl">
              We build the AI&nbsp;systems that run your&nbsp;business.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-silver">
              Custom automation, AI&nbsp;assistants, and workflow engineering for
              Houston companies that are done doing things the hard&nbsp;way.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-2">
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
              <a href="#how-it-works" className="btn-secondary">
                See How It Works
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
              </a>
            </div>
          </div>

          {/* Right column — founder photo placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-xl bg-bg-secondary border border-border overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="h-24 w-24 rounded-full bg-border/60 mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-silver">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
                    <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4Z" />
                  </svg>
                </div>
                <p className="label-mono text-text-muted mb-1">Kyle Bartlett</p>
                <p className="text-xs text-text-muted">Founder &middot; Houston, TX</p>
                <p className="text-xs text-text-muted/60 mt-2 italic">Photo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom dashed border */}
      <div className="absolute bottom-0 left-0 right-0 border-dashed-b" />
    </section>
  );
}
