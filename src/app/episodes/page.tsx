import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { episodes } from "@/data/episodes";
import { guests } from "@/data/guests";
import { siteConfig, slugToCategory } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { EpisodeExplorer } from "@/components/explorers/EpisodeExplorer";

interface EpisodesPageProps {
  searchParams: Promise<{ topic?: string }>;
}

export async function generateMetadata({
  searchParams,
}: EpisodesPageProps): Promise<Metadata> {
  const { topic: topicSlug } = await searchParams;
  const topic = topicSlug ? slugToCategory(topicSlug) : undefined;

  if (!topic) {
    return buildMetadata({
      title: "Episodes",
      description:
        "Browse every episode of The Lost Art of Storytelling with Nathan Salins. Search and filter by category or guest to find the conversation you're looking for.",
      path: "/episodes",
      keywords: ["podcast episodes", "episode archive"],
    });
  }

  return buildMetadata({
    title: `${topic} Episodes`,
    description: `Browse ${topic.toLowerCase()} episodes of The Lost Art of Storytelling with Nathan Salins.`,
    path: `/episodes?topic=${topicSlug}`,
    keywords: ["podcast episodes", `${topic.toLowerCase()} interviews`],
  });
}

export default async function EpisodesPage({ searchParams }: EpisodesPageProps) {
  const { topic: topicSlug } = await searchParams;
  const activeTopic = topicSlug ? slugToCategory(topicSlug) : undefined;

  const filteredEpisodes = activeTopic
    ? episodes.filter((episode) => episode.category === activeTopic)
    : episodes;

  return (
    <>
      <PageHeader
        eyebrow="Full Archive"
        title={activeTopic ? `${activeTopic} Episodes` : "All Episodes"}
        description={`Every conversation, searchable and filterable. New episodes drop ${siteConfig.publishCadence}.`}
      />
      <section className="py-16 sm:py-20">
        <div className="container-edit">
          <EpisodeExplorer
            episodes={filteredEpisodes}
            guests={guests}
            pageSize={9}
            activeTopic={activeTopic}
          />
        </div>
      </section>
    </>
  );
}
