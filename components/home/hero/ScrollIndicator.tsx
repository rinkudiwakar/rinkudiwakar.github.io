import * as React from "react";
import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-start gap-2 select-none">
      <div className="flex flex-col items-center gap-1.5 -rotate-3 select-none">
        <span
          className="font-handwritten text-base sm:text-lg text-[var(--foreground)] tracking-wide"
          style={{ fontFamily: "'Caveat', 'Kalam', 'Segoe Print', cursive" }}
        >
          Scroll to explore
        </span>
        <div className="w-px h-5 bg-[var(--foreground)] opacity-60" />
        <div className="scroll-indicator-bob w-7 h-7 rounded-full border border-[var(--foreground)] opacity-70 flex items-center justify-center text-[var(--foreground)]">
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
