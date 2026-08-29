import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import type { Episode } from "@/types/content";
import { formatDateShort } from "@/lib/utils";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { cn } from "@/lib/utils";

interface EpisodeCardProps {
  episode: Episode;
  className?: string;
  priority?: boolean;
}

export function EpisodeCard({ episode, className, priority = false }: EpisodeCardProps) {
  return (
    <Link
      href={`/episodes/${episode.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_20px_60px_-25px_rgba(47,107,255,0.45)]",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={episode.thumbnail}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-3 top-3">
          <CategoryPill label={episode.category} />
        </div>
        <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
          {episode.runtime}
        </div>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex size-12 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg">
            <Play className="ml-0.5 size-5 fill-current" aria-hidden="true" />
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-bright">
          {episode.guestName}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-paper transition-colors group-hover:text-accent-bright">
          {episode.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {episode.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-xs text-faint">
          <span>{formatDateShort(episode.publishedAt)}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-paper transition-colors group-hover:text-accent-bright">
            Watch Episode
          </span>
        </div>
      </div>
    </Link>
  );
}
