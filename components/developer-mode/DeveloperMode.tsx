"use client";

import * as React from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { DevMatrixCanvas } from "./DevMatrixCanvas";
import { DevModeDashboard } from "./DevModeDashboard";

export function DeveloperMode() {
  const [isInitializing, setIsInitializing] = React.useState<boolean>(true);

  // Brief terminal splash transition
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  if (isInitializing) {
    return (
      <div
        className="fixed inset-0 z-50 bg-[#05080c] text-emerald-400 font-mono text-sm flex flex-col items-center justify-center p-6 cursor-pointer select-none"
        onClick={() => setIsInitializing(false)}
        role="status"
        aria-live="polite"
      >
        <div className="space-y-4 max-w-md w-full bg-[#0c1017] p-6 rounded-2xl border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)]">
          {/* macOS window dots */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/90" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/90" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
            </div>
            <span className="text-[11px] text-zinc-400 font-mono">rinku@MacBook-Pro ~ % dev</span>
          </div>

          <div className="space-y-2 py-2">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <TerminalIcon className="w-4 h-4 text-emerald-400" />
              <span>Mounting Developer Cockpit...</span>
            </div>
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <span className="text-emerald-400">$</span>
              <span>dev --mode=dashboard</span>
              <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
            </div>
          </div>

          <div className="text-[11px] text-zinc-400 pt-2 flex justify-between border-t border-zinc-800">
            <span>Press any key or click to launch</span>
            <span className="text-emerald-400 hover:underline font-bold">Skip →</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden bg-[#03060a] text-zinc-100 font-mono select-none"
      data-theme="developer"
    >
      {/* Background Matrix Canvas Animation */}
      <DevMatrixCanvas opacity={0.15} speed={33} />

      {/* Atmospheric Background Ambient Grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(to right, #10b98115 1px, transparent 1px), linear-gradient(to bottom, #10b98115 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* The Bento-Grid macOS Dev Mode Dashboard */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center">
        <DevModeDashboard />
      </div>
    </div>
  );
}
