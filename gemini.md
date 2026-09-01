# GEMINI.md --- Rinku Diwakar Portfolio Project Constitution {#geminimd--rinku-diwakar-portfolio-project-constitution}

## Project

Build and maintain `rinkudiwakar.me`.

This is a personal digital identity website for Rinku Diwakar.

The website is not primarily a resume.

It is a **living builder\'s journal** that tells the story of a person
who follows curiosity, learns by building, takes ownership, and tries to
turn ideas into things that actually work.

------------------------------------------------------------------------

# 1. Prime Directive {#1-prime-directive}

**Protect the story, truth, and human identity before optimizing for
technical cleverness.**

The website itself should feel like evidence of Rinku\'s philosophy:

> What if? → Build → Break → Learn → Fix → Ship → What\'s next?

------------------------------------------------------------------------

# 2. Required Reading {#2-required-reading}

Before making substantial changes, read:

``` text
Rinku_Diwakar_Portfolio_PRD_v2.md
Rinku_Diwakar_Portfolio_TRD_v1.md
Agent_Build_Specification.md
design.md
agent.md
```

Do not treat isolated prompts as permission to ignore these documents.

------------------------------------------------------------------------

# 3. Product Identity {#3-product-identity}

The site should communicate:

-   builder;
-   engineer;
-   explorer;
-   curiosity;
-   real projects;
-   learning through execution;
-   Pradrix as the current chapter.

Core philosophy:

> "I like building things because I enjoy the journey from 'What if?' to
> 'It actually works.'"

Desired visitor takeaway:

> "He's someone who doesn't just have ideas --- he actually tries to
> turn them into something real."

------------------------------------------------------------------------

# 4. Locked Experience {#4-locked-experience}

Normal Mode:

``` text
Editorial
+
Developer
+
Cinematic
```

Visual character:

-   warm;
-   technical;
-   human;
-   restrained;
-   confident;
-   typographic;
-   spacious.

Developer Mode:

-   dark;
-   macOS-inspired;
-   terminal/workspace aesthetic;
-   monospaced accents;
-   professional;
-   optional.

Developer Mode is about **Rinku expressed through programming
concepts**, not about showing how the website itself is implemented.

------------------------------------------------------------------------

# 5. Homepage Story {#5-homepage-story}

Maintain this sequence unless explicitly changed:

``` text
Arrival
→ Hero
→ Now
→ Origin
→ Journey
→ Kavach
→ Things I've Built
→ What Building Taught Me
→ Pradrix
→ Build Log
→ Signals
→ Proof
→ Future
→ Epilogue
```

The homepage must start and end with story.

------------------------------------------------------------------------

# 6. Truthfulness Rules {#6-truthfulness-rules}

Never invent:

-   clients;
-   revenue;
-   metrics;
-   testimonials;
-   project results;
-   GitHub activity;
-   social posts;
-   customer logos;
-   Pradrix traction;
-   awards;
-   experience;
-   personal facts.

Never convert a future intention into a completed achievement.

Never convert a conceptual workflow into a client case study.

Never expose private information.

------------------------------------------------------------------------

# 7. Pradrix Truth Model {#7-pradrix-truth-model}

Pradrix is early.

Represent it honestly.

It is an AI consulting/automation company being built around the idea of
understanding business operations first and applying AI/automation where
it actually helps.

Do not make it look like a large established agency.

Do not add fake social proof.

------------------------------------------------------------------------

# 8. Content Rules {#8-content-rules}

Content is canonical data.

UI is presentation.

Routine updates should be possible without rewriting components.

Use:

-   typed data;
-   MDX;
-   proof references;
-   structured Now;
-   structured Build Log.

------------------------------------------------------------------------

# 9. Technical Constitution {#9-technical-constitution}

Preferred stack:

``` text
Next.js App Router
TypeScript
Tailwind CSS
Motion for React
Lucide React
Zod
MDX
Vitest
React Testing Library
Playwright
pnpm
GitHub
Vercel
```

Avoid adding infrastructure without a requirement.

No initial:

-   database;
-   CMS;
-   GraphQL;
-   WebSockets;
-   microservices;
-   Redis;
-   Kubernetes;
-   Firebase;
-   Supabase;
-   Three.js/WebGL;
-   authentication.

------------------------------------------------------------------------

# 10. Rendering {#10-rendering}

Server-first.

Client components only where needed.

Never make the whole site client-rendered to simplify one animation.

Core content must remain usable without animation.

------------------------------------------------------------------------

# 11. Developer Mode Constitution {#11-developer-mode-constitution}

Developer Mode is a virtual environment.

Allowed:

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

Not allowed:

-   real shell execution;
-   arbitrary code execution;
-   `eval`;
-   filesystem access;
-   reading environment variables;
-   private API access;
-   hidden server data.

The filesystem is a presentation model.

------------------------------------------------------------------------

# 12. Design Constitution {#12-design-constitution}

Do:

-   use typography strongly;
-   use whitespace;
-   use restrained technical metadata;
-   use personal photography meaningfully;
-   use subtle grids;
-   use cinematic moments sparingly;
-   use blue accents carefully;
-   make mobile intentionally designed.

Do not:

-   use giant 3D globes;
-   use excessive glassmorphism;
-   use neon gaming aesthetics;
-   float technology logos everywhere;
-   make every sentence a card;
-   over-animate;
-   use fake dashboards;
-   create a generic SaaS look.

------------------------------------------------------------------------

# 13. Motion Constitution {#13-motion-constitution}

Only three major cinematic moments are required:

1.  Hero typography;
2.  Kavach build/failure/debug;
3.  Pradrix workflow.

Everything else should be restrained.

Animation must never be necessary to understand content.

Respect:

``` text
prefers-reduced-motion
```

------------------------------------------------------------------------

# 14. Accessibility Constitution {#14-accessibility-constitution}

Accessibility is not a polish phase.

Build it into components.

Required:

-   semantic HTML;
-   keyboard support;
-   focus states;
-   accessible labels;
-   contrast;
-   reduced motion;
-   screen-reader equivalents;
-   no hover-only essential information;
-   no keyboard traps.

------------------------------------------------------------------------

# 15. Performance Constitution {#15-performance-constitution}

Prefer:

``` text
server rendering
+
small client islands
+
optimized media
+
cached integrations
```

Avoid:

``` text
large JS bundles
+
unnecessary dependencies
+
continuous expensive animation
+
blocking third-party scripts
```

------------------------------------------------------------------------

# 16. SEO Constitution {#16-seo-constitution}

The site must clearly establish the identity:

``` text
Rinku Diwakar
```

and naturally support:

-   Rinku Diwakar;
-   Rinku Diwakar NIT Jalandhar;
-   Rinku Diwakar developer;
-   Rinku Diwakar AI;
-   Rinku Diwakar projects;
-   Rinku Diwakar Pradrix.

Do this through useful content and semantic structure, not keyword
stuffing.

------------------------------------------------------------------------

# 17. Integration Constitution {#17-integration-constitution}

External data:

``` text
fetch
→ validate
→ normalize
→ cache
→ display
```

Never:

``` text
fetch
→ blindly render
```

If an integration fails, the website must still work.

------------------------------------------------------------------------

# 18. Coding Style {#18-coding-style}

Prefer:

-   small components;
-   typed interfaces;
-   pure utilities;
-   explicit state machines for complex interactions;
-   descriptive names;
-   simple abstractions.

Avoid:

-   premature abstraction;
-   giant components;
-   unnecessary context;
-   global state for local problems;
-   dependency-heavy solutions.

------------------------------------------------------------------------

# 19. Change Management {#19-change-management}

Before changing a locked product behavior, ask for explicit approval.

Examples of locked decisions:

-   living builder\'s journal;
-   story-first experience;
-   Normal Mode default;
-   Developer Mode optional;
-   Kavach as signature moment;
-   Pradrix as current focus;
-   proof layer;
-   Now;
-   Signals;
-   mobile-first;
-   purposeful motion;
-   content-driven architecture.

------------------------------------------------------------------------

# 20. Completion Standard {#20-completion-standard}

The site is not complete because it looks impressive.

It is complete when:

-   the story is coherent;
-   facts are truthful;
-   work is verifiable;
-   Pradrix is understood;
-   recruiters can move quickly;
-   developers can inspect technical depth;
-   businesses can understand Pradrix;
-   mobile works;
-   accessibility works;
-   performance is strong;
-   the site feels unmistakably like Rinku.
