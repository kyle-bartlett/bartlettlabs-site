const verticals = [
  {
    title: "Digital Publishing",
    description:
      "Producing original content across diverse categories, from illustrated works to narrative fiction. Our autonomous publishing pipeline brings ideas from concept to reader.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 stroke-accent-blue" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path d="M8 7h6" />
        <path d="M8 11h4" />
      </svg>
    ),
  },
  {
    title: "Commerce",
    description:
      "Curated product lines brought to life through modern print-on-demand infrastructure. Quality merchandise designed and fulfilled at scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 stroke-accent-blue" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: "AI Consulting",
    description:
      "Helping businesses of all sizes harness AI. From custom chatbots to workflow automation, we make intelligent technology accessible and practical.",
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
    title: "Software Engineering",
    description:
      "Building tools that solve real problems. Our portfolio spans utility scripts to full-scale SaaS platforms, all engineered for reliability and impact.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 stroke-accent-blue" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
];

export default function Verticals() {
  return (
    <section id="verticals" className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="fade-in-section mb-16 text-center">
          <h2 className="font-heading text-2xl tracking-[0.2em] text-text-primary sm:text-3xl">
            WHAT WE BUILD
          </h2>
          <div className="section-divider mx-auto mt-6 w-24" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {verticals.map((v) => (
            <div
              key={v.title}
              className="glass-card fade-in-section rounded-xl p-8"
            >
              <div className="mb-4">{v.icon}</div>
              <h3 className="font-heading text-lg tracking-wider text-text-primary">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
