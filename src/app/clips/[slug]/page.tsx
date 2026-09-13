import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { clips, getClipBySlug } from "@/data/clips";
import { getEpisodeBySlug } from "@/data/episodes";
import { buildBreadcrumbList, buildMetadata } from "@/lib/metadata";
import { formatDate, formatViews, runtimeToIso8601, youtubeWatchUrl } from "@/lib/utils";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { YouTubeLiteEmbed } from "@/components/media/YouTubeLiteEmbed";
import { YouTubeSubscribeButton } from "@/components/ui/YouTubeSubscribeButton";
import { ClipCard } from "@/components/cards/ClipCard";
import { JsonLd } from "@/components/seo/JsonLd";

interface ClipPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return clips.map((clip) => ({ slug: clip.slug }));
}

export async function generateMetadata({ params }: ClipPageProps): Promise<Metadata> {
  const { slug } = await params;
  const clip = getClipBySlug(slug);
  if (!clip) return {};

  return buildMetadata({
    title: clip.title,
    description: clip.description,
    path: `/clips/${clip.slug}`,
    image: clip.thumbnail,
    type: "article",
    keywords: [clip.category ?? "", "podcast clips", "highlight clips"].filter(Boolean),
  });
}

export default async function ClipPage({ params }: ClipPageProps) {
  const { slug } = await params;
  const clip = getClipBySlug(slug);
  if (!clip) notFound();

  const views = clip.views ? formatViews(clip.views) : undefined;
  const relatedEpisode = clip.relatedEpisodeSlug
    ? getEpisodeBySlug(clip.relatedEpisodeSlug)
    : undefined;

  const related = clips
    .filter(
      (c) =>
        c.slug !== clip.slug &&
        (c.guestSlug === clip.guestSlug || c.category === clip.category)
    )
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0 ? related : clips.filter((c) => c.slug !== clip.slug).slice(0, 3);

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: clip.title,
    description: clip.description,
    thumbnailUrl: clip.thumbnail,
    uploadDate: clip.publishedAt,
    ...(runtimeToIso8601(clip.runtime) ? { duration: runtimeToIso8601(clip.runtime) } : {}),
    contentUrl: youtubeWatchUrl(clip.youtubeId),
    embedUrl: `https://www.youtube.com/embed/${clip.youtubeId}`,
  };

  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "Clips", path: "/clips" },
    { name: clip.title, path: `/clips/${clip.slug}` },
  ]);

  return (
    <>
      <JsonLd data={videoJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="py-10 sm:py-14">
        <div className="container-edit">
          <Link
            href="/clips"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-paper"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Clips
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
            <YouTubeLiteEmbed
              youtubeId={clip.youtubeId}
              thumbnail={clip.thumbnail}
              title={clip.title}
              priority
              className="ring-1 ring-line-strong"
            />

            <div>
              <div className="flex flex-wrap items-center gap-3">
                {clip.category ? <CategoryPill label={clip.category} /> : null}
                <span className="text-sm text-faint">{formatDate(clip.publishedAt)}</span>
                {views ? (
                  <>
                    <span className="text-sm text-faint">·</span>
                    <span className="text-sm text-faint">{views} views</span>
                  </>
                ) : null}
              </div>

              <h1 className="mt-4 text-balance text-2xl font-bold leading-tight text-paper sm:text-3xl">
                {clip.title}
              </h1>

              {clip.guestName ? (
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent-bright">
                  {clip.guestName}
                </p>
              ) : null}

              <p className="mt-4 text-base leading-relaxed text-muted">
                {clip.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <YouTubeSubscribeButton />
                <a
                  href={youtubeWatchUrl(clip.youtubeId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-paper underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
                >
                  Watch on YouTube
                </a>
              </div>

              {relatedEpisode ? (
                <Link
                  href={`/episodes/${relatedEpisode.slug}`}
                  className="mt-6 block rounded-xl border border-line-strong bg-surface p-4 transition-colors hover:border-accent-bright"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-bright">
                    From the Full Episode
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-paper">
                    {relatedEpisode.title}
                  </p>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-edit">
          <h2 className="text-2xl font-bold text-paper sm:text-3xl">More Clips</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {fallbackRelated.map((c) => (
              <ClipCard key={c.slug} clip={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
