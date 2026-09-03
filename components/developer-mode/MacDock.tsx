"use client";

import * as React from "react";
import {
  User,
  Zap,
  Layers,
  Terminal as TerminalIcon,
  Code2,
  Sparkles,
  ArrowLeft,
  Minimize2,
  Maximize2,
} from "lucide-react";

export type DevTab = "identity" | "superpowers" | "projects" | "terminal" | "vfs";

interface MacDockProps {
  activeTab: DevTab;
  onSelectTab: (tab: DevTab) => void;
  onExit: () => void;
  matrixRainActive: boolean;
  onToggleMatrixRain: () => void;
  isMinimized: boolean;
  onToggleMinimize: () => void;
}

export function MacDock({
  activeTab,
  onSelectTab,
  onExit,
  matrixRainActive,
  onToggleMatrixRain,
  isMinimized,
  onToggleMinimize,
}: MacDockProps) {
  const dockItems: { id: DevTab; label: string; icon: React.ElementType; color: string }[] = [
    { id: "identity", label: "Identity & Profile", icon: User, color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30" },
    { id: "superpowers", label: "Superpowers & Skills", icon: Zap, color: "text-amber-400 bg-amber-500/15 border-amber-500/30" },
    { id: "projects", label: "Architectures & Systems", icon: Layers, color: "text-purple-400 bg-purple-500/15 border-purple-500/30" },
    { id: "terminal", label: "Matrix CLI Terminal", icon: TerminalIcon, color: "text-sky-400 bg-sky-500/15 border-sky-500/30" },
    { id: "vfs", label: "Virtual Code Editor", icon: Code2, color: "text-pink-400 bg-pink-500/15 border-pink-500/30" },
  ];

  return (
    <div className="flex items-center justify-center pointer-events-auto select-none">
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 rounded-2xl bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id && !isMinimized;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (isMinimized) onToggleMinimize();
                onSelectTab(item.id);
              }}
              className={`group relative p-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col items-center hover:-translate-y-1 hover:scale-110 active:scale-95 ${
                isActive
                  ? `${item.color} shadow-[0_0_15px_rgba(16,185,129,0.25)]`
                  : "border-transparent bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/80"
              }`}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />

              {/* Active Dot indicator under app icon */}
              {isActive && (
                <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-emerald-400" />
              )}

              {/* Tooltip */}
              <span className="absolute -top-9 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-zinc-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-6 bg-zinc-800 mx-1" />

        {/* Matrix Rain Effect Toggle */}
        <button
          type="button"
          onClick={onToggleMatrixRain}
          className={`group relative p-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col items-center hover:-translate-y-1 hover:scale-110 active:scale-95 ${
            matrixRainActive
              ? "text-emerald-400 bg-emerald-500/15 border-emerald-500/30"
              : "border-transparent bg-zinc-900/60 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/80"
          }`}
          aria-label="Toggle Matrix Rain Atmosphere"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="absolute -top-9 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-zinc-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Matrix Atmosphere
          </span>
        </button>

        {/* Minimize / Restore Window */}
        <button
          type="button"
          onClick={onToggleMinimize}
          className="group relative p-2.5 rounded-xl border border-transparent bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all duration-200 cursor-pointer flex flex-col items-center hover:-translate-y-1 hover:scale-110 active:scale-95"
          aria-label={isMinimized ? "Restore Window" : "Minimize Window"}
        >
          {isMinimized ? (
            <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
          ) : (
            <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
          )}
          <span className="absolute -top-9 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-zinc-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            {isMinimized ? "Restore Window" : "Minimize to Dock"}
          </span>
        </button>

        {/* Exit to Normal Website Mode */}
        <button
          type="button"
          onClick={onExit}
          className="group relative p-2.5 rounded-xl border border-transparent bg-zinc-900/60 text-red-400 hover:text-red-300 hover:bg-red-500/15 hover:border-red-500/30 transition-all duration-200 cursor-pointer flex flex-col items-center hover:-translate-y-1 hover:scale-110 active:scale-95"
          aria-label="Exit Developer Mode"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="absolute -top-9 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-red-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Exit Dev Mode (Esc)
          </span>
        </button>
      </div>
    </div>
  );
}
