import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StoryPage from "@/app/story/page";
import NowPage from "@/app/now/page";
import ActivityPage from "@/app/activity/page";
import ThinkingPage from "@/app/thinking/page";
import AboutPage from "@/app/about/page";
import ResumePage from "@/app/resume/page";

describe("Inner Routes Verification", () => {
  it("renders StoryPage with 5-stage evolution framework", () => {
    render(<StoryPage />);
    expect(
      screen.getByText("“It didn’t start with technology. It started with curiosity.”")
    ).toBeInTheDocument();
    expect(screen.getByText("The Five Stages of Evolution")).toBeInTheDocument();
  });

  it("renders NowPage with live milestone board and streams", () => {
    render(<NowPage />);
    expect(screen.getByText("What I’m doing now.")).toBeInTheDocument();
    expect(screen.getByText("Active Milestone Board")).toBeInTheDocument();
    expect(screen.getByText("Where time is being allocated")).toBeInTheDocument();
  });

  it("renders ActivityPage with chronological engineering history and signals", () => {
    render(<ActivityPage />);
    expect(screen.getByText("Activity & Build Stream")).toBeInTheDocument();
    expect(screen.getByText("Recent Public Touchpoints")).toBeInTheDocument();
    expect(screen.getByText("Chronological Build History")).toBeInTheDocument();
  });

  it("renders ThinkingPage with honest failure postmortem and 3 principles", () => {
    render(<ThinkingPage />);
    expect(screen.getByText("What building taught me.")).toBeInTheDocument();
    expect(
      screen.getByText("“Trying to do too many things simultaneously.”")
    ).toBeInTheDocument();
    expect(screen.getByText("Three Non-Negotiable Tenets")).toBeInTheDocument();
  });

  it("renders AboutPage with NIT Jalandhar background and builder loop", () => {
    render(<AboutPage />);
    expect(screen.getAllByText("Rinku Diwakar").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Building as an act of learning")).toBeInTheDocument();
    expect(
      screen.getByText(/Bachelor of Technology in Electrical Engineering/i)
    ).toBeInTheDocument();
  });

  it("renders ResumePage with verifiable credentials and technical stack", () => {
    render(<ResumePage />);
    expect(screen.getAllByText("Rinku Diwakar").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Technical Competencies")).toBeInTheDocument();
    expect(screen.getByText("Engineered Systems & Projects")).toBeInTheDocument();
    expect(screen.getByText("Verifiable Evidence & Records")).toBeInTheDocument();
  });
});
