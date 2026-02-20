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
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 stroke-accent-blue" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 stroke-accent-blue" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
        <path d="M16 14H8a4 4 0 0 0-4 4v0a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v0a4 4 0 0 0-4-4Z" />
        <circle cx="9" cy="6" r="0.5" fill="currentColor" className="text-accent-blue" />
        <circle cx="15" cy="6" r="0.5" fill="currentColor" className="text-accent-blue" />
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
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 stroke-accent-blue" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="fade-in-section mb-16 text-center">
          <h2 className="font-heading text-2xl tracking-[0.2em] text-text-primary sm:text-3xl">
            WHAT WE BUILD
          </h2>
          <div className="section-divider mx-auto mt-6 w-24" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card fade-in-section flex flex-col rounded-xl p-8"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="font-heading text-lg tracking-wider text-text-primary">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                {s.description}
              </p>

              <p className="mt-4 text-xs text-text-muted uppercase tracking-wider">
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
                <Link href="/contact" className="btn-secondary w-full text-center text-xs">
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
