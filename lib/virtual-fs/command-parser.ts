import { virtualFileSystem } from "./vfs-data";
import { VFSNode, VFSDirectory, VFSFile } from "./types";

/**
 * Resolve a path string to a VFS node.
 */
export function resolvePath(
  pathStr: string,
  cwd: string = "/"
): { node: VFSNode | null; fullPath: string } {
  let targetPath = pathStr.trim();

  if (!targetPath.startsWith("/")) {
    if (cwd === "/") {
      targetPath = "/" + targetPath;
    } else {
      targetPath = `${cwd}/${targetPath}`;
    }
  }

  // Normalize path segments (remove . and handle ..)
  const segments = targetPath.split("/").filter(Boolean);
  const resolvedSegments: string[] = [];

  for (const seg of segments) {
    if (seg === ".") continue;
    if (seg === "..") {
      resolvedSegments.pop();
    } else {
      resolvedSegments.push(seg);
    }
  }

  const normalizedPath = "/" + resolvedSegments.join("/");

  if (normalizedPath === "/") {
    return { node: virtualFileSystem, fullPath: "/" };
  }

  let currentNode: VFSNode = virtualFileSystem;

  for (const seg of resolvedSegments) {
    if (currentNode.type !== "directory") {
      return { node: null, fullPath: normalizedPath };
    }
    const nextChild: VFSNode | undefined = currentNode.children[seg];
    if (!nextChild) {
      return { node: null, fullPath: normalizedPath };
    }
    currentNode = nextChild;
  }

  return { node: currentNode, fullPath: normalizedPath };
}

/**
 * Get all files and directories in a directory node.
 */
export function listDirectory(dir: VFSDirectory): VFSNode[] {
  return Object.values(dir.children);
}

/**
 * Find a file in the virtual filesystem.
 */
export function getFile(pathStr: string, cwd: string = "/"): VFSFile | null {
  const { node } = resolvePath(pathStr, cwd);
  if (node && node.type === "file") {
    return node;
  }
  return null;
}

/**
 * Autocomplete helper for filenames and directories given a partial token.
 */
export function autocompletePath(
  partial: string,
  cwd: string = "/"
): { completion: string | null; matches: string[] } {
  const trimmed = partial.trim();
  let searchDir = cwd;
  let prefix = trimmed;

  if (trimmed.includes("/")) {
    const lastSlash = trimmed.lastIndexOf("/");
    const dirPart = trimmed.substring(0, lastSlash) || "/";
    prefix = trimmed.substring(lastSlash + 1);
    const resolved = resolvePath(dirPart, cwd);
    if (resolved.node && resolved.node.type === "directory") {
      searchDir = resolved.fullPath;
    } else {
      return { completion: null, matches: [] };
    }
  }

  const dirNode = resolvePath(searchDir, "/").node;
  if (!dirNode || dirNode.type !== "directory") {
    return { completion: null, matches: [] };
  }

  const candidates = Object.values(dirNode.children).map((c) => ({
    name: c.name + (c.type === "directory" ? "/" : ""),
    isDir: c.type === "directory",
  }));

  const matches = candidates
    .filter((c) => c.name.toLowerCase().startsWith(prefix.toLowerCase()))
    .map((c) => c.name);

  if (matches.length === 1) {
    const matched = matches[0];
    const prefixDir = trimmed.includes("/")
      ? trimmed.substring(0, trimmed.lastIndexOf("/") + 1)
      : "";
    return {
      completion: prefixDir + matched,
      matches,
    };
  }

  return {
    completion: null,
    matches,
  };
}

/**
 * Search content across all files in the virtual filesystem.
 */
export function searchVirtualFiles(
  query: string
): { file: VFSFile; line: number; text: string }[] {
  const results: { file: VFSFile; line: number; text: string }[] = [];
  const lowerQuery = query.toLowerCase();

  function walk(node: VFSNode) {
    if (node.type === "file") {
      const lines = node.content.split("\n");
      lines.forEach((line, index) => {
        if (line.toLowerCase().includes(lowerQuery)) {
          results.push({
            file: node,
            line: index + 1,
            text: line.trim(),
          });
        }
      });
    } else if (node.type === "directory") {
      Object.values(node.children).forEach(walk);
    }
  }

  walk(virtualFileSystem);
  return results;
}
