import Link from "next/link";

const industries = [
  {
    name: "Energy Services",
    description: "Field ops, dispatch, and compliance workflows.",
    href: "/industries/energy",
  },
  {
    name: "Distribution & Logistics",
    description: "Inventory, routing, and order automation.",
    href: "/industries/distribution",
  },
  {
    name: "Professional Services",
    description: "Client intake, billing, and project tracking.",
    href: "/industries/professional-services",
  },
  {
    name: "Healthcare & Clinics",
    description: "Patient scheduling, records, and follow-ups.",
    href: "/industries/healthcare",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 px-6 bg-bg-secondary scroll-mt-16">
      <div className="container-bl">
        <div className="fade-in-section mb-12">
          <p className="label-mono text-accent-blue mb-3">Industries We Serve</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg">
            Built for Houston businesses that move fast.
          </h2>
        </div>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-border rounded-xl overflow-hidden">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href={ind.href}
              className="fade-in-section bg-bg-white p-6 transition-colors hover:bg-bg-secondary group"
            >
              <h3 className="font-heading text-sm font-semibold text-navy mb-2 group-hover:text-accent-blue transition-colors">
                {ind.name}
              </h3>
              <p className="text-xs leading-relaxed text-silver">
                {ind.description}
              </p>
              <span className="label-mono text-accent-blue mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity text-[0.6rem]">
                View case studies &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
