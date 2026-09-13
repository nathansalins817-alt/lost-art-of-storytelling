import { getLatestClips } from "@/data/clips";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClipCard } from "@/components/cards/ClipCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function LongClips() {
  const clips = getLatestClips(3);

  return (
    <section className="border-b border-line py-16 sm:py-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Highlight Clips"
          title="Longer than a Short. Shorter than an episode."
          description="Standalone highlight cuts and bonus videos from the channel — the moments too good to leave in the full episode."
          viewAllHref="/clips"
          viewAllLabel="See All Clips"
        />

        <RevealOnScroll delay={100}>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {clips.map((clip, index) => (
              <ClipCard key={clip.slug} clip={clip} priority={index === 0} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
