import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { episodes } from "@/data/episodes";
import { guests } from "@/data/guests";
import { PageHeader } from "@/components/ui/PageHeader";
import { EpisodeExplorer } from "@/components/explorers/EpisodeExplorer";

export const metadata: Metadata = buildMetadata({
  title: "Episodes",
  description:
    "Browse every episode of The Lost Art of Storytelling with Nathan Salins. Search and filter by category or guest to find the conversation you're looking for.",
  path: "/episodes",
  keywords: ["podcast episodes", "episode archive"],
});

export default function EpisodesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Full Archive"
        title="All Episodes"
        description="Every conversation, searchable and filterable. New episodes drop monthly."
      />
      <section className="py-16 sm:py-20">
        <div className="container-edit">
          <EpisodeExplorer episodes={episodes} guests={guests} pageSize={9} />
        </div>
      </section>
    </>
  );
}
