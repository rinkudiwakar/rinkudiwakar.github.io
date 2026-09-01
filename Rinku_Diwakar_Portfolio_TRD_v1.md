# Rinku Diwakar --- Personal Digital Identity {#rinku-diwakar--personal-digital-identity}

## Technical Requirements Document (TRD) --- v1.0 {#technical-requirements-document-trd--v10}

**Product:** `rinkudiwakar.me`\
**Document role:** Engineering contract for implementation\
**Depends on:** `Rinku_Diwakar_Portfolio_PRD_v2.md`\
**Primary platform:** Responsive web\
**Deployment:** Vercel\
**Source control:** GitHub\
**Registrar:** Namecheap\
**Primary architecture:** Next.js App Router + TypeScript\
**Styling:** Tailwind CSS + CSS variables/tokens\
**Motion:** Motion for React\
**Icons:** Lucide React\
**Content:** TypeScript data + MDX where long-form content benefits from
it\
**Initial persistence:** Git repository/content files; no database\
**Rendering strategy:** Server-first, progressively enhanced client
interaction

------------------------------------------------------------------------

# 0. Purpose {#0-purpose}

This TRD defines **how `rinkudiwakar.me` will be engineered**.

The PRD defines what the product must provide. This document defines:

-   application architecture;
-   repository structure;
-   routing;
-   component boundaries;
-   server/client boundaries;
-   content and data models;
-   dynamic integrations;
-   Developer Mode;
-   command palette;
-   motion architecture;
-   SEO;
-   analytics;
-   security;
-   testing;
-   CI/CD;
-   deployment;
-   performance budgets;
-   accessibility implementation;
-   observability;
-   implementation guardrails.

The TRD must not redefine the product experience established by the PRD.

## Source-of-truth hierarchy

1.  PRD
2.  Approved UI/UX references
3.  Verified source material
4.  Content/data
5.  This TRD
6.  Implementation convenience

When a technical choice conflicts with product intent, preserve the
product intent and choose the smallest technically appropriate solution.

------------------------------------------------------------------------

# 1. Architecture Decision Summary {#1-architecture-decision-summary}

## 1.1 Core stack {#11-core-stack}

  Area               Decision
  ------------------ -----------------------------------------------------------------------------------------
  Framework          Next.js App Router
  Language           TypeScript
  Runtime            Node.js / Vercel-compatible
  Styling            Tailwind CSS + CSS custom properties
  Components         Custom components
  Icons              Lucide React
  Motion             Motion for React
  Content            Typed data + MDX
  Validation         Zod
  Testing            Vitest + React Testing Library + Playwright
  Package manager    pnpm
  Source control     GitHub
  Hosting            Vercel
  Database           None for initial release
  CMS                None for initial release
  State management   React state/context only where necessary
  API layer          Next.js Route Handlers only where server-side proxying is required
  Analytics          Provider selected during implementation; isolated behind an internal analytics adapter
  Error monitoring   Provider selected during implementation; isolated behind an internal monitoring adapter

## 1.2 Architectural principles {#12-architectural-principles}

1.  Server-first by default.
2.  Client components only when interaction requires them.
3.  Content must remain separate from presentation.
4.  Dynamic integrations must never block the core story.
5.  No database until a real product requirement requires persistence.
6.  No global state library unless a concrete requirement appears.
7.  No WebGL/Three.js in the initial implementation.
8.  Developer Mode is a virtual presentation system, not a real shell.
9.  Public integrations expose public information only.
10. The homepage must remain useful when JavaScript is unavailable or
    motion is disabled.
11. Accessibility and performance take precedence over visual effects.
12. All external data is treated as untrusted input.
13. No secrets are shipped to the browser.

------------------------------------------------------------------------

# 2. Repository Structure {#2-repository-structure}

Recommended repository:

``` text
rinkudiwakar-me/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── opengraph-image.tsx
│   │
│   ├── story/
│   │   └── page.tsx
│   │
│   ├── work/
│   │   ├── page.tsx
│   │   ├── [project]/
│   │   │   └── page.tsx
│   │   └── kavach/
│   │       └── page.tsx
│   │
│   ├── pradrix/
│   │   └── page.tsx
│   │
│   ├── now/
│   │   └── page.tsx
│   │
│   ├── activity/
│   │   └── page.tsx
│   │
│   ├── thinking/
│   │   └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── resume/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   └── api/
│       └── github/
│           └── route.ts
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── home/
│   ├── story/
│   ├── projects/
│   ├── pradrix/
│   ├── activity/
│   ├── proof/
│   ├── developer/
│   ├── command-palette/
│   ├── media/
│   └── ui/
│
├── content/
│   ├── story/
│   ├── projects/
│   ├── thinking/
│   ├── build-log/
│   ├── now/
│   └── proof/
│
├── data/
│   ├── site.ts
│   ├── navigation.ts
│   ├── projects.ts
│   ├── pradrix.ts
│   ├── now.ts
│   ├── build-log.ts
│   ├── proof.ts
│   ├── activity.ts
│   └── developer-fs.ts
│
├── lib/
│   ├── content/
│   ├── github/
│   ├── activity/
│   ├── proof/
│   ├── developer/
│   ├── analytics/
│   ├── monitoring/
│   ├── seo/
│   ├── validation/
│   └── utils/
│
├── public/
│   ├── images/
│   ├── projects/
│   ├── documents/
│   └── icons/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── scripts/
│   ├── validate-content.ts
│   ├── validate-links.ts
│   └── generate-proof-report.ts
│
├── types/
│   ├── content.ts
│   ├── activity.ts
│   ├── developer.ts
│   └── analytics.ts
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy-check.yml
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
└── README.md
```

The exact file count may evolve. The separation of responsibilities
should not.

------------------------------------------------------------------------

# 3. Next.js Application Architecture {#3-nextjs-application-architecture}

## 3.1 App Router {#31-app-router}

Use the Next.js App Router.

Pages should be implemented as route-level server components unless they
require browser interaction.

Example:

``` tsx
export default async function WorkPage() {
  const projects = await getProjects();

  return <WorkArchive projects={projects} />;
}
```

The route component should compose the experience rather than contain
large presentation implementations.

## 3.2 Layout hierarchy {#32-layout-hierarchy}

``` text
RootLayout
├── Metadata
├── Global styles
├── Skip link
├── SiteShell
│   ├── SiteNavigation
│   ├── MainContent
│   └── Footer
└── Global interaction providers
    ├── CommandPalette
    └── Analytics
```

Do not make the entire application a client component.

## 3.3 Route groups {#33-route-groups}

Route groups may be used when useful:

``` text
app/
├── (normal)/
│   ├── page.tsx
│   ├── story/
│   ├── work/
│   ├── pradrix/
│   ├── now/
│   ├── activity/
│   ├── thinking/
│   ├── about/
│   ├── resume/
│   └── contact/
```

Developer Mode should not require duplicate copies of every route.

------------------------------------------------------------------------

# 4. Server / Client Boundary {#4-server--client-boundary}

## 4.1 Server by default {#41-server-by-default}

The following should remain server-rendered where possible:

-   homepage text;
-   story;
-   project metadata;
-   project case studies;
-   Pradrix content;
-   Now content;
-   Proof content;
-   SEO metadata;
-   JSON-LD;
-   GitHub server fetches;
-   static activity;
-   MDX content.

## 4.2 Client components {#42-client-components}

Client components are justified for:

-   command palette;
-   Developer Mode terminal;
-   Developer Mode filesystem interaction;
-   Kavach interactive sequence;
-   Pradrix workflow interaction;
-   Journey stage selection;
-   animated interactive navigation;
-   analytics event hooks;
-   browser-only media/motion behavior.

Do not add `"use client"` at a high-level layout merely to support one
interactive child.

Preferred pattern:

``` text
Server Page
  ↓
Server Content
  ↓
Interactive Client Island
```

------------------------------------------------------------------------

# 5. Rendering Strategy {#5-rendering-strategy}

## 5.1 Static-first content {#51-static-first-content}

These surfaces should be statically renderable or cacheable:

-   `/`
-   `/story`
-   `/work`
-   `/work/[project]`
-   `/work/kavach`
-   `/pradrix`
-   `/now`
-   `/about`
-   `/resume`
-   `/contact`

## 5.2 Dynamic data {#52-dynamic-data}

Dynamic data should be fetched server-side and cached/revalidated.

Examples:

``` text
GitHub
  ↓
server fetch
  ↓
normalizer
  ↓
typed ActivityItem[]
  ↓
UI
```

Never let UI components depend directly on GitHub response shapes.

## 5.3 Revalidation {#53-revalidation}

Use time-based revalidation for external public activity.

Initial recommendation:

-   GitHub activity: 30--60 minutes
-   repository metadata: several hours
-   static content: deployment-time
-   Now / Pradrix / Build Log: deployment-time because content is
    repository-managed

The exact values can be tuned after observing API limits and freshness
needs.

------------------------------------------------------------------------

# 6. Content Architecture {#6-content-architecture}

## 6.1 Principle {#61-principle}

Content is data.

Components are presentation.

A routine content update should not require modifying component code.

## 6.2 Typed entities {#62-typed-entities}

``` ts
export type ProjectStatus =
  | "active"
  | "completed"
  | "archived"
  | "experimental";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
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
}
```

## 6.3 Pradrix {#63-pradrix}

``` ts
export interface PradrixStatus {
  focus: string;
  stage: string;
  currentWork: string[];
  completed: string[];
  inProgress: string[];
  nextSteps: string[];
  lastUpdated: string;
  updates: PradrixUpdate[];
}

export interface PradrixUpdate {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: string;
  published: boolean;
}
```

## 6.4 Build Log {#64-build-log}

``` ts
export interface BuildLogEntry {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: string;
  relatedContent?: string[];
  sourceUrl?: string;
  published: boolean;
}
```

## 6.5 Proof {#65-proof}

``` ts
export type ProofSourceType =
  | "official"
  | "github"
  | "linkedin"
  | "social"
  | "article"
  | "demo"
  | "certificate";

export interface ProofClaim {
  id: string;
  claim: string;
  sourceType: ProofSourceType;
  sourceUrl: string;
  date?: string;
  verificationStatus: "verified" | "unverified" | "pending";
  relatedContent?: string[];
}
```

## 6.6 Activity {#66-activity}

``` ts
export type ActivitySource =
  | "github"
  | "writing"
  | "linkedin"
  | "x"
  | "instagram"
  | "pradrix";

export interface ActivityItem {
  id: string;
  source: ActivitySource;
  date: string;
  title: string;
  summary?: string;
  url?: string;
  featured?: boolean;
}
```

------------------------------------------------------------------------

# 7. MDX Strategy {#7-mdx-strategy}

Use MDX for long-form narrative where prose and custom content blocks
are useful.

Recommended:

``` text
content/
├── story/
│   ├── origin.mdx
│   ├── curiosity.mdx
│   ├── engineering.mdx
│   └── lessons.mdx
│
├── projects/
│   ├── kavach.mdx
│   ├── skillgap-ai.mdx
│   └── nanotrade.mdx
│
└── thinking/
    └── *.mdx
```

Structured metadata should remain typed.

Example frontmatter:

``` yaml
---
title: "Kavach"
slug: "kavach"
status: "completed"
featured: true
categories:
  - AI
  - Hardware
  - Software
---
```

MDX content must be validated during build.

Do not introduce a CMS in the initial release.

------------------------------------------------------------------------

# 8. Content Validation {#8-content-validation}

Use Zod at content boundaries.

Example:

``` ts
const ProjectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  tagline: z.string().min(1),
  status: z.enum([
    "active",
    "completed",
    "archived",
    "experimental",
  ]),
  categories: z.array(z.string()),
  featured: z.boolean(),
  problem: z.string(),
  idea: z.string(),
  story: z.string(),
  lessons: z.array(z.string()),
  technologies: z.array(z.string()),
});
```

Build should fail for malformed required content.

Content validation should catch:

-   missing slugs;
-   duplicate slugs;
-   invalid status;
-   malformed dates;
-   invalid URLs;
-   missing required fields;
-   invalid proof references;
-   unpublished content accidentally exposed.

------------------------------------------------------------------------

# 9. Homepage Component Architecture {#9-homepage-component-architecture}

Recommended composition:

``` text
HomePage
├── Arrival
├── HeroSection
├── NowSection
├── OriginSection
├── JourneySection
├── KavachSection
│   └── KavachInteractive
├── FeaturedWorkSection
├── LessonsSection
├── PradrixSection
│   └── PradrixWorkflow
├── BuildLogSection
├── SignalsSection
├── ProofSection
├── FutureSection
└── EpilogueSection
```

Each section should be independently testable.

Avoid one giant `page.tsx`.

------------------------------------------------------------------------

# 10. Kavach Technical Architecture {#10-kavach-technical-architecture}

Kavach is the primary cinematic interaction.

## 10.1 State machine {#101-state-machine}

Use a finite state model rather than scattered booleans.

``` ts
type KavachState =
  | "idle"
  | "assembly"
  | "authentication"
  | "physical-flow"
  | "failure"
  | "debugging"
  | "recovery"
  | "working";
```

Transitions:

``` text
idle
 ↓
assembly
 ↓
authentication
 ↓
physical-flow
 ↓
failure
 ↓
debugging
 ↓
recovery
 ↓
working
```

The interaction must never imply undocumented technical behavior.

## 10.2 Implementation {#102-implementation}

The interactive sequence may use:

-   Motion for React;
-   CSS transforms;
-   SVG diagrams;
-   lightweight DOM elements;
-   state-driven labels.

Avoid canvas/WebGL unless later testing proves it necessary.

## 10.3 Reduced motion {#103-reduced-motion}

When:

``` css
@media (prefers-reduced-motion: reduce)
```

the system should render the complete story as a static sequence.

No information may depend exclusively on animation.

------------------------------------------------------------------------

# 11. Pradrix Workflow Architecture {#11-pradrix-workflow-architecture}

The homepage Pradrix interaction uses a typed sequence:

``` ts
const pradrixSteps = [
  "understand",
  "bottleneck",
  "appropriateness",
  "design",
  "build",
  "test",
  "deploy",
  "measure",
] as const;
```

Each step should map to structured content:

``` ts
interface PradrixStep {
  id: string;
  label: string;
  description: string;
  whyItMatters: string;
  action: string;
}
```

The UI should derive from this data rather than hard-code repeated
content.

The workflow is conceptual/product philosophy and must not be
represented as evidence of completed client engagements unless supported
by content.

------------------------------------------------------------------------

# 12. Journey Architecture {#12-journey-architecture}

Journey stages:

``` ts
type JourneyStage =
  | "curious"
  | "exploring"
  | "engineering"
  | "building"
  | "pradrix";
```

Desktop:

``` text
CURIOUS → EXPLORING → ENGINEERING → BUILDING → PRADRIX
```

Mobile:

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

Selection state should be keyboard accessible.

Do not use hover as the only mechanism for revealing content.

------------------------------------------------------------------------

# 13. Developer Mode Architecture {#13-developer-mode-architecture}

## 13.1 Core principle {#131-core-principle}

Developer Mode is a virtual representation of Rinku.

It is not:

-   a real terminal;
-   a shell;
-   a source-code browser;
-   a VS Code clone;
-   a dashboard of website technologies.

## 13.2 Architecture {#132-architecture}

``` text
DeveloperMode
├── DevShell
│   ├── DevTopBar
│   ├── DevFileTree
│   ├── DevEditor
│   └── DevTerminal
│
├── VirtualFilesystem
├── CommandParser
├── CommandRegistry
└── DeveloperContent
```

## 13.3 Virtual filesystem {#133-virtual-filesystem}

Represent the filesystem as an immutable typed tree.

``` ts
type VirtualNode =
  | {
      type: "directory";
      name: string;
      children: VirtualNode[];
    }
  | {
      type: "file";
      name: string;
      content: string;
      mimeType: "text" | "code" | "json" | "markdown";
      openRoute?: string;
    };
```

Example:

``` text
/
├── me/
│   ├── profile.ts
│   ├── skills.ts
│   ├── beliefs.ts
│   ├── goals.ts
│   └── experience.log
│
├── story/
│   ├── origin.md
│   ├── curiosity.md
│   ├── first-build.md
│   └── lessons.md
│
├── projects/
│   ├── kavach/
│   ├── skillgap-ai/
│   └── nanotrade/
│
└── now/
    └── current-focus.json
```

## 13.4 Command parser {#134-command-parser}

The parser should be deterministic and local.

Initial commands:

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

Command representation:

``` ts
interface ParsedCommand {
  command: string;
  args: string[];
}
```

Registry:

``` ts
interface DevCommand {
  name: string;
  aliases?: string[];
  description: string;
  execute: (
    args: string[],
    context: DeveloperContext
  ) => CommandResult;
}
```

No `eval()`.

No shell execution.

No filesystem access.

No arbitrary code execution.

## 13.5 Command behavior {#135-command-behavior}

``` text
whoami
→ identity output

ls
→ current directory children

cd <path>
→ update virtual current path

cat <file>
→ render file content

open <target>
→ navigate to relevant Normal Mode route

history
→ show current-session command history

clear
→ clear terminal output

help
→ command list

exit
→ Normal Mode

unknown command
→ helpful non-destructive error
```

## 13.6 Security {#136-security}

Developer Mode must never expose:

-   `.env`;
-   API keys;
-   tokens;
-   private repositories;
-   private messages;
-   local filesystem;
-   server environment;
-   deployment secrets.

------------------------------------------------------------------------

# 14. Command Palette Architecture {#14-command-palette-architecture}

The command palette is a global client interaction.

## 14.1 Data {#141-data}

``` ts
interface CommandPaletteItem {
  id: string;
  label: string;
  description?: string;
  keywords?: string[];
  href?: string;
  action?: "developer-mode" | "navigation";
}
```

## 14.2 Behavior {#142-behavior}

-   `Cmd/Ctrl + K` opens it.
-   `Escape` closes it.
-   Arrow keys navigate.
-   Enter activates.
-   Focus is trapped while open.
-   Search is fuzzy/tolerant.
-   No-results state is explicit.
-   Mobile uses a bottom-sheet presentation.

## 14.3 Accessibility {#143-accessibility}

Required:

-   dialog semantics;
-   accessible label;
-   active-option semantics;
-   visible focus;
-   keyboard navigation;
-   screen-reader announcements where necessary.

------------------------------------------------------------------------

# 15. Navigation Architecture {#15-navigation-architecture}

Navigation should be generated from a central data structure.

``` ts
const navigation = [
  { label: "Now", href: "/now" },
  { label: "Work", href: "/work" },
  { label: "Story", href: "/story" },
  { label: "Thinking", href: "/thinking" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
```

Do not duplicate route strings across unrelated components.

External destinations should be stored centrally where possible.

------------------------------------------------------------------------

# 16. Design Token Architecture {#16-design-token-architecture}

Use CSS custom properties as the source of truth.

Example:

``` css
:root {
  --color-background: ...;
  --color-foreground: ...;
  --color-muted: ...;
  --color-accent: ...;
  --color-border: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  --space-1: ...;
  --space-2: ...;
  --space-3: ...;
}
```

Exact values come from the approved visual design.

Do not scatter arbitrary colors and spacing throughout JSX.

## Typography

Use:

-   display/editorial typeface for major headings;
-   readable text face for body copy;
-   monospace selectively for technical metadata and Developer Mode.

Do not make Normal Mode entirely monospaced.

------------------------------------------------------------------------

# 17. Motion Architecture {#17-motion-architecture}

Use Motion for React for stateful and narrative animation.

## 17.1 Animation categories {#171-animation-categories}

### Major

1.  Hero typography.
2.  Kavach sequence.
3.  Pradrix workflow.

### Minor

-   fade;
-   reveal;
-   subtle translate;
-   hover;
-   state changes.

## 17.2 Rules {#172-rules}

Animation must:

-   be interruptible;
-   not block navigation;
-   not hide essential information;
-   support reduced motion;
-   avoid excessive layout thrashing;
-   prefer transform/opacity;
-   avoid expensive continuous effects.

## 17.3 Scroll animation {#173-scroll-animation}

Use scroll-driven animation sparingly.

Avoid a global scroll-jacking implementation.

Normal document scrolling must remain native.

------------------------------------------------------------------------

# 18. Image Architecture {#18-image-architecture}

Use Next.js Image for local site imagery.

``` tsx
<Image
  src="/images/rinku-portrait.webp"
  alt="Rinku Diwakar"
  width={1200}
  height={1500}
/>
```

Requirements:

-   responsive sizing;
-   appropriate `sizes`;
-   modern formats where supported;
-   lazy loading for below-fold imagery;
-   eager loading only for critical hero media;
-   meaningful alt text;
-   no decorative stock photography.

Portrait assets should have intentional responsive crops.

------------------------------------------------------------------------

# 19. Dynamic GitHub Integration {#19-dynamic-github-integration}

## 19.1 Strategy {#191-strategy}

Use GitHub\'s public API through a server-side integration.

Initial data candidates:

-   public repositories;
-   repository metadata;
-   selected recent activity;
-   contribution information only where reliably available.

The UI should never directly depend on raw GitHub API JSON.

## 19.2 Data flow {#192-data-flow}

``` text
GitHub API
   ↓
server fetch
   ↓
validation
   ↓
normalization
   ↓
ActivityItem[]
   ↓
cached result
   ↓
Signals / Activity UI
```

## 19.3 API credentials {#193-api-credentials}

If public unauthenticated endpoints are sufficient, do not introduce a
token.

If rate limits later require authentication:

-   token stays server-side;
-   token is stored in Vercel environment variables;
-   token is never exposed to client code;
-   use least privilege.

## 19.4 Failure behavior {#194-failure-behavior}

If GitHub fails:

``` text
API failure
   ↓
return cached data if available
   ↓
otherwise show curated/static fallback
   ↓
never fabricate activity
```

The core homepage must continue rendering.

------------------------------------------------------------------------

# 20. Social and Writing Integrations {#20-social-and-writing-integrations}

Initial release should prefer:

1.  curated structured data;
2.  first-party public feeds/APIs where stable;
3.  external links.

Do not build brittle scraping systems.

Potential sources:

-   GitHub;
-   Medium/writing;
-   LinkedIn;
-   X;
-   Instagram;
-   Pradrix updates.

If an integration becomes unreliable, remove it from the live surface
rather than displaying broken content.

------------------------------------------------------------------------

# 21. Proof System {#21-proof-system}

Proof data should be explicit and typed.

Example:

``` ts
{
  id: "kavach-github",
  claim: "Kavach is a public project repository.",
  sourceType: "github",
  sourceUrl: "...",
  verificationStatus: "verified",
  relatedContent: ["kavach"]
}
```

## Rules {#rules}

-   source must substantiate the claim;
-   prefer first-party sources;
-   validate URLs;
-   do not display `verified` without verification;
-   do not expose private sources;
-   broken proof links must fail QA.

Proof UI remains visually secondary.

------------------------------------------------------------------------

# 22. SEO Architecture {#22-seo-architecture}

## 22.1 Metadata {#221-metadata}

Every route gets:

-   unique title;
-   unique description;
-   canonical URL;
-   Open Graph metadata;
-   Twitter/X metadata where appropriate.

Use Next.js Metadata APIs.

Example concept:

``` ts
export const metadata: Metadata = {
  title: "Rinku Diwakar — Builder, Engineer, Explorer",
  description:
    "The personal digital identity of Rinku Diwakar...",
  alternates: {
    canonical: "https://rinkudiwakar.me",
  },
};
```

Exact copy should come from approved content.

## 22.2 Structured data {#222-structured-data}

Implement:

-   `Person` structured data site-wide where appropriate;
-   `WebSite`;
-   `Article` for genuine published writing;
-   `CreativeWork` / appropriate project structured data only when
    semantically valid.

Do not create structured data for fabricated entities.

## 22.3 Sitemap {#223-sitemap}

Implement:

``` text
app/sitemap.ts
```

Include indexable public routes.

Exclude:

-   API routes;
-   internal states;
-   non-public content.

## 22.4 Robots {#224-robots}

Implement:

``` text
app/robots.ts
```

Allow normal crawling.

Do not block public narrative content.

## 22.5 Canonical identity {#225-canonical-identity}

Use consistent identity references across:

-   website;
-   GitHub;
-   LinkedIn;
-   writing;
-   relevant public profiles.

Do not keyword-stuff pages.

------------------------------------------------------------------------

# 23. Accessibility Architecture {#23-accessibility-architecture}

Target WCAG 2.2 AA-level practices.

## Required

-   semantic HTML;
-   one logical H1 per page;
-   heading hierarchy;
-   skip link;
-   keyboard navigation;
-   visible focus;
-   sufficient contrast;
-   descriptive links;
-   meaningful alt text;
-   reduced motion;
-   no color-only information;
-   no keyboard traps;
-   accessible dialogs;
-   accessible command palette;
-   accessible Developer Mode;
-   accessible interactive diagrams.

## Focus management

Dialogs and command palette must:

1.  move focus into the active surface;
2.  trap focus while open;
3.  restore focus on close.

Developer Mode must provide non-terminal navigation equivalents.

------------------------------------------------------------------------

# 24. Responsive Architecture {#24-responsive-architecture}

Use mobile-first CSS.

Recommended conceptual breakpoints:

``` text
mobile
tablet
desktop
wide
```

Do not design mobile as a collapsed desktop.

## Required transformations

``` text
Desktop → Mobile

horizontal journey → vertical timeline
multi-column → stacked
complex architecture → stacked/swipeable
command palette → bottom sheet
large motion → simplified motion
developer workspace → touch-friendly panels
```

No horizontal page overflow.

------------------------------------------------------------------------

# 25. Analytics Architecture {#25-analytics-architecture}

Analytics must be isolated behind an internal adapter.

``` ts
interface Analytics {
  track(
    event: AnalyticsEvent,
    properties?: Record<string, unknown>
  ): void;
}
```

## Events

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

## Privacy

Do not collect unnecessary personal information.

Avoid:

-   keystroke logging;
-   terminal command content unless needed for aggregate analytics;
-   sensitive identifiers;
-   hidden fingerprinting.

Analytics must be non-blocking.

------------------------------------------------------------------------

# 26. Error Monitoring {#26-error-monitoring}

Use a monitoring provider behind an internal adapter.

``` ts
interface Monitoring {
  captureError(error: unknown, context?: Record<string, unknown>): void;
}
```

Do not expose stack traces to visitors.

Capture:

-   route errors;
-   dynamic integration failures;
-   unexpected client exceptions;
-   critical interaction failures.

Do not capture secrets or sensitive content.

------------------------------------------------------------------------

# 27. Error / Loading / Empty States {#27-error--loading--empty-states}

## Loading

Use:

-   reserved layout space;
-   lightweight skeletons;
-   progressive rendering.

Do not use long blocking spinners.

## Empty

Examples:

``` text
Nothing new here yet.
The work continues elsewhere.
```

## Error

Example:

``` text
This activity source isn't available right now.
The rest of the site is still here.
```

Do not expose technical stack traces.

## Stale

Where freshness matters:

``` text
Last updated: <date>
```

## Degraded mode

Core routes must work if:

-   GitHub fails;
-   social source fails;
-   analytics fails;
-   monitoring fails.

------------------------------------------------------------------------

# 28. API Routes {#28-api-routes}

Use Route Handlers only when a server-side boundary is required.

Potential:

``` text
/api/github
```

The API layer should:

-   validate request parameters;
-   validate external responses;
-   normalize data;
-   apply caching;
-   return minimal public data;
-   never expose credentials.

Do not create API routes merely to wrap static content.

------------------------------------------------------------------------

# 29. Security Requirements {#29-security-requirements}

## Mandatory

-   secrets only in environment variables;
-   no credentials in Git;
-   no API keys in client bundles;
-   validate all external data;
-   sanitize rendered content;
-   restrict server-side integrations;
-   least-privilege tokens;
-   no private repository data;
-   no private activity;
-   no local filesystem access from Developer Mode;
-   no arbitrary code execution.

## Developer Mode security invariant

The virtual filesystem is static application data.

It must never read:

``` text
process.env
filesystem
server files
GitHub private APIs
request headers
cookies containing secrets
```

------------------------------------------------------------------------

# 30. Environment Variables {#30-environment-variables}

Expected structure:

``` text
NEXT_PUBLIC_SITE_URL=https://rinkudiwakar.me

# Optional server-side integrations
GITHUB_TOKEN=
ANALYTICS_PROVIDER_KEY=
MONITORING_DSN=
```

Only variables explicitly prefixed `NEXT_PUBLIC_` may be exposed to the
browser.

Do not commit `.env.local`.

Provide:

``` text
.env.example
```

with placeholder values only.

------------------------------------------------------------------------

# 31. Performance Architecture {#31-performance-architecture}

## 31.1 Performance priorities {#311-performance-priorities}

``` text
Content accessibility
      >
Interaction smoothness
      >
Visual effects
```

## 31.2 Initial targets {#312-initial-targets}

The implementation should aim for:

-   excellent Core Web Vitals;
-   fast first contentful rendering;
-   minimal client JavaScript;
-   no blocking third-party analytics;
-   optimized hero media;
-   no unnecessary WebGL;
-   no large animation libraries beyond required dependencies.

## 31.3 Client JS budget {#313-client-js-budget}

Avoid turning the homepage into a large client bundle.

Major sections should remain server-rendered.

Interactive sections should be isolated.

## 31.4 Dynamic data {#314-dynamic-data}

Dynamic integrations must not delay the primary story.

------------------------------------------------------------------------

# 32. Caching Strategy {#32-caching-strategy}

Use Next.js caching/revalidation for external data.

Conceptual:

``` text
Static content
→ build-time

GitHub
→ cached + revalidated

Curated activity
→ build/deployment-time

Now
→ content update + deployment

Build Log
→ content update + deployment
```

If future requirements demand real-time activity, introduce it as a
separate architecture decision.

------------------------------------------------------------------------

# 33. Testing Strategy {#33-testing-strategy}

## 33.1 Unit tests --- Vitest {#331-unit-tests--vitest}

Test:

-   content validators;
-   command parser;
-   virtual filesystem resolver;
-   Developer Mode commands;
-   project filters;
-   proof validation;
-   activity normalization;
-   utility functions.

Example:

``` ts
describe("command parser", () => {
  it("parses cat profile.ts", () => {
    expect(parseCommand("cat profile.ts")).toEqual({
      command: "cat",
      args: ["profile.ts"],
    });
  });
});
```

## 33.2 Component tests {#332-component-tests}

Use React Testing Library for:

-   navigation;
-   command palette;
-   Journey;
-   Kavach states;
-   Pradrix workflow;
-   project cards;
-   proof links;
-   accessible dialogs.

## 33.3 E2E --- Playwright {#333-e2e--playwright}

Required flows:

### Recruiter

``` text
/
→ Work
→ Resume
→ Contact
```

### Developer

``` text
/
→ Work
→ Kavach
→ GitHub
→ Developer Mode
```

### Business

``` text
/
→ Pradrix
→ Contact
```

### Command palette

``` text
Cmd/Ctrl + K
→ search
→ select
→ route
```

### Developer Mode

``` text
DEV
→ whoami
→ ls
→ cd projects/kavach
→ cat ...
→ open ...
→ exit
```

### Accessibility {#accessibility}

Test:

-   keyboard-only navigation;
-   focus management;
-   reduced motion;
-   mobile viewport;
-   no horizontal overflow.

------------------------------------------------------------------------

# 34. Visual Regression {#34-visual-regression}

For the most important screens, maintain Playwright screenshots or
equivalent visual regression coverage.

Prioritize:

-   homepage desktop;
-   homepage mobile;
-   Kavach;
-   Pradrix;
-   Work;
-   project case study;
-   Developer Mode;
-   command palette.

Do not make visual snapshots so brittle that ordinary copy changes break
the entire suite without review.

------------------------------------------------------------------------

# 35. Link Validation {#35-link-validation}

Create a build/CI script that checks:

-   internal routes;
-   project repository URLs;
-   demos;
-   proof URLs;
-   social profile URLs.

External link checks should tolerate temporary provider failures but
flag persistent failures.

No invented URLs may ship.

------------------------------------------------------------------------

# 36. CI/CD {#36-cicd}

GitHub Actions should run on pull requests.

Pipeline:

``` text
Pull Request
    ↓
Install
    ↓
Lint
    ↓
Typecheck
    ↓
Content validation
    ↓
Unit tests
    ↓
Build
    ↓
E2E / critical checks
    ↓
Preview deployment
```

Production:

``` text
main
 ↓
CI
 ↓
Vercel production deployment
 ↓
Post-deploy smoke checks
```

Exact Vercel/GitHub integration may use Vercel\'s native Git
integration.

------------------------------------------------------------------------

# 37. Code Quality {#37-code-quality}

## TypeScript

Use strict TypeScript.

Recommended:

``` json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Avoid:

``` ts
any
```

unless explicitly justified.

## ESLint

Enforce:

-   React rules;
-   Next.js rules;
-   hooks rules;
-   unused variable detection;
-   import consistency.

## Naming

Components:

``` text
PascalCase
```

Hooks:

``` text
useSomething
```

Utilities:

``` text
camelCase
```

Routes:

``` text
kebab-case
```

Content slugs:

``` text
kebab-case
```

------------------------------------------------------------------------

# 38. Component Design Rules {#38-component-design-rules}

Components should generally follow:

``` text
data → presentation → interaction
```

Avoid components that simultaneously:

-   fetch external APIs;
-   parse content;
-   manage analytics;
-   implement animation;
-   render complex UI.

Prefer composable layers.

Example:

``` text
ProjectPage
 ├── ProjectHeader
 ├── ProjectStory
 ├── ProjectArchitecture
 ├── ProjectFailures
 ├── ProjectLessons
 └── ProjectProof
```

------------------------------------------------------------------------

# 39. State Management {#39-state-management}

Do not install Redux/Zustand/etc. initially.

Use:

-   local React state for component interaction;
-   URL state for shareable filters/search where useful;
-   context only for genuinely global UI state.

Global candidates:

-   command palette open/closed;
-   Developer Mode state;
-   reduced-motion capability if a custom hook requires it.

Avoid global state for content.

------------------------------------------------------------------------

# 40. URL and Routing Rules {#40-url-and-routing-rules}

Every meaningful page must have a stable URL.

Examples:

``` text
/
 /story
 /work
 /work/kavach
 /work/skillgap-ai
 /pradrix
 /now
 /activity
 /thinking
 /about
 /resume
 /contact
```

Project slugs must be stable.

Do not encode ephemeral UI state into URLs unless it benefits
navigation/shareability.

------------------------------------------------------------------------

# 41. Normal Mode / Developer Mode Separation {#41-normal-mode--developer-mode-separation}

The application should conceptually have:

``` text
Normal Mode
    ↓
human/editorial experience

Developer Mode
    ↓
technical interpretation of same identity
```

Do not duplicate the content database.

Both modes should consume the same underlying source data where
appropriate.

Example:

``` text
Project data
    ├── Normal project case study
    └── Developer Mode /projects/kavach representation
```

This ensures content stays synchronized.

------------------------------------------------------------------------

# 42. Developer Mode Data Projection {#42-developer-mode-data-projection}

Developer Mode should use a projection layer.

``` ts
function projectToDeveloperFile(
  project: Project
): VirtualNode {
  // return virtual representation
}
```

This prevents Developer Mode from maintaining a second manual copy of
facts.

Some handcrafted identity files are acceptable:

``` text
/me/profile.ts
/me/beliefs.ts
/me/goals.ts
```

But factual project metadata should preferably derive from canonical
project data.

------------------------------------------------------------------------

# 43. Content Freshness {#43-content-freshness}

Every mutable surface should have a clear owner/source.

  Surface           Source
  ----------------- ----------------------------
  Story             MDX
  Projects          Typed data + MDX
  Pradrix           Typed data + Build Log
  Now               Typed data
  Build Log         Typed data
  Proof             Typed data
  GitHub activity   Public API
  Writing           Curated/first-party source
  Social            Curated/first-party source
  Resume            Approved document

Routine updates should not require component changes.

------------------------------------------------------------------------

# 44. Content Publishing Workflow {#44-content-publishing-workflow}

Recommended:

``` text
CREATE
  ↓
VERIFY
  ↓
ADD PROOF
  ↓
VALIDATE
  ↓
BUILD
  ↓
PREVIEW
  ↓
PUBLISH
```

For Pradrix updates:

-   distinguish current work from planned work;
-   distinguish target customers from actual customers;
-   never infer traction from activity;
-   never publish placeholder claims.

------------------------------------------------------------------------

# 45. Error Boundaries {#45-error-boundaries}

Use route-level and global error boundaries where useful.

At minimum:

``` text
app/error.tsx
app/global-error.tsx
```

Errors should preserve the site\'s tone but remain clear.

Do not make an error page itself a cinematic experiment.

------------------------------------------------------------------------

# 46. 404 Architecture {#46-404-architecture}

The 404 page should be simple and useful.

Suggested behavior:

``` text
Page not found.

Maybe the path changed.

→ Back home
→ Explore work
→ Open command palette
```

Do not create a fake terminal requirement.

------------------------------------------------------------------------

# 47. Metadata / Social Preview Architecture {#47-metadata--social-preview-architecture}

Create consistent social previews.

Potential:

``` text
public/
  og/
```

or dynamic Open Graph generation.

Core identity:

``` text
Rinku Diwakar
Builder · Engineer · Explorer
What if? → It actually works.
```

Project previews should use project-specific metadata where appropriate.

------------------------------------------------------------------------

# 48. Deployment Architecture {#48-deployment-architecture}

``` text
GitHub
   ↓
Vercel
   ↓
Next.js build
   ↓
rinkudiwakar.me
```

Domain:

``` text
rinkudiwakar.me
```

Vercel-managed HTTPS should be used for the deployed application.

Namecheap remains the registrar.

DNS configuration should point the domain to Vercel using the exact
records provided by Vercel at setup time.

Do not hard-code assumed DNS records into the repository documentation.

------------------------------------------------------------------------

# 49. Production Environments {#49-production-environments}

Recommended:

``` text
local
preview
production
```

### Local

Used for development.

### Preview

Every meaningful pull request gets a preview deployment.

### Production

Only the main branch / approved deployment path.

------------------------------------------------------------------------

# 50. Dependency Rules {#50-dependency-rules}

Prefer a small dependency footprint.

Approved baseline:

``` text
next
react
react-dom
typescript
tailwindcss
motion
lucide-react
zod
```

Development:

``` text
vitest
@testing-library/react
@testing-library/jest-dom
playwright
eslint
prettier (if adopted)
```

Do not add dependencies for problems solvable with:

-   native browser APIs;
-   React;
-   CSS;
-   small internal utilities.

Every new dependency should have a concrete reason.

------------------------------------------------------------------------

# 51. Things Explicitly Not to Build Initially {#51-things-explicitly-not-to-build-initially}

Do not add:

-   database;
-   authentication;
-   admin dashboard;
-   CMS;
-   GraphQL;
-   WebSockets;
-   microservices;
-   Redis;
-   Kubernetes;
-   Docker deployment;
-   Firebase;
-   Supabase;
-   3D/WebGL;
-   real shell execution;
-   AI chatbot;
-   complex search backend;
-   social scraping infrastructure.

These may be reconsidered only when a concrete product requirement
appears.

------------------------------------------------------------------------

# 52. Performance Budget {#52-performance-budget}

Initial engineering targets:

  Metric                         Target
  ------------------------------ ------------------------------------------------
  Core content available         Immediately
  Homepage JS                    Keep minimal; interactive islands only
  Blocking third-party scripts   0
  Horizontal overflow            0
  Critical hero image            Optimized and prioritized
  Non-critical images            Lazy loaded
  Animation                      GPU-friendly transforms/opacity where possible
  Dynamic API dependency         Never block core content
  Lighthouse accessibility       ≥ 95 target
  Lighthouse SEO                 ≥ 95 target
  Lighthouse best practices      ≥ 90 target
  Performance                    Aim for ≥ 90; validate on realistic mobile

These are engineering targets, not guarantees.

------------------------------------------------------------------------

# 53. Accessibility Acceptance Matrix {#53-accessibility-acceptance-matrix}

  Feature              Keyboard   Screen reader   Reduced motion   Mobile
  ------------------ ---------- --------------- ---------------- --------
  Navigation                Yes             Yes              Yes      Yes
  Command palette           Yes             Yes              Yes      Yes
  Journey                   Yes             Yes              Yes      Yes
  Kavach                    Yes             Yes              Yes      Yes
  Pradrix workflow          Yes             Yes              Yes      Yes
  Developer Mode            Yes             Yes              Yes      Yes
  Project filters           Yes             Yes              Yes      Yes
  Proof links               Yes             Yes              N/A      Yes

------------------------------------------------------------------------

# 54. SEO Acceptance Matrix {#54-seo-acceptance-matrix}

  Requirement        Implementation
  ------------------ ------------------------------------
  Canonical          Next Metadata
  Titles             Route metadata
  Descriptions       Route metadata
  OG                 Metadata / OG image
  Sitemap            `app/sitemap.ts`
  Robots             `app/robots.ts`
  Person schema      JSON-LD
  Article schema     Thinking pages
  Crawlable story    Server-rendered content
  Internal linking   Navigation + contextual links
  Identity links     Footer/About/Contact
  Mobile             Responsive server-rendered content

------------------------------------------------------------------------

# 55. Security Checklist {#55-security-checklist}

Before production:

-   [ ] No secrets committed.
-   [ ] `.env*` ignored except `.env.example`.
-   [ ] No secret in client bundle.
-   [ ] External responses validated.
-   [ ] MDX/content pipeline trusted and controlled.
-   [ ] Developer Mode cannot access server filesystem.
-   [ ] No `eval`.
-   [ ] No arbitrary command execution.
-   [ ] No private repository data.
-   [ ] API routes expose only intended public data.
-   [ ] Security headers reviewed.
-   [ ] Third-party scripts minimized.
-   [ ] Error responses do not leak stack traces.

------------------------------------------------------------------------

# 56. QA Checklist {#56-qa-checklist}

## Functional

-   [ ] All routes load.
-   [ ] All navigation links work.
-   [ ] Command palette works.
-   [ ] Developer Mode opens/exits.
-   [ ] Developer commands behave predictably.
-   [ ] Kavach sequence works.
-   [ ] Pradrix workflow works.
-   [ ] Project links work.
-   [ ] Proof links work.
-   [ ] Resume path works.
-   [ ] Contact path works.

## Responsive

-   [ ] Mobile.
-   [ ] Tablet.
-   [ ] Desktop.
-   [ ] Wide desktop.
-   [ ] No horizontal overflow.
-   [ ] Touch interactions work.

## Accessibility {#accessibility-1}

-   [ ] Keyboard navigation.
-   [ ] Focus states.
-   [ ] Screen reader labels.
-   [ ] Reduced motion.
-   [ ] Dialog focus management.
-   [ ] No hover-only content.

## Content integrity

-   [ ] No fabricated metrics.
-   [ ] No fabricated clients.
-   [ ] No fabricated traction.
-   [ ] No fabricated outcomes.
-   [ ] Pradrix is clearly early.
-   [ ] Conceptual code is not presented as real source code.
-   [ ] All factual proof links are valid.

------------------------------------------------------------------------

# 57. Definition of Technical Done {#57-definition-of-technical-done}

The implementation is technically ready when:

### Architecture {#architecture}

-   [ ] App Router structure is stable.
-   [ ] Server/client boundaries are intentional.
-   [ ] Content is separated from presentation.
-   [ ] No unnecessary infrastructure exists.

### Product

-   [ ] PRD behavior is implemented.
-   [ ] Normal Mode is the default.
-   [ ] Developer Mode is optional.
-   [ ] Homepage narrative survives without animation.

### Content

-   [ ] Typed content validates.
-   [ ] MDX builds successfully.
-   [ ] Routine content can be updated without component changes.

### Integrations

-   [ ] GitHub integration is server-side.
-   [ ] Dynamic failures degrade gracefully.
-   [ ] No fake activity is generated.

### SEO

-   [ ] Metadata works.
-   [ ] Canonicals work.
-   [ ] Sitemap works.
-   [ ] Robots works.
-   [ ] JSON-LD validates.

### Accessibility {#accessibility-2}

-   [ ] Keyboard navigation passes.
-   [ ] Reduced motion passes.
-   [ ] Focus management passes.
-   [ ] Mobile accessibility passes.

### Performance

-   [ ] Images optimized.
-   [ ] Client JavaScript minimized.
-   [ ] No blocking integrations.
-   [ ] Cinematic sections remain performant.

### Security {#security}

-   [ ] No secrets exposed.
-   [ ] Developer Mode is sandboxed as application data.
-   [ ] External data is validated.

### Deployment

-   [ ] CI passes.
-   [ ] Vercel preview works.
-   [ ] Production build works.
-   [ ] Custom domain works.
-   [ ] HTTPS works.
-   [ ] Smoke tests pass.

------------------------------------------------------------------------

# 58. Implementation Order {#58-implementation-order}

Build in this order to reduce rework.

## Phase 1 --- Foundation {#phase-1--foundation}

1.  Create Next.js application.
2.  Configure TypeScript.
3.  Configure Tailwind.
4.  Establish design tokens.
5.  Configure ESLint.
6.  Configure pnpm.
7.  Configure Vercel/GitHub.
8.  Establish folder architecture.

## Phase 2 --- Content System {#phase-2--content-system}

1.  Define types.
2.  Add validated project data.
3.  Add story content.
4.  Add Pradrix status.
5.  Add Now.
6.  Add Build Log.
7.  Add Proof.
8.  Add writing structure.

## Phase 3 --- Normal Mode {#phase-3--normal-mode}

1.  Global shell.
2.  Navigation.
3.  Hero.
4.  Now.
5.  Origin.
6.  Journey.
7.  Kavach.
8.  Work.
9.  Lessons.
10. Pradrix.
11. Build Log.
12. Signals.
13. Proof.
14. Future.
15. Epilogue.

## Phase 4 --- Inner Routes {#phase-4--inner-routes}

1.  Story.
2.  Work archive.
3.  Project case studies.
4.  Kavach case study.
5.  Pradrix.
6.  Now.
7.  About.
8.  Resume.
9.  Contact.

## Phase 5 --- Developer Mode {#phase-5--developer-mode}

1.  Virtual filesystem.
2.  File tree.
3.  Editor/file view.
4.  Terminal.
5.  Command parser.
6.  Command registry.
7.  Accessibility equivalents.
8.  Normal Mode transition.

## Phase 6 --- Dynamic Systems {#phase-6--dynamic-systems}

1.  GitHub.
2.  Activity normalization.
3.  Writing signals.
4.  Curated social signals.
5.  Failure/fallback behavior.

## Phase 7 --- Quality {#phase-7--quality}

1.  Unit tests.
2.  Component tests.
3.  E2E.
4.  Accessibility.
5.  SEO.
6.  Performance.
7.  Link validation.
8.  Visual QA.

## Phase 8 --- Launch {#phase-8--launch}

1.  Production environment.
2.  Domain.
3.  HTTPS.
4.  Analytics.
5.  Monitoring.
6.  Sitemap/robots validation.
7.  Search engine submission where appropriate.
8.  Final content verification.
9.  Production smoke test.

------------------------------------------------------------------------

# 59. AI Coding Agent Instructions {#59-ai-coding-agent-instructions}

An implementation agent receiving the PRD + TRD must:

1.  Treat the PRD as the product contract.
2.  Treat this TRD as the engineering contract.
3.  Never invent personal facts.
4.  Never invent project outcomes.
5.  Never invent clients.
6.  Never invent Pradrix traction.
7.  Never invent testimonials.
8.  Never invent metrics.
9.  Never expose secrets.
10. Never expose private information.
11. Never turn Developer Mode into a website source-code dump.
12. Never implement a real shell.
13. Never use `eval`.
14. Never add unnecessary infrastructure.
15. Never replace the story with a generic portfolio.
16. Never make Normal Mode dependent on Developer Mode.
17. Never make critical content dependent on animation.
18. Never add animation merely for novelty.
19. Never sacrifice accessibility for visual effects.
20. Never sacrifice performance for cinematic effects.
21. Keep content separate from UI.
22. Keep components modular.
23. Use server components by default.
24. Use client components only where interaction requires them.
25. Validate external data.
26. Provide graceful fallbacks.
27. Test mobile intentionally.
28. Do not silently resolve ambiguous personal/product facts.
29. Do not change locked product behavior without explicit approval.
30. Prefer the smallest implementation that satisfies the PRD.

------------------------------------------------------------------------

# 60. Architecture Decision Records {#60-architecture-decision-records}

The following decisions are intentionally recorded.

## ADR-001 --- Next.js App Router {#adr-001--nextjs-app-router}

**Decision:** Use Next.js App Router.

**Reason:** Supports server-first rendering, route-level metadata,
static content, dynamic server fetching, and Vercel deployment while
allowing isolated client interactions.

## ADR-002 --- No Database Initially {#adr-002--no-database-initially}

**Decision:** No database.

**Reason:** The initial product is primarily content-driven. Git-managed
content is sufficient and reduces operational complexity.

## ADR-003 --- Developer Mode Is Virtual {#adr-003--developer-mode-is-virtual}

**Decision:** Developer Mode uses a virtual filesystem and local command
parser.

**Reason:** It provides the desired programming-language interpretation
of Rinku without introducing security risks or pretending to expose a
real system.

## ADR-004 --- No Global State Library {#adr-004--no-global-state-library}

**Decision:** Use local React state/context.

**Reason:** Current requirements do not justify the complexity of
Redux/Zustand/etc.

## ADR-005 --- Server-Side External Integrations {#adr-005--server-side-external-integrations}

**Decision:** Fetch GitHub and similar external data on the server.

**Reason:** Protects credentials, centralizes validation, enables
caching, and keeps UI independent of provider response shapes.

## ADR-006 --- Motion Is Progressive Enhancement {#adr-006--motion-is-progressive-enhancement}

**Decision:** Motion enhances the story but never carries essential
information.

**Reason:** Accessibility, performance, and content integrity take
precedence.

## ADR-007 --- No WebGL Initially {#adr-007--no-webgl-initially}

**Decision:** No Three.js/WebGL in the initial architecture.

**Reason:** The product\'s visual identity can be achieved through
typography, CSS, SVG, and Motion without unnecessary performance cost.

## ADR-008 --- Content Is Canonical {#adr-008--content-is-canonical}

**Decision:** Typed data/MDX is the canonical source for site content.

**Reason:** The site must evolve without requiring component rewrites.

------------------------------------------------------------------------

# 61. Future Architecture Triggers {#61-future-architecture-triggers}

The following technologies should only be introduced when a concrete
requirement appears.

### Database

Introduce when the site needs persistent user-generated or remotely
managed content.

### CMS

Introduce when content editing by non-developers becomes a real
requirement.

### Authentication

Introduce only if a private user experience exists.

### Real-time infrastructure

Introduce only if real-time activity materially improves the product.

### Search backend

Introduce only when content volume makes local search insufficient.

### AI interface

Introduce only if there is a grounded, source-backed use case and a
reliable way to prevent fabricated answers.

### WebGL

Introduce only if a visual concept cannot be achieved through
DOM/SVG/CSS/Motion at acceptable performance.

------------------------------------------------------------------------

# 62. Final Engineering Principle {#62-final-engineering-principle}

The technical architecture should embody the same philosophy as the
product:

> **What if? → Build → Break → Learn → Fix → Ship → What\'s next?**

The website should be technically interesting without becoming
technically self-indulgent.

The strongest implementation is not the one with the most technology.

It is the one that makes the story feel inevitable:

``` text
Curiosity
   ↓
Exploration
   ↓
Engineering
   ↓
Building
   ↓
Failure
   ↓
Learning
   ↓
Better Building
   ↓
Pradrix
   ↓
What's Next?
```

The architecture exists to make that experience fast, accessible,
truthful, maintainable, and alive.

------------------------------------------------------------------------

# 63. Final Handoff Package {#63-final-handoff-package}

The implementation agent should receive:

``` text
Rinku_Diwakar_Portfolio_PRD_v2.md
        +
Rinku_Diwakar_Portfolio_TRD_v1.md
        +
Approved UI/UX references
        +
Verified content/proof sources
        +
Approved media assets
```

The PRD answers:

> **WHAT are we building?**

The TRD answers:

> **HOW are we building it?**

Together they form the implementation contract for `rinkudiwakar.me`.
