export default function ScrollIndicator() {
  return (
    <a
      href="#verticals"
      className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent-light focus-visible:text-accent-light focus-visible:outline-none"
      aria-label="Scroll to content"
    >
      <span className="text-xs tracking-widest uppercase">Explore</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-current"
      >
        <path
          d="M4 7l6 6 6-6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
