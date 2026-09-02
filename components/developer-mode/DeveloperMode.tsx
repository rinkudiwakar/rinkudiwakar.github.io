"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Terminal as TerminalIcon,
  Maximize2,
  Minimize2,
  FolderTree,
  GitBranch,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { FileExplorer } from "./FileExplorer";
import { TerminalView } from "./TerminalView";
import { FileViewer } from "./FileViewer";
import { VFSFile, VFSDirectory } from "@/lib/virtual-fs/types";
import { virtualFileSystem } from "@/lib/virtual-fs/vfs-data";
import { useThemeMode } from "@/context/ThemeModeContext";

export function DeveloperMode() {
  const router = useRouter();
  const { setMode } = useThemeMode();

  const [cwd, setCwd] = React.useState<string>("/");
  // Default open /me/profile.ts so visitors immediately see code
  const defaultFile = (virtualFileSystem.children["me"] as VFSDirectory)?.children?.["profile.ts"] as VFSFile || null;
  const [selectedFile, setSelectedFile] = React.useState<VFSFile | null>(defaultFile);
  const [showSidebar, setShowSidebar] = React.useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false);
  const [mobileTab, setMobileTab] = React.useState<"explorer" | "terminal" | "viewer">("terminal");
  const [isInitializing, setIsInitializing] = React.useState<boolean>(true);

  // Brief terminal-style entrance transition (PRD Section 28.1)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcut listener: Esc to exit
  React.useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMode("normal");
        router.push("/");
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [router, setMode]);

  const handleSelectFile = (file: VFSFile) => {
    setSelectedFile(file);
    const parentDir = file.path.substring(0, file.path.lastIndexOf("/")) || "/";
    setCwd(parentDir);
    setMobileTab("viewer");
  };

  const handleSelectDirectory = (dir: VFSDirectory) => {
    setCwd(dir.path);
  };

  const handleExit = () => {
    setMode("normal");
    router.push("/");
  };

  if (isInitializing) {
    return (
      <div
        className="fixed inset-0 z-50 bg-[#090c10] text-emerald-400 font-mono text-sm flex flex-col items-center justify-center p-6 cursor-pointer select-none"
        onClick={() => setIsInitializing(false)}
        role="status"
        aria-live="polite"
      >
        <div className="space-y-4 max-w-md w-full bg-[#161b22] p-6 rounded-xl border border-[#30363d] shadow-2xl">
          {/* macOS window dots */}
          <div className="flex items-center justify-between pb-3 border-b border-[#30363d]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] text-zinc-500">rinku@nitj — dev mode</span>
          </div>

          <div className="space-y-2 py-2">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <TerminalIcon className="w-4 h-4 text-emerald-400" />
              <span>Mounting Virtual Workspace...</span>
            </div>
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <span className="text-emerald-400">$</span>
              <span>dev --vfs=identity</span>
              <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
            </div>
          </div>

          <div className="text-[11px] text-zinc-500 pt-2 flex justify-between border-t border-[#30363d]">
            <span>Press any key or click to enter</span>
            <span className="text-sky-400 hover:underline">Skip →</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-[calc(100vh-4rem)] flex flex-col bg-[#090c10] text-[#e6edf3] font-mono select-none ${
        isFullscreen ? "fixed inset-0 z-50 min-h-screen" : ""
      }`}
      data-theme="developer"
    >
      {/* macOS Window Top Title Bar */}
      <header className="px-4 py-2.5 bg-[#161b22] border-b border-[#30363d] flex items-center justify-between shadow-sm">
        {/* Left: macOS Window Traffic Lights & Exit Control */}
        <div className="flex items-center gap-3">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2 mr-2">
            <button
              type="button"
              onClick={handleExit}
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110 transition-transform active:scale-95 cursor-pointer"
              title="Close window / Exit to Normal Mode (Esc)"
              aria-label="Exit Developer Mode"
            />
            <button
              type="button"
              onClick={() => setShowSidebar((prev) => !prev)}
              className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-transform active:scale-95 cursor-pointer"
              title="Toggle File Tree Sidebar"
              aria-label="Toggle Sidebar"
            />
            <button
              type="button"
              onClick={() => setIsFullscreen((prev) => !prev)}
              className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-110 transition-transform active:scale-95 cursor-pointer"
              title="Toggle Fullscreen"
              aria-label="Toggle Fullscreen"
            />
          </div>

          <button
            type="button"
            onClick={handleExit}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Normal Mode</span>
          </button>
        </div>

        {/* Center: macOS Terminal Title */}
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
          <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
          <span>rinku@nitj — ~/rinkudiwakar — bash 80×24</span>
        </div>

        {/* Right: Controls & Mobile Tab Switcher */}
        <div className="flex items-center gap-2">
          {/* Mobile View Switcher */}
          <div className="flex lg:hidden items-center gap-1 bg-[#0d1117] p-1 rounded-lg border border-[#30363d]">
            <button
              type="button"
              onClick={() => setMobileTab("explorer")}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                mobileTab === "explorer"
                  ? "bg-sky-500 text-white font-medium"
                  : "text-zinc-400"
              }`}
            >
              Tree
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("terminal")}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                mobileTab === "terminal"
                  ? "bg-sky-500 text-white font-medium"
                  : "text-zinc-400"
              }`}
            >
              CLI
            </button>
            {selectedFile && (
              <button
                type="button"
                onClick={() => setMobileTab("viewer")}
                className={`px-2 py-1 rounded text-xs transition-colors ${
                  mobileTab === "viewer"
                    ? "bg-sky-500 text-white font-medium"
                    : "text-zinc-400"
                }`}
              >
                Code
              </button>
            )}
          </div>

          {/* Desktop Fullscreen & Sidebar Toggles */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowSidebar((prev) => !prev)}
              className="p-1.5 rounded bg-[#0d1117] text-zinc-400 hover:text-white border border-[#30363d] transition-colors"
              title="Toggle File Tree"
            >
              <FolderTree className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsFullscreen((prev) => !prev)}
              className="p-1.5 rounded bg-[#0d1117] text-zinc-400 hover:text-white border border-[#30363d] transition-colors"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Layout (design.md Section 27) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-[550px]">
        {/* Left Pane: Virtual File Tree Explorer */}
        {showSidebar && (
          <div
            className={`lg:col-span-3 h-full border-r border-[#30363d] bg-[#0d1117] ${
              mobileTab === "explorer" ? "block" : "hidden lg:block"
            }`}
          >
            <FileExplorer
              currentPath={cwd}
              selectedFile={selectedFile}
              onSelectFile={handleSelectFile}
              onSelectDirectory={handleSelectDirectory}
            />
          </div>
        )}

        {/* Right / Center Pane: Code Viewer & Interactive Terminal */}
        <div
          className={`${
            showSidebar ? "lg:col-span-9" : "lg:col-span-12"
          } h-full flex flex-col ${
            mobileTab === "explorer" ? "hidden lg:flex" : "flex"
          }`}
        >
          {/* Desktop Split View: Code Editor (Top) & Terminal CLI (Bottom) */}
          <div className="flex-1 grid grid-cols-1 lg:grid-rows-12 overflow-hidden">
            {/* Top Editor Area: 7 rows */}
            <div
              className={`lg:row-span-7 h-full overflow-hidden ${
                mobileTab === "terminal" ? "hidden lg:block" : "block"
              }`}
            >
              {selectedFile ? (
                <FileViewer
                  file={selectedFile}
                  onClose={() => setSelectedFile(null)}
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-zinc-500 bg-[#0d1117] p-8 text-center">
                  <TerminalIcon className="w-10 h-10 text-zinc-600 mb-3" />
                  <p className="text-sm font-semibold text-zinc-400">
                    No file selected
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    Click a file in the tree to view its content or run{" "}
                    <span className="text-sky-400">cat profile.ts</span> in the
                    terminal.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Terminal CLI Area: 5 rows */}
            <div
              className={`lg:row-span-5 h-full border-t border-[#30363d] overflow-hidden ${
                mobileTab === "viewer" ? "hidden lg:block" : "block"
              }`}
            >
              <TerminalView
                cwd={cwd}
                onCwdChange={setCwd}
                onSelectFile={handleSelectFile}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom IDE Status Bar */}
      <footer className="px-4 py-1.5 bg-[#161b22] border-t border-[#30363d] flex items-center justify-between text-[11px] text-zinc-500 select-none">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <GitBranch className="w-3.5 h-3.5" />
            <span>main*</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>VFS Sandbox v1.0.0</span>
          </span>
          <span className="hidden md:inline text-zinc-500">
            NIT Jalandhar (2023–2027)
          </span>
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <span>UTF-8</span>
          <span className="hidden sm:inline">TypeScript</span>
          <span className="flex items-center gap-1 text-sky-400">
            <Cpu className="w-3 h-3" />
            <span>Ready</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
