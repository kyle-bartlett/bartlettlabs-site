"use client";

import { useState } from "react";

export default function ChatBubble() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Speech bubble */}
      {!dismissed && (
        <div className="relative rounded-lg bg-bg-white px-4 py-3 shadow-lg border border-border max-w-[220px]">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-bg-secondary text-text-muted text-xs hover:bg-border hover:text-navy transition-colors"
            aria-label="Dismiss"
          >
            &times;
          </button>
          <p className="text-xs leading-relaxed text-navy font-medium">
            What&rsquo;s the one task you hate doing most?
          </p>
        </div>
      )}

      {/* Branded button */}
      <a
        href="/contact"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2"
        aria-label="Chat with us"
      >
        <span className="text-sm font-bold text-white tracking-tight">BL</span>
      </a>
    </div>
  );
}
