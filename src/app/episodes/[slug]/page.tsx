import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { episodes, getEpisodeBySlug, getRelatedEpisodes } from "@/data/episodes";
import { getGuestBySlug } from "@/data/guests";
import { buildMetadata } from "@/lib/metadata";
import { formatDate, guestRole } from "@/lib/utils";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { YouTubeLiteEmbed } from "@/components/media/YouTubeLiteEmbed";
import { YouTubeSubscribeButton } from "@/components/ui/YouTubeSubscribeButton";
import { EpisodeCard } from "@/components/cards/EpisodeCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";

interface EpisodePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return episodes.map((episode) => ({ slug: episode.slug }));
}

export async function generateMetadata({
  params,
}: EpisodePageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) return {};

  return buildMetadata({
    title: episode.title,
    description: episode.description,
    path: `/episodes/${episode.slug}`,
    image: episode.thumbnail,
    type: "article",
    keywords: [episode.guestName, episode.category, "podcast episode"],
  });
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) notFound();

  const guest = getGuestBySlug(episode.guestSlug);
  const related = getRelatedEpisodes(episode);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    datePublished: episode.publishedAt,
    url: `${siteConfig.url}/episodes/${episode.slug}`,
    image: episode.thumbnail,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(guest
      ? {
          associatedMedia: {
            "@type": "MediaObject",
            contentUrl: `https://www.youtube.com/watch?v=${episode.youtubeId}`,
          },
        }
      : {}),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="py-10 sm:py-14">
        <div className="container-edit">
          <Link
            href="/episodes"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-paper"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Episodes
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <YouTubeLiteEmbed
                youtubeId={episode.youtubeId}
                thumbnail={episode.thumbnail}
                title={episode.title}
                priority
                className="ring-1 ring-line-strong"
              />

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CategoryPill label={episode.category} tone="trending" />
                <span className="text-sm text-faint">
                  {formatDate(episode.publishedAt)}
                </span>
                <span className="text-sm text-faint">·</span>
                <span className="text-sm text-faint">{episode.runtime}</span>
                <span className="text-sm text-faint">·</span>
                <span className="text-sm text-faint">
                  Episode {episode.episodeNumber}
                </span>
              </div>

              <h1 className="mt-4 text-balance text-3xl font-bold leading-tight text-paper sm:text-4xl">
                {episode.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                {episode.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <YouTubeSubscribeButton />
                <a
                  href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-paper underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>

            {guest ? (
              <aside className="h-fit rounded-2xl border border-line bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">
                  Featuring
                </p>
                <Link
                  href={`/guests/${guest.slug}`}
                  className="mt-4 flex items-center gap-4"
                >
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-full ring-1 ring-line-strong">
                    <Image src={guest.image} alt="" fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-paper transition-colors hover:text-accent-bright">
                      {guest.name}
                    </p>
                    <p className="text-sm text-faint">{guestRole(guest)}</p>
                  </div>
                </Link>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {guest.shortBio}
                </p>
                <Link
                  href={`/guests/${guest.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-accent-bright hover:text-paper"
                >
                  View full profile →
                </Link>
              </aside>
            ) : null}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="container-edit">
            <h2 className="text-2xl font-bold text-paper sm:text-3xl">
              Related Episodes
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedEpisode) => (
                <EpisodeCard key={relatedEpisode.slug} episode={relatedEpisode} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
