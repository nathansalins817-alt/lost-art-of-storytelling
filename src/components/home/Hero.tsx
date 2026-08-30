import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { YouTubeSubscribeButton } from "@/components/ui/YouTubeSubscribeButton";
import { YouTubeLiteEmbed } from "@/components/media/YouTubeLiteEmbed";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { episodes, getEpisodeBySlug, getFeaturedEpisode } from "@/data/episodes";
import { siteConfig } from "@/data/site";

// Flagship episode shown in the hero embed — swap for a real channel
// trailer once one exists.
const heroVideo = getEpisodeBySlug("andrew-ly-sugar-bowl-bakery")!;

export function Hero() {
  const featured = getFeaturedEpisode();

  return (
    <section className="relative overflow-hidden border-b border-line pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 right-[-10%] size-[38rem] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute -bottom-32 left-[-10%] size-[30rem] rounded-full bg-deep-blue-soft/40 blur-[130px]" />
        <div className="grain-overlay absolute inset-0" />
      </div>

      <div className="container-edit grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <RevealOnScroll>
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
            The Interview &amp; News Media Brand
          </p>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] text-paper sm:text-5xl lg:text-[3.4rem]">
            Stories Worth Hearing.
            <br />
            People Worth Knowing.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            A refugee who escaped Vietnam by boat. A grandmother who calls
            her first Montreal winter a &ldquo;nightmare.&rdquo; Nathan
            Salins sits down with the people carrying stories like these —
            and lets them tell it in full.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href={`/episodes/${featured.slug}`}
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="size-4" />}
            >
              Watch Latest Episode
            </Button>
            <YouTubeSubscribeButton size="lg" />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8 text-sm text-faint">
            <span>
              <span className="font-bold text-paper">{episodes.length}</span>{" "}
              conversations recorded
            </span>
            <span>
              <span className="font-bold text-paper">New</span> episodes{" "}
              {siteConfig.publishCadence}
            </span>
            <span>
              <span className="font-bold text-paper">Bay Area</span> &amp;
              beyond
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-2xl"
            />
            <YouTubeLiteEmbed
              youtubeId={heroVideo.youtubeId}
              thumbnail={heroVideo.thumbnail}
              title={heroVideo.title}
              priority
              className="shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] ring-1 ring-line-strong"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
