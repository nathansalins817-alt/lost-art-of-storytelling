import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { guests } from "@/data/guests";
import { PageHeader } from "@/components/ui/PageHeader";
import { GuestCard } from "@/components/cards/GuestCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = buildMetadata({
  title: "Guests",
  description:
    "Meet the entrepreneurs, business leaders, athletes, community leaders and creators who've told their story on The Lost Art of Storytelling with Nathan Salins.",
  path: "/guests",
  keywords: ["podcast guests", "guest interviews"],
});

export default function GuestsPage() {
  return (
    <>
      <PageHeader
        eyebrow="All Guests"
        title="People Behind the Stories"
        description="Every guest brings a different world with them — business, sport, community, art. Here's who's told their story so far."
      />
      <section className="py-16 sm:py-20">
        <div className="container-edit">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {guests.map((guest, index) => (
              <RevealOnScroll key={guest.slug} delay={(index % 4) * 60}>
                <GuestCard guest={guest} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
