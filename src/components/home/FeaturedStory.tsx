import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { getFeaturedEpisode } from "@/data/episodes";
import { getGuestBySlug } from "@/data/guests";
import { formatDate, guestRole } from "@/lib/utils";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FeaturedStory() {
  const episode = getFeaturedEpisode();
  const guest = getGuestBySlug(episode.guestSlug);

  return (
    <section className="border-b border-line py-16 sm:py-24">
      <div className="container-edit">
        <RevealOnScroll>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
            Featured Story
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <Link
            href={`/episodes/${episode.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong lg:grid-cols-[1.15fr_1fr]"
          >
            <div className="relative aspect-video overflow-hidden lg:aspect-auto">
              <Image
                src={episode.thumbnail}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 lg:bg-gradient-to-r" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-ink shadow-xl">
                  <Play className="ml-1 size-6 fill-current" aria-hidden="true" />
                </span>
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <CategoryPill label={episode.category} tone="trending" />
                <span className="text-xs font-medium text-faint">
                  {formatDate(episode.publishedAt)}
                </span>
              </div>

              <h3 className="mt-5 text-balance text-2xl font-bold leading-tight text-paper transition-colors group-hover:text-accent-bright sm:text-3xl">
                {episode.title}
              </h3>

              <p className="mt-4 leading-relaxed text-muted">
                {episode.description}
              </p>

              {guest ? (
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-line-strong">
                    <Image src={guest.image} alt="" fill sizes="44px" className="object-cover" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-paper">{guest.name}</p>
                    <p className="text-xs text-faint">{guestRole(guest)}</p>
                  </div>
                </div>
              ) : null}

              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-accent-bright">
                Watch Episode
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
