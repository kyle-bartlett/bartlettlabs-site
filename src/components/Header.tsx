"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "header-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="flex items-center gap-3 transition-colors hover:text-accent-light focus-visible:text-accent-light focus-visible:outline-none"
        >
          <span className="relative inline-block h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt="Bartlett Labs"
              fill
              className="object-cover object-[center_22%] scale-[1.5]"
            />
          </span>
          <span className="font-heading text-sm tracking-[0.3em] text-silver uppercase">
            Bartlett Labs
          </span>
        </a>

        <div className="flex gap-8">
          {[
            { label: "Services", href: "#verticals" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-text-muted transition-colors hover:text-text-primary focus-visible:text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue/50 focus-visible:rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
