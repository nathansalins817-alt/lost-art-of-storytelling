import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { shorts, getTrendingShorts } from "@/data/shorts";
import { PageHeader } from "@/components/ui/PageHeader";
import { ShortCard } from "@/components/cards/ShortCard";
import { ShortsExplorer } from "@/components/explorers/ShortsExplorer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "News & Shorts",
  description:
    "Fast-moving news shorts and trending stories from The Lost Art of Storytelling — big stories, explained quickly, in short-form vertical video.",
  path: "/news-and-shorts",
  keywords: ["news shorts", "trending news", "short-form video", "YouTube shorts"],
});

export default function NewsAndShortsPage() {
  const trending = getTrendingShorts();

  return (
    <>
      <PageHeader
        eyebrow="News & Shorts"
        title="The Stories Everyone Is Talking About"
        description="Big stories, explained quickly. Fast-moving news and trending stories in a format built for how you actually watch."
      />

      {trending.length > 0 ? (
        <section className="border-b border-line py-14 sm:py-16">
          <div className="container-edit">
            <RevealOnScroll className="mb-8 flex items-center gap-2">
              <TrendingUp className="size-5 text-accent-bright" aria-hidden="true" />
              <h2 className="text-xl font-bold text-paper sm:text-2xl">
                Trending Now
              </h2>
            </RevealOnScroll>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {trending.map((short) => (
                <ShortCard key={short.slug} short={short} priority />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16 sm:py-20">
        <div className="container-edit">
          <h2 className="mb-6 text-xl font-bold text-paper sm:text-2xl">
            Browse by Category
          </h2>
          <ShortsExplorer shorts={shorts} pageSize={12} />
        </div>
      </section>
    </>
  );
}
