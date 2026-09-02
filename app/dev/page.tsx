import type { Metadata } from "next";
import { DeveloperMode } from "@/components/developer-mode/DeveloperMode";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Developer Mode — Rinku Diwakar",
  description:
    "Interactive virtual filesystem and CLI environment explaining Rinku Diwakar through developer tooling and code schemas.",
  canonicalUrl: "/dev",
});

export default function DevPage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <DeveloperMode />
    </main>
  );
}
