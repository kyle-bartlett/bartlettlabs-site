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
      <div className="mx-auto max-w-2xl">
        <div className="fade-in-section mb-16 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Your 10-Day Sprint
          </h2>
          <div className="section-divider mx-auto mt-4 w-16" />
        </div>

        {/* Vertical timeline */}
        <div className="fade-in-section relative">
          {/* Vertical thread */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 sm:left-10" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex gap-6 sm:gap-8">
                {/* Day marker on the thread */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent-blue text-white text-xs font-bold shadow-md sm:h-20 sm:w-20 sm:text-sm">
                  {step.days}
                </div>

                {/* Content */}
                <div className="pt-2 sm:pt-4">
                  <h3 className="font-heading text-base font-semibold text-navy sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-silver">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
