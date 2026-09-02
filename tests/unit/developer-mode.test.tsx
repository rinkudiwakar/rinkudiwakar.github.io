import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { resolvePath, getFile, listDirectory } from "@/lib/virtual-fs/command-parser";
import { virtualFileSystem } from "@/lib/virtual-fs/vfs-data";
import { DeveloperMode } from "@/components/developer-mode/DeveloperMode";
import { ThemeModeProvider } from "@/context/ThemeModeContext";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/dev",
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("Developer Mode & Virtual Filesystem", () => {
  describe("Virtual Filesystem Resolution", () => {
    it("resolves root and top-level directories", () => {
      const rootRes = resolvePath("/", "/");
      expect(rootRes.node).toBeDefined();
      expect(rootRes.node?.type).toBe("directory");

      const meRes = resolvePath("/me", "/");
      expect(meRes.node).toBeDefined();
      expect(meRes.node?.name).toBe("me");

      const storyRes = resolvePath("/story", "/");
      expect(storyRes.node).toBeDefined();
      expect(storyRes.node?.name).toBe("story");

      const projectsRes = resolvePath("/projects", "/");
      expect(projectsRes.node).toBeDefined();
      expect(projectsRes.node?.name).toBe("projects");
    });

    it("resolves relative paths and .. parent segments", () => {
      const relFile = resolvePath("profile.ts", "/me");
      expect(relFile.node).toBeDefined();
      expect(relFile.node?.type).toBe("file");
      expect(relFile.node?.name).toBe("profile.ts");

      const parentDir = resolvePath("../story", "/me");
      expect(parentDir.node).toBeDefined();
      expect(parentDir.node?.name).toBe("story");
    });

    it("returns null for non-existent files or directories", () => {
      const invalid = resolvePath("/invalid/secret.txt", "/");
      expect(invalid.node).toBeNull();
    });

    it("retrieves file contents safely via getFile", () => {
      const profileFile = getFile("/me/profile.ts", "/");
      expect(profileFile).toBeDefined();
      expect(profileFile?.content).toContain("Rinku Diwakar");
      expect(profileFile?.language).toBe("typescript");
    });
  });

  describe("DeveloperMode Component", () => {
    it("renders DeveloperMode workspace with terminal and file tree", () => {
      render(
        <ThemeModeProvider>
          <DeveloperMode />
        </ThemeModeProvider>
      );

      expect(
        screen.getByText(/Rinku Diwakar — Developer Workspace/i)
      ).toBeInTheDocument();
      expect(screen.getByText("Virtual Workspace")).toBeInTheDocument();
      expect(
        screen.getByText(/Developer Mode \[VFS Terminal v1.0.0\]/i)
      ).toBeInTheDocument();

      // Verify input prompt exists
      const input = screen.getByLabelText("Terminal Command Input");
      expect(input).toBeInTheDocument();
    });

    it("executes whoami command and outputs user summary", () => {
      render(
        <ThemeModeProvider>
          <DeveloperMode />
        </ThemeModeProvider>
      );

      const input = screen.getByLabelText("Terminal Command Input");
      fireEvent.change(input, { target: { value: "whoami" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

      expect(screen.getByText("NIT Jalandhar (2024)", { exact: false })).toBeInTheDocument();
      expect(screen.getAllByText(/Pradrix/i).length).toBeGreaterThanOrEqual(1);
    });
  });
});
