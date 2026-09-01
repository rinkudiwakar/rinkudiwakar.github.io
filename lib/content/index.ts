import {
  ProjectSchema,
  ProfileSchema,
  StoryChapterSchema,
  JourneyStageItemSchema,
  KavachStorySchema,
  PradrixStatusSchema,
  PradrixStepSchema,
  LessonSchema,
  BuildLogEntrySchema,
  ProofClaimSchema,
  FutureGoalSchema,
} from "@/lib/validation/schemas";

import { profileData } from "@/data/profile";
import { storyChapters } from "@/data/story";
import { journeyStages } from "@/data/journey";
import { projectsData } from "@/data/projects";
import { kavachStoryData } from "@/data/kavach";
import { pradrixStatusData, pradrixSteps } from "@/data/pradrix";
import { lessonsData } from "@/data/lessons";
import { buildLogData } from "@/data/build-log";
import { signalsData } from "@/data/signals";
import { proofClaimsData } from "@/data/proof";
import { futureData } from "@/data/future";
import { nowData } from "@/data/now";
import { navigation } from "@/data/navigation";

import type {
  Profile,
  StoryChapter,
  JourneyStageItem,
  Project,
  KavachStoryData,
  PradrixStatus,
  PradrixStep,
  Lesson,
  BuildLogEntry,
  ProofClaim,
  FutureGoal,
} from "@/types/content";
import type { ActivityItem } from "@/types/activity";

/**
 * Get verified personal profile data.
 */
export function getProfile(): Profile {
  return ProfileSchema.parse(profileData);
}

/**
 * Get all story narrative chapters.
 */
export function getStoryChapters(): StoryChapter[] {
  return storyChapters.map((chapter) => StoryChapterSchema.parse(chapter));
}

/**
 * Get the 5-stage journey progression.
 */
export function getJourneyStages(): JourneyStageItem[] {
  return journeyStages.map((stage) => JourneyStageItemSchema.parse(stage));
}

/**
 * Get all verified projects.
 */
export function getProjects(): Project[] {
  return projectsData.map((project) => ProjectSchema.parse(project));
}

/**
 * Get a single project by slug.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return undefined;
  return ProjectSchema.parse(project);
}

/**
 * Get featured projects for the homepage.
 */
export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

/**
 * Get the Kavach signature build story.
 */
export function getKavachStory(): KavachStoryData {
  return KavachStorySchema.parse(kavachStoryData);
}

/**
 * Get Pradrix company status and workflow steps.
 */
export function getPradrixData(): {
  status: PradrixStatus;
  steps: PradrixStep[];
} {
  return {
    status: PradrixStatusSchema.parse(pradrixStatusData),
    steps: pradrixSteps.map((step) => PradrixStepSchema.parse(step)),
  };
}

/**
 * Get core engineering and personal lessons.
 */
export function getLessons(): Lesson[] {
  return lessonsData.map((lesson) => LessonSchema.parse(lesson));
}

/**
 * Get published build log entries.
 */
export function getBuildLog(): BuildLogEntry[] {
  return buildLogData
    .filter((entry) => entry.published)
    .map((entry) => BuildLogEntrySchema.parse(entry));
}

/**
 * Get signals and recent activity.
 */
export function getSignals(): ActivityItem[] {
  return signalsData;
}

/**
 * Get all verified proof claims.
 */
export function getProofClaims(): ProofClaim[] {
  return proofClaimsData.map((claim) => ProofClaimSchema.parse(claim));
}

/**
 * Get proof claims associated with a specific route or slug.
 */
export function getProofForContent(contentRoute: string): ProofClaim[] {
  return getProofClaims().filter(
    (claim) => claim.relatedContent && claim.relatedContent.includes(contentRoute)
  );
}

/**
 * Get future goals and direction.
 */
export function getFutureGoals(): FutureGoal {
  return FutureGoalSchema.parse(futureData);
}

/**
 * Get living Now status data.
 */
export function getNowData() {
  return nowData;
}

/**
 * Get canonical site navigation.
 */
export function getNavigation() {
  return navigation;
}
