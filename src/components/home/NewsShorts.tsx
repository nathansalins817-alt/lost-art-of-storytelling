import { getLatestShorts } from "@/data/shorts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShortCard } from "@/components/cards/ShortCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function NewsShorts() {
  const shorts = getLatestShorts(8);

  return (
    <section className="border-b border-line bg-ink-soft py-16 sm:py-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="News & Shorts"
          title="Big stories. Explained quickly."
          description="Fast-moving, vertical-format news and trending stories — built for how you actually watch."
          viewAllHref="/news-and-shorts"
          viewAllLabel="See All Shorts"
        />

        <RevealOnScroll delay={100}>
          <div className="mask-fade-x mt-10 -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {shorts.map((short, index) => (
              <ShortCard
                key={short.slug}
                short={short}
                priority={index < 4}
                className="w-[46vw] shrink-0 sm:w-auto"
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
