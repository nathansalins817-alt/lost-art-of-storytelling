import { InstagramIcon, TiktokIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, Icon: TiktokIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-line-strong py-2 pl-2.5 pr-4 text-sm font-medium text-paper transition-colors hover:border-accent-bright hover:text-accent-bright"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5">
              <Icon className="size-4" />
            </span>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
