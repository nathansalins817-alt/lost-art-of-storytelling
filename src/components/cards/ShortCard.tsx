import Image from "next/image";
import Link from "next/link";
import { Play, TrendingUp } from "lucide-react";
import type { Short } from "@/types/content";
import { cn, formatViews } from "@/lib/utils";

interface ShortCardProps {
  short: Short;
  className?: string;
  priority?: boolean;
}

export function ShortCard({ short, className, priority = false }: ShortCardProps) {
  const views = short.views ? formatViews(short.views) : undefined;

  return (
    <Link
      href={`/news-and-shorts/${short.slug}`}
      className={cn(
        "group relative block aspect-[9/16] overflow-hidden rounded-2xl bg-surface transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <Image
        src={short.thumbnail}
        alt=""
        fill
        priority={priority}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/40" />

      {short.trending ? (
        <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
          <TrendingUp className="size-3" aria-hidden="true" />
          Trending
        </span>
      ) : (
        <span className="absolute left-2.5 top-2.5 rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
          {short.category}
        </span>
      )}

      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex size-11 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg">
          <Play className="ml-0.5 size-4 fill-current" aria-hidden="true" />
        </span>
      </span>

      <div className="absolute inset-x-0 bottom-0 p-3.5">
        <p className="text-sm font-bold leading-snug text-white text-balance">
          {short.headline}
        </p>
        {views ? (
          <p className="mt-1.5 text-[0.7rem] font-medium text-white/70">
            {views} views
          </p>
        ) : null}
      </div>
    </Link>
  );
}
