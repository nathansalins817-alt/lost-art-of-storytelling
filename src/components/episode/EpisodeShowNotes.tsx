import { ExternalLink } from "lucide-react";
import type { MentionedLink } from "@/types/content";

interface EpisodeShowNotesProps {
  links: MentionedLink[];
}

export function EpisodeShowNotes({ links }: EpisodeShowNotesProps) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
      <p className="text-sm font-semibold text-paper">Mentioned in This Episode</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-bright"
            >
              <ExternalLink
                className="size-3.5 shrink-0 text-faint transition-colors group-hover:text-accent-bright"
                aria-hidden="true"
              />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
