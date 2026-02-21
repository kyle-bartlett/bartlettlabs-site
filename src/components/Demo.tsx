export default function Demo() {
  return (
    <section id="demo" className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="fade-in-section mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            See a 24/7 AI Assistant in Action
          </h2>
          <div className="section-divider mx-auto mt-4 w-16" />
        </div>

        {/* Video placeholder */}
        <div className="fade-in-section relative mx-auto max-w-3xl overflow-hidden rounded-xl">
          <div
            className="relative flex items-center justify-center"
            style={{
              aspectRatio: "16 / 9",
              background:
                "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
            }}
          >
            {/* Play icon */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 text-accent-blue"
                >
                  <path
                    d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-silver">
                Demo Coming Soon
              </span>
            </div>
          </div>
        </div>

        <p className="fade-in-section mt-6 text-center text-sm text-silver">
          This 45-second workflow saves our clients an average of 12 hours of
          admin work every single week.
        </p>
      </div>
    </section>
  );
}
