export default function Demo() {
  return (
    <section id="how-it-works" className="relative py-20 px-6">
      <div className="container-bl">
        <div className="fade-in-section mb-10">
          <p className="label-mono text-accent-blue mb-3">How It Works</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg">
            See a 24/7 AI assistant in action.
          </h2>
        </div>

        {/* Mock chatbot interface */}
        <div className="fade-in-section mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-bg-white">
          <div style={{ aspectRatio: "16 / 9" }} className="relative">
            {/* Mock interface */}
            <div className="absolute inset-0 bg-bg-primary">
              {/* Header bar */}
              <div className="flex items-center gap-2 border-b border-border bg-bg-white px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="ml-3 label-mono text-text-muted">
                  Bartlett Labs AI Assistant
                </span>
              </div>

              {/* Chat messages */}
              <div className="p-4 space-y-3">
                <div className="flex gap-2">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-accent-blue/15 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-accent-blue">BL</span>
                  </div>
                  <div className="rounded-lg bg-bg-white border border-border px-3 py-2 text-xs text-silver max-w-[70%]">
                    Hi! I&apos;m the Bartlett Labs assistant. How can I help you
                    save time today?
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="rounded-lg bg-navy px-3 py-2 text-xs text-white max-w-[60%]">
                    I need help automating our lead follow-ups
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-accent-blue/15 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-accent-blue">BL</span>
                  </div>
                  <div className="rounded-lg bg-bg-white border border-border px-3 py-2 text-xs text-silver max-w-[70%]">
                    Great choice! We can set up instant SMS + email follow-ups
                    that trigger the moment a new lead comes in. Want to book a
                    quick call?
                  </div>
                </div>
              </div>
            </div>

            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-navy/20 transition-opacity hover:bg-navy/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bg-white shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 text-navy ml-0.5"
                >
                  <path
                    d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <p className="fade-in-section mt-6 text-center text-sm text-text-muted">
          This 45-second workflow saves our clients an average of 12 hours of
          admin work every single week.
        </p>
      </div>
    </section>
  );
}
