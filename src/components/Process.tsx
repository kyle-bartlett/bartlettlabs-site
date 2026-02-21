const steps = [
  {
    days: "Day 1",
    title: "Discovery",
    description: "Deep-dive into your workflows and pain points.",
  },
  {
    days: "Days 2\u20137",
    title: "Engineering",
    description: "We build your custom solution.",
  },
  {
    days: "Days 8\u201310",
    title: "Testing & Handover",
    description: "QA, training, and go-live.",
  },
];

export default function Process() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="fade-in-section mb-16 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Your 10-Day Sprint
          </h2>
          <div className="section-divider mx-auto mt-4 w-16" />
        </div>

        {/* Timeline */}
        <div className="fade-in-section relative">
          {/* Connecting line (desktop) */}
          <div className="hidden sm:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />

          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                {/* Day marker */}
                <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue text-white text-xs font-bold">
                  {step.days}
                </div>
                <h3 className="font-heading text-base font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-silver">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
