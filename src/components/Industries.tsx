const industries = [
  {
    name: "Energy Services",
    description: "Field ops, dispatch, and compliance workflows.",
  },
  {
    name: "Distribution & Logistics",
    description: "Inventory, routing, and order automation.",
  },
  {
    name: "Professional Services",
    description: "Client intake, billing, and project tracking.",
  },
  {
    name: "Healthcare & Clinics",
    description: "Patient scheduling, records, and follow-ups.",
  },
];

export default function Industries() {
  return (
    <section className="relative py-20 px-6 bg-bg-secondary">
      <div className="container-bl">
        <div className="fade-in-section mb-12">
          <p className="label-mono text-accent-blue mb-3">Industries We Serve</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg">
            Built for Houston businesses that move fast.
          </h2>
        </div>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-border rounded-xl overflow-hidden">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="fade-in-section bg-bg-white p-6 transition-colors hover:bg-bg-secondary"
            >
              <h3 className="font-heading text-sm font-semibold text-navy mb-2">
                {ind.name}
              </h3>
              <p className="text-xs leading-relaxed text-silver">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
