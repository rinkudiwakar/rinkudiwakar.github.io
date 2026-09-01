# AGENT.md --- AI Coding Agent Operating Rules {#agentmd--ai-coding-agent-operating-rules}

## 1. Role {#1-role}

You are the implementation engineer for `rinkudiwakar.me`.

Your job is to turn the PRD, TRD, design specification, and verified
content into production-quality code.

You are **not** the product owner.

You must not redesign the product merely because another approach seems
technically interesting.

------------------------------------------------------------------------

# 2. Before Editing {#2-before-editing}

Before editing code:

1.  inspect repository structure;
2.  read the project instruction files;
3.  inspect existing implementation;
4.  identify relevant route/component/data files;
5.  understand existing patterns;
6.  make the smallest coherent change.

Never overwrite a working system blindly.

------------------------------------------------------------------------

# 3. Instruction Priority {#3-instruction-priority}

Use this priority:

``` text
Explicit current user requirement
>
PRD
>
design.md
>
TRD
>
Agent Build Specification
>
AGENT.md
>
GEMINI.md
>
existing implementation conventions
>
personal implementation preference
```

If a conflict is material, surface it rather than silently choosing.

------------------------------------------------------------------------

# 4. Build Philosophy {#4-build-philosophy}

Prefer:

> **simple, truthful, maintainable, fast**

over:

> clever, over-engineered, animated, abstract.

The website is itself a product demonstration.

Good engineering should be visible through quality, not through
unnecessary technical spectacle.

------------------------------------------------------------------------

# 5. Never Invent Content {#5-never-invent-content}

Do not write fictional:

-   achievements;
-   customers;
-   metrics;
-   project results;
-   testimonials;
-   revenue;
-   job titles;
-   personal history;
-   social activity.

If content is missing, use an explicit placeholder only during
development and make sure it cannot accidentally ship as factual
content.

------------------------------------------------------------------------

# 6. Never Invent URLs {#6-never-invent-urls}

Do not create likely-looking URLs.

Use only:

-   verified internal routes;
-   verified public URLs;
-   provided URLs.

Broken links are defects.

------------------------------------------------------------------------

# 7. Content vs Code {#7-content-vs-code}

If the change is content:

``` text
edit content/data
```

If the change is presentation:

``` text
edit component
```

Do not mix the two unnecessarily.

A project description should not be buried inside a component.

------------------------------------------------------------------------

# 8. React Rules {#8-react-rules}

Default to Server Components.

Use `"use client"` only when needed.

Typical valid reasons:

-   interaction;
-   browser APIs;
-   animation requiring client state;
-   command palette;
-   Developer Mode;
-   interactive diagrams.

Do not make parent trees client-rendered without reason.

------------------------------------------------------------------------

# 9. State Management {#9-state-management}

Use local state first.

Use context only for genuine cross-tree UI state.

Do not add Redux/Zustand/etc. unless a real requirement appears.

Complex sequences such as Kavach should use explicit state transitions.

------------------------------------------------------------------------

# 10. Developer Mode Rules {#10-developer-mode-rules}

Developer Mode is a **virtual filesystem**.

Never execute user-entered commands.

Never call:

``` text
eval
Function(...)
child_process
exec
spawn
shell
filesystem APIs
```

Developer Mode commands must map to known application functions.

Unknown command:

``` text
clear error
+
helpful hint
```

Never expose environment variables or server state.

------------------------------------------------------------------------

# 11. Motion Rules {#11-motion-rules}

Motion is progressive enhancement.

Before adding an animation, answer:

1.  What does it communicate?
2.  Does it improve understanding?
3.  What happens with reduced motion?
4.  What happens on mobile?
5.  Does it affect performance?

If the answer to the first two is weak, do not add it.

------------------------------------------------------------------------

# 12. Accessibility Rules {#12-accessibility-rules}

Every interactive component must have:

-   keyboard support;
-   focus state;
-   semantic role;
-   accessible name;
-   sensible mobile behavior.

Do not rely on:

``` text
hover
color alone
animation
sound
```

for essential meaning.

------------------------------------------------------------------------

# 13. Performance Rules {#13-performance-rules}

Avoid:

-   unnecessary client rendering;
-   large images without optimization;
-   continuous animation loops;
-   expensive blur/filter stacks;
-   unnecessary DOM depth;
-   giant dependency additions.

Prefer:

-   CSS transforms;
-   opacity;
-   server rendering;
-   static generation;
-   cached fetches;
-   optimized images.

------------------------------------------------------------------------

# 14. External Data Rules {#14-external-data-rules}

Never pass raw third-party API objects through the UI.

Use:

``` text
provider response
→ schema validation
→ normalized internal type
→ UI
```

If the provider fails:

``` text
cached data
or
curated fallback
or
graceful empty state
```

Never fabricate data.

------------------------------------------------------------------------

# 15. Error Handling {#15-error-handling}

Errors should be:

-   predictable;
-   recoverable where possible;
-   understandable to users;
-   logged appropriately.

Never show:

-   stack traces;
-   secrets;
-   environment variables;
-   raw API responses.

------------------------------------------------------------------------

# 16. Testing Rule {#16-testing-rule}

Every significant feature must have appropriate tests.

Minimum expectations:

### Utilities

Unit tests.

### Interactive components

Component tests.

### Critical user journeys

Playwright E2E.

Critical journeys:

``` text
Recruiter
Developer
Business
Mobile
Reduced motion
Developer Mode
Command palette
```

------------------------------------------------------------------------

# 17. Verification Loop {#17-verification-loop}

After a meaningful change:

``` text
typecheck
→ lint
→ tests
→ build
→ visual inspection
→ mobile inspection
```

Do not declare success based only on the editor compiling.

------------------------------------------------------------------------

# 18. Dependency Rule {#18-dependency-rule}

Before adding a dependency:

1.  determine whether native APIs solve the problem;
2.  determine whether an existing dependency solves it;
3.  determine bundle/runtime impact;
4.  document why the dependency is needed.

Do not add packages for trivial utilities.

------------------------------------------------------------------------

# 19. File Organization {#19-file-organization}

Keep:

``` text
app/
components/
content/
data/
lib/
types/
tests/
scripts/
```

responsibilities separate.

Do not create a giant:

``` text
utils.ts
```

or:

``` text
components.tsx
```

that becomes a dumping ground.

------------------------------------------------------------------------

# 20. Git Discipline {#20-git-discipline}

Prefer small commits.

Commit intent should be obvious.

Examples:

``` text
feat: add story content system
feat: build kavach interaction
feat: add pradrix workflow
fix: improve mobile navigation
perf: reduce homepage client bundle
a11y: improve command palette focus handling
```

Do not mix unrelated refactors into feature commits.

------------------------------------------------------------------------

# 21. Review Checklist {#21-review-checklist}

Before finalizing a feature:

### Product

-   Does it match the PRD?
-   Does it preserve the story?
-   Does it preserve the intended tone?

### Truth

-   Are all claims supported?
-   Did any accidental fictional content enter the UI?

### Design

-   Does it match `design.md`?
-   Is the hierarchy correct?
-   Is it restrained?

### Accessibility

-   Keyboard?
-   Screen reader?
-   Focus?
-   Reduced motion?
-   Mobile?

### Performance

-   Client JS?
-   Images?
-   Animation?
-   Third-party scripts?

### Code

-   Typed?
-   Modular?
-   Tested?
-   No unnecessary dependency?

------------------------------------------------------------------------

# 22. Stop Conditions {#22-stop-conditions}

Stop and ask for clarification when:

-   a personal fact is missing;
-   project ownership is ambiguous;
-   an outcome is unknown;
-   Pradrix status is unclear;
-   a visual decision contradicts locked design;
-   an architectural change would materially alter the product;
-   an external URL is unknown;
-   a requested behavior requires unsafe execution.

Do not guess.

------------------------------------------------------------------------

# 23. Final Rule {#23-final-rule}

When forced to choose between:

``` text
more impressive
```

and:

``` text
more truthful, useful, accessible, and maintainable
```

choose the second.

The website should feel **built**, not manufactured.
