import { describe, it, expect } from "vitest";
import { selectedProjects } from "@/data/selected-work";

describe("Selected Work Data Suite", () => {
  it("contains exactly the four specified projects", () => {
    expect(selectedProjects).toHaveLength(4);
    const names = selectedProjects.map((p) => p.name);
    expect(names).toEqual([
      "MessOS",
      "SkillGap AI",
      "MovieSentiment",
      "Kavach",
    ]);
  });

  it("verifies numbers and categories", () => {
    expect(selectedProjects[0].number).toBe("01");
    expect(selectedProjects[0].category).toBe("Product · Full Stack · SaaS");

    expect(selectedProjects[1].number).toBe("02");
    expect(selectedProjects[1].category).toBe("AI · RAG · Product");

    expect(selectedProjects[2].number).toBe("03");
    expect(selectedProjects[2].category).toBe("ML · MLOps · Cloud");

    expect(selectedProjects[3].number).toBe("04");
    expect(selectedProjects[3].category).toBe("Hardware · AI · Embedded");
  });

  it("verifies discovery pipelines for all four projects", () => {
    expect(selectedProjects[0].discoveryPipeline).toEqual([
      "Interface",
      "API",
      "Database",
    ]);
    expect(selectedProjects[1].discoveryPipeline).toEqual([
      "Resume",
      "Analysis",
      "Skill Gap",
      "Roadmap",
    ]);
    expect(selectedProjects[2].discoveryPipeline).toEqual([
      "Input",
      "Model",
      "Prediction",
    ]);
    expect(selectedProjects[3].discoveryPipeline).toEqual([
      "Input",
      "Processing",
      "Controller",
      "Action",
    ]);
  });

  it("verifies GitHub URLs provided by user", () => {
    expect(selectedProjects[0].githubUrl).toBe(
      "https://github.com/rinkudiwakar/MessOS"
    );
    expect(selectedProjects[1].githubUrl).toBe(
      "https://github.com/rinkudiwakar/SkillGap-AI"
    );
    expect(selectedProjects[2].githubUrl).toBe(
      "https://github.com/rinkudiwakar/Movie-Sentiment-Prediction"
    );
    expect(selectedProjects[3].githubUrl).toBe(
      "https://github.com/rinkudiwakar/Kavach"
    );
  });

  it("verifies image assets exist and match public/images", () => {
    expect(selectedProjects[0].imageSrc).toBe("/images/messos.png");
    expect(selectedProjects[1].imageSrc).toBe("/images/skillgap.png");
    expect(selectedProjects[2].imageSrc).toBe("/images/moviesentiment.png");
    expect(selectedProjects[3].imageSrc).toBe("/images/kavach.png");
  });
});
