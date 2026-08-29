import { Hero } from "@/components/home/Hero";
import { FeaturedStory } from "@/components/home/FeaturedStory";
import { LatestInterviews } from "@/components/home/LatestInterviews";
import { NewsShorts } from "@/components/home/NewsShorts";
import { FollowEverywhere } from "@/components/home/FollowEverywhere";
import { FeaturedGuests } from "@/components/home/FeaturedGuests";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedStory />
      <LatestInterviews />
      <NewsShorts />
      <FollowEverywhere />
      <FeaturedGuests />
      <NewsletterSection />
    </>
  );
}
