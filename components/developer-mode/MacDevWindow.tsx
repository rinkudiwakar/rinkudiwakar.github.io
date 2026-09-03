"use client";

import * as React from "react";
import {
  Maximize2,
  Minimize2,
  Terminal as TerminalIcon,
  User,
  Zap,
  Layers,
  Code2,
  GitBranch,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { DevTab } from "./MacDock";

interface MacDevWindowProps {
  activeTab: DevTab;
  onSelectTab: (tab: DevTab) => void;
  onExit: () => void;
  onMinimize: () => void;
  isMaximized: boolean;
  onToggleMaximize: () => void;
  children: React.ReactNode;
}

export function MacDevWindow({
  activeTab,
  onSelectTab,
  onExit,
  onMinimize,
  isMaximized,
  onToggleMaximize,
  children,
}: MacDevWindowProps) {
  const tabs: { id: DevTab; label: string; icon: React.ElementType }[] = [
    { id: "identity", label: "Identity", icon: User },
    { id: "superpowers", label: "Superpowers", icon: Zap },
    { id: "projects", label: "Architecture", icon: Layers },
    { id: "terminal", label: "CLI Terminal", icon: TerminalIcon },
    { id: "vfs", label: "Virtual Code", icon: Code2 },
  ];

  return (
    <div
      className={`flex flex-col transition-all duration-300 select-none overflow-hidden rounded-2xl border border-zinc-700/60 bg-[#0d1117]/95 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] ring-1 ring-emerald-500/20 ${
        isMaximized
          ? "w-full h-full rounded-none border-none"
          : "w-full max-w-6xl h-[82vh] max-h-[820px] min-h-[560px] my-auto"
      }`}
    >
      {/* macOS Frosted Glass Window Header */}
      <div className="px-4 py-3 bg-[#161b22]/90 border-b border-[#30363d] flex items-center justify-between gap-3 shrink-0">
        {/* Left: macOS Traffic Light Buttons */}
        <div className="flex items-center gap-2 mr-2">
          <button
            type="button"
            onClick={onExit}
            className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-125 transition-transform active:scale-90 cursor-pointer border border-[#e0443e]/50 flex items-center justify-center group"
            title="Close / Exit Dev Mode (Esc)"
            aria-label="Close Dev Mode Window"
          >
            <span className="opacity-0 group-hover:opacity-100 text-[9px] text-zinc-900 font-bold leading-none">
              ×
            </span>
          </button>
          <button
            type="button"
            onClick={onMinimize}
            className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:brightness-125 transition-transform active:scale-90 cursor-pointer border border-[#dea123]/50 flex items-center justify-center group"
            title="Minimize Window to Dock"
            aria-label="Minimize Window"
          >
            <span className="opacity-0 group-hover:opacity-100 text-[9px] text-zinc-900 font-bold leading-none">
              –
            </span>
          </button>
          <button
            type="button"
            onClick={onToggleMaximize}
            className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:brightness-125 transition-transform active:scale-90 cursor-pointer border border-[#1aab29]/50 flex items-center justify-center group"
            title={isMaximized ? "Restore Windowed Size" : "Maximize Window"}
            aria-label="Toggle Window Size"
          >
            <span className="opacity-0 group-hover:opacity-100 text-[7px] text-zinc-900 font-bold leading-none">
              +
            </span>
          </button>
        </div>

        {/* Center: Window App Tabs (Segmented Control) */}
        <div className="hidden sm:flex items-center gap-1 p-1 bg-[#090d13] rounded-xl border border-zinc-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTab(tab.id)}
                className={`px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? "bg-zinc-800 text-emerald-400 font-medium shadow-xs border border-zinc-700"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-zinc-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Center-Right: Window Title for small screens or metadata */}
        <div className="sm:hidden flex items-center gap-1.5 text-xs font-mono text-zinc-300">
          <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span className="truncate max-w-[140px]">rinku@nitj — dev</span>
        </div>

        {/* Right: Window Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleMaximize}
            className="hidden md:inline-flex p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
            title={isMaximized ? "Restore Window Size" : "Maximize Window"}
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Window Content */}
      <div className="flex-1 overflow-hidden relative flex flex-col bg-[#090c10]">
        {children}
      </div>

      {/* Bottom macOS Window Status Bar */}
      <div className="px-4 py-1.5 bg-[#161b22]/95 border-t border-[#30363d] flex items-center justify-between text-[11px] font-mono text-zinc-400 shrink-0">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <GitBranch className="w-3 h-3" />
            <span>main*</span>
          </span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-zinc-400">
            <ShieldCheck className="w-3 h-3 text-sky-400" />
            <span>macOS DevOS v2.4 (Active)</span>
          </span>
          <span className="hidden md:inline text-zinc-600">|</span>
          <span className="hidden md:inline text-zinc-500">NIT Jalandhar ’27</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-zinc-500">UTF-8 · TypeScript</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <Cpu className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>100% Ready</span>
          </span>
        </div>
      </div>
    </div>
  );
}
