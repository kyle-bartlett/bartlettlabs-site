const rows = [
  {
    problem: "Leads falling through the cracks",
    solution: "Instant AI SMS follow-up",
  },
  {
    problem: "Manual data entry eating your day",
    solution: "Automated CRM syncing",
  },
  {
    problem: "Chasing payments & invoices",
    solution: "Automated invoice workflows",
  },
  {
    problem: "Scattered docs nobody can find",
    solution: "Searchable AI knowledge base",
  },
];

export default function ProblemSolution() {
  return (
    <section className="relative py-20 px-6 bg-bg-secondary">
      <div className="container-bl">
        <div className="fade-in-section mb-10">
          <p className="label-mono text-accent-blue mb-3">The Problem</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg">
            The headache vs. the cure.
          </h2>
        </div>

        <div className="fade-in-section grid gap-px sm:grid-cols-2 bg-border rounded-xl overflow-hidden max-w-3xl">
          {/* Column headers */}
          <div className="bg-red-50 px-6 py-3">
            <span className="label-mono text-red-600">The Problem</span>
          </div>
          <div className="bg-green-50 px-6 py-3">
            <span className="label-mono text-green-700">The Solution</span>
          </div>

          {/* Rows */}
          {rows.map((row) => (
            <div key={row.problem} className="contents">
              <div className="flex items-center gap-3 px-6 py-4 bg-bg-white">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0 text-red-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-navy">{row.problem}</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-bg-white">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-green-800">
                  {row.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
