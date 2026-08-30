import { getLatestEpisodes } from "@/data/episodes";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EpisodeCard } from "@/components/cards/EpisodeCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function LatestInterviews() {
  const episodes = getLatestEpisodes(6);

  return (
    <section className="border-b border-line py-16 sm:py-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="On the Show"
          title="Latest Interviews"
          description={`Fresh conversations with founders, athletes, community leaders and creators — new episodes ${siteConfig.publishCadence}.`}
          viewAllHref="/episodes"
          viewAllLabel="View All Episodes"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode, index) => (
            <RevealOnScroll key={episode.slug} delay={index * 60}>
              <EpisodeCard episode={episode} priority={index < 3} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
