export interface VFSFile {
  type: "file";
  name: string;
  path: string;
  language: "typescript" | "markdown" | "json" | "text" | "python";
  content: string;
  size: string;
  lastModified: string;
}

export interface VFSDirectory {
  type: "directory";
  name: string;
  path: string;
  children: { [name: string]: VFSNode };
}

export type VFSNode = VFSFile | VFSDirectory;

export interface CommandResult {
  output: React.ReactNode;
  newCwd?: string;
  clear?: boolean;
  action?: "switch-normal" | "navigate";
  targetUrl?: string;
}
