import AuditButton from "./AuditButton";

export default function Footer() {
  return (
    <footer className="relative bg-navy py-16 px-6">
      <div className="container-bl">
        <div className="max-w-6xl mx-auto">
          {/* Top row: Crosby blurb + CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 pb-12 border-b border-white/10">
            <div className="max-w-xl">
              <p className="font-heading text-xl font-bold text-white mb-3">
                Hand-Built in Texas
              </p>
              <p className="text-zinc-400 leading-relaxed">
                I work remote full-time in Texas and call Crosby home. When you
                hire Bartlett Labs, you aren&rsquo;t talking to a bot
                overseas; you&rsquo;re talking to a neighbor who knows the
                value of hard work and a job done right.
              </p>
            </div>

            <AuditButton className="btn-primary shrink-0">
              Free Efficiency Audit
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </AuditButton>
          </div>

          {/* Bottom row: Brand + Links + Social */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="font-heading text-sm font-bold tracking-tight text-white/60">
                BARTLETT LABS
              </span>
              <span className="text-xs text-white/30">|</span>
              <span className="text-xs text-white/40 font-mono uppercase tracking-widest">
                Crosby Grown
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs text-white/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Crosby, TX
              </div>

              <a
                href="https://www.linkedin.com/company/bartlett-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burnt-orange/50 rounded-sm"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <span className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Bartlett Labs LLC. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
