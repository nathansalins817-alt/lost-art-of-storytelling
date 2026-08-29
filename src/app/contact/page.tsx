import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Users, Handshake, Newspaper } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with The Lost Art of Storytelling — general inquiries, guest requests, partnerships & sponsorships, and press.",
  path: "/contact",
  keywords: ["contact podcast", "podcast sponsorships", "podcast press"],
});

const channels = [
  {
    icon: Mail,
    title: "General Inquiries",
    body: "Questions, feedback, or just want to say hello.",
    email: siteConfig.contact.general,
  },
  {
    icon: Users,
    title: "Guest Requests",
    body: "Want to be on the show? Use the full guest application instead.",
    email: siteConfig.contact.guests,
    href: "/be-a-guest",
    hrefLabel: "Apply to be a guest →",
  },
  {
    icon: Handshake,
    title: "Partnerships & Sponsorships",
    body: "Brand partnerships, sponsorships and collaborations.",
    email: siteConfig.contact.partnerships,
  },
  {
    icon: Newspaper,
    title: "Press",
    body: "Media inquiries, interview requests, and press assets.",
    email: siteConfig.contact.press,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Whatever brings you here, we'd love to hear from you."
      />

      <section className="border-b border-line py-16 sm:py-20">
        <div className="container-edit">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, index) => (
              <RevealOnScroll key={channel.title} delay={index * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-accent-bright">
                    <channel.icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-paper">{channel.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {channel.body}
                  </p>
                  <a
                    href={`mailto:${channel.email}`}
                    className="mt-4 break-all text-sm font-semibold text-accent-bright hover:text-paper"
                  >
                    {channel.email}
                  </a>
                  {channel.href ? (
                    <Link
                      href={channel.href}
                      className="mt-2 text-sm font-semibold text-paper hover:text-accent-bright"
                    >
                      {channel.hrefLabel}
                    </Link>
                  ) : null}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-edit">
          <RevealOnScroll className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-paper">Send a Message</h2>
            <p className="mt-2 text-sm text-muted">
              We typically reply within 2–3 business days.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
