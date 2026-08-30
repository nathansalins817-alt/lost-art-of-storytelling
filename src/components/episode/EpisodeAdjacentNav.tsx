import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Episode } from "@/types/content";
import { cn } from "@/lib/utils";

interface EpisodeAdjacentNavProps {
  previous?: Episode;
  next?: Episode;
}

export function EpisodeAdjacentNav({ previous, next }: EpisodeAdjacentNavProps) {
  if (!previous && !next) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <AdjacentCard episode={previous} direction="previous" />
      <AdjacentCard episode={next} direction="next" />
    </div>
  );
}

function AdjacentCard({
  episode,
  direction,
}: {
  episode?: Episode;
  direction: "previous" | "next";
}) {
  if (!episode) return <div className="hidden sm:block" aria-hidden="true" />;

  return (
    <Link
      href={`/episodes/${episode.slug}`}
      className={cn(
        "group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-line-strong",
        direction === "next" && "sm:flex-row-reverse sm:text-right"
      )}
    >
      <div className="relative aspect-video w-24 shrink-0 overflow-hidden rounded-lg sm:w-28">
        <Image src={episode.thumbnail} alt="" fill sizes="112px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-faint">
          {direction === "previous" ? (
            <>
              <ArrowLeft className="size-3" aria-hidden="true" />
              Previous Episode
            </>
          ) : (
            <>
              Next Episode
              <ArrowRight className="size-3" aria-hidden="true" />
            </>
          )}
        </p>
        <p className="mt-1 truncate text-sm font-bold text-paper transition-colors group-hover:text-accent-bright">
          {episode.title}
        </p>
      </div>
    </Link>
  );
}
