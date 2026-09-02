import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  resolvePath,
  getFile,
  listDirectory,
  autocompletePath,
  searchVirtualFiles,
} from "@/lib/virtual-fs/command-parser";
import { DeveloperMode } from "@/components/developer-mode/DeveloperMode";
import { TerminalView } from "@/components/developer-mode/TerminalView";
import { ThemeModeProvider } from "@/context/ThemeModeContext";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/dev",
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("Developer Mode & Virtual Filesystem", () => {
  describe("Virtual Filesystem Resolution & Utilities", () => {
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

    it("autocompletes path prefixes accurately with autocompletePath", () => {
      const autoMe = autocompletePath("pro", "/me");
      expect(autoMe.completion).toBe("profile.ts");

      const autoProj = autocompletePath("kav", "/projects");
      expect(autoProj.completion).toBe("kavach/");
    });

    it("searches virtual files via searchVirtualFiles", () => {
      const searchRes = searchVirtualFiles("Pradrix");
      expect(searchRes.length).toBeGreaterThanOrEqual(1);
      expect(searchRes[0].file).toBeDefined();
      expect(searchRes[0].line).toBeGreaterThan(0);
    });
  });

  describe("TerminalView Interactive Commands", () => {
    it("renders TerminalView with welcome message and prompt", () => {
      render(
        <ThemeModeProvider>
          <TerminalView
            cwd="/"
            onCwdChange={vi.fn()}
            onSelectFile={vi.fn()}
          />
        </ThemeModeProvider>
      );

      expect(
        screen.getByText(/Rinku Diwakar — Developer Mode \[VFS Terminal v1.0.0\]/i)
      ).toBeInTheDocument();
      expect(screen.getByLabelText("Terminal Command Input")).toBeInTheDocument();
    });

    it("executes whoami command and outputs verified credentials", () => {
      render(
        <ThemeModeProvider>
          <TerminalView
            cwd="/"
            onCwdChange={vi.fn()}
            onSelectFile={vi.fn()}
          />
        </ThemeModeProvider>
      );

      const input = screen.getByLabelText("Terminal Command Input");
      fireEvent.change(input, { target: { value: "whoami" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

      expect(
        screen.getByText("NIT Jalandhar (2023 – 2027, CGPA: 7.44)", { exact: false })
      ).toBeInTheDocument();
      expect(screen.getAllByText(/Pradrix/i).length).toBeGreaterThanOrEqual(1);
    });

    it("executes help, ls, and pwd commands cleanly", () => {
      const handleCwdChange = vi.fn();
      render(
        <ThemeModeProvider>
          <TerminalView
            cwd="/me"
            onCwdChange={handleCwdChange}
            onSelectFile={vi.fn()}
          />
        </ThemeModeProvider>
      );

      const input = screen.getByLabelText("Terminal Command Input");

      // Test pwd
      fireEvent.change(input, { target: { value: "pwd" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
      expect(screen.getAllByText("/me").length).toBeGreaterThanOrEqual(1);

      // Test help
      fireEvent.change(input, { target: { value: "help" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
      expect(screen.getByText("Available Virtual Commands:")).toBeInTheDocument();
    });

    it("executes grep search command", () => {
      render(
        <ThemeModeProvider>
          <TerminalView
            cwd="/"
            onCwdChange={vi.fn()}
            onSelectFile={vi.fn()}
          />
        </ThemeModeProvider>
      );

      const input = screen.getByLabelText("Terminal Command Input");
      fireEvent.change(input, { target: { value: "grep Kavach" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

      expect(screen.getByText(/match\(es\) across virtual filesystem:/i)).toBeInTheDocument();
    });
  });

  describe("DeveloperMode Workspace Component", () => {
    it("renders DeveloperMode workspace and skips entrance on click", () => {
      render(
        <ThemeModeProvider>
          <DeveloperMode />
        </ThemeModeProvider>
      );

      // Click splash to skip immediately
      const splash = screen.getByText(/Skip →/i);
      fireEvent.click(splash);

      expect(
        screen.getByText(/rinku@nitj — ~/i)
      ).toBeInTheDocument();
      expect(screen.getByText("Explorer")).toBeInTheDocument();
    });
  });
});
