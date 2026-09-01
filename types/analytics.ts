export type AnalyticsEvent =
  | "page_view"
  | "hero_cta_clicked"
  | "pradrix_opened"
  | "project_opened"
  | "project_external_link_clicked"
  | "kavach_interaction_started"
  | "kavach_interaction_completed"
  | "developer_mode_opened"
  | "developer_command_executed"
  | "command_palette_opened"
  | "proof_opened"
  | "resume_opened"
  | "contact_clicked"
  | "external_link_clicked";

export interface Analytics {
  track: (event: AnalyticsEvent, properties?: Record<string, unknown>) => void;
}
