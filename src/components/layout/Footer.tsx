import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { footerLinks, siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { YouTubeSubscribeButton } from "@/components/ui/YouTubeSubscribeButton";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="container-edit py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold text-paper">
              The Lost Art of Storytelling
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-faint">
              with {siteConfig.host}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <YouTubeSubscribeButton size="sm" />
              <SocialLinks />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper">
              Don&apos;t miss the next story
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              One email {siteConfig.publishCadence} with the new episode and
              a News &amp; Shorts roundup — nothing else.
            </p>
            <Link
              href="/#newsletter"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-bright transition-colors hover:text-paper"
            >
              Join the newsletter
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-10 sm:flex sm:items-center sm:justify-between">
          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"
            aria-label="Footer"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              YouTube
            </a>
          </nav>
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} The Lost Art of Storytelling. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
