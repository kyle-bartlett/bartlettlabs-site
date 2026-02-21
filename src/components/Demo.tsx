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

        {/* High-quality placeholder — mock chatbot interface */}
        <div className="fade-in-section relative mx-auto max-w-3xl overflow-hidden rounded-xl shadow-lg border border-gray-200">
          <div
            className="relative"
            style={{ aspectRatio: "16 / 9" }}
          >
            {/* Mock interface background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100">
              {/* Mock header bar */}
              <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="ml-3 text-xs text-gray-400">Bartlett Labs AI Assistant</span>
              </div>

              {/* Mock chat messages */}
              <div className="p-4 space-y-3">
                {/* Bot message */}
                <div className="flex gap-2">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-accent-blue/20 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-accent-blue">BL</span>
                  </div>
                  <div className="rounded-lg bg-white border border-gray-100 px-3 py-2 text-xs text-gray-600 shadow-sm max-w-[70%]">
                    Hi! I&apos;m the Bartlett Labs assistant. How can I help you save time today?
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="rounded-lg bg-accent-blue px-3 py-2 text-xs text-white max-w-[60%]">
                    I need help automating our lead follow-ups
                  </div>
                </div>

                {/* Bot reply */}
                <div className="flex gap-2">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-accent-blue/20 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-accent-blue">BL</span>
                  </div>
                  <div className="rounded-lg bg-white border border-gray-100 px-3 py-2 text-xs text-gray-600 shadow-sm max-w-[70%]">
                    Great choice! We can set up instant SMS + email follow-ups that trigger the moment a new lead comes in. Would you like to book a quick call?
                  </div>
                </div>
              </div>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/20">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 text-accent-blue ml-0.5"
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

        <p className="fade-in-section mt-6 text-center text-sm text-silver">
          This 45-second workflow saves our clients an average of 12 hours of
          admin work every single week.
        </p>
      </div>
    </section>
  );
}
