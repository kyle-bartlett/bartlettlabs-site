import Link from "next/link";

const services = [
  {
    title: "Website + Lead Capture System",
    description:
      "Modern site + forms + tracking + automated follow-up.",
    timeline: "1\u20132 weeks",
    includes: [
      "Custom design",
      "Analytics dashboard",
      "Automated email follow-up",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 stroke-navy" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "AI Assistant (Chat + SMS + Call)",
    description:
      "Answers FAQs, qualifies leads, books appointments.",
    timeline: "2\u20133 weeks",
    includes: [
      "Custom-trained AI",
      "Multi-channel deployment",
      "Dashboard & analytics",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 stroke-navy" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Internal Automation Sprint",
    description:
      "Automate repetitive ops: reporting, scheduling, data sync.",
    timeline: "1\u20132 weeks",
    includes: [
      "Process audit",
      "Custom integrations",
      "Training & handoff",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 stroke-navy" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="relative py-20 px-6">
      <div className="container-bl">
        <div className="fade-in-section mb-12">
          <p className="label-mono text-accent-blue mb-3">Services</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg">
            What we build.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="card fade-in-section flex flex-col p-8"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="font-heading text-base font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                {s.description}
              </p>

              <p className="mt-4 label-mono text-text-muted">
                Timeline: {s.timeline}
              </p>

              <ul className="mt-4 space-y-1.5 text-sm text-silver">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  className="btn-secondary w-full text-center text-xs"
                >
                  Get a quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
