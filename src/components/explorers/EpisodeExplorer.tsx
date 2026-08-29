"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Episode, Guest } from "@/types/content";
import { contentCategories } from "@/data/site";
import { EpisodeCard } from "@/components/cards/EpisodeCard";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { cn } from "@/lib/utils";

interface EpisodeExplorerProps {
  episodes: Episode[];
  guests?: Guest[];
  showGuestFilter?: boolean;
  pageSize?: number;
}

export function EpisodeExplorer({
  episodes,
  guests = [],
  showGuestFilter = true,
  pageSize = 9,
}: EpisodeExplorerProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [guestSlug, setGuestSlug] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return episodes
      .filter((episode) =>
        category === "All" ? true : episode.category === category
      )
      .filter((episode) =>
        guestSlug === "All" ? true : episode.guestSlug === guestSlug
      )
      .filter((episode) => {
        if (!query) return true;
        return (
          episode.title.toLowerCase().includes(query) ||
          episode.guestName.toLowerCase().includes(query) ||
          episode.description.toLowerCase().includes(query)
        );
      })
      .sort((a, b) => b.episodeNumber - a.episodeNumber);
  }, [episodes, search, category, guestSlug]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function updateFilter(fn: () => void) {
    fn();
    setVisibleCount(pageSize);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-faint"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) =>
              updateFilter(() => setSearch(e.target.value))
            }
            placeholder="Search episodes, guests, topics..."
            aria-label="Search episodes"
            className="w-full rounded-full border border-line-strong bg-surface py-3 pl-11 pr-4 text-sm text-paper placeholder:text-faint focus-visible:border-accent-bright"
          />
        </div>

        {showGuestFilter && guests.length > 0 ? (
          <select
            value={guestSlug}
            onChange={(e) =>
              updateFilter(() => setGuestSlug(e.target.value))
            }
            aria-label="Filter by guest"
            className="rounded-full border border-line-strong bg-surface px-4 py-3 text-sm text-paper focus-visible:border-accent-bright sm:w-56"
          >
            <option value="All">All Guests</option>
            {guests.map((guest) => (
              <option key={guest.slug} value={guest.slug}>
                {guest.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>

      <div className="mask-fade-x mt-5 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {["All", ...contentCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => updateFilter(() => setCategory(cat))}
            className="shrink-0"
          >
            <CategoryPill
              label={cat}
              active={category === cat}
              tone={category === cat ? "trending" : "default"}
            />
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-faint">
        {filtered.length} {filtered.length === 1 ? "episode" : "episodes"}
      </p>

      {visible.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((episode) => (
            <EpisodeCard key={episode.slug} episode={episode} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-line-strong p-12 text-center text-muted">
          No episodes match your filters yet — try a different search or
          category.
        </div>
      )}

      {hasMore ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((v) => v + pageSize)}
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-8 text-sm font-semibold text-paper transition-colors hover:border-accent-bright hover:text-accent-bright"
            )}
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}
