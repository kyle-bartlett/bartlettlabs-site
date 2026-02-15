export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="fade-in-section mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl tracking-[0.2em] text-text-primary sm:text-3xl">
          LET&apos;S BUILD SOMETHING
        </h2>
        <div className="section-divider mx-auto mt-6 w-24" />

        <p className="mt-8 text-lg leading-relaxed text-silver">
          Whether you need AI consulting, a publishing partner, or a
          technology solution &mdash; we&apos;d love to hear from you.
        </p>

        <a
          href="mailto:kyle@bartlettlabs.io"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent-blue/40 bg-accent-blue/10 px-8 py-3 font-heading text-sm tracking-widest text-accent-light uppercase transition-all hover:border-accent-blue hover:bg-accent-blue/20 hover:shadow-[0_0_24px_rgba(59,125,216,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Get In Touch
        </a>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/company/bartlett-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent-light focus-visible:text-accent-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue/50 focus-visible:rounded-sm"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
