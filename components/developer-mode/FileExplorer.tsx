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
  const [openFolders, setOpenFolders] = React.useState<{ [path: string]: boolean }>({
    "/": true,
    "/me": true,
    "/story": true,
    "/projects": true,
    "/projects/kavach": false,
    "/projects/skillgap-ai": false,
    "/projects/nanotrade": false,
    "/now": true,
  });

  const toggleFolder = (path: string) => {
    setOpenFolders((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const getFileIcon = (file: VFSFile) => {
    switch (file.language) {
      case "typescript":
      case "python":
        return <FileCode className="w-3.5 h-3.5 text-blue-400 shrink-0" />;
      case "json":
        return <FileJson className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case "markdown":
      case "text":
      default:
        return <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
    }
  };

  const renderNode = (node: VFSNode, depth = 0) => {
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
                ? "bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold"
                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-subtle)]"
            }`}
            style={{ paddingLeft: `${depth * 12 + 8}px` }}
          >
            {isOpen ? (
              <ChevronDown className="w-3 h-3 text-[var(--foreground-subtle)] shrink-0" />
            ) : (
              <ChevronRight className="w-3 h-3 text-[var(--foreground-subtle)] shrink-0" />
            )}
            {isOpen ? (
              <FolderOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            ) : (
              <Folder className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            )}
            <span>{node.name}</span>
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
    const isSelected = selectedFile?.path === node.path;

    return (
      <button
        key={node.path}
        type="button"
        onClick={() => onSelectFile(node)}
        className={`w-full flex items-center gap-2 px-2 py-1 rounded text-xs font-mono text-left transition-colors ${
          isSelected
            ? "bg-[var(--accent)] text-white font-medium shadow-xs"
            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-subtle)]"
        }`}
        style={{ paddingLeft: `${depth * 12 + 20}px` }}
      >
        {getFileIcon(node)}
        <span className="truncate">{node.name}</span>
      </button>
    );
  };

  return (
    <div className="h-full flex flex-col bg-[var(--background-card)] border-r border-[var(--border)] overflow-y-auto p-2">
      <div className="px-2 py-2 mb-2 text-[10px] font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-bold border-b border-[var(--border-subtle)] flex items-center justify-between">
        <span>Virtual Workspace</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--background-subtle)]">
          VFS
        </span>
      </div>

      <div className="space-y-0.5">{renderNode(virtualFileSystem, 0)}</div>
    </div>
  );
}
