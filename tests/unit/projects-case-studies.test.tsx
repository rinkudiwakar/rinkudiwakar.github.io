import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThingsIveBuiltSection } from "@/components/home/ThingsIveBuiltSection";
import WorkPage from "@/app/work/page";
import ProjectCaseStudyPage, { generateStaticParams } from "@/app/work/[slug]/page";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  notFound: vi.fn(),
  usePathname: () => "/work",
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("Projects & Case Studies Feature", () => {
  it("renders ThingsIveBuiltSection on homepage with featured projects", () => {
    render(<ThingsIveBuiltSection />);

    expect(screen.getByText("06 · THINGS I’VE BUILT")).toBeInTheDocument();
    expect(screen.getByText("Things I’ve tried to make real.")).toBeInTheDocument();

    // Verify key projects appear
    expect(screen.getByText("Kavach")).toBeInTheDocument();
    expect(screen.getByText("SkillGap AI")).toBeInTheDocument();
    expect(screen.getByText("NanoTrade")).toBeInTheDocument();
  });

  it("renders WorkPage archive listing all projects", () => {
    render(<WorkPage />);

    expect(screen.getByRole("heading", { name: "Things I’ve Built" })).toBeInTheDocument();
    expect(screen.getByText("Kavach")).toBeInTheDocument();
    expect(screen.getByText("SkillGap AI")).toBeInTheDocument();
    expect(screen.getByText("NanoTrade")).toBeInTheDocument();
  });

  it("generates static params for all project slugs", async () => {
    const params = await generateStaticParams();
    const slugs = params.map((p) => p.slug);

    expect(slugs).toContain("kavach");
    expect(slugs).toContain("skillgap-ai");
    expect(slugs).toContain("nanotrade");
  });

  it("renders individual project case study page for Kavach", async () => {
    const Component = await ProjectCaseStudyPage({
      params: Promise.resolve({ slug: "kavach" }),
    });
    render(Component);

    expect(screen.getByRole("heading", { name: "Kavach" })).toBeInTheDocument();
    expect(screen.getByText(/Why this needed to be built/i)).toBeInTheDocument();
    expect(screen.getByText(/How the system was architected/i)).toBeInTheDocument();
    expect(screen.getByText(/Key Takeaways Earned/i)).toBeInTheDocument();
  });
});
