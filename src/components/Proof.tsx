const outcomes = [
  {
    stat: "12 hrs/week",
    description: "Saved on average by automating weekly reporting and admin tasks.",
  },
  {
    stat: "< 2 min",
    description: "Lead response time with instant AI-powered SMS follow-ups.",
  },
  {
    stat: "1 source",
    description: "All scattered docs and FAQs consolidated into one searchable AI assistant.",
  },
];

export default function Proof() {
  return (
    <section className="relative py-20 px-6">
      <div className="container-bl">
        <div className="fade-in-section mb-12">
          <p className="label-mono text-accent-blue mb-3">Results</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg">
            Results you can feel in week one.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl">
          {outcomes.map((outcome) => (
            <div
              key={outcome.stat}
              className="card fade-in-section p-8"
            >
              <p className="font-heading text-2xl font-bold text-accent-blue mb-2">
                {outcome.stat}
              </p>
              <p className="text-sm leading-relaxed text-silver">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        <p className="fade-in-section mt-8 text-xs text-text-muted">
          Detailed case studies available on request.
        </p>
      </div>
    </section>
  );
}
