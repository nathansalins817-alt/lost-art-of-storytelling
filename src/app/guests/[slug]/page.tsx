import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe, MapPin } from "lucide-react";
import { guests, getGuestBySlug } from "@/data/guests";
import { getEpisodesByGuest, episodes } from "@/data/episodes";
import { buildBreadcrumbList, buildMetadata } from "@/lib/metadata";
import { guestRole } from "@/lib/utils";
import { YouTubeLiteEmbed } from "@/components/media/YouTubeLiteEmbed";
import { EpisodeCard } from "@/components/cards/EpisodeCard";
import { Button } from "@/components/ui/Button";
import { InstagramIcon, LinkedinIcon, TiktokIcon } from "@/components/icons/SocialIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";

interface GuestPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guests.map((guest) => ({ slug: guest.slug }));
}

export async function generateMetadata({ params }: GuestPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guest = getGuestBySlug(slug);
  if (!guest) return {};

  return buildMetadata({
    title: guest.name,
    description: `${guest.name}, ${guestRole(guest)}, on The Lost Art of Storytelling with Nathan Salins. ${guest.shortBio}`,
    path: `/guests/${guest.slug}`,
    image: guest.image,
    type: "profile",
    keywords: [guest.name, ...(guest.organization ? [guest.organization] : []), ...guest.topics],
  });
}

export default async function GuestPage({ params }: GuestPageProps) {
  const { slug } = await params;
  const guest = getGuestBySlug(slug);
  if (!guest) notFound();

  const guestEpisodes = getEpisodesByGuest(guest.slug);
  const primaryEpisode = guestEpisodes[0];
  const moreFromGuest = guestEpisodes.slice(1);

  const relatedStories = episodes
    .filter(
      (episode) =>
        episode.guestSlug !== guest.slug &&
        (primaryEpisode ? episode.category === primaryEpisode.category : false)
    )
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: guest.name,
    jobTitle: guest.title,
    ...(guest.organization
      ? { worksFor: { "@type": "Organization", name: guest.organization } }
      : {}),
    description: guest.shortBio,
    image: guest.image,
    url: `${siteConfig.url}/guests/${guest.slug}`,
    ...(guest.social
      ? {
          sameAs: Object.values(guest.social).filter(Boolean),
        }
      : {}),
  };

  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "Guests", path: "/guests" },
    { name: guest.name, path: `/guests/${guest.slug}` },
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="border-b border-line py-14 sm:py-20">
        <div className="container-edit">
          <Link
            href="/guests"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-paper"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Guests
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
            <div>
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-3xl ring-1 ring-line-strong">
                <Image
                  src={guest.image}
                  alt={guest.name}
                  fill
                  priority
                  sizes="280px"
                  className="object-cover"
                />
              </div>

              {guest.social ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {guest.social.website ? (
                    <a
                      href={guest.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${guest.name}'s website`}
                      className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-bright hover:text-accent-bright"
                    >
                      <Globe className="size-4" />
                    </a>
                  ) : null}
                  {guest.social.instagram ? (
                    <a
                      href={guest.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${guest.name} on Instagram`}
                      className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-bright hover:text-accent-bright"
                    >
                      <InstagramIcon className="size-4" />
                    </a>
                  ) : null}
                  {guest.social.linkedin ? (
                    <a
                      href={guest.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${guest.name} on LinkedIn`}
                      className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-bright hover:text-accent-bright"
                    >
                      <LinkedinIcon className="size-4" />
                    </a>
                  ) : null}
                  {guest.social.tiktok ? (
                    <a
                      href={guest.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${guest.name} on TikTok`}
                      className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-bright hover:text-accent-bright"
                    >
                      <TiktokIcon className="size-4" />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div>
              <h1 className="text-balance text-4xl font-bold leading-[1.05] text-paper sm:text-5xl">
                {guest.name}
              </h1>
              <p className="mt-3 text-lg font-semibold text-accent-bright">
                {guestRole(guest)}
              </p>
              {guest.location ? (
                <p className="mt-2 flex items-center gap-1.5 text-sm text-faint">
                  <MapPin className="size-4" aria-hidden="true" />
                  {guest.location}
                </p>
              ) : null}

              <div className="mt-6 space-y-4">
                {guest.bio.map((paragraph, index) => (
                  <p key={index} className="max-w-2xl leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
                  Key Topics Discussed
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {guest.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-sm text-paper"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {primaryEpisode ? (
                <div className="mt-8">
                  <Button href={`/episodes/${primaryEpisode.slug}`} variant="primary">
                    Watch Full Episode
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {primaryEpisode ? (
        <section className="border-b border-line py-16 sm:py-20">
          <div className="container-edit">
            <h2 className="text-2xl font-bold text-paper sm:text-3xl">
              The Episode
            </h2>
            <div className="mt-8 max-w-3xl">
              <YouTubeLiteEmbed
                youtubeId={primaryEpisode.youtubeId}
                thumbnail={primaryEpisode.thumbnail}
                title={primaryEpisode.title}
                className="ring-1 ring-line-strong"
              />
              <p className="mt-4 text-lg font-semibold text-paper">
                {primaryEpisode.title}
              </p>
              <p className="mt-2 text-sm text-muted">{primaryEpisode.description}</p>
            </div>
          </div>
        </section>
      ) : null}

      {moreFromGuest.length > 0 ? (
        <section className="border-b border-line py-16 sm:py-20">
          <div className="container-edit">
            <h2 className="text-2xl font-bold text-paper sm:text-3xl">
              More With {guest.name}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {moreFromGuest.map((episode) => (
                <EpisodeCard key={episode.slug} episode={episode} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedStories.length > 0 ? (
        <section className="py-16 sm:py-20">
          <div className="container-edit">
            <h2 className="text-2xl font-bold text-paper sm:text-3xl">
              Related Stories
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedStories.map((episode) => (
                <EpisodeCard key={episode.slug} episode={episode} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
