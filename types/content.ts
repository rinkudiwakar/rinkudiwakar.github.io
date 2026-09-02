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
  teamSize?: number;
  outcome?: string;
  lessons: string[];

  technologies: string[];
  architecture?: string;

  repositoryUrl?: string;
  demoUrl?: string;
  externalLinks?: { label: string; url: string }[];

  proofIds?: string[];
}

export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  coreIdentity: string;
  philosophy: string;
  loop: string;
  currentFocus: {
    name: string;
    description: string;
    href: string;
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    period?: string;
    cgpa?: string;
    focus: string[];
  };
  interests: {
    early: string[];
    technical: string[];
    personal: string[];
  };
  socialLinks: {
    platform: string;
    label: string;
    url: string;
    handle?: string;
  }[];
}

export interface StoryChapter {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  content: string[];
  keyInsight?: string;
}

export type JourneyStage =
  | "curious"
  | "exploring"
  | "engineering"
  | "building"
  | "pradrix";

export interface JourneyStageItem {
  id: JourneyStage;
  title: string;
  label: string;
  period?: string;
  summary: string;
  description: string;
  keyMoments: string[];
}

export type KavachState =
  | "idle"
  | "assembly"
  | "authentication"
  | "physical-flow"
  | "failure"
  | "debugging"
  | "recovery"
  | "working";

export interface KavachStep {
  id: KavachState;
  title: string;
  phase: string;
  description: string;
  technicalDetails: string[];
  lesson?: string;
}

export interface KavachStoryData {
  title: string;
  tagline: string;
  overview: string;
  teamContext: string;
  problem: string;
  concept: string;
  architecture: {
    hardware: string[];
    software: string[];
    flow: string[];
  };
  steps: KavachStep[];
  failures: string[];
  recoveries: string[];
  keyLesson: string;
}

export type PradrixStepId =
  | "understand"
  | "bottleneck"
  | "appropriateness"
  | "design"
  | "build"
  | "test"
  | "deploy"
  | "measure";

export interface PradrixStep {
  id: PradrixStepId;
  order: number;
  label: string;
  subtitle: string;
  description: string;
  whyItMatters: string;
  action: string;
}

export interface PradrixStatus {
  name: string;
  focus: string;
  stage: string;
  tagline: string;
  problemStatement: string;
  targetAudience: string[];
  corePhilosophy: string;
  statusList: {
    item: string;
    status: "completed" | "in-progress" | "planned";
  }[];
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

export interface Lesson {
  id: string;
  title: string;
  category: "failure" | "technical" | "personal" | "building";
  principle: string;
  context: string;
  learnings: string[];
}

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
  notes?: string;
  relatedContent?: string[];
}

export interface FutureGoal {
  headline: string;
  coreDirection: string;
  principles: string[];
  areasOfGrowth: string[];
  openTo: string[];
}

export interface SiteNavigationItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}
