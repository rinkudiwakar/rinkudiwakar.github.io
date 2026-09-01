import { PradrixStatus, PradrixStep } from "@/types/content";

export const pradrixSteps: PradrixStep[] = [
  {
    id: "understand",
    order: 1,
    label: "Understand the Business",
    subtitle: "Map the real day-to-day operations.",
    description:
      "Deep dive into existing workflows, communication channels, human handoffs, and toolstacks before proposing any technology.",
    whyItMatters:
      "Automating a broken or misunderstood process only accelerates confusion.",
    action:
      "Conduct workflow discovery interviews and map operational dependencies.",
  },
  {
    id: "bottleneck",
    order: 2,
    label: "Identify the Bottleneck",
    subtitle: "Find where time, accuracy, or money leaks.",
    description:
      "Pinpoint repetitive manual tasks, high-friction data entry, delay-inducing handoffs, and customer response latency.",
    whyItMatters:
      "Targeting high-friction friction points produces immediate, noticeable leverage.",
    action:
      "Quantify hours spent on routine tasks and highlight operational choke points.",
  },
  {
    id: "appropriateness",
    order: 3,
    label: "Is AI Appropriate?",
    subtitle: "The most important filter in modern tech.",
    description:
      "Evaluate whether the solution genuinely requires machine intelligence, or if deterministic code, standard APIs, or simple form restructuring is better.",
    whyItMatters:
      "Not everything needs an LLM. Simple, deterministic automation is faster, cheaper, and more reliable when AI is not required.",
    action:
      "Apply the AI viability rubric: rule-based automation vs intelligent extraction vs human judgement.",
  },
  {
    id: "design",
    order: 4,
    label: "Design the Workflow",
    subtitle: "Architect the human-in-the-loop system.",
    description:
      "Draft system architecture, data schemas, API connections, fallback triggers, and human oversight touchpoints.",
    whyItMatters:
      "Clear system architecture ensures maintainability and predictable behavior under operational stress.",
    action:
      "Create modular workflow diagrams, data contracts, and exception-handling paths.",
  },
  {
    id: "build",
    order: 5,
    label: "Build the Integration",
    subtitle: "Develop resilient, modular automations.",
    description:
      "Engineer the software bridges, agent pipelines, API webhooks, and database connectors connecting business tools.",
    whyItMatters:
      "Resilience and error handling prevent silent data corruption in production.",
    action:
      "Implement typed server connectors, rate-limited pipelines, and secure secret handling.",
  },
  {
    id: "test",
    order: 6,
    label: "Test with Edge Cases",
    subtitle: "Stress test before real customer exposure.",
    description:
      "Run synthetic data, edge case queries, failure states, and human review overrides to ensure system reliability.",
    whyItMatters:
      "Automations must fail gracefully without exposing unfinished outputs to end clients.",
    action:
      "Execute automated unit tests, latency benchmarks, and manual smoke verifications.",
  },
  {
    id: "deploy",
    order: 7,
    label: "Deploy Seamlessly",
    subtitle: "Integrate into active business environments.",
    description:
      "Roll out the automation gradually alongside existing workflows, ensuring staff onboarding and frictionless adoption.",
    whyItMatters:
      "Tools that employees find intimidating or confusing are abandoned regardless of technical merit.",
    action:
      "Staged deployment with real-time operational monitoring and team walkthroughs.",
  },
  {
    id: "measure",
    order: 8,
    label: "Measure Real Impact",
    subtitle: "Validate time saved and error reduction.",
    description:
      "Track turnaround times, manual hours eliminated, operational accuracy, and tangible business ROI over time.",
    whyItMatters:
      "Technology is only valuable if it visibly improves operational health and business capacity.",
    action:
      "Review telemetry dashboards, benchmark time savings, and optimize workflow parameters.",
  },
];

export const pradrixStatusData: PradrixStatus = {
  name: "Pradrix",
  focus: "AI Consulting & Operational Automation",
  stage: "Early Stage / Foundation Phase",
  tagline: "Understand the business before building the technology.",
  problemStatement:
    "Businesses are eager to leverage AI and automation, but often don't know where AI actually makes operational and economic sense inside their daily workflows.",
  targetAudience: [
    "Small and medium-sized businesses with manual workflows",
    "Growing service businesses handling high-volume repetitive requests",
    "Startups seeking efficient, automated operational scaffolding",
    "Teams experiencing friction in data handoffs, triage, or documentation",
  ],
  corePhilosophy: "Not AI everywhere. AI where it actually matters.",
  statusList: [
    { item: "Brand Positioning & Philosophy", status: "completed" },
    { item: "Foundational Web Architecture", status: "completed" },
    { item: "Service Model & Workflow Rubric", status: "completed" },
    { item: "Client Onboarding & Audit Frameworks", status: "in-progress" },
    { item: "Internal Automation Scaffolding & Tooling", status: "in-progress" },
    { item: "First Pilot Engagements & Proof Studies", status: "planned" },
  ],
  currentWork: [
    "Developing structured operational diagnostic audit templates",
    "Building reusable workflow automation pipelines for CRM and data extraction",
    "Engaging with prospective business owners to analyze real operational choke points",
  ],
  completed: [
    "Established core positioning and brand identity",
    "Designed 8-stage operational evaluation workflow",
    "Built initial technology evaluation framework",
  ],
  inProgress: [
    "Refining client engagement contracts and scope definitions",
    "Developing internal evaluation sandboxes for business automation tools",
  ],
  nextSteps: [
    "Execute first pilot consulting audits",
    "Document and publish truthful, measurable operational case studies",
  ],
  lastUpdated: "2026-09-01",
  updates: [
    {
      id: "update-01",
      date: "2026-08-28",
      title: "Pradrix Positioning & Architectural Blueprint Established",
      summary:
        "Codified the core 8-stage methodology: Understand → Bottleneck → Appropriateness → Design → Build → Test → Deploy → Measure.",
      category: "Positioning",
      published: true,
    },
    {
      id: "update-02",
      date: "2026-09-01",
      title: "Diagnostic Framework & Tooling Structure in Development",
      summary:
        "Building standardized audit rubrics to objectively evaluate when deterministic scripting outperforms AI models.",
      category: "Systems",
      published: true,
    },
  ],
};
