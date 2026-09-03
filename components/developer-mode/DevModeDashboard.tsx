"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useThemeMode } from "@/context/ThemeModeContext";
import { DevProfileExeCard } from "./DevProfileExeCard";
import { DevExplorerTree } from "./DevExplorerTree";
import { DevVimEditor } from "./DevVimEditor";
import { DevCommitLog } from "./DevCommitLog";
import { DevStatsJson } from "./DevStatsJson";
import { DevSkillsDb } from "./DevSkillsDb";
import { DevBeliefsTerminal } from "./DevBeliefsTerminal";
import { DevMatrixRainGrid } from "./DevMatrixRainGrid";
import { TerminalView } from "./TerminalView";
import { DevSuperpowers } from "./DevSuperpowers";
import { DevProjectsCockpit } from "./DevProjectsCockpit";
import { VFSFile } from "@/lib/virtual-fs/types";
import { Terminal, ExternalLink } from "lucide-react";

export type DevDashboardTab =
  | "ALL"
  | "TERMINAL"
  | "PROFILE.EXE"
  | "SKILLS.DB"
  | "EXPERIENCE.LOG"
  | "GOALS.MD"
  | "BELIEFS.TXT";

export function DevModeDashboard() {
  const router = useRouter();
  const { setMode, setCommandPaletteOpen } = useThemeMode();
  const [activeTab, setActiveTab] = React.useState<DevDashboardTab>("ALL");
  const [activeVfsFile, setActiveVfsFile] = React.useState<string>("whoami.md");

  // VFS terminal cwd
  const [cwd, setCwd] = React.useState<string>("/");

  const handleExit = () => {
    setMode("normal");
    router.push("/");
  };

  const handleSelectFile = (filename: string) => {
    setActiveVfsFile(filename);
    if (filename === "skills.db") setActiveTab("SKILLS.DB");
    else if (filename === "beliefs.txt") setActiveTab("BELIEFS.TXT");
    else if (filename === "experience.log") setActiveTab("EXPERIENCE.LOG");
    else if (filename === "goals.md") setActiveTab("GOALS.MD");
    else setActiveTab("ALL");
  };

  const tabs: DevDashboardTab[] = [
    "ALL",
    "TERMINAL",
    "PROFILE.EXE",
    "SKILLS.DB",
    "EXPERIENCE.LOG",
    "GOALS.MD",
    "BELIEFS.TXT",
  ];

  return (
    <div
      className="w-full max-w-7xl mx-auto rounded-2xl border border-[#1b222d] bg-[#05080c] shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden font-mono flex flex-col text-zinc-200 select-none my-2 sm:my-4"
      data-theme="developer"
    >
      {/* 1. macOS Window Top Title Bar */}
      <div className="px-4 py-2.5 bg-[#0c1017] border-b border-[#1b222d] flex items-center justify-between gap-4 select-none">
        {/* Left: Traffic Lights + Window Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExit}
              className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-125 transition-transform active:scale-90 cursor-pointer border border-[#e0443e]/50"
              title="Close window / Exit (Esc)"
              aria-label="Close Developer Mode"
            />
            <button
              type="button"
              onClick={handleExit}
              className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:brightness-125 transition-transform active:scale-90 cursor-pointer border border-[#dea123]/50"
              title="Minimize"
              aria-label="Minimize"
            />
            <button
              type="button"
              onClick={() => setActiveTab("ALL")}
              className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:brightness-125 transition-transform active:scale-90 cursor-pointer border border-[#1aab29]/50"
              title="Maximize Grid"
              aria-label="Maximize"
            />
          </div>

          <span className="text-xs text-zinc-400 font-mono hidden sm:inline-block">
            rinku@MacBook-Pro ~ % dev
          </span>
        </div>

        {/* Right: ESC Exit Button */}
        <button
          type="button"
          onClick={handleExit}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161c24] hover:bg-red-500/20 text-zinc-400 hover:text-red-300 border border-zinc-700/80 hover:border-red-500/30 text-xs font-mono transition-all cursor-pointer"
          title="Exit to Normal Mode"
        >
          <span className="text-[10px] bg-zinc-800 px-1 py-0.2 rounded border border-zinc-600 text-zinc-300">
            ESC
          </span>
          <span>Exit</span>
        </button>
      </div>

      {/* 2. Sub-Header: >_ DEV MODE + Navigation Tabs */}
      <div className="px-4 py-3 bg-[#080c12] border-b border-[#1b222d] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-sm">
            <Terminal className="w-4 h-4" />
            <span>&gt;_ DEV MODE</span>
          </div>
          <span className="text-[10px] text-zinc-500 hidden sm:inline">
            You&apos;re seeing the developer interface
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-zinc-800 text-emerald-400 font-bold border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Content Area */}
      <div className="p-3 sm:p-4 md:p-5 overflow-y-auto space-y-4">
        {activeTab === "ALL" && (
          <div className="space-y-4">
            {/* Row 1: Profile.exe (8 cols) + Explorer (4 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-8 min-h-[300px]">
                <DevProfileExeCard />
              </div>
              <div className="lg:col-span-4 min-h-[300px]">
                <DevExplorerTree activeFile={activeVfsFile} onSelectFile={handleSelectFile} />
              </div>
            </div>

            {/* Row 2: whoami.md (8 cols) + (commit.log + stats.json) (4 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-8 min-h-[220px]">
                <DevVimEditor filename={activeVfsFile} />
              </div>
              <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 min-h-[220px]">
                <div className="min-h-[110px]">
                  <DevCommitLog />
                </div>
                <div className="min-h-[110px]">
                  <DevStatsJson />
                </div>
              </div>
            </div>

            {/* Row 3: skills.db (5 cols) + terminal beliefs (5 cols) + matrix stream (2 cols) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 min-h-[220px]">
                <DevSkillsDb />
              </div>
              <div className="md:col-span-5 min-h-[220px]">
                <DevBeliefsTerminal />
              </div>
              <div className="md:col-span-2 min-h-[220px]">
                <DevMatrixRainGrid />
              </div>
            </div>
          </div>
        )}

        {/* Tab View: Full Terminal */}
        {activeTab === "TERMINAL" && (
          <div className="h-[600px] rounded-xl overflow-hidden border border-zinc-800">
            <TerminalView
              cwd={cwd}
              onCwdChange={setCwd}
              onSelectFile={(file: VFSFile) => {
                setActiveVfsFile(file.name);
                setActiveTab("ALL");
              }}
            />
          </div>
        )}

        {/* Tab View: Profile.exe Solo */}
        {activeTab === "PROFILE.EXE" && (
          <div className="space-y-4">
            <div className="min-h-[320px]">
              <DevProfileExeCard />
            </div>
            <div className="min-h-[240px]">
              <DevVimEditor filename="whoami.md" />
            </div>
          </div>
        )}

        {/* Tab View: Skills.db Solo */}
        {activeTab === "SKILLS.DB" && (
          <div className="space-y-4">
            <div className="min-h-[260px]">
              <DevSkillsDb />
            </div>
            <div className="min-h-[300px]">
              <DevSuperpowers />
            </div>
          </div>
        )}

        {/* Tab View: Experience.log / Projects */}
        {activeTab === "EXPERIENCE.LOG" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DevCommitLog />
              <DevStatsJson />
            </div>
            <div className="min-h-[300px]">
              <DevProjectsCockpit />
            </div>
          </div>
        )}

        {/* Tab View: Goals & Story */}
        {activeTab === "GOALS.MD" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[400px]">
            <div className="lg:col-span-8">
              <DevVimEditor filename="goals.md" />
            </div>
            <div className="lg:col-span-4">
              <DevExplorerTree activeFile="goals.md" onSelectFile={handleSelectFile} />
            </div>
          </div>
        )}

        {/* Tab View: Beliefs */}
        {activeTab === "BELIEFS.TXT" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[400px]">
            <div className="md:col-span-8">
              <DevBeliefsTerminal />
            </div>
            <div className="md:col-span-4">
              <DevMatrixRainGrid />
            </div>
          </div>
        )}
      </div>

      {/* 4. Bottom System Footer (Hotkeys & Feedback) */}
      <div className="px-4 py-2.5 bg-[#0c1017] border-t border-[#1b222d] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400 select-none">
        <div className="flex flex-wrap items-center gap-3 text-[11px]">
          <button
            type="button"
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-1 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
              ⌘K
            </span>
            <span>Open command palette</span>
          </button>

          <button
            type="button"
            onClick={handleExit}
            className="flex items-center gap-1 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
              ~/
            </span>
            <span>Toggle dev mode</span>
          </button>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden sm:flex items-center gap-1 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
              ⇧
            </span>
            <span>Go to top</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("TERMINAL")}
            className="hidden md:flex items-center gap-1 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
              h
            </span>
            <span>Show help</span>
          </button>
        </div>

        <div className="text-[11px] text-zinc-500">
          <span>Have feedback? </span>
          <a
            href="https://github.com/rinkudiwakar/rinkudiwakar.github.io/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Open an issue on GitHub</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
