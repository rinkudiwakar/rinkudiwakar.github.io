import { describe, it, expect } from "vitest";
import {
  getProfile,
  getStoryChapters,
  getJourneyStages,
  getProjects,
  getProjectBySlug,
  getFeaturedProjects,
  getKavachStory,
  getPradrixData,
  getLessons,
  getBuildLog,
  getSignals,
  getProofClaims,
  getFutureGoals,
  getNowData,
  getNavigation,
} from "@/lib/content";

describe("Content Architecture Validation Suite", () => {
  it("validates profile schema and core identity", () => {
    const profile = getProfile();
    expect(profile.name).toBe("Rinku Diwakar");
    expect(profile.coreIdentity).toBe("A builder who learns by solving real problems.");
    expect(profile.philosophy).toContain("What if?");
    expect(profile.currentFocus.name).toBe("Pradrix");
    expect(profile.education.institution).toContain("National Institute of Technology");
    expect(profile.socialLinks.length).toBeGreaterThanOrEqual(2);
  });

  it("validates story chapters sequence", () => {
    const chapters = getStoryChapters();
    expect(chapters.length).toBeGreaterThanOrEqual(4);
    const chapterIds = chapters.map((c) => c.id);
    expect(chapterIds).toContain("origin");
    expect(chapterIds).toContain("engineering");
    expect(chapterIds).toContain("programming");
    expect(chapterIds).toContain("first-build");
  });

  it("validates 5-stage journey progression", () => {
    const stages = getJourneyStages();
    expect(stages.length).toBe(5);
    expect(stages.map((s) => s.id)).toEqual([
      "curious",
      "exploring",
      "engineering",
      "building",
      "pradrix",
    ]);
  });

  it("validates projects dataset and unique slugs", () => {
    const projects = getProjects();
    expect(projects.length).toBeGreaterThanOrEqual(3);

    const slugs = projects.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(slugs.length).toBe(uniqueSlugs.size);

    const featured = getFeaturedProjects();
    expect(featured.length).toBeGreaterThanOrEqual(1);

    const kavach = getProjectBySlug("kavach");
    expect(kavach).toBeDefined();
    expect(kavach?.title).toBe("Kavach");
    expect(kavach?.teamSize).toBe(5);
  });

  it("validates Kavach signature story and state progression", () => {
    const kavach = getKavachStory();
    expect(kavach.title).toContain("Kavach");
    expect(kavach.steps.length).toBe(8);

    const stepIds = kavach.steps.map((s) => s.id);
    expect(stepIds).toEqual([
      "idle",
      "assembly",
      "authentication",
      "physical-flow",
      "failure",
      "debugging",
      "recovery",
      "working",
    ]);

    expect(kavach.failures.length).toBeGreaterThanOrEqual(2);
    expect(kavach.recoveries.length).toBeGreaterThanOrEqual(2);
  });

  it("validates Pradrix 8-step workflow and status", () => {
    const { status, steps } = getPradrixData();
    expect(status.name).toBe("Pradrix");
    expect(status.corePhilosophy).toBe("Not AI everywhere. AI where it actually matters.");
    expect(steps.length).toBe(8);

    const stepIds = steps.map((s) => s.id);
    expect(stepIds).toEqual([
      "understand",
      "bottleneck",
      "appropriateness",
      "design",
      "build",
      "test",
      "deploy",
      "measure",
    ]);
  });

  it("validates engineering and personal lessons", () => {
    const lessons = getLessons();
    expect(lessons.length).toBe(4);
    const principles = lessons.map((l) => l.principle);
    expect(principles).toContain("A working program is not automatically a useful product.");
    expect(principles).toContain("Start before you feel completely ready.");
    expect(principles).toContain("Growth happens when you take responsibility without having every answer available.");
    expect(principles).toContain(
      "Doing ten things badly can feel productive while doing one important thing deeply actually moves you forward."
    );
  });

  it("validates published build log entries", () => {
    const log = getBuildLog();
    expect(log.length).toBeGreaterThanOrEqual(2);
    for (const entry of log) {
      expect(entry.published).toBe(true);
      expect(entry.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("validates signals and verified proof claims", () => {
    const signals = getSignals();
    expect(signals.length).toBeGreaterThanOrEqual(2);

    const proof = getProofClaims();
    expect(proof.length).toBeGreaterThanOrEqual(4);
    for (const claim of proof) {
      expect(claim.verificationStatus).toBe("verified");
      expect(claim.sourceUrl).toBeDefined();
    }
  });

  it("validates future direction and navigation", () => {
    const future = getFutureGoals();
    expect(future.headline).toBe("What’s Next?");
    expect(future.principles.length).toBeGreaterThanOrEqual(3);

    const nav = getNavigation();
    expect(nav.length).toBeGreaterThanOrEqual(4);
  });
});
