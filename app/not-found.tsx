import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <main id="main-content" className="flex-1 flex flex-col justify-center">
      <Section className="py-24 md:py-32 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[var(--background-subtle)] text-[var(--accent)] border border-[var(--border)]">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <Badge variant="mono">404 · EXPLORING UNCHARTED TERRITORY</Badge>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[var(--foreground)]">
              Page Not Found
            </h1>
            <p className="text-base text-[var(--foreground-muted)] font-body leading-relaxed">
              The page or chapter you are looking for does not exist or has moved.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-medium text-sm transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Journal Home</span>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
