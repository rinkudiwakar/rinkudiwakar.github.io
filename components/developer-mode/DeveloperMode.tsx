"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Terminal as TerminalIcon } from "lucide-react";
import { FileExplorer } from "./FileExplorer";
import { TerminalView } from "./TerminalView";
import { FileViewer } from "./FileViewer";
import { VFSFile, VFSDirectory } from "@/lib/virtual-fs/types";
import { useThemeMode } from "@/context/ThemeModeContext";
import { Badge } from "@/components/ui/Badge";

export function DeveloperMode() {
  const router = useRouter();
  const { setMode } = useThemeMode();

  const [cwd, setCwd] = React.useState<string>("/");
  const [selectedFile, setSelectedFile] = React.useState<VFSFile | null>(null);
  const [mobileTab, setMobileTab] = React.useState<"explorer" | "terminal" | "viewer">("terminal");
  const [isInitializing, setIsInitializing] = React.useState<boolean>(true);

  // Brief entrance animation (PRD Section 28.1)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 450);
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
        className="fixed inset-0 z-50 bg-black text-emerald-400 font-mono text-sm flex flex-col items-center justify-center p-6 cursor-pointer select-none"
        onClick={() => setIsInitializing(false)}
        role="status"
        aria-live="polite"
      >
        <div className="space-y-3 max-w-md w-full">
          <div className="flex items-center gap-2 text-xs text-zinc-500 pb-2 border-b border-zinc-800">
            <TerminalIcon className="w-4 h-4 text-emerald-500" />
            <span>Initializing Developer Mode VFS...</span>
          </div>
          <div className="flex items-center gap-2 text-base font-bold">
            <span className="text-zinc-500">$</span>
            <span>dev --vfs=identity</span>
            <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
          </div>
          <div className="text-[11px] text-zinc-600 pt-2 flex justify-between">
            <span>Mounting virtual filesystem...</span>
            <span className="text-zinc-400 hover:underline">Click to skip</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-[calc(100vh-4rem)] flex flex-col bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)] transition-colors duration-200"
      data-theme="developer"
    >
      {/* Top Workspace Bar */}
      <header className="px-4 py-2.5 bg-[var(--background-subtle)] border-b border-[var(--border)] flex items-center justify-between select-none">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleExit}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            title="Exit to Normal Mode (Esc)"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Exit to Normal Mode</span>
            <span className="sm:hidden">Exit</span>
          </button>

          <div className="h-4 w-px bg-[var(--border)]" />

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[var(--foreground)] truncate">
              Rinku Diwakar — Developer Workspace
            </span>
            <Badge variant="accent" className="hidden sm:inline-flex text-[10px]">
              VFS v1.0
            </Badge>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="flex lg:hidden items-center gap-1 bg-[var(--background-card)] p-1 rounded-lg border border-[var(--border)]">
          <button
            type="button"
            onClick={() => setMobileTab("explorer")}
            className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
              mobileTab === "explorer"
                ? "bg-[var(--accent)] text-white font-medium"
                : "text-[var(--foreground-muted)]"
            }`}
          >
            Tree
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("terminal")}
            className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
              mobileTab === "terminal"
                ? "bg-[var(--accent)] text-white font-medium"
                : "text-[var(--foreground-muted)]"
            }`}
          >
            CLI
          </button>
          {selectedFile && (
            <button
              type="button"
              onClick={() => setMobileTab("viewer")}
              className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                mobileTab === "viewer"
                  ? "bg-[var(--accent)] text-white font-medium"
                  : "text-[var(--foreground-muted)]"
              }`}
            >
              File
            </button>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-[var(--foreground-subtle)]">
          <span>“Rinku explained as a developer”</span>
          <span className="text-[10px] text-[var(--foreground-muted)] px-1.5 py-0.5 rounded bg-[var(--background-card)] border border-[var(--border-subtle)]">
            Esc to exit
          </span>
        </div>
      </header>

      {/* Main Workspace Layout (design.md Section 27) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-[500px]">
        {/* Left Pane: Virtual File Tree Explorer (3 cols on desktop) */}
        <div
          className={`lg:col-span-3 h-full ${
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

        {/* Right / Center Pane: Terminal CLI & Optional File Viewer (9 cols on desktop) */}
        <div
          className={`lg:col-span-9 h-full flex flex-col ${
            mobileTab === "explorer" ? "hidden lg:flex" : "flex"
          }`}
        >
          {selectedFile ? (
            <div className="h-full grid grid-cols-1 lg:grid-cols-2">
              {/* File Viewer */}
              <div className={`${mobileTab === "terminal" ? "hidden lg:block" : "block"} h-full`}>
                <FileViewer
                  file={selectedFile}
                  onClose={() => setSelectedFile(null)}
                />
              </div>

              {/* Terminal View alongside Viewer */}
              <div className={`${mobileTab === "viewer" ? "hidden lg:block" : "block"} h-full`}>
                <TerminalView
                  cwd={cwd}
                  onCwdChange={setCwd}
                  onSelectFile={handleSelectFile}
                />
              </div>
            </div>
          ) : (
            <div className="h-full">
              <TerminalView
                cwd={cwd}
                onCwdChange={setCwd}
                onSelectFile={handleSelectFile}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
