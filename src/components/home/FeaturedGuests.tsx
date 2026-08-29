import { getFeaturedGuests } from "@/data/guests";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GuestCard } from "@/components/cards/GuestCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FeaturedGuests() {
  const guests = getFeaturedGuests();

  return (
    <section className="border-b border-line py-16 sm:py-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Who's Been On"
          title="People Behind the Stories"
          description="Entrepreneurs, athletes, community leaders and creators who sat down to tell theirs."
          viewAllHref="/guests"
          viewAllLabel="View All Guests"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guests.map((guest, index) => (
            <RevealOnScroll key={guest.slug} delay={index * 60}>
              <GuestCard guest={guest} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
