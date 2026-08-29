import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { episodes } from "@/data/episodes";
import { guests } from "@/data/guests";
import { PageHeader } from "@/components/ui/PageHeader";
import { EpisodeExplorer } from "@/components/explorers/EpisodeExplorer";

export const metadata: Metadata = buildMetadata({
  title: "Interviews",
  description:
    "Conversations worth having — Nathan Salins talks with entrepreneurs, business leaders, athletes, community leaders and creators with remarkable stories.",
  path: "/interviews",
  keywords: ["interview podcast episodes", "entrepreneur interviews", "athlete interviews"],
});

export default function InterviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Interviews"
        title="Conversations Worth Having"
        description="Nathan Salins sits down with entrepreneurs, business leaders, athletes, community leaders, creators and people with remarkable stories — real conversations, not soundbites."
      />
      <section className="py-16 sm:py-20">
        <div className="container-edit">
          <EpisodeExplorer episodes={episodes} guests={guests} pageSize={9} />
        </div>
      </section>
    </>
  );
}
