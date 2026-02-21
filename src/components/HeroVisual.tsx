"use client";

import Link from "next/link";

const nodes = [
  { label: "CRM", href: "/services#lead-capture", className: "hero-node hero-node-1" },
  { label: "SMS", href: "/services#ai-assistant", className: "hero-node hero-node-2" },
  { label: "DATA", href: "/services#automation", className: "hero-node hero-node-3" },
  { label: "LEADS", href: "/services#lead-capture", className: "hero-node hero-node-4" },
  { label: "CHAT", href: "/services#ai-assistant", className: "hero-node hero-node-5" },
  { label: "INVOICES", href: "/services#automation", className: "hero-node hero-node-6" },
];

export default function HeroVisual() {
  return (
    <div className="hero-visual-container" aria-label="Interactive system diagram — click any node to learn more">
      {/* Dashed orbit rings */}
      <svg className="hero-orbit" viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="90" />
      </svg>

      {/* Connector lines */}
      <svg className="hero-connectors" viewBox="0 0 400 400" aria-hidden="true">
        <line x1="120" y1="100" x2="200" y2="180" />
        <line x1="280" y1="90" x2="220" y2="170" />
        <line x1="300" y1="260" x2="230" y2="220" />
        <line x1="100" y1="280" x2="180" y2="220" />
        <line x1="200" y1="200" x2="320" y2="160" />
        <line x1="200" y1="200" x2="140" y2="310" />
      </svg>

      {/* Central hub */}
      <Link href="/services" className="hero-node hero-node-center">
        <span>AI</span>
      </Link>

      {/* Clickable floating nodes */}
      {nodes.map((node) => (
        <Link key={node.label} href={node.href} className={node.className}>
          <span>{node.label}</span>
        </Link>
      ))}

      {/* Small floating dots */}
      <div className="hero-dot hero-dot-1" aria-hidden="true" />
      <div className="hero-dot hero-dot-2" aria-hidden="true" />
      <div className="hero-dot hero-dot-3" aria-hidden="true" />
      <div className="hero-dot hero-dot-4" aria-hidden="true" />
      <div className="hero-dot hero-dot-5" aria-hidden="true" />
      <div className="hero-dot hero-dot-6" aria-hidden="true" />
      <div className="hero-dot hero-dot-7" aria-hidden="true" />
      <div className="hero-dot hero-dot-8" aria-hidden="true" />

      {/* Floating shapes */}
      <div className="hero-shape hero-shape-sq-1" aria-hidden="true" />
      <div className="hero-shape hero-shape-sq-2" aria-hidden="true" />
      <div className="hero-shape hero-shape-sq-3" aria-hidden="true" />
      <div className="hero-shape hero-shape-circle-1" aria-hidden="true" />
      <div className="hero-shape hero-shape-circle-2" aria-hidden="true" />
    </div>
  );
}
