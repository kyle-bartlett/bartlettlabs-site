import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-bg-dark py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs text-white/60 transition-colors hover:text-white uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social + copyright */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:w-full">
          <span className="font-heading text-xs font-semibold tracking-wide text-white/60">
            Bartlett Labs
          </span>

          <a
            href="https://www.linkedin.com/company/bartlett-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue/50 rounded-sm"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <span className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Bartlett Labs LLC. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
