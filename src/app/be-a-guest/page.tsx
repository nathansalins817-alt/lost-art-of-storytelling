import type { Metadata } from "next";
import { FileText, PhoneCall, Mic2, Rocket } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { GuestApplicationForm } from "@/components/forms/GuestApplicationForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = buildMetadata({
  title: "Be a Guest",
  description:
    "Apply to be a guest on The Lost Art of Storytelling with Nathan Salins. We're looking for entrepreneurs, business owners, athletes, creators, community leaders and people with unique stories.",
  path: "/be-a-guest",
  keywords: ["podcast guest application", "be a podcast guest"],
});

const audiences = [
  "Entrepreneurs",
  "Business Owners",
  "Athletes",
  "Creators",
  "Community Leaders",
  "Experts",
  "People With Unique Stories",
];

const steps = [
  {
    icon: FileText,
    title: "Apply",
    body: "Fill out the application below with a bit about you and your story.",
  },
  {
    icon: PhoneCall,
    title: "Quick Call",
    body: "If it looks like a fit, we'll set up a short call to get to know each other.",
  },
  {
    icon: Mic2,
    title: "Record",
    body: "We'll schedule a conversation, in person or remote — no script, just a real talk.",
  },
  {
    icon: Rocket,
    title: "Publish",
    body: "Your episode goes out to the show's audience across YouTube and beyond.",
  },
];

export default function BeAGuestPage() {
  return (
    <>
      <PageHeader
        eyebrow="Be a Guest"
        title="Have a Story Worth Telling?"
        description="We're always looking for entrepreneurs, business owners, athletes, creators, community leaders, experts, and people with unique stories to sit down with Nathan."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-sm text-paper"
            >
              {audience}
            </span>
          ))}
        </div>
      </PageHeader>

      <section className="border-b border-line py-16 sm:py-20">
        <div className="container-edit">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <RevealOnScroll key={step.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-accent-bright">
                    <step.icon className="size-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-faint">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-paper">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-edit">
          <RevealOnScroll className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-paper">Guest Application</h2>
            <p className="mt-2 text-sm text-muted">
              Takes about five minutes. Nathan reads every submission
              personally.
            </p>
            <div className="mt-8">
              <GuestApplicationForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
