import CalendlyButton from "./CalendlyButton";

export default function FinalCTA() {
  return (
    <section className="section-accent relative py-24 px-6">
      <div className="container-bl">
        <div className="fade-in-section max-w-2xl">
          <p className="label-mono text-accent-blue mb-4">Get Started</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Ready to eliminate busywork?
          </h2>
          <p className="text-base text-white/60 mb-8 max-w-lg">
            Book a free 15-minute call. We&rsquo;ll map your biggest time sinks
            and show you exactly what we&rsquo;d automate&mdash;with a
            fixed-scope quote in 24&nbsp;hours.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <CalendlyButton className="btn-green">
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
            <a
              href="mailto:kyle@bartlettlabs.io"
              className="btn-ghost"
            >
              kyle@bartlettlabs.io
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            Reply within 24 hours &middot; Fixed-scope quotes &middot; No
            retainers
          </p>
        </div>
      </div>
    </section>
  );
}
