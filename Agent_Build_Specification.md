# Rinku Diwakar Portfolio --- Agent Build Specification {#rinku-diwakar-portfolio--agent-build-specification}

**Version:** 1.0\
**Target:** `rinkudiwakar.me`\
**Companion documents:** PRD v2.0, TRD v1.0, `gemini.md`, `agent.md`,
`design.md`

------------------------------------------------------------------------

## 1. Mission {#1-mission}

Build `rinkudiwakar.me` as a **living builder\'s journal**: a
story-driven personal digital identity for Rinku Diwakar.

The website must feel like a real person who builds things, learns
through building, and is currently building Pradrix --- not like a
resume template, startup landing page, dashboard, or generic developer
portfolio.

The implementation must make the existing product decisions real without
inventing facts.

### Core idea

> **What if? → Build → Break → Learn → Fix → Ship → What\'s next?**

### Core identity

> **A builder who learns by solving real problems.**

### Current chapter

> **Pradrix**

------------------------------------------------------------------------

# 2. Read Before Coding {#2-read-before-coding}

The coding agent must read these documents in order:

1.  `Rinku_Diwakar_Portfolio_PRD_v2.md`
2.  `Rinku_Diwakar_Portfolio_TRD_v1.md`
3.  `design.md`
4.  `agent.md`
5.  `gemini.md`

The PRD defines product behavior.

The TRD defines technical architecture.

`design.md` defines visual and interaction rules.

`agent.md` defines implementation behavior and guardrails.

`gemini.md` is the high-level project constitution for Gemini/AI coding
environments.

If documents conflict:

``` text
Product truth
  >
Approved design
  >
Architecture
  >
Implementation convenience
```

------------------------------------------------------------------------

# 3. Non-Negotiable Product Requirements {#3-non-negotiable-product-requirements}

Implement:

-   Normal Mode as default;
-   story-first homepage;
-   Hero;
-   Now;
-   Origin;
-   Journey;
-   Kavach;
-   selected projects;
-   Lessons;
-   Pradrix;
-   Build Log;
-   Signals;
-   Proof;
-   Future;
-   Epilogue;
-   inner routes;
-   recruiter path;
-   developer path;
-   business/Pradrix path;
-   mobile-first behavior;
-   accessibility;
-   SEO;
-   truthful content.

Developer Mode is optional and must never be required to understand
Rinku.

------------------------------------------------------------------------

# 4. Initial Route Map {#4-initial-route-map}

Implement:

``` text
/
 /story
 /work
 /work/[project]
 /work/kavach
 /pradrix
 /now
 /activity
 /thinking
 /about
 /resume
 /contact
```

Developer Mode may exist inside the application shell rather than as a
separate public route.

------------------------------------------------------------------------

# 5. Build Order {#5-build-order}

Do not start with Developer Mode.

Build in this order:

## Phase 1 --- Foundation {#phase-1--foundation}

-   initialize Next.js;
-   TypeScript strict mode;
-   Tailwind;
-   design tokens;
-   linting;
-   testing;
-   content validation;
-   basic shell;
-   Vercel configuration.

## Phase 2 --- Content {#phase-2--content}

-   types;
-   story content;
-   projects;
-   Pradrix;
-   Now;
-   Build Log;
-   Proof;
-   writing structure.

## Phase 3 --- Normal Mode {#phase-3--normal-mode}

-   navigation;
-   hero;
-   Now;
-   Origin;
-   Journey;
-   Kavach;
-   Work;
-   Lessons;
-   Pradrix;
-   Build Log;
-   Signals;
-   Proof;
-   Future;
-   Epilogue.

## Phase 4 --- Inner Pages {#phase-4--inner-pages}

Implement all required routes and case-study templates.

## Phase 5 --- Interaction {#phase-5--interaction}

-   Kavach state machine;
-   Pradrix workflow;
-   command palette;
-   purposeful motion.

## Phase 6 --- Developer Mode {#phase-6--developer-mode}

-   virtual filesystem;
-   file tree;
-   file viewer;
-   terminal;
-   command parser;
-   command registry;
-   accessibility equivalents.

## Phase 7 --- Integrations {#phase-7--integrations}

-   GitHub;
-   curated activity;
-   writing;
-   external signals.

## Phase 8 --- Quality {#phase-8--quality}

-   unit;
-   component;
-   E2E;
-   accessibility;
-   SEO;
-   performance;
-   visual QA;
-   link validation.

------------------------------------------------------------------------

# 6. Project Structure {#6-project-structure}

Use the TRD structure:

``` text
app/
components/
content/
data/
lib/
public/
tests/
scripts/
types/
.github/
```

Keep route components thin.

Avoid putting business logic into page files.

------------------------------------------------------------------------

# 7. Architecture Rules {#7-architecture-rules}

## Server-first

Use Server Components by default.

Client Components only for:

-   interactive animations;
-   command palette;
-   Developer Mode;
-   Kavach interaction;
-   Pradrix workflow;
-   browser-specific behavior.

Never turn the entire application into a Client Component just because
one child is interactive.

## Content separation

Do not hard-code narrative content into presentation components.

Preferred:

``` text
content/data
    ↓
typed loader
    ↓
page
    ↓
presentation component
```

------------------------------------------------------------------------

# 8. Required Content Model {#8-required-content-model}

Implement typed models for:

-   Project;
-   PradrixStatus;
-   BuildLogEntry;
-   ProofClaim;
-   ActivityItem;
-   JourneyStage;
-   DeveloperNode;
-   CommandPaletteItem.

Use Zod at content boundaries.

Build should fail on malformed required content.

------------------------------------------------------------------------

# 9. Homepage Implementation {#9-homepage-implementation}

Implement the homepage as independent sections:

``` text
Arrival
Hero
Now
Origin
Journey
Kavach
Things I've Built
What Building Taught Me
Pradrix
Build Log
Signals
Proof
Future
Epilogue
```

Each section should have:

-   semantic sectioning;
-   stable anchor/id when useful;
-   responsive layout;
-   reduced-motion fallback;
-   accessible interactions;
-   no dependency on another section\'s client state unless necessary.

------------------------------------------------------------------------

# 10. Hero {#10-hero}

The first viewport must answer:

1.  Who is Rinku?
2.  What does he do?
3.  What is he building now?

The hero should communicate:

-   builder identity;
-   curiosity;
-   software/AI/product direction;
-   Pradrix as current focus;
-   "What if? → It actually works." philosophy.

Do not use:

-   giant résumé metrics;
-   generic "Hi, I\'m Rinku" hero;
-   excessive floating technology logos;
-   giant 3D graphics.

------------------------------------------------------------------------

# 11. Kavach Implementation {#11-kavach-implementation}

Kavach is the signature interactive build moment.

Implement a deterministic state machine:

``` text
idle
→ assembly
→ authentication
→ physical-flow
→ failure
→ debugging
→ recovery
→ working
```

The interaction should tell the actual story:

-   first production-grade build;
-   hardware/software integration;
-   voice authentication;
-   real-world testing;
-   failure where another person could trigger the same keyword;
-   debugging;
-   recovery;
-   working prototype;
-   lesson from building end-to-end.

Do not invent additional hardware behavior.

Do not present conceptual diagrams as actual measurements.

Reduced motion must display the full story without animation.

------------------------------------------------------------------------

# 12. Pradrix Implementation {#12-pradrix-implementation}

Use the workflow:

``` text
UNDERSTAND
→ FIND BOTTLENECK
→ IS AI APPROPRIATE?
→ DESIGN
→ BUILD
→ TEST
→ DEPLOY
→ MEASURE
```

Each step exposes:

-   meaning;
-   why it matters;
-   what Pradrix does.

The page must clearly communicate that Pradrix is early.

Never imply:

-   fake customers;
-   fake revenue;
-   fake deployments;
-   fake case studies;
-   fake measurable results.

------------------------------------------------------------------------

# 13. Project Case Studies {#13-project-case-studies}

Template:

``` text
Context
Problem
Idea
Role
Architecture
Build
Failures
Iteration
Result
What I Learned
Proof / Links
```

Not every project needs equal depth.

For team projects, explicitly state Rinku\'s role when known.

Only show results that are verified.

------------------------------------------------------------------------

# 14. Developer Mode {#14-developer-mode}

Developer Mode represents Rinku **in programming language**.

It must not become a website implementation showcase.

Virtual filesystem:

``` text
/me
  profile.ts
  skills.ts
  beliefs.ts
  goals.ts
  experience.log

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

Commands:

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

### Security rule

Developer Mode is a local presentation model.

Never execute:

-   shell commands;
-   arbitrary JavaScript;
-   filesystem commands;
-   server commands.

Never use `eval()`.

------------------------------------------------------------------------

# 15. Command Palette {#15-command-palette}

Desktop:

``` text
Cmd/Ctrl + K
```

Mobile:

``` text
bottom sheet
```

Support:

-   search;
-   keyboard navigation;
-   route navigation;
-   Developer Mode entry;
-   Escape close;
-   focus management.

------------------------------------------------------------------------

# 16. Dynamic Integrations {#16-dynamic-integrations}

GitHub and other external sources must follow:

``` text
external API
→ server fetch
→ validate
→ normalize
→ cache
→ UI
```

UI must not depend directly on provider-specific response structures.

If an external source fails:

``` text
cached data
→ curated fallback
→ graceful empty state
```

Never fabricate activity.

------------------------------------------------------------------------

# 17. SEO {#17-seo}

Implement:

-   unique titles;
-   descriptions;
-   canonical URLs;
-   Open Graph;
-   sitemap;
-   robots;
-   Person JSON-LD;
-   appropriate Article/CreativeWork structured data;
-   internal linking;
-   crawlable narrative content.

Do not keyword-stuff.

Do not promise rankings.

------------------------------------------------------------------------

# 18. Performance {#18-performance}

Required:

-   optimized images;
-   lazy noncritical media;
-   minimal client JavaScript;
-   server rendering where possible;
-   efficient motion;
-   cached external data;
-   no blocking third-party scripts;
-   no unnecessary WebGL.

Priority:

``` text
Content accessibility
>
Interaction smoothness
>
Visual effects
```

------------------------------------------------------------------------

# 19. Accessibility {#19-accessibility}

All important interactions must support:

-   keyboard;
-   screen readers;
-   reduced motion;
-   mobile/touch.

Required:

-   skip link;
-   semantic HTML;
-   heading hierarchy;
-   visible focus;
-   dialog semantics;
-   no hover-only essential information;
-   no keyboard traps;
-   sufficient contrast.

------------------------------------------------------------------------

# 20. Testing Requirements {#20-testing-requirements}

Write tests before declaring a major subsystem complete.

## Unit

Test:

-   content schemas;
-   command parser;
-   virtual filesystem;
-   command resolver;
-   project filters;
-   activity normalization.

## E2E

Test:

-   recruiter journey;
-   developer journey;
-   business journey;
-   command palette;
-   Developer Mode;
-   Kavach;
-   Pradrix;
-   mobile;
-   reduced motion.

------------------------------------------------------------------------

# 21. Definition of Done {#21-definition-of-done}

A feature is not complete until:

-   it works on desktop;
-   it works on mobile;
-   it has an accessible interaction path;
-   it has reduced-motion behavior where applicable;
-   it does not introduce console errors;
-   it does not break navigation;
-   it does not fabricate content;
-   it passes relevant tests;
-   it follows the design system;
-   it does not unnecessarily increase client JavaScript.

------------------------------------------------------------------------

# 22. Implementation Discipline {#22-implementation-discipline}

Work in small, reviewable increments.

After each major phase:

1.  run typecheck;
2.  run lint;
3.  run tests;
4.  run build;
5.  inspect the page visually;
6.  test mobile;
7.  inspect accessibility;
8.  verify links.

Do not build the entire website in one enormous component.

------------------------------------------------------------------------

# 23. Do Not Guess {#23-do-not-guess}

If a missing decision affects:

-   personal facts;
-   project outcomes;
-   Pradrix claims;
-   visual identity;
-   architecture;
-   external integrations;

stop and identify the missing decision.

Do not silently invent an answer.

For minor implementation details that do not affect product behavior,
choose the simplest reasonable implementation and document it.

------------------------------------------------------------------------

# 24. Final Agent Test {#24-final-agent-test}

Before declaring completion, a person unfamiliar with Rinku should
naturally be able to answer:

1.  Who is Rinku?
2.  What does he like doing?
3.  What has he built?
4.  What did he learn?
5.  What is Pradrix?
6.  What is he doing now?
7.  What does he want to build next?
8.  Where can his work be verified?
9.  How can someone contact him?

If not, the implementation is incomplete.
