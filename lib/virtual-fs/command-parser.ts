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
