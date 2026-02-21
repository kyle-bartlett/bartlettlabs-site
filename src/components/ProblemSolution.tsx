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
];

export default function ProblemSolution() {
  return (
    <section className="relative z-10 bg-white py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="fade-in-section mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            The Headache vs. The Cure
          </h2>
          <div className="section-divider mx-auto mt-4 w-16" />
        </div>

        {/* Table with drop shadow */}
        <div className="fade-in-section overflow-hidden rounded-xl bg-white shadow-lg">
          {/* Column headers */}
          <div className="hidden sm:grid sm:grid-cols-2">
            <div className="bg-red-50 px-6 py-3 border-b border-red-100">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                The Problem
              </span>
            </div>
            <div className="bg-green-50 px-6 py-3 border-b border-green-100">
              <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                The Solution
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={row.problem} className="grid sm:grid-cols-2">
              <div
                className={`flex items-center gap-3 px-6 py-5 ${
                  i < rows.length - 1 ? "border-b border-red-100" : ""
                } bg-red-50/50`}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-red-800">
                  {row.problem}
                </span>
              </div>
              <div
                className={`flex items-center gap-3 px-6 py-5 ${
                  i < rows.length - 1 ? "border-b border-green-100" : ""
                } bg-green-50/50`}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-green-600"
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
