const steps = [
  {
    day: "01",
    title: "Discovery",
    description:
      "Deep-dive into your workflows, pain points, and goals. We map everything before writing a line of code.",
  },
  {
    day: "02\u201307",
    title: "Engineering",
    description:
      "We build your custom solution\u2014automations, integrations, AI assistants\u2014with daily progress updates.",
  },
  {
    day: "08\u201310",
    title: "Testing & Handover",
    description:
      "QA, training, documentation, and go-live. You own everything we build.",
  },
];

export default function Process() {
  return (
    <section className="relative py-20 px-6 bg-bg-secondary">
      <div className="container-bl">
        <div className="fade-in-section mb-12">
          <p className="label-mono text-accent-blue mb-3">Process</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg">
            Your 10-day sprint.
          </h2>
        </div>

        <div className="fade-in-section grid gap-px md:grid-cols-3 bg-border rounded-xl overflow-hidden max-w-4xl">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-bg-white p-8 transition-colors hover:bg-bg-secondary"
            >
              <span className="font-heading text-3xl font-bold text-accent-blue/20 block mb-4">
                {step.day}
              </span>
              <h3 className="font-heading text-base font-semibold text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-silver">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
