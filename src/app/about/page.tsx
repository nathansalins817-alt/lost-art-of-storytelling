import type { Metadata } from "next";
import Image from "next/image";
import { Mic, Compass, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "About Nathan Salins",
  description:
    "Meet Nathan Salins, host and creator of The Lost Art of Storytelling — an interview podcast and media brand about slowing down long enough to understand the people behind the headlines.",
  path: "/about",
  keywords: ["Nathan Salins", "podcast host", "about the podcast"],
});

const pillars = [
  {
    icon: Mic,
    title: "Why The Show Exists",
    body: "Attention spans are shrinking and algorithms reward the loudest ten seconds, not the truest hour. The Lost Art of Storytelling exists to slow down — to let people explain how they actually got where they are, in their own words, at a pace that respects the story.",
  },
  {
    icon: Compass,
    title: "Why Nathan Interviews",
    body: "Nathan has always been more curious about the decision behind the headline than the headline itself. Every guest on the show has a version of their story that's more interesting, more honest, and more useful than the two-line bio — this show is built to get to that version.",
  },
  {
    icon: Sparkles,
    title: "The Mission",
    body: "In a world dominated by short attention spans and algorithms, The Lost Art of Storytelling is about slowing down long enough to understand the people and stories behind the headlines.",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.host,
    jobTitle: `Host, ${siteConfig.name}`,
    url: `${siteConfig.url}/about`,
    sameAs: [siteConfig.social.youtube, siteConfig.social.tiktok, siteConfig.social.instagram],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 right-[-10%] size-[34rem] rounded-full bg-accent/10 blur-[140px]" />
        </div>
        <div className="container-edit grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <RevealOnScroll className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
              About the Host
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] text-paper sm:text-5xl">
              Nathan Salins
            </h1>
            <p className="mt-2 text-lg font-medium text-muted">
              Host &amp; Creator, The Lost Art of Storytelling
            </p>

            <div className="mt-6 space-y-4 text-muted">
              <p className="leading-relaxed">
                Nathan Salins is the host, interviewer and creator behind The
                Lost Art of Storytelling — a media brand built around one
                idea: the most interesting part of anyone&apos;s story is
                rarely the part they lead with.
              </p>
              <p className="leading-relaxed">
                What started as a handful of conversations with entrepreneurs
                Nathan admired has grown into an ongoing show covering
                business, sports, community leadership and the kind of
                personal stories that don&apos;t usually make it past a
                headline — alongside fast-moving news shorts for the stories
                everyone&apos;s already talking about.
              </p>
              <p className="leading-relaxed">
                Based in the Bay Area, Nathan approaches every interview the
                same way: fewer scripted questions, more genuine curiosity,
                and enough time for a guest&apos;s real story to actually
                surface.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/episodes">Watch the Podcast</Button>
              <Button href="/be-a-guest" variant="outline">
                Be a Guest
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl ring-1 ring-line-strong">
              <Image
                src="/images/nathan.jpg"
                alt="Nathan Salins, host of The Lost Art of Storytelling"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-b border-line py-16 sm:py-24">
        <div className="container-edit">
          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <RevealOnScroll key={pillar.title} delay={index * 100}>
                <div className="h-full rounded-2xl border border-line bg-surface p-8">
                  <pillar.icon className="size-8 text-accent-bright" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-bold text-paper">{pillar.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{pillar.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-edit">
          <RevealOnScroll className="mx-auto max-w-3xl border-l-2 border-accent-bright pl-6 sm:pl-8">
            <p className="text-balance text-2xl font-medium leading-relaxed text-paper sm:text-3xl">
              &ldquo;In a world dominated by short attention spans and
              algorithms, The Lost Art of Storytelling is about slowing down
              long enough to understand the people and stories behind the
              headlines.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-faint">
              — Nathan Salins
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
