import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { shorts, getShortBySlug } from "@/data/shorts";
import { buildBreadcrumbList, buildMetadata } from "@/lib/metadata";
import { formatDate, formatViews } from "@/lib/utils";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { YouTubeLiteEmbed } from "@/components/media/YouTubeLiteEmbed";
import { YouTubeSubscribeButton } from "@/components/ui/YouTubeSubscribeButton";
import { ShortCard } from "@/components/cards/ShortCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";

interface ShortPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return shorts.map((short) => ({ slug: short.slug }));
}

export async function generateMetadata({ params }: ShortPageProps): Promise<Metadata> {
  const { slug } = await params;
  const short = getShortBySlug(slug);
  if (!short) return {};

  return buildMetadata({
    title: short.headline,
    description: `${short.headline} — a ${short.category.toLowerCase()} news short from The Lost Art of Storytelling.`,
    path: `/news-and-shorts/${short.slug}`,
    image: short.thumbnail,
    type: "article",
    keywords: [short.category, "news shorts", "trending news"],
  });
}

export default async function ShortPage({ params }: ShortPageProps) {
  const { slug } = await params;
  const short = getShortBySlug(slug);
  if (!short) notFound();

  const views = short.views ? formatViews(short.views) : undefined;

  const related = shorts
    .filter((s) => s.slug !== short.slug && s.category === short.category)
    .slice(0, 4);

  const fallbackRelated =
    related.length > 0
      ? related
      : shorts.filter((s) => s.slug !== short.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: short.headline,
    description: short.headline,
    uploadDate: short.publishedAt,
    thumbnailUrl: short.thumbnail,
    contentUrl: `https://www.youtube.com/watch?v=${short.youtubeId}`,
    url: `${siteConfig.url}/news-and-shorts/${short.slug}`,
  };

  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "News & Shorts", path: "/news-and-shorts" },
    { name: short.headline, path: `/news-and-shorts/${short.slug}` },
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="py-10 sm:py-14">
        <div className="container-edit">
          <Link
            href="/news-and-shorts"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-paper"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Shorts
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[340px_1fr] lg:items-start">
            <div className="mx-auto w-full max-w-[340px]">
              <YouTubeLiteEmbed
                youtubeId={short.youtubeId}
                thumbnail={short.thumbnail}
                title={short.headline}
                aspect="vertical"
                priority
                className="ring-1 ring-line-strong"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <CategoryPill label={short.category} tone="trending" />
                <span className="text-sm text-faint">{formatDate(short.publishedAt)}</span>
                {views ? (
                  <>
                    <span className="text-sm text-faint">·</span>
                    <span className="text-sm text-faint">{views} views</span>
                  </>
                ) : null}
              </div>

              <h1 className="mt-4 text-balance text-3xl font-bold leading-tight text-paper sm:text-4xl">
                {short.headline}
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Part of The Lost Art of Storytelling&apos;s News &amp; Shorts —
                fast-moving, vertical-format stories on the topics everyone&apos;s
                talking about.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <YouTubeSubscribeButton />
                <a
                  href={`https://www.youtube.com/watch?v=${short.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-paper underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-edit">
          <h2 className="text-2xl font-bold text-paper sm:text-3xl">
            More Stories
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {fallbackRelated.map((s) => (
              <ShortCard key={s.slug} short={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
