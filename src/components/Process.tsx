const steps = [
  {
    number: "01",
    title: "Quick call (15 min)",
    description: "Tell us what\u2019s slowing you down.",
  },
  {
    number: "02",
    title: "Build sprint (1\u20132 weeks)",
    description: "We build, you review. No surprises.",
  },
  {
    number: "03",
    title: "Launch + support",
    description: "Go live with ongoing maintenance.",
  },
];

export default function Process() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="fade-in-section mb-16 text-center">
          <h2 className="font-heading text-2xl tracking-[0.2em] text-text-primary sm:text-3xl">
            HOW IT WORKS
          </h2>
          <div className="section-divider mx-auto mt-6 w-24" />
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="fade-in-section text-center">
              <span className="font-heading text-4xl text-accent-blue/30">
                {step.number}
              </span>
              <h3 className="mt-2 font-heading text-base tracking-wider text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-silver">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
