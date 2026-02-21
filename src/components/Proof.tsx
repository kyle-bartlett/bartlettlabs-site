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
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Results You Can Feel in Week One
          </h2>
          <div className="section-divider mx-auto mt-4 w-16" />
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="card fade-in-section p-6 text-center"
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
