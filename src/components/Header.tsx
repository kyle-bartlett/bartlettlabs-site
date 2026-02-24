"use client";

import { useEffect, useState } from "react";
import AuditButton from "./AuditButton";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Audit", href: "#audit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-bg-primary transition-shadow duration-300 border-dashed-b ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container-bl py-3 lg:py-4">
        <nav className="flex items-center justify-between">
          {/* Wordmark in Slab Serif */}
          <a
            href="#"
            className="font-heading text-base font-bold tracking-tight text-navy sm:text-lg"
          >
            BARTLETT LABS
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-silver transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burnt-orange/50 focus-visible:rounded-sm"
              >
                {item.label}
              </a>
            ))}
            <AuditButton className="btn-primary text-xs py-2 px-5">
              Free Efficiency Audit
            </AuditButton>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnt-orange/60 rounded-sm"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-navy transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-navy transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-navy transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-dashed-t bg-bg-primary md:hidden">
          <div className="container-bl flex flex-col gap-4 py-6">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-sm text-silver transition-colors hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <AuditButton className="btn-primary text-xs py-2 px-5 text-center w-fit">
              Free Efficiency Audit
            </AuditButton>
          </div>
        </div>
      )}
    </header>
  );
}
