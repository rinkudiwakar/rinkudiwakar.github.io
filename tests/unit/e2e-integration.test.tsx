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
  it("renders streamlined Homepage with Hero, Pradrix showcase, and About Me sections", () => {
    render(
      <ThemeModeProvider>
        <Home />
      </ThemeModeProvider>
    );

    // 01 Hero Section
    expect(screen.getAllByText(/Real Products/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/View My Work/i)).toBeInTheDocument();

    // 01.5 Currently Building: Pradrix Showcase
    expect(screen.getByText(/01 \/ CURRENTLY BUILDING/i)).toBeInTheDocument();
    expect(screen.getByText("PRADRIX")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Visit Pradrix/i })).toBeInTheDocument();

    // 02 About Me Preview Section
    expect(screen.getByText(/01 \/ ABOUT ME/i)).toBeInTheDocument();
    expect(screen.getByText(/I started with/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /More About Me/i })).toBeInTheDocument();
  }, 25000);

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
