import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import StoryPage from "@/app/story/page";
import WorkPage from "@/app/work/page";
import PradrixPage from "@/app/pradrix/page";
import NowPage from "@/app/now/page";
import ActivityPage from "@/app/activity/page";
import ThinkingPage from "@/app/thinking/page";
import AboutPage from "@/app/about/page";
import ResumePage from "@/app/resume/page";
import ContactPage from "@/app/contact/page";
import { ThemeModeProvider } from "@/context/ThemeModeContext";

describe("Production QA Integration Audit", () => {
  it("renders entire Homepage with 14 sequential chapters and 0 broken sections", () => {
    render(
      <ThemeModeProvider>
        <Home />
      </ThemeModeProvider>
    );

    // 00 Arrival & 01 Hero
    expect(screen.getAllByText("Rinku Diwakar").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("“IT ACTUALLY WORKS.”")).toBeInTheDocument();

    // 02 Now
    expect(screen.getAllByText(/Pradrix/i).length).toBeGreaterThanOrEqual(1);

    // 03 Origin
    expect(screen.getByText(/It didn’t start with technology/i)).toBeInTheDocument();
    expect(screen.getByText(/It started with curiosity/i)).toBeInTheDocument();

    // 04 Journey
    expect(screen.getByText("From curiosity to building.")).toBeInTheDocument();

    // 05 Kavach
    expect(screen.getByText("“What if AI could become the key?”")).toBeInTheDocument();

    // 06 Things I've Built
    expect(screen.getByText("Things I’ve tried to make real.")).toBeInTheDocument();

    // 07 What Building Taught Me
    expect(screen.getByText("Hard lessons earned through execution.")).toBeInTheDocument();

    // 08 Pradrix
    expect(screen.getByText("“Understand before automating.”")).toBeInTheDocument();

    // 09 Build Log
    expect(screen.getByText("The evolution of active builds.")).toBeInTheDocument();

    // 10 Signals
    expect(screen.getByText("Activity & public signals.")).toBeInTheDocument();

    // 11 Proof
    expect(screen.getByText("Proof, not promises.")).toBeInTheDocument();

    // 12 Future
    expect(screen.getByText("Where I’m going next.")).toBeInTheDocument();

    // 13 Epilogue
    expect(screen.getByText("The story isn’t finished.")).toBeInTheDocument();
  });

  it("verifies all inner pages render with structured semantic hierarchy", () => {
    const pages = [
      { component: <StoryPage />, name: "Story" },
      { component: <WorkPage />, name: "Work" },
      { component: <PradrixPage />, name: "Pradrix" },
      { component: <NowPage />, name: "Now" },
      { component: <ActivityPage />, name: "Activity" },
      { component: <ThinkingPage />, name: "Thinking" },
      { component: <AboutPage />, name: "About" },
      { component: <ResumePage />, name: "Resume" },
      { component: <ContactPage />, name: "Contact" },
    ];

    for (const { component } of pages) {
      const { unmount } = render(
        <ThemeModeProvider>{component}</ThemeModeProvider>
      );
      expect(screen.getByRole("main")).toBeInTheDocument();
      unmount();
    }
  });
});
