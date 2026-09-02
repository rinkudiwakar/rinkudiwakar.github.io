"use client";

import * as React from "react";
import {
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  FileJson,
  ChevronRight,
  ChevronDown,
  Search,
} from "lucide-react";
import { VFSNode, VFSDirectory, VFSFile } from "@/lib/virtual-fs/types";
import { virtualFileSystem } from "@/lib/virtual-fs/vfs-data";

interface FileExplorerProps {
  currentPath: string;
  selectedFile: VFSFile | null;
  onSelectFile: (file: VFSFile) => void;
  onSelectDirectory: (dir: VFSDirectory) => void;
}

export function FileExplorer({
  currentPath,
  selectedFile,
  onSelectFile,
  onSelectDirectory,
}: FileExplorerProps) {
  const [filter, setFilter] = React.useState("");
  const [openFolders, setOpenFolders] = React.useState<{ [path: string]: boolean }>({
    "/": true,
    "/me": true,
    "/story": true,
    "/projects": true,
    "/projects/kavach": true,
    "/projects/skillgap-ai": true,
    "/projects/nanotrade": true,
    "/projects/moviesentiment": true,
    "/projects/bike-demand-ml": true,
    "/now": true,
  });

  const toggleFolder = (path: string) => {
    setOpenFolders((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const getFileIcon = (file: VFSFile) => {
    switch (file.language) {
      case "typescript":
      case "python":
        return <FileCode className="w-3.5 h-3.5 text-sky-400 shrink-0" />;
      case "json":
        return <FileJson className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case "markdown":
      case "text":
      default:
        return <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
    }
  };

  const renderNode = (node: VFSNode, depth = 0): React.ReactNode => {
    if (node.type === "directory") {
      const isOpen = !!openFolders[node.path];
      const isRoot = node.path === "/";

      if (isRoot) {
        return (
          <div key="root" className="space-y-0.5">
            {Object.values(node.children).map((child) => renderNode(child, depth))}
          </div>
        );
      }

      return (
        <div key={node.path} className="select-none">
          <button
            type="button"
            onClick={() => {
              toggleFolder(node.path);
              onSelectDirectory(node);
            }}
            className={`w-full flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono text-left transition-colors ${
              currentPath === node.path
                ? "bg-[#21262d] text-sky-400 font-semibold"
                : "text-zinc-400 hover:text-white hover:bg-[#161b22]"
            }`}
            style={{ paddingLeft: `${depth * 12 + 6}px` }}
          >
            {isOpen ? (
              <ChevronDown className="w-3 h-3 text-zinc-500 shrink-0" />
            ) : (
              <ChevronRight className="w-3 h-3 text-zinc-500 shrink-0" />
            )}
            {isOpen ? (
              <FolderOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            ) : (
              <Folder className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            )}
            <span className="truncate">{node.name}</span>
          </button>

          {isOpen && (
            <div className="space-y-0.5">
              {Object.values(node.children).map((child) =>
                renderNode(child, depth + 1)
              )}
            </div>
          )}
        </div>
      );
    }

    // Node is a File
    if (filter && !node.name.toLowerCase().includes(filter.toLowerCase())) {
      return null;
    }

    const isSelected = selectedFile?.path === node.path;

    return (
      <button
        key={node.path}
        type="button"
        onClick={() => onSelectFile(node)}
        className={`w-full flex items-center gap-2 px-2 py-1 rounded text-xs font-mono text-left transition-colors ${
          isSelected
            ? "bg-sky-500 text-white font-medium shadow-xs"
            : "text-zinc-400 hover:text-white hover:bg-[#161b22]"
        }`}
        style={{ paddingLeft: `${depth * 12 + 18}px` }}
      >
        {getFileIcon(node)}
        <span className="truncate">{node.name}</span>
      </button>
    );
  };

  return (
    <div className="h-full flex flex-col bg-[#0d1117] overflow-hidden p-2 text-zinc-300">
      {/* Sidebar Header */}
      <div className="px-2 py-2 mb-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold border-b border-[#21262d] flex items-center justify-between">
        <span>Explorer</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#161b22] text-zinc-400">
          VFS
        </span>
      </div>

      {/* Filter input */}
      <div className="mb-2 px-1">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#161b22] border border-[#30363d] text-xs">
          <Search className="w-3 h-3 text-zinc-500 shrink-0" />
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter files..."
            className="w-full bg-transparent text-[11px] font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-hidden"
          />
        </div>
      </div>

      {/* File Tree Items */}
      <div className="flex-1 overflow-y-auto space-y-0.5 pr-1">
        {renderNode(virtualFileSystem, 0)}
      </div>
    </div>
  );
}
