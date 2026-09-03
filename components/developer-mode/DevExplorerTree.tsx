"use client";

import * as React from "react";
import { Folder, FolderOpen, FileCode, RotateCcw, FileText } from "lucide-react";

interface DevExplorerTreeProps {
  activeFile?: string;
  onSelectFile?: (filename: string) => void;
}

export function DevExplorerTree({ activeFile = "whoami.md", onSelectFile }: DevExplorerTreeProps) {
  const [openFolders, setOpenFolders] = React.useState<Record<string, boolean>>({
    me: true,
    story: true,
    projects: false,
    notes: false,
  });

  const toggleFolder = (folder: string) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  return (
    <div className="h-full flex flex-col bg-[#070b10] border border-zinc-800 rounded-xl overflow-hidden font-mono text-xs">
      {/* Header */}
      <div className="px-3 py-2 bg-[#0c1017] border-b border-zinc-800 flex items-center justify-between text-zinc-400 select-none">
        <span className="text-[11px] font-bold tracking-wider text-zinc-300">EXPLORER</span>
        <button
          type="button"
          onClick={() => setOpenFolders({ me: true, story: true, projects: true, notes: false })}
          className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors"
          title="Reset View"
        >
          <RotateCcw className="w-3 h-3" />
        </button>
      </div>

      {/* Tree Content */}
      <div className="flex-1 p-2.5 space-y-1 overflow-y-auto text-zinc-400">
        {/* /me */}
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => toggleFolder("me")}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors w-full text-left"
          >
            {openFolders.me ? (
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Folder className="w-3.5 h-3.5 text-amber-400" />
            )}
            <span className="font-semibold text-emerald-400">/me</span>
          </button>

          {openFolders.me && (
            <div className="pl-4 space-y-1 border-l border-zinc-800/80 ml-1.5">
              {/* whoami.md */}
              <button
                type="button"
                onClick={() => onSelectFile?.("whoami.md")}
                className={`flex items-center gap-1.5 w-full text-left transition-colors ${
                  activeFile === "whoami.md" ? "text-emerald-400 font-bold" : "hover:text-zinc-200"
                }`}
              >
                <FileText className="w-3 h-3 text-sky-400" />
                <span>whoami.md</span>
              </button>

              {/* story/ */}
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => toggleFolder("story")}
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors w-full text-left"
                >
                  {openFolders.story ? (
                    <FolderOpen className="w-3 h-3 text-amber-400" />
                  ) : (
                    <Folder className="w-3 h-3 text-amber-400" />
                  )}
                  <span>story/</span>
                </button>

                {openFolders.story && (
                  <div className="pl-3.5 space-y-1 border-l border-zinc-800/60 ml-1">
                    {["origin.md", "curiosity.md", "first-build.md", "lessons.md", "journey.md"].map(
                      (item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => onSelectFile?.(item)}
                          className={`flex items-center gap-1 text-[11px] w-full text-left transition-colors ${
                            activeFile === item ? "text-emerald-400 font-bold" : "hover:text-zinc-200"
                          }`}
                        >
                          <FileText className="w-2.5 h-2.5 text-zinc-500" />
                          <span>{item}</span>
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* skills.db */}
              <button
                type="button"
                onClick={() => onSelectFile?.("skills.db")}
                className={`flex items-center gap-1.5 w-full text-left transition-colors ${
                  activeFile === "skills.db" ? "text-emerald-400 font-bold" : "hover:text-zinc-200"
                }`}
              >
                <FileCode className="w-3 h-3 text-amber-400" />
                <span>skills.db</span>
              </button>

              {/* experience.log */}
              <button
                type="button"
                onClick={() => onSelectFile?.("experience.log")}
                className={`flex items-center gap-1.5 w-full text-left transition-colors ${
                  activeFile === "experience.log" ? "text-emerald-400 font-bold" : "hover:text-zinc-200"
                }`}
              >
                <FileText className="w-3 h-3 text-purple-400" />
                <span>experience.log</span>
              </button>

              {/* projects/ */}
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => toggleFolder("projects")}
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors w-full text-left"
                >
                  {openFolders.projects ? (
                    <FolderOpen className="w-3 h-3 text-amber-400" />
                  ) : (
                    <Folder className="w-3 h-3 text-amber-400" />
                  )}
                  <span>projects/</span>
                </button>

                {openFolders.projects && (
                  <div className="pl-3.5 space-y-1 border-l border-zinc-800/60 ml-1">
                    {["pradrix/", "kavach/", "nanotrade/"].map((item) => (
                      <span key={item} className="flex items-center gap-1 text-[11px] text-zinc-400">
                        <Folder className="w-2.5 h-2.5 text-zinc-500" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* beliefs.txt */}
              <button
                type="button"
                onClick={() => onSelectFile?.("beliefs.txt")}
                className={`flex items-center gap-1.5 w-full text-left transition-colors ${
                  activeFile === "beliefs.txt" ? "text-emerald-400 font-bold" : "hover:text-zinc-200"
                }`}
              >
                <FileText className="w-3 h-3 text-emerald-400" />
                <span>beliefs.txt</span>
              </button>

              {/* goals.md */}
              <button
                type="button"
                onClick={() => onSelectFile?.("goals.md")}
                className={`flex items-center gap-1.5 w-full text-left transition-colors ${
                  activeFile === "goals.md" ? "text-emerald-400 font-bold" : "hover:text-zinc-200"
                }`}
              >
                <FileText className="w-3 h-3 text-sky-400" />
                <span>goals.md</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-1.5 bg-[#0c1017] border-t border-zinc-800 text-[10px] text-zinc-500 flex justify-between select-none">
        <span>10 items</span>
        <span className="text-emerald-400">vfs ready</span>
      </div>
    </div>
  );
}
