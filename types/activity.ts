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
