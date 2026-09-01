import { z } from "zod";

export const ProjectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  tagline: z.string().min(1),
  status: z.enum(["active", "completed", "archived", "experimental"]),
  categories: z.array(z.string().min(1)).min(1),
  featured: z.boolean(),
  problem: z.string().min(1),
  idea: z.string().min(1),
  story: z.string().min(1),
  role: z.string().optional(),
  teamSize: z.number().int().positive().optional(),
  outcome: z.string().optional(),
  lessons: z.array(z.string().min(1)).min(1),
  technologies: z.array(z.string().min(1)).min(1),
  architecture: z.string().optional(),
  repositoryUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  externalLinks: z
    .array(
      z.object({
        label: z.string().min(1),
        url: z.string().url(),
      })
    )
    .optional(),
  proofIds: z.array(z.string().min(1)).optional(),
});

export const ProfileSchema = z.object({
  name: z.string().min(1),
  headline: z.string().min(1),
  tagline: z.string().min(1),
  coreIdentity: z.string().min(1),
  philosophy: z.string().min(1),
  loop: z.string().min(1),
  currentFocus: z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    href: z.string().min(1),
  }),
  education: z.object({
    degree: z.string().min(1),
    field: z.string().min(1),
    institution: z.string().min(1),
    focus: z.array(z.string().min(1)),
  }),
  interests: z.object({
    early: z.array(z.string().min(1)),
    technical: z.array(z.string().min(1)),
    personal: z.array(z.string().min(1)),
  }),
  socialLinks: z.array(
    z.object({
      platform: z.string().min(1),
      label: z.string().min(1),
      url: z.string().url(),
      handle: z.string().optional(),
    })
  ),
});

export const StoryChapterSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  period: z.string().optional(),
  content: z.array(z.string().min(1)).min(1),
  keyInsight: z.string().optional(),
});

export const JourneyStageItemSchema = z.object({
  id: z.enum(["curious", "exploring", "engineering", "building", "pradrix"]),
  title: z.string().min(1),
  label: z.string().min(1),
  period: z.string().optional(),
  summary: z.string().min(1),
  description: z.string().min(1),
  keyMoments: z.array(z.string().min(1)).min(1),
});

export const KavachStepSchema = z.object({
  id: z.enum([
    "idle",
    "assembly",
    "authentication",
    "physical-flow",
    "failure",
    "debugging",
    "recovery",
    "working",
  ]),
  title: z.string().min(1),
  phase: z.string().min(1),
  description: z.string().min(1),
  technicalDetails: z.array(z.string().min(1)),
  lesson: z.string().optional(),
});

export const KavachStorySchema = z.object({
  title: z.string().min(1),
  tagline: z.string().min(1),
  overview: z.string().min(1),
  teamContext: z.string().min(1),
  problem: z.string().min(1),
  concept: z.string().min(1),
  architecture: z.object({
    hardware: z.array(z.string().min(1)),
    software: z.array(z.string().min(1)),
    flow: z.array(z.string().min(1)),
  }),
  steps: z.array(KavachStepSchema).min(1),
  failures: z.array(z.string().min(1)),
  recoveries: z.array(z.string().min(1)),
  keyLesson: z.string().min(1),
});

export const PradrixStepSchema = z.object({
  id: z.enum([
    "understand",
    "bottleneck",
    "appropriateness",
    "design",
    "build",
    "test",
    "deploy",
    "measure",
  ]),
  order: z.number().int().positive(),
  label: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  whyItMatters: z.string().min(1),
  action: z.string().min(1),
});

export const PradrixStatusSchema = z.object({
  name: z.string().min(1),
  focus: z.string().min(1),
  stage: z.string().min(1),
  tagline: z.string().min(1),
  problemStatement: z.string().min(1),
  targetAudience: z.array(z.string().min(1)),
  corePhilosophy: z.string().min(1),
  statusList: z.array(
    z.object({
      item: z.string().min(1),
      status: z.enum(["completed", "in-progress", "planned"]),
    })
  ),
  currentWork: z.array(z.string().min(1)),
  completed: z.array(z.string().min(1)),
  inProgress: z.array(z.string().min(1)),
  nextSteps: z.array(z.string().min(1)),
  lastUpdated: z.string().min(1),
  updates: z.array(
    z.object({
      id: z.string().min(1),
      date: z.string().min(1),
      title: z.string().min(1),
      summary: z.string().min(1),
      category: z.string().min(1),
      published: z.boolean(),
    })
  ),
});

export const LessonSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  category: z.enum(["failure", "technical", "personal", "building"]),
  principle: z.string().min(1),
  context: z.string().min(1),
  learnings: z.array(z.string().min(1)),
});

export const BuildLogEntrySchema = z.object({
  id: z.string().min(1),
  date: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  category: z.string().min(1),
  relatedContent: z.array(z.string().min(1)).optional(),
  sourceUrl: z.string().url().optional(),
  published: z.boolean(),
});

export const ProofClaimSchema = z.object({
  id: z.string().min(1),
  claim: z.string().min(1),
  sourceType: z.enum([
    "official",
    "github",
    "linkedin",
    "social",
    "article",
    "demo",
    "certificate",
  ]),
  sourceUrl: z.string().min(1),
  date: z.string().optional(),
  verificationStatus: z.enum(["verified", "unverified", "pending"]),
  notes: z.string().optional(),
  relatedContent: z.array(z.string().min(1)).optional(),
});

export const FutureGoalSchema = z.object({
  headline: z.string().min(1),
  coreDirection: z.string().min(1),
  principles: z.array(z.string().min(1)),
  areasOfGrowth: z.array(z.string().min(1)),
  openTo: z.array(z.string().min(1)),
});
