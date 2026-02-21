"use client";

export default function HeroVisual() {
  return (
    <div className="hero-visual-container" aria-hidden="true">
      {/* Dashed orbit rings */}
      <svg className="hero-orbit" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="90" />
      </svg>

      {/* Connector lines */}
      <svg className="hero-connectors" viewBox="0 0 400 400">
        <line x1="120" y1="100" x2="200" y2="180" />
        <line x1="280" y1="90" x2="220" y2="170" />
        <line x1="300" y1="260" x2="230" y2="220" />
        <line x1="100" y1="280" x2="180" y2="220" />
        <line x1="200" y1="200" x2="320" y2="160" />
        <line x1="200" y1="200" x2="140" y2="310" />
      </svg>

      {/* Central hub */}
      <div className="hero-node hero-node-center">
        <span>AI</span>
      </div>

      {/* Floating nodes */}
      <div className="hero-node hero-node-1">
        <span>CRM</span>
      </div>
      <div className="hero-node hero-node-2">
        <span>SMS</span>
      </div>
      <div className="hero-node hero-node-3">
        <span>DATA</span>
      </div>
      <div className="hero-node hero-node-4">
        <span>LEADS</span>
      </div>
      <div className="hero-node hero-node-5">
        <span>CHAT</span>
      </div>
      <div className="hero-node hero-node-6">
        <span>INVOICES</span>
      </div>

      {/* Small floating dots */}
      <div className="hero-dot hero-dot-1" />
      <div className="hero-dot hero-dot-2" />
      <div className="hero-dot hero-dot-3" />
      <div className="hero-dot hero-dot-4" />
      <div className="hero-dot hero-dot-5" />
      <div className="hero-dot hero-dot-6" />
      <div className="hero-dot hero-dot-7" />
      <div className="hero-dot hero-dot-8" />

      {/* Floating shapes */}
      <div className="hero-shape hero-shape-sq-1" />
      <div className="hero-shape hero-shape-sq-2" />
      <div className="hero-shape hero-shape-sq-3" />
      <div className="hero-shape hero-shape-circle-1" />
      <div className="hero-shape hero-shape-circle-2" />
    </div>
  );
}
