"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChatBubble() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Speech bubble */}
      {!dismissed && (
        <div className="relative rounded-xl bg-white px-4 py-3 shadow-lg border border-gray-200 max-w-[220px]">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-400 text-xs hover:bg-gray-200 hover:text-gray-600 transition-colors"
            aria-label="Dismiss"
          >
            &times;
          </button>
          <p className="text-xs leading-relaxed text-navy font-medium">
            Find out how much time I can save you.
          </p>
        </div>
      )}

      {/* Branded button */}
      <a
        href="/contact"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2"
        aria-label="Chat with us"
      >
        <Image
          src="/logo-emblem.png"
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 rounded-full"
          style={{ display: "block" }}
        />
      </a>
    </div>
  );
}
