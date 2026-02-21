import CalendlyButton from "./CalendlyButton";

export default function FinalCTA() {
  return (
    <section className="section-accent relative z-10 py-24 px-6">
      <div className="fade-in-section mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Ready to Eliminate Busywork?
        </h2>
        <div className="mx-auto mt-4 w-16 h-0.5 bg-accent-blue rounded" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CalendlyButton className="btn-green">
            Book a 15-Min Efficiency Audit
          </CalendlyButton>
          <a
            href="mailto:kyle@bartlettlabs.io"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            kyle@bartlettlabs.io
          </a>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Reply within 24 hours
        </p>
      </div>
    </section>
  );
}
