"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Terminal, X } from "lucide-react";
import { useThemeMode } from "@/context/ThemeModeContext";
import { DevModeDashboard } from "./DevModeDashboard";

export function DevModeGlobalOverlay() {
  const pathname = usePathname();
  const { mode, setMode } = useThemeMode();

  const [isOpenFloatingWindow, setIsOpenFloatingWindow] = React.useState(false);

  const isDevModeActive = mode === "developer";
  const isDevRoute = pathname === "/dev";

  // If we are already on `/dev`, the full DeveloperMode page is already rendering
  if (!isDevModeActive || isDevRoute) {
    return null;
  }

  const handleExitDevMode = () => {
    setIsOpenFloatingWindow(false);
    setMode("normal");
  };

  return (
    <>
      {/* Global Developer HUD Banner Bar (Bottom Right Corner) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 select-none animate-in fade-in slide-in-from-bottom-4 duration-300">
        <button
          type="button"
          onClick={() => setIsOpenFloatingWindow(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-zinc-950/90 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 text-xs font-mono shadow-[0_0_25px_rgba(16,185,129,0.3)] backdrop-blur-xl transition-all hover:scale-105 cursor-pointer"
          title="Open Floating macOS DevOS Window"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <Terminal className="w-3.5 h-3.5" />
          <span className="font-bold">DevOS Active</span>
          <span className="text-[10px] text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
            Open ↗
          </span>
        </button>

        <button
          type="button"
          onClick={handleExitDevMode}
          className="p-2 rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-red-400 hover:border-red-500/30 transition-colors cursor-pointer"
          title="Turn off Dev Mode"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Floating macOS Modal Window */}
      {isOpenFloatingWindow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpenFloatingWindow(false);
          }}
        >
          <div className="w-full max-w-6xl my-auto">
            <DevModeDashboard />
          </div>
        </div>
      )}
    </>
  );
}
