# Rinku Diwakar --- Personal Digital Identity

## Product Requirements Document (PRD) --- v2.0

**Product:** `rinkudiwakar.me`\
**Status:** Build-ready product specification\
**Document role:** Canonical product specification for design,
engineering, content, QA, and AI coding agents\
**Primary platform:** Responsive web\
**Deployment direction:** Vercel\
**Source control:** GitHub\
**Registrar:** Namecheap\
**Planned implementation direction:** Next.js + TypeScript + Tailwind
CSS + Motion/Framer Motion + Lucide\
**Content direction:** Structured content / MDX where appropriate

------------------------------------------------------------------------

# 0. Document Purpose

This PRD defines **what `rinkudiwakar.me` is, what visitors should
experience, what content it must contain, what behaviors are required,
and what must be true for launch**.

It is intentionally more specific than a visual moodboard or brand
document.

The subsequent TRD must define **how** these requirements are
implemented technically.

### Source-of-truth hierarchy

When implementing the site, use this priority order:

1.  This PRD
2.  Approved UI/UX references and locked visual direction
3.  Verified source material and proof
4.  Content/data files
5.  TRD implementation decisions

If something is genuinely unspecified, the implementation must not
silently invent a personal fact, business claim, project result, or
product behavior. Flag the decision for review or choose the smallest
behavior consistent with this PRD.

------------------------------------------------------------------------

# 1. Product Definition

`rinkudiwakar.me` is the canonical personal digital identity of Rinku
Diwakar.

It is a **living builder's journal** rather than a conventional résumé
website.

The experience should communicate:

> Curiosity → Exploration → Engineering → Building → Learning → Pradrix
> → What's next?

The site must combine:

-   **Editorial:** human story, typography, whitespace, photography.
-   **Developer:** technical depth, code-like representations,
    architecture, Developer Mode.
-   **Cinematic:** a small number of purposeful interactive moments.
-   **Product:** Pradrix as the clearest representation of current
    direction.
-   **Proof:** claims connected to credible evidence.
-   **Activity:** an evolving view of what Rinku is doing now.

The site should leave visitors with:

> **"He's someone who doesn't just have ideas --- he actually tries to
> turn them into something real."**

------------------------------------------------------------------------

# 2. Product Vision

Build the canonical online home for Rinku that:

1.  tells a coherent personal story;
2.  demonstrates real building ability;
3.  explains meaningful projects through problems, decisions, failures
    and outcomes;
4.  makes Pradrix the strongest representation of current momentum;
5.  shows what Rinku is doing now;
6.  provides credible evidence for important claims;
7.  gives developers a deeper optional representation of Rinku;
8.  remains useful to recruiters without becoming a résumé site;
9.  gives collaborators and businesses a clear way to connect;
10. evolves as the person and work evolve.

The website itself should feel like something Rinku built, not a
portfolio template populated with résumé data.

------------------------------------------------------------------------

# 3. Core Product Philosophy

## 3.1 Don't market the résumé. Market the journey.

The résumé proves capability.

Projects prove execution.

Activity proves momentum.

Proof establishes credibility.

Writing demonstrates thought.

The story gives everything meaning.

The future gives people a reason to follow.

## 3.2 Builder identity

Central identity:

> **A builder who learns by solving real problems.**

Recurring motif:

> **"What if?" → "It actually works."**

The site should repeatedly reinforce a broader loop:

> **What if? → Build → Break → Learn → Fix → Ship → What's next?**

## 3.3 Authenticity

The site must never invent:

-   achievements;
-   clients;
-   revenue;
-   traction;
-   customer counts;
-   project outcomes;
-   credentials;
-   experiences;
-   quotes;
-   personal history;
-   testimonials;
-   metrics.

Pradrix is early and must look early without looking unfinished.

Honest progress is more valuable than manufactured success.

------------------------------------------------------------------------

# 4. Brand Positioning

The site positions Rinku at the intersection of:

**Engineering × Software × AI × Product × Entrepreneurship**

Do not reduce the identity to one job title.

Preferred positioning:

> **Rinku is a builder who uses technology to understand and solve real
> problems.**

Technology should be presented as a medium through which curiosity
became building.

------------------------------------------------------------------------

# 5. Authentic Story Source of Truth

This content is the approved narrative foundation. The website may edit
for length, rhythm and context, but must not change the underlying
facts.

## 5.1 Before technology

Rinku was not initially obsessed with technology.

Earlier interests included reading, badminton, academics, exploring what
was happening around him, and learning broadly.

Around 8th grade, curiosity about how things worked and an inclination
toward critical thinking and problem solving became stronger.

That gradually expanded into business, creative problem solving,
technology, programming, AI and entrepreneurship.

Technology eventually became a medium for solving problems, creating
things and understanding the world.

## 5.2 Electrical Engineering

Electrical Engineering at NIT Jalandhar came from a combination of
entrance rank, college opportunities and interest in understanding how
things work.

It must not be framed as either:

-   a lifelong Electrical Engineering passion; or
-   something Rinku had to escape.

The degree provided a technical foundation in:

-   mathematics;
-   analytical thinking;
-   systems thinking;
-   structured problem solving;
-   engineering.

Interests later expanded toward software, data, AI, products and
entrepreneurship.

## 5.3 Programming

Programming entered through engineering coursework and self-study.

The important transition happened when programming became a way to
**build**, rather than merely study.

The recurring pattern became:

1.  start with an idea;
2.  break it into problems;
3.  learn what is needed;
4.  build;
5.  debug;
6.  test;
7.  see it work.

That pattern is central to the site.

------------------------------------------------------------------------

# 6. Kavach --- Signature Build Story

Kavach is one of the most important narrative moments.

It was a five-person team project and Rinku's first production-grade
project.

The idea was to address the everyday problem of people forgetting keys.

The conceptual question:

> **"What if AI could become the key?"**

## 6.1 System

The project integrated:

-   voice authentication;
-   AI;
-   frontend registration;
-   voice registration;
-   Raspberry Pi server;
-   Arduino;
-   motor;
-   physical door/home prototype;
-   software/hardware integration;
-   real-time user testing.

Core flow:

``` text
VOICE
  ↓
AI AUTHENTICATION
  ↓
RASPBERRY PI
  ↓
ARDUINO
  ↓
MOTOR
  ↓
DOOR
```

## 6.2 Failures

The real build encountered:

-   Arduino issues;
-   Raspberry Pi server issues;
-   motor issues;
-   voice issues;
-   a security flaw in which another person could potentially trigger
    the same keyword.

Do not fabricate additional failures.

## 6.3 Recovery

The story sequence:

``` text
BUILD
  ↓
BREAK
  ↓
DEBUG
  ↓
FIX
  ↓
TEST
  ↓
WORKING SYSTEM
```

## 6.4 Product requirement

Kavach must not be represented only as a project card.

It should be a signature interactive narrative demonstrating that
building means dealing with physical systems, software, uncertainty,
failure and iteration.

The interaction must remain understandable without animation.

------------------------------------------------------------------------

# 7. Lessons / Beliefs

## 7.1 Biggest failure

Rinku tried to do too many things at once:

-   learn technologies;
-   build projects;
-   pursue opportunities;
-   improve across multiple areas.

The result was significant effort without proportional meaningful
progress.

Core lesson:

> **Being busy is not the same as making meaningful progress.**

Resulting working principles:

-   prioritize;
-   focus on fewer things;
-   go deeper;
-   finish projects;
-   complete before switching.

## 7.2 Technical lesson

> **Building is not just writing code that works.**

It means:

-   understanding the real problem;
-   understanding what people need;
-   making appropriate technical decisions;
-   handling failures;
-   building end-to-end;
-   creating something useful.

## 7.3 Personal lesson

> **Growth comes from taking ownership before having everything figured
> out.**

Starting before perfect certainty, learning along the way, asking for
help and handling uncertainty became part of Rinku's approach.

------------------------------------------------------------------------

# 8. Pradrix

## 8.1 Definition

Pradrix is an early-stage AI consulting and automation company intended
to help businesses identify where AI actually makes sense in their
day-to-day operations and then build those systems.

## 8.2 Problem

Businesses encounter ChatGPT, AI agents, automation tools and new AI
products, but often do not know:

> **Where can AI actually save us time, reduce repetitive work, improve
> operations, or help us make money?**

Pradrix explores that gap.

## 8.3 Potential customers

The intended audience includes:

-   small and medium-sized businesses;
-   growing businesses with manual processes;
-   service businesses;
-   startups;
-   departments of larger organizations with repetitive workflows.

These are target categories, not a claim that they are current clients.

## 8.4 Philosophy

Pradrix should not simply sell:

> "Here's an AI chatbot."

Its process is:

``` text
UNDERSTAND THE BUSINESS
        ↓
IDENTIFY THE BOTTLENECK
        ↓
IS AI / AUTOMATION APPROPRIATE?
        ↓
DESIGN THE WORKFLOW
        ↓
BUILD
        ↓
TEST
        ↓
DEPLOY
        ↓
MEASURE
```

The philosophy:

> **Not AI everywhere. AI where it actually matters.**

## 8.5 Current stage

Pradrix is early.

Current foundation includes:

-   positioning;
-   website;
-   service structure;
-   client-facing documents;
-   processes;
-   foundational systems;
-   exploration and development of AI/automation systems;
-   work toward first meaningful client engagements.

The site must never imply large-scale traction without proof.

## 8.6 Long-term direction

Pradrix should eventually become a company businesses approach when they
know AI could improve operations but do not know where to start or how
to implement it properly.

Its intended differentiation is:

> **Understand the business before building the technology.**

------------------------------------------------------------------------

# 9. Long-Term Personal Direction

The goal is not a specific job title.

Rinku wants to spend most of his time building.

The future could take the form of:

-   a company;
-   a product;
-   or something not yet imagined.

The constant is:

> **Build. Learn. Understand problems deeply. Turn ideas into things
> people actually use.**

The desired long-term combination includes:

-   technical ability;
-   product thinking;
-   entrepreneurship;
-   creativity;
-   user understanding;
-   decision-making;
-   team building.

Preferred formulation:

> **Become really good at building --- technically, creatively, and
> eventually as an entrepreneur --- and use that ability to create
> things that matter.**

------------------------------------------------------------------------

# 10. Goals

## Primary goals

  ID    Goal                                                    Priority
  ----- ------------------------------------------------------- ----------
  G01   Establish `rinkudiwakar.me` as the canonical identity   P0
  G02   Tell a coherent personal story                          P0
  G03   Demonstrate real building ability                       P0
  G04   Make Pradrix the clearest current focus                 P0
  G05   Provide meaningful project case studies                 P0
  G06   Make the site evolve over time                          P0
  G07   Back important claims with evidence                     P0
  G08   Provide recruiter-friendly access to work and résumé    P0
  G09   Offer optional Developer Mode depth                     P1
  G10   Improve discoverability for Rinku-related searches      P0
  G11   Maintain strong accessibility and performance           P0

------------------------------------------------------------------------

# 11. Non-Goals

The product must not become:

-   a generic résumé template;
-   a literal VS Code clone;
-   a terminal-only portfolio;
-   an OS simulation visitors must understand;
-   a startup landing page pretending Pradrix is larger than it is;
-   an animation showcase;
-   a giant project-card grid;
-   a social-media wall;
-   a fake metrics dashboard;
-   a generic AI chatbot that invents information;
-   an unnecessarily complex 3D/WebGL experience.

------------------------------------------------------------------------

# 12. Audiences

## 12.1 Recruiters / hiring managers

Need:

-   identity;
-   relevant work;
-   résumé;
-   proof;
-   contact.

They must understand the site without needing to understand developer
culture.

## 12.2 Engineers / developers

Need:

-   technical depth;
-   architecture;
-   repositories;
-   engineering thinking;
-   Developer Mode.

## 12.3 Founders / businesses

Need:

-   clear explanation of Pradrix;
-   business problem;
-   approach;
-   ability to build useful systems;
-   clear connection path.

## 12.4 Collaborators

Need:

-   current interests;
-   current builds;
-   activity;
-   ways to build together.

## 12.5 General visitors

Need:

-   story;
-   personality;
-   memorable moments;
-   intuitive navigation.

------------------------------------------------------------------------

# 13. Experience Principles

1.  Story first.
2.  Clarity before cleverness.
3.  One wow moment plus many excellent details.
4.  Developer depth is discoverable, never required.
5.  Motion must have purpose.
6.  Every interaction must tell the story, demonstrate capability,
    reveal personality, provide evidence or help navigation.
7.  Proof over unsupported claims.
8.  Current work should feel alive.
9.  Do not fake traction.
10. Mobile is first-class.
11. The website should feel built, not templated.
12. The story must survive without animation.
13. A visitor should never need to understand the interface metaphor to
    use the website.
14. Recruiter paths must remain fast.
15. Technical cleverness must never obscure the human being.

------------------------------------------------------------------------

# 14. Information Architecture

## Primary routes

``` text
/
├── /story
├── /work
│   ├── /work/kavach
│   └── /work/[project]
├── /pradrix
├── /now
├── /activity
├── /thinking
├── /about
├── /resume
└── /contact
```

Developer Mode is a global alternate experience rather than a
replacement for the normal route structure.

------------------------------------------------------------------------

# 15. Global Navigation

## Desktop

Baseline:

``` text
RINKU

NOW   WORK   STORY   THINKING   ABOUT   CONTACT

⌘K    DEV
```

Requirements:

-   concise;
-   persistent where appropriate;
-   visually quiet;
-   accessible;
-   no navigation element may obscure content.

## Mobile

Use:

-   compact top bar;
-   menu/bottom-sheet navigation;
-   touch-friendly targets;
-   clear route labels.

Navigation must remain understandable without icons.

------------------------------------------------------------------------

# 16. Command Palette

Shortcut:

**⌘K** on macOS and an appropriate equivalent on Windows/Linux.

Purpose:

-   search;
-   jump to pages;
-   open projects;
-   open Pradrix;
-   open Story;
-   open Now;
-   open Activity;
-   open Thinking;
-   open About;
-   open Contact;
-   enter Developer Mode.

Baseline commands:

``` text
Search or jump to...

→ Pradrix
→ Kavach
→ My Story
→ What I'm Building
→ Work
→ Thinking
→ Activity
→ About
→ Contact
→ Developer Mode
```

Requirements:

-   opens quickly;
-   traps focus only while open;
-   closes with Escape;
-   supports keyboard navigation;
-   has visible focus;
-   has mobile bottom-sheet equivalent;
-   does not prevent normal navigation;
-   handles no-results state;
-   does not require exact spelling.

------------------------------------------------------------------------

# 17. Homepage Product Specification

The homepage is a narrative, not a sitemap.

Sequence:

``` text
00 Arrival
01 Hero
02 Now
03 Origin
04 Journey
05 First Build / Kavach
06 Things I've Built
07 What Building Taught Me
08 Pradrix
09 Build Log
10 Signals
11 Proof
12 Future
13 Epilogue
```

------------------------------------------------------------------------

# 18. Homepage --- Section-by-Section Requirements

## 18.1 Arrival

### Objective

Create a refined entry into the experience without blocking access.

### Requirements

-   no mandatory preloader;
-   content must remain available immediately;
-   optional transition must be short;
-   transition must not become the main attraction.

### Acceptance criteria

-   visitor can begin reading immediately;
-   slow connection does not trap visitor;
-   reduced-motion users receive an immediate/simple transition.

------------------------------------------------------------------------

## 18.2 Hero

### Objective

Answer within approximately five seconds:

1.  Who is Rinku?
2.  What does he build?
3.  What is he building now?

### Content direction

``` text
BUILDER · ENGINEER · EXPLORER

I like turning

“WHAT IF?”

into

“IT ACTUALLY WORKS.”

I build software, AI systems and products
around problems worth solving.

CURRENTLY BUILDING
PRADRIX
AI × AUTOMATION × BUSINESS
```

Exact copy may be refined during content pass, but meaning must remain.

### Visual requirements

-   large display typography;
-   integrated portrait;
-   subtle technical annotations;
-   clear current-focus signal;
-   strong whitespace;
-   no résumé metric wall.

### Primary actions

At minimum:

-   Explore the story;
-   See what I'm building / Pradrix.

### Acceptance criteria

-   name is visible and crawlable;
-   identity is understandable without interaction;
-   Pradrix is visible;
-   no essential information is animation-only;
-   portrait does not dominate the content;
-   mobile composition remains readable.

------------------------------------------------------------------------

## 18.3 Now

### Objective

Answer:

> **What is Rinku doing now?**

Primary focus:

**Pradrix**

Example status structure:

``` text
PRADRIX STATUS

Positioning       ✓
Website           ✓
Service model     ✓
Systems           ◐
Client process    ◐
First engagements ○
```

The exact statuses must come from maintained truthful data.

### Requirements

-   current focus;
-   current work;
-   recent progress;
-   next direction where useful;
-   last-updated indicator where useful.

### States

**Normal:** current data exists.

**Empty:** explain that the update has not been published rather than
showing fake status.

**Stale:** optionally show last updated date.

### Acceptance criteria

-   no fabricated live metrics;
-   visitor can reach `/now`;
-   current state is understandable without Developer Mode.

------------------------------------------------------------------------

## 18.4 Origin

Headline direction:

> **It didn't start with technology. It started with curiosity.**

### Objective

Humanize the story before increasing technical density.

### Requirements

Include concise narrative covering:

-   early interests;
-   curiosity;
-   problem solving;
-   gradual move toward technology.

### Visual treatment

-   editorial;
-   human;
-   minimal technical UI;
-   strong typography.

------------------------------------------------------------------------

## 18.5 Journey

Stages:

``` text
CURIOUS
   ↓
EXPLORING
   ↓
ENGINEERING
   ↓
BUILDING
   ↓
PRADRIX
```

### Desktop

-   horizontal visual rail;
-   stage selection can reveal a short description;
-   no requirement for heavy animation.

### Mobile

-   vertical timeline;
-   each stage becomes a readable block.

### Acceptance criteria

-   all stages accessible by keyboard;
-   no critical content hidden behind hover;
-   mobile requires no horizontal page scrolling.

------------------------------------------------------------------------

## 18.6 First Build --- Kavach

### Objective

Create the strongest story-driven interaction on the site.

### Required narrative

``` text
PROBLEM
→ IDEA
→ BUILD
→ FAIL
→ DEBUG
→ FIX
→ TEST
→ WORKING SYSTEM
```

### Interactive system

Possible visual states:

1.  idle;
2.  assembly;
3.  authentication;
4.  physical flow;
5.  failure;
6.  debugging;
7.  recovery;
8.  working state.

### Important constraint

The interaction represents the documented Kavach story. It must not
invent additional hardware failures, security properties or outcomes.

### Fallback

If animation is disabled or unsupported:

-   show the complete story as a static sequence.

### Acceptance criteria

-   user can understand Kavach without interacting;
-   interaction adds depth rather than replacing content;
-   no scroll lock persists unexpectedly;
-   reduced motion receives static/low-motion presentation;
-   mobile remains usable.

------------------------------------------------------------------------

# 19. Things I've Built

Headline direction:

> **Things I've tried to make real.**

### Objective

Show execution without turning the homepage into a résumé grid.

### Project teaser must prioritize

1.  problem;
2.  idea;
3.  what was built;
4.  result/outcome if verified;
5.  lesson.

Technology list is secondary.

### Featured project direction

The initial content set may include:

-   Kavach;
-   SkillGap AI;
-   NanoTrade;
-   other verified projects.

Only projects with approved source content should be presented as
factual.

### Interaction

-   cards/rows can reveal additional metadata;
-   selecting a project routes to a case study;
-   repository/demo links may appear where valid.

### Acceptance criteria

-   every featured project has a dedicated destination or valid external
    proof;
-   no project claims an outcome that is not sourced;
-   project selection works with keyboard and touch.

------------------------------------------------------------------------

# 20. What Building Taught Me

### Objective

Convert project history into a coherent philosophy.

Primary themes:

-   building as end-to-end problem solving;
-   ownership before certainty;
-   prioritization;
-   depth;
-   learning from failure.

This section should feel reflective, not like a "soft skills" résumé
section.

------------------------------------------------------------------------

# 21. Pradrix Homepage Section

### Objective

This is the major product-oriented climax of the homepage.

Core statement:

> **I'm building Pradrix.**

Supporting idea:

> Businesses don't necessarily need more AI. They need to know where AI
> actually matters.

### Visual transition

The environment may become more system/product oriented while remaining
consistent with the overall visual language.

### Workflow

``` text
UNDERSTAND
      ↓
FIND BOTTLENECK
      ↓
IS AI APPROPRIATE?
      ↓
DESIGN
      ↓
BUILD
      ↓
TEST
      ↓
DEPLOY
      ↓
MEASURE
```

### Interaction

Selecting a step should reveal:

-   what the step means;
-   why it matters;
-   what Rinku/Pradrix does at that point.

Do not imply that every step has already been executed for a client.

### CTA

Primary:

**Explore Pradrix**

Secondary:

**Build with me / Discuss a workflow**

------------------------------------------------------------------------

# 22. Build Log

### Objective

Make current work feel alive.

The Build Log is a chronological stream of progress rather than a fake
changelog.

Possible categories:

-   positioning;
-   website;
-   service structure;
-   workflow;
-   systems;
-   conversations;
-   engagements;
-   lessons.

Each entry should have:

-   date;
-   title;
-   short description;
-   category;
-   optional source;
-   optional related project.

### Content states

-   published;
-   draft/unpublished;
-   archived.

Only published entries appear publicly.

------------------------------------------------------------------------

# 23. Signals

### Objective

Answer:

> **What is Rinku doing lately?**

Potential sources:

-   GitHub;
-   writing;
-   LinkedIn;
-   X;
-   Instagram where appropriate;
-   Pradrix/build updates.

### Requirements

Signals must be:

-   curated or reliably sourced;
-   attributable;
-   recent enough to be useful;
-   optional when a source is unavailable.

Do not build a social wall.

### Empty state

If no reliable recent signals exist:

> "Nothing new here yet. The work continues elsewhere."

Do not manufacture activity.

------------------------------------------------------------------------

# 24. Proof

Headline:

> **Proof, not promises.**

### Objective

Allow visitors to verify meaningful claims without disrupting the
narrative.

Proof may support:

-   achievements;
-   education;
-   public projects;
-   repositories;
-   published writing;
-   competition results;
-   external recognition.

### Visual requirement

Proof should be subtle.

Use:

-   source labels;
-   small verification indicators;
-   "View source" actions;
-   contextual links.

Avoid ugly footnote-heavy presentation.

------------------------------------------------------------------------

# 25. Future

Headline:

> **What's next?**

### Objective

Communicate direction without pretending the future is fixed.

Content should emphasize:

-   desire to build;
-   technical + product + entrepreneurial growth;
-   solving meaningful problems;
-   Pradrix as current chapter;
-   openness to future forms.

Do not present an invented 5/10-year job title.

------------------------------------------------------------------------

# 26. Epilogue

The homepage ends with a minimal closing.

Core:

> **The story isn't finished.**

Then:

> **Maybe you can be part of the next chapter.**

Primary connection paths:

-   **Work With Me**
-   **Build With Me**
-   **Talk To Me**

The ending should feel like the natural conclusion of the story, not a
sales banner.

------------------------------------------------------------------------

# 27. Inner Page Requirements

## 27.1 `/story`

Purpose: full personal journey.

Structure:

``` text
Opening
→ Before Technology
→ Curiosity
→ Engineering
→ Programming
→ First Builds
→ Kavach
→ Lessons
→ Current Direction
→ Pradrix
→ What's Next
```

Requirement: deeper than homepage, but not a long résumé chronology.

------------------------------------------------------------------------

## 27.2 `/work`

Purpose: complete project archive.

Possible categories:

-   All;
-   AI;
-   Software;
-   Data;
-   Hardware;
-   Product.

Each project must expose:

-   title;
-   short description;
-   category;
-   status;
-   featured flag;
-   destination.

Filters must be optional; browsing all projects must remain simple.

------------------------------------------------------------------------

## 27.3 `/work/[project]`

Deep case-study template:

``` text
Context
↓
Problem
↓
Idea
↓
Role
↓
Architecture
↓
Build
↓
Failures
↓
Iteration
↓
Result
↓
What I Learned
↓
Proof / Links
```

Not every project needs identical depth. The template should support
shorter and longer cases.

### Required rules

-   role must be explicit where team-based;
-   claims must be sourced where externally verifiable;
-   architecture diagrams must be accurate;
-   repository/demo links must be valid;
-   "result" may be omitted when no verified outcome exists.

------------------------------------------------------------------------

## 27.4 `/work/kavach`

Dedicated deep case study.

Must include:

-   problem;
-   "AI as a key" concept;
-   team context;
-   architecture;
-   hardware/software integration;
-   failure sequence;
-   security issue;
-   debugging;
-   working prototype;
-   learning;
-   links/proof where available.

------------------------------------------------------------------------

## 27.5 `/pradrix`

This is the full Pradrix experience.

Recommended structure:

``` text
What is Pradrix?
↓
The problem
↓
Who it is for
↓
How the approach works
↓
Example workflow
↓
Current stage
↓
What is being built
↓
What is not being claimed
↓
What's next
↓
Contact / conversation
```

The page must communicate that Pradrix is early.

------------------------------------------------------------------------

## 27.6 `/now`

Purpose: living current-state page.

Sections:

-   Building;
-   Learning;
-   Exploring;
-   Thinking about;
-   Recently shipped.

Each item can include:

-   short text;
-   status;
-   last updated;
-   related link.

------------------------------------------------------------------------

## 27.7 `/activity`

Purpose: broader activity archive.

Potential sources:

-   GitHub;
-   writing;
-   selected social;
-   build logs.

Activity must be curated enough to remain meaningful.

------------------------------------------------------------------------

## 27.8 `/thinking`

Purpose: writing, articles, notes and ideas.

Content should be organized around actual published material.

No placeholder articles.

If the writing archive is sparse, present a small curated selection
rather than a fake publication feed.

------------------------------------------------------------------------

## 27.9 `/about`

Purpose: deeper human context.

Can include:

-   personal philosophy;
-   interests;
-   education;
-   leadership;
-   ways of working;
-   builder identity.

Avoid duplicating the entire `/story` page.

------------------------------------------------------------------------

## 27.10 `/resume`

Purpose: fast recruiter utility.

This page may be intentionally plain.

Requirements:

-   readable résumé;
-   education;
-   experience;
-   skills;
-   projects;
-   achievements;
-   links;
-   downloadable résumé if an approved PDF exists.

The résumé page should not inherit all cinematic behavior.

------------------------------------------------------------------------

## 27.11 `/contact`

Purpose: reduce friction for legitimate connection.

Paths may include:

-   email;
-   LinkedIn;
-   GitHub;
-   Pradrix/business conversation.

The contact page must not expose unnecessary personal information.

------------------------------------------------------------------------

# 28. Developer Mode

Developer Mode is a second interpretation of the same identity.

It is **not** primarily a demonstration of how the website was coded.

## 28.1 Entry

Desktop:

-   `DEV` navigation control;
-   optional keyboard shortcut;
-   optional terminal-style transition.

Transition target:

``` text
screen dims
→ cursor
→ $ dev
→ Developer Mode
```

Transition must be skippable and short.

Mobile:

-   visible Developer Mode action;
-   no reliance on keyboard shortcut.

## 28.2 Environment

Visual direction:

-   dark;
-   macOS-inspired;
-   terminal/workspace aesthetic;
-   monospaced accents;
-   restrained, professional;
-   not gaming/neon.

## 28.3 Virtual filesystem

Conceptual structure:

``` text
/me
  profile.ts
  skills.ts
  beliefs.ts
  goals.ts
  experience.log
  projects/
  pradrix/
  notes/

/story
  origin.md
  curiosity.md
  first-build.md
  lessons.md

/projects
  kavach/
  skillgap-ai/
  nanotrade/

/now
  current-focus.json
```

The filesystem is a presentation model.

It does not imply these are literal files in the production repository.

## 28.4 Identity representation

Example:

``` ts
class RinkuDiwakar {
    curiosity = true;
    builder = true;
    philosophy = "What if? → It actually works.";
    currentFocus = "Pradrix";
}
```

Other representations may include:

``` ts
const beliefs = [
  "Build before waiting for certainty.",
  "Being busy is not meaningful progress.",
  "Understand the problem before choosing the technology.",
];
```

Only content supported by the source material may be represented as
factual.

## 28.5 Commands

Initial command set:

``` text
whoami
ls
cd
cat
open
history
clear
help
exit
```

Commands must have predictable behavior.

Examples:

``` text
$ whoami
Rinku Diwakar — builder, engineer, explorer

$ cd projects/kavach
/projects/kavach

$ cat profile.ts
...
```

## 28.6 Command rules

-   unknown command → helpful error;
-   inaccessible path → clear error;
-   `help` → available command list;
-   `clear` → clear visible terminal output;
-   `exit` → return to Normal Mode;
-   `open` → navigate to appropriate normal-mode content where useful.

No command should expose private information.

## 28.7 Developer Mode content

Should represent:

-   profile;
-   skills;
-   beliefs;
-   goals;
-   experience;
-   projects;
-   Pradrix;
-   story;
-   current focus.

It should not become:

-   a source-code dump;
-   a fake operating system;
-   a clone of VS Code;
-   a technical dashboard about Next.js.

## 28.8 Accessibility

Every important Developer Mode action must have a non-terminal
equivalent.

Keyboard-only users must be able to:

-   enter;
-   navigate filesystem;
-   open files;
-   run commands;
-   exit.

Screen readers should receive meaningful labels rather than raw terminal
decoration.

------------------------------------------------------------------------

# 29. Content/Data Requirements

Content must be separated from presentation wherever practical.

## 29.1 Project entity

Conceptual fields:

``` ts
type Project = {
  slug: string;
  title: string;
  tagline: string;
  status: "active" | "completed" | "archived" | "experimental";
  categories: string[];
  featured: boolean;

  problem: string;
  idea: string;
  story: string;
  role?: string;
  outcome?: string;
  lessons: string[];

  technologies: string[];
  architecture?: string;

  repositoryUrl?: string;
  demoUrl?: string;
  externalLinks?: string[];

  proofIds?: string[];
};
```

## 29.2 Pradrix status

``` ts
type PradrixStatus = {
  focus: string;
  stage: string;
  currentWork: string[];
  completed: string[];
  inProgress: string[];
  nextSteps: string[];
  lastUpdated: string;
  updates: PradrixUpdate[];
};
```

## 29.3 Build log

``` ts
type BuildLogEntry = {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: string;
  relatedContent?: string[];
  sourceUrl?: string;
  published: boolean;
};
```

## 29.4 Proof

``` ts
type ProofClaim = {
  id: string;
  claim: string;
  sourceType:
    | "official"
    | "github"
    | "linkedin"
    | "social"
    | "article"
    | "demo"
    | "certificate";

  sourceUrl: string;
  date?: string;
  verificationStatus: "verified" | "unverified" | "pending";
  relatedContent?: string[];
};
```

## 29.5 Activity

``` ts
type ActivityItem = {
  id: string;
  source: "github" | "writing" | "linkedin" | "x" | "instagram" | "pradrix";
  date: string;
  title: string;
  summary?: string;
  url?: string;
  featured?: boolean;
};
```

------------------------------------------------------------------------

# 30. Dynamic Systems

The website should evolve without requiring UI rewrites.

## GitHub

Potential:

-   repositories;
-   contributions;
-   selected recent activity;
-   selected project links.

## Writing

Potential:

-   articles;
-   notes;
-   latest publications.

## Social

Potential:

-   curated posts;
-   official profile links;
-   selected activity.

## Now

Manual/structured current-state content.

## Build Log

Manual/structured Pradrix updates.

### Reliability rule

If an external integration fails, the page must degrade gracefully.

Do not show broken empty widgets or fabricated fallback activity.

------------------------------------------------------------------------

# 31. Proof System

Rules:

1.  Every meaningful externally verifiable claim should have a source
    when practical.
2.  First-party sources are preferred.
3.  A source must actually substantiate the claim.
4.  Proof should be visually secondary.
5.  Broken links must be detected during QA.
6.  Unverified claims must not be displayed as verified.
7.  Private or sensitive sources must not be exposed.

------------------------------------------------------------------------

# 32. Motion Requirements

Motion exists to communicate:

-   progression;
-   cause/effect;
-   system behavior;
-   narrative transitions.

## Major cinematic moments

Only three are required:

1.  Hero typography transition;
2.  Kavach build/failure/debug sequence;
3.  Pradrix workflow transition.

Everything else should use restrained:

-   fade;
-   reveal;
-   subtle translation;
-   hover;
-   state transitions.

## Motion constraints

Animation must:

-   never block reading;
-   never block navigation;
-   not require high-end hardware;
-   not consume excessive CPU/GPU;
-   respect `prefers-reduced-motion`.

------------------------------------------------------------------------

# 33. Responsive Requirements

## Desktop

Can use:

-   multi-column layouts;
-   large typography;
-   horizontal timelines;
-   cinematic sequences;
-   rich composition.

## Mobile

Must be intentionally redesigned.

Required adaptations:

  Desktop                  Mobile
  ------------------------ ---------------------------
  Horizontal journey       Vertical timeline
  Multi-column             Stacked content
  Complex architecture     Stacked/swipeable modules
  Command palette          Bottom sheet
  Large cinematic motion   Reduced/simplified motion
  Developer workspace      Touch-friendly panels

Requirements:

-   no horizontal page overflow;
-   readable type;
-   touch-friendly controls;
-   no hover-only information;
-   no essential desktop-only interaction.

------------------------------------------------------------------------

# 34. Accessibility

Minimum requirements:

-   semantic HTML;
-   logical heading hierarchy;
-   keyboard navigation;
-   visible focus states;
-   accessible labels;
-   sufficient contrast;
-   descriptive alt text;
-   reduced-motion support;
-   no color-only meaning;
-   no keyboard traps;
-   accessible command palette;
-   accessible Developer Mode;
-   accessible interactive diagrams;
-   accessible external links.

### Story fallback

All narrative information must remain available without animation.

------------------------------------------------------------------------

# 35. SEO & Discoverability

Canonical domain:

`rinkudiwakar.me`

Natural query themes include:

-   Rinku Diwakar;
-   Rinku Diwakar NIT Jalandhar;
-   Rinku Diwakar developer;
-   Rinku Diwakar AI;
-   Rinku Diwakar projects;
-   Rinku Diwakar Pradrix.

Requirements:

-   canonical URLs;
-   unique page titles;
-   useful meta descriptions;
-   Open Graph metadata;
-   semantic HTML;
-   sitemap;
-   robots configuration;
-   descriptive URLs;
-   internal linking;
-   Person structured data;
-   appropriate project structured data;
-   crawlable content;
-   consistent identity links;
-   strong mobile performance.

Do not keyword-stuff.

Do not promise a particular search ranking.

## Identity consistency

Where appropriate, public identity links should consistently point to
the same person:

-   website;
-   GitHub;
-   LinkedIn;
-   writing;
-   relevant public profiles.

------------------------------------------------------------------------

# 36. Performance Requirements

The cinematic experience must not compromise usability.

Requirements:

-   optimized responsive images;
-   modern image formats where appropriate;
-   lazy-load non-critical media;
-   minimize client JavaScript;
-   server/static rendering where useful;
-   efficient animation;
-   cache dynamic data;
-   avoid blocking third-party scripts;
-   preserve strong Core Web Vitals;
-   avoid unnecessary WebGL.

### Performance priority

When forced to choose:

> **Content accessibility \> interaction smoothness \> visual effects.**

------------------------------------------------------------------------

# 37. Security & Privacy

Requirements:

-   no secrets in source;
-   no API keys in client bundles;
-   environment variables for credentials;
-   validate external data;
-   sanitize rendered content;
-   secure server routes;
-   least-privilege integrations;
-   no private repositories;
-   no private activity;
-   no hidden personal information through Developer Mode.

Only intentionally public information may appear publicly.

------------------------------------------------------------------------

# 38. Analytics

Analytics should answer:

-   which pages attract attention;
-   which projects are explored;
-   whether Pradrix is understood/explored;
-   whether visitors use Developer Mode;
-   whether recruiters open the résumé;
-   which CTAs lead to contact;
-   where visitors leave;
-   which content creates return visits.

Potential events:

``` text
page_view
hero_cta_clicked
pradrix_opened
project_opened
project_external_link_clicked
kavach_interaction_started
kavach_interaction_completed
developer_mode_opened
developer_command_executed
command_palette_opened
proof_opened
resume_opened
contact_clicked
external_link_clicked
```

Do not collect unnecessary personal information.

The exact provider and implementation belong in the TRD.

------------------------------------------------------------------------

# 39. Design System Requirements

The exact token values belong to the approved visual design and
subsequent implementation.

However, the product must maintain these principles.

## Typography

Use a strong display face for editorial headings and a highly readable
text face.

Monospace should be used selectively for:

-   technical metadata;
-   labels;
-   code;
-   Developer Mode;
-   status indicators.

Do not make the entire Normal Mode monospaced.

## Color

Overall palette:

-   warm/light editorial base;
-   restrained blue accent system;
-   dark product/system sections where appropriate;
-   Developer Mode dark.

Avoid:

-   neon-heavy palettes;
-   gaming aesthetics;
-   excessive gradients.

## Cards

Cards should support:

-   grouping;
-   comparison;
-   state;
-   navigation.

Avoid cardifying every sentence.

## Buttons

Primary actions should be obvious.

Secondary actions should remain visually quieter.

Buttons must have:

-   visible focus;
-   hover/pressed states;
-   keyboard support;
-   touch-friendly sizing.

------------------------------------------------------------------------

# 40. Image & Photography Requirements

Photography should feel personal and editorial.

The primary portrait:

-   must integrate into the composition;
-   should not become a generic profile circle;
-   must have appropriate responsive crops;
-   must include meaningful alt text;
-   must not block the story.

Project images should be used when they add evidence or understanding.

Do not add decorative stock imagery simply to fill space.

------------------------------------------------------------------------

# 41. External Links

External links must:

-   point to the intended destination;
-   use descriptive labels;
-   visually indicate external navigation where appropriate;
-   be tested during QA.

Potential destinations include:

-   GitHub;
-   LinkedIn;
-   writing;
-   project demos;
-   project repositories;
-   official proof sources.

No broken or invented URLs.

------------------------------------------------------------------------

# 42. Content Governance

Content updates must be possible without rewriting UI components.

Content that should be easy to update:

-   Now;
-   Build Log;
-   Signals;
-   Writing;
-   Projects;
-   Proof;
-   Pradrix status.

Content must support:

-   draft;
-   published;
-   archived.

A content change must not require changing layout code unless the
structure itself has changed.

------------------------------------------------------------------------

# 43. Error / Empty / Loading States

Every dynamic surface needs explicit states.

## Loading

Use lightweight skeleton or reserved layout space.

Do not create long blocking spinners.

## Empty

Explain the absence naturally.

Example:

> "Nothing new here yet."

## Error

Explain that the source could not be loaded and provide a useful
fallback when possible.

Do not expose stack traces.

## Stale data

Where freshness matters, show a last-updated date.

## Offline / degraded

Core story, work and contact should remain usable if dynamic
integrations fail.

------------------------------------------------------------------------

# 44. Content Integrity Rules

These are mandatory.

### Never

-   fabricate client names;
-   fabricate revenue;
-   fabricate metrics;
-   fabricate testimonials;
-   fabricate project results;
-   fabricate live GitHub activity;
-   claim Pradrix has customers it does not have;
-   create fake source links;
-   present conceptual code as real source code;
-   expose private credentials.

### Always

-   distinguish current from future;
-   distinguish verified from conceptual;
-   label target customers as target customers;
-   label early-stage work honestly;
-   preserve the actual story.

------------------------------------------------------------------------

# 45. Recruiter Path

A recruiter arriving from search or LinkedIn should be able to reach:

``` text
Identity
→ Work
→ Experience / Resume
→ Proof
→ Contact
```

without exploring Developer Mode.

The résumé must be no more than a few obvious clicks away.

The site should never force a recruiter through the cinematic story to
find basic professional information.

------------------------------------------------------------------------

# 46. Builder / Developer Path

A developer should be able to discover:

``` text
Hero
→ Work
→ Project case study
→ Architecture
→ GitHub
→ Developer Mode
```

Developer Mode should reward curiosity but never be required.

------------------------------------------------------------------------

# 47. Business / Pradrix Path

A business visitor should be able to discover:

``` text
Hero
→ Pradrix
→ Problem
→ Approach
→ Example workflow
→ Current stage
→ Contact
```

The Pradrix page must not read like a generic AI-agency landing page.

------------------------------------------------------------------------

# 48. Mobile Product Requirement

Mobile is not a compressed desktop layout.

The mobile experience must preserve:

-   story;
-   hierarchy;
-   readability;
-   interactions;
-   contact paths.

It may simplify:

-   cinematic transitions;
-   architecture visualizations;
-   terminal density;
-   multi-column compositions.

The narrative must remain intact.

------------------------------------------------------------------------

# 49. MVP Scope

## P0 --- Launch required

### Identity / content

-   Normal Mode;
-   homepage story;
-   Hero;
-   Now;
-   Origin;
-   Journey;
-   Kavach;
-   selected projects;
-   Lessons;
-   Pradrix;
-   Build Log foundation;
-   Signals foundation;
-   Proof foundation;
-   Future;
-   Epilogue.

### Routes

-   `/`
-   `/story`
-   `/work`
-   `/work/kavach`
-   `/work/[project]`
-   `/pradrix`
-   `/now`
-   `/about`
-   `/resume`
-   `/contact`

### Platform

-   responsive;
-   accessibility foundation;
-   SEO;
-   metadata;
-   sitemap;
-   robots;
-   analytics;
-   Vercel deployment;
-   GitHub source;
-   content/data separation.

## P1 --- Launch if stable

-   Developer Mode;
-   command palette;
-   richer activity;
-   richer project architecture;
-   advanced Build Log;
-   expanded Thinking page.

## P2 --- Future

-   advanced GitHub synchronization;
-   richer social synchronization;
-   fully interactive virtual filesystem;
-   advanced terminal;
-   real-time activity;
-   interactive architecture visualizations;
-   grounded "Ask Rinku" interface;
-   richer proof verification UI;
-   additional project simulations.

P2 must not delay a strong Normal Mode launch.

------------------------------------------------------------------------

# 50. Priority Rules

``` text
P0 = required for a coherent launch
P1 = important enhancement
P2 = future / experimental
```

When scope conflicts occur:

1.  Story clarity wins.
2.  Core content wins.
3.  Accessibility wins.
4.  Performance wins.
5.  Proof/truthfulness wins.
6.  Navigation wins.
7.  Visual polish wins.
8.  Experimental interaction comes last.

------------------------------------------------------------------------

# 51. Acceptance Criteria by Product Area

## Identity

-   [ ] Visitor understands who Rinku is within approximately five
    seconds.
-   [ ] Visitor can identify current focus as Pradrix.
-   [ ] Builder identity is communicated without relying on résumé
    metrics.

## Story

-   [ ] Story reads as one journey.
-   [ ] Origin is understandable.
-   [ ] Kavach acts as a meaningful turning/building moment.
-   [ ] Lessons connect to later direction.
-   [ ] Future connects naturally to current work.

## Projects

-   [ ] Selected projects have meaningful narratives.
-   [ ] Project claims are supported.
-   [ ] Repositories/demos work where listed.
-   [ ] Team projects clearly distinguish Rinku's role where applicable.

## Pradrix

-   [ ] Definition is clear.
-   [ ] Problem is clear.
-   [ ] Intended audience is clear.
-   [ ] Workflow is clear.
-   [ ] Current stage is honest.
-   [ ] No fake traction appears.

## Developer Mode

-   [ ] It represents Rinku, not just the website.
-   [ ] Core information remains accessible.
-   [ ] Commands are predictable.
-   [ ] Exit works.
-   [ ] Mobile is usable.
-   [ ] Accessibility equivalent exists.

## Dynamic systems

-   [ ] Failure states are graceful.
-   [ ] No fabricated activity.
-   [ ] Content can be updated without UI rewrites.

## SEO

-   [ ] Canonicals exist.
-   [ ] Metadata exists per page.
-   [ ] Sitemap works.
-   [ ] Robots configuration works.
-   [ ] Person structured data is valid.
-   [ ] Important content is crawlable.

## Performance

-   [ ] Images are optimized.
-   [ ] Non-critical media is lazy loaded.
-   [ ] Animations do not block content.
-   [ ] Dynamic integrations do not block core pages.

## Accessibility

-   [ ] Keyboard navigation works.
-   [ ] Focus is visible.
-   [ ] Contrast is acceptable.
-   [ ] Reduced motion works.
-   [ ] Screen-reader labels are meaningful.
-   [ ] No hover-only essential content exists.

## Contact

-   [ ] Every primary contact CTA works.
-   [ ] External profile links work.
-   [ ] No unnecessary personal information is exposed.

------------------------------------------------------------------------

# 52. Definition of Done

The product is ready to launch when:

### Narrative

-   [ ] The homepage reads as a coherent story.
-   [ ] The story has a beginning, development, current chapter and
    future.
-   [ ] The ending feels intentional.
-   [ ] Pradrix is clearly the current chapter.

### Evidence

-   [ ] Important factual claims are sourced where practical.
-   [ ] No fabricated achievements or traction exist.
-   [ ] All public links are verified.

### Experience

-   [ ] Normal Mode feels editorial, technical, human and restrained.
-   [ ] The three major cinematic moments work.
-   [ ] Interactions serve a purpose.
-   [ ] The site does not feel like a template.

### Developer Mode

-   [ ] It is optional.
-   [ ] It represents Rinku.
-   [ ] It does not expose private information.
-   [ ] It remains usable without a keyboard.

### Technical product quality

-   [ ] Mobile is intentionally designed.
-   [ ] Accessibility requirements pass.
-   [ ] SEO foundations pass.
-   [ ] Performance is acceptable.
-   [ ] Dynamic systems degrade gracefully.
-   [ ] Content is maintainable independently of UI.

### Business utility

-   [ ] Recruiters can find résumé/work quickly.
-   [ ] Developers can find technical depth.
-   [ ] Businesses can understand Pradrix.
-   [ ] Visitors can contact Rinku easily.

------------------------------------------------------------------------

# 53. QA Scenarios

## Scenario A --- Recruiter

**Given:** visitor arrives from a professional profile.

**When:** they spend less than one minute on the site.

**Then:** they can identify Rinku, see relevant work, find the résumé
and contact him.

## Scenario B --- Developer

**Given:** visitor wants technical depth.

**When:** they open a project.

**Then:** they can understand the problem, architecture, implementation
decisions, failures and repository/demo links where available.

## Scenario C --- Curious visitor

**Given:** visitor wants to know the person.

**When:** they scroll the homepage.

**Then:** they understand the journey from curiosity to building to
Pradrix.

## Scenario D --- Business visitor

**Given:** visitor wants to understand Pradrix.

**When:** they open `/pradrix`.

**Then:** they understand the problem, approach, current stage and how
to start a conversation.

## Scenario E --- Reduced motion

**Given:** `prefers-reduced-motion` is enabled.

**When:** visitor opens the homepage.

**Then:** all narrative content remains available with minimal/no
animation.

## Scenario F --- Dynamic API failure

**Given:** GitHub/social data cannot be fetched.

**When:** visitor opens Signals/Activity.

**Then:** the site shows a graceful fallback and core site
navigation/content continues working.

## Scenario G --- Mobile

**Given:** visitor uses a narrow mobile viewport.

**When:** they navigate the full homepage.

**Then:** there is no horizontal page overflow and every primary
interaction remains usable.

## Scenario H --- Developer Mode

**Given:** visitor opens Developer Mode.

**When:** they run an unsupported command.

**Then:** a clear non-destructive error appears and the environment
remains usable.

------------------------------------------------------------------------

# 54. Analytics Success Signals

Quantitative metrics are secondary to product quality.

Useful measurements include:

-   homepage engagement;
-   project opens;
-   case-study depth;
-   Pradrix visits;
-   resume opens;
-   contact interactions;
-   proof-link interactions;
-   Developer Mode usage;
-   command palette usage;
-   return visits;
-   organic search impressions/clicks.

The purpose of analytics is to learn what is useful, not to manufacture
vanity metrics.

------------------------------------------------------------------------

# 55. Content Maintenance Workflow

The site should support a lightweight workflow:

``` text
CREATE / UPDATE CONTENT
        ↓
VERIFY FACTS
        ↓
ADD PROOF WHERE NEEDED
        ↓
PUBLISH
        ↓
SITE UPDATES
```

The developer should not need to modify component code for routine
changes to:

-   Now;
-   Build Log;
-   project descriptions;
-   proof;
-   writing;
-   current Pradrix status.

------------------------------------------------------------------------

# 56. Implementation Guardrails for AI Coding Agents

Any coding agent receiving this PRD must obey:

1.  Do not invent personal facts.
2.  Do not invent outcomes.
3.  Do not invent clients.
4.  Do not invent Pradrix traction.
5.  Do not replace the narrative with a generic portfolio.
6.  Do not replace Developer Mode with a website-tech dashboard.
7.  Do not turn the site into a literal OS simulation.
8.  Do not add animations just to make the site look impressive.
9.  Do not sacrifice accessibility for visual effects.
10. Do not sacrifice performance for cinematic effects.
11. Do not expose secrets.
12. Do not expose private information.
13. Do not hard-code data that belongs in content/data sources.
14. Do not create fake live activity.
15. Do not create fake testimonials or metrics.
16. Preserve Normal Mode as the default.
17. Preserve Developer Mode as optional.
18. Preserve the homepage story arc.
19. Preserve mobile-first behavior.
20. Surface genuinely missing product decisions instead of guessing.
21. Keep components modular.
22. Keep content separate from presentation.
23. Prefer truthful simplicity over impressive-looking fabrication.
24. Treat approved UI references as the visual baseline.
25. Do not change locked product philosophy without explicit approval.

------------------------------------------------------------------------

# 57. What the TRD Must Decide

This PRD intentionally does not prescribe implementation details.

The TRD should subsequently specify:

-   Next.js App Router structure;
-   folder architecture;
-   component hierarchy;
-   server/client boundaries;
-   TypeScript schemas;
-   content/MDX architecture;
-   data fetching;
-   GitHub integration;
-   social integration;
-   proof system implementation;
-   Developer Mode engine;
-   virtual filesystem representation;
-   command parser;
-   animation architecture;
-   caching/revalidation;
-   API routes;
-   metadata implementation;
-   JSON-LD implementation;
-   analytics provider;
-   security controls;
-   testing strategy;
-   CI/CD;
-   deployment configuration;
-   environment variables;
-   performance budgets;
-   accessibility implementation;
-   error monitoring.

The TRD must not redefine product behavior that is already specified
here unless an implementation constraint requires an explicit product
decision.

------------------------------------------------------------------------

# 58. Locked Product Decisions

The following are considered locked unless explicitly changed:

-   living builder's journal concept;
-   story-first experience;
-   Normal Mode default;
-   Developer Mode as optional alternate interpretation;
-   Editorial + Developer + Cinematic visual direction;
-   warm, technical, human, restrained tone;
-   homepage story architecture;
-   Kavach as signature build/failure/debug moment;
-   Pradrix as current focus;
-   honest early-stage Pradrix presentation;
-   Proof layer;
-   Signals/activity concept;
-   Now concept;
-   mobile-first philosophy;
-   purposeful motion;
-   content-driven architecture;
-   Vercel deployment direction;
-   Next.js/TypeScript/Tailwind/Motion/Lucide direction.

------------------------------------------------------------------------

# 59. Decisions Intentionally Left Open

These should be resolved during design/TRD rather than guessed:

-   exact typography families;
-   exact color token values;
-   exact spacing scale;
-   exact component library structure;
-   exact analytics provider;
-   exact GitHub API strategy;
-   exact social integrations;
-   exact MDX implementation;
-   exact Developer Mode command parser;
-   exact animation implementation;
-   exact image optimization pipeline;
-   exact monitoring provider.

------------------------------------------------------------------------

# 60. Final Product Principle

The website should communicate one simple idea:

> **Rinku doesn't just collect technologies, projects, or titles. He
> follows curiosity, learns by building, takes ownership, and tries to
> turn ideas into things that actually work.**

The website itself should be evidence of that philosophy.

> **What if? → Build → Break → Learn → Fix → Ship → What's next?**

------------------------------------------------------------------------

# 61. Final Launch Test

Before launch, ask a person unfamiliar with Rinku to use the site
without explanation.

After browsing, they should be able to answer:

1.  Who is Rinku?
2.  What does he like doing?
3.  What has he actually built?
4.  What did he learn from building?
5.  What is Pradrix?
6.  What is Rinku doing now?
7.  What does he want to build next?
8.  Where can I verify his work?
9.  How can I contact him?

If the site cannot answer these naturally, it is not finished.

------------------------------------------------------------------------

# 62. Relationship to the TRD

This document defines:

> **WHAT the product is and WHAT it must provide.**

The TRD will define:

> **HOW the product will be built.**

The PRD should be treated as the product contract.

The TRD should be treated as the engineering contract.

Together they become the source package for the implementation agent.
