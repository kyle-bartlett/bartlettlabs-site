import CalendlyButton from "./CalendlyButton";

export default function FinalCTA() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="fade-in-section mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl tracking-[0.2em] text-text-primary sm:text-3xl">
          READY TO ELIMINATE BUSYWORK?
        </h2>
        <div className="section-divider mx-auto mt-6 w-24" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CalendlyButton className="btn-primary">
            Book a 15-min call
          </CalendlyButton>
          <a
            href="mailto:kyle@bartlettlabs.io"
            className="btn-secondary"
          >
            kyle@bartlettlabs.io
          </a>
        </div>

        <p className="mt-6 text-xs tracking-wider text-text-muted uppercase">
          Reply within 24 hours
        </p>
      </div>
    </section>
  );
}
