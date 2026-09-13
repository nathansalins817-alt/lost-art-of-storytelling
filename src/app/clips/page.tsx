import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { clips } from "@/data/clips";
import { PageHeader } from "@/components/ui/PageHeader";
import { ClipCard } from "@/components/cards/ClipCard";

export const metadata: Metadata = buildMetadata({
  title: "Clips",
  description:
    "Highlight cuts and bonus videos from The Lost Art of Storytelling — longer than a Short, shorter than a full episode.",
  path: "/clips",
  keywords: ["podcast clips", "highlight clips", "YouTube clips"],
});

export default function ClipsPage() {
  const sorted = [...clips].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <PageHeader
        eyebrow="Clips"
        title="The Stories in Between"
        description="Standalone highlight cuts and bonus videos from the channel — longer than a Short, shorter than a full episode."
      />
      <section className="py-16 sm:py-20">
        <div className="container-edit">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((clip, index) => (
              <ClipCard key={clip.slug} clip={clip} priority={index < 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
