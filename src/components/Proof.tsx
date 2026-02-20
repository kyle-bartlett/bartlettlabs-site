const outcomes = [
  "Reduced manual spreadsheet work by automating weekly reporting.",
  "Improved lead response time with instant SMS follow-ups.",
  "Centralized scattered docs + FAQs into one searchable assistant.",
];

export default function Proof() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="fade-in-section mb-16 text-center">
          <h2 className="font-heading text-2xl tracking-[0.2em] text-text-primary sm:text-3xl">
            RESULTS YOU CAN FEEL IN WEEK ONE
          </h2>
          <div className="section-divider mx-auto mt-6 w-24" />
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="glass-card fade-in-section rounded-xl p-6 text-center"
            >
              <p className="text-sm leading-relaxed text-silver">{outcome}</p>
            </div>
          ))}
        </div>

        <p className="fade-in-section mt-8 text-center text-xs text-text-muted">
          Detailed examples available on request.
        </p>
      </div>
    </section>
  );
}
