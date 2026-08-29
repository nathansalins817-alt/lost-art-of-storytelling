import { InstagramIcon, TiktokIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const platforms = [
  {
    name: "YouTube",
    handle: siteConfig.youtube.handle,
    description: "Full episodes and interviews, every month.",
    href: siteConfig.youtube.subscribeUrl,
    cta: "Subscribe",
    Icon: YoutubeIcon,
    accent: "bg-[#FF0000]/15 text-[#FF0000]",
    ring: "hover:border-[#FF0000]/50",
  },
  {
    name: "TikTok",
    handle: "@thelostartofstorytelling",
    description: "Quick clips and the stories everyone's talking about.",
    href: siteConfig.social.tiktok,
    cta: "Follow",
    Icon: TiktokIcon,
    accent: "bg-paper/15 text-paper",
    ring: "hover:border-paper/40",
  },
  {
    name: "Instagram",
    handle: "@thelostartofstorytelling",
    description: "Behind-the-scenes moments and guest highlights.",
    href: siteConfig.social.instagram,
    cta: "Follow",
    Icon: InstagramIcon,
    accent: "bg-[#E1306C]/15 text-[#E1306C]",
    ring: "hover:border-[#E1306C]/50",
  },
];

export function FollowEverywhere() {
  return (
    <section className="border-b border-line py-16 sm:py-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Follow Along"
          title="The Show, Everywhere You Scroll"
          description="Full conversations on YouTube, fast cuts on TikTok, behind-the-scenes on Instagram — pick your platform."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {platforms.map((platform, index) => (
            <RevealOnScroll key={platform.name} delay={index * 80}>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1",
                  platform.ring
                )}
              >
                <div
                  className={cn(
                    "flex size-14 items-center justify-center rounded-full",
                    platform.accent
                  )}
                >
                  <platform.Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-paper">{platform.name}</h3>
                <p className="text-sm text-faint">{platform.handle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {platform.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-paper transition-colors group-hover:text-accent-bright">
                  {platform.cta} on {platform.name}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
