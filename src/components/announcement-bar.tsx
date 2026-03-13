"use client";

import { useState } from "react";
import { X, Ticket } from "lucide-react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary via-red-600 to-primary text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-sm sm:px-6">
        <Ticket className="hidden h-4 w-4 shrink-0 sm:block" />
        <p className="font-medium">
          <span className="font-bold">Mended Heart Festival 2026</span> — June 27th at Pittston Fairgrounds!{" "}
          <a
            href="http://www.itickets.com/events/483747.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/50 underline-offset-2 transition-colors hover:decoration-white"
          >
            Get your $30 tickets now &rarr;
          </a>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white sm:right-4"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
