export type VirtualNode =
  | {
      type: "directory";
      name: string;
      children: VirtualNode[];
    }
  | {
      type: "file";
      name: string;
      content: string;
      mimeType: "text" | "code" | "json" | "markdown";
      openRoute?: string;
    };

export interface ParsedCommand {
  command: string;
  args: string[];
}

export interface CommandResult {
  output: string;
  type?: "success" | "error" | "info" | "system";
  action?: {
    type: "navigate" | "clear" | "exit";
    payload?: string;
  };
}

export interface DeveloperContext {
  currentPath: string;
  history: string[];
  filesystem: VirtualNode;
}

export interface DevCommand {
  name: string;
  aliases?: string[];
  description: string;
  execute: (args: string[], context: DeveloperContext) => CommandResult;
}
