"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function ClickToCopy({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      title={`Copy ${label}`}
    >
      <span>{text}</span>
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-600" />
      ) : (
        <Copy className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </button>
  );
}
