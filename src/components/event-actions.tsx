"use client";

import { useState } from "react";
import { CalendarPlus, Share2, Copy, Check, Facebook } from "lucide-react";

export function AddToCalendarButton() {
  function handleDownload() {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Mended Heart Ministry//Festival//EN",
      "BEGIN:VEVENT",
      "DTSTART:20260627T150000Z",
      "DTEND:20260628T030000Z",
      "SUMMARY:Mended Heart Festival 2026",
      "DESCRIPTION:Maine's Christian Music Festival featuring Sean Rodriguez\\, Behold The Beloved\\, Devin Williams\\, Hailey Chalifour\\, Adam Verdi\\, Galen Porter\\, Matthew Jones\\, and Chasing The Light. Tickets $30 at itickets.com.",
      "LOCATION:Pittston Fairgrounds\\, 995 East Pittston Rd\\, Pittston\\, ME 04345",
      "URL:http://www.itickets.com/events/483747.html",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mended-heart-festival-2026.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
    >
      <CalendarPlus className="h-4 w-4 text-primary" />
      Add to Calendar
    </button>
  );
}

export function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const url = "https://www.mendedheart.me/events";
  const text = "Check out the Mended Heart Festival 2026 — Maine's Christian Music Festival on June 27th!";

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function shareFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=400"
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-600" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 text-muted-foreground" />
            Copy Link
          </>
        )}
      </button>
      <button
        onClick={shareFacebook}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
      >
        <Facebook className="h-4 w-4 text-blue-600" />
        Share
      </button>
    </div>
  );
}
