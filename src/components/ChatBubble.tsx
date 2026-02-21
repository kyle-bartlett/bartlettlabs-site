"use client";

export default function ChatBubble() {
  return (
    <a
      href="#contact"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2"
      aria-label="Chat with us"
    >
      {/* Chat bubble icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>

      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full right-0 mb-2 w-max max-w-[200px] rounded-lg bg-navy px-3 py-2 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        What&apos;s the one task you hate doing most?
      </span>
    </a>
  );
}
