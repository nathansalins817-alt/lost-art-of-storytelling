"use client";

import { useMemo, useState } from "react";
import type { Short } from "@/types/content";
import { shortCategories } from "@/data/site";
import { ShortCard } from "@/components/cards/ShortCard";
import { CategoryPill } from "@/components/ui/CategoryPill";

interface ShortsExplorerProps {
  shorts: Short[];
  pageSize?: number;
}

export function ShortsExplorer({ shorts, pageSize = 12 }: ShortsExplorerProps) {
  const [category, setCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const filtered = useMemo(() => {
    return shorts
      .filter((short) => (category === "All" ? true : short.category === category))
      .sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }, [shorts, category]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div>
      <div className="mask-fade-x -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {["All", ...shortCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setCategory(cat);
              setVisibleCount(pageSize);
            }}
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

      {visible.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((short) => (
            <ShortCard key={short.slug} short={short} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-line-strong p-12 text-center text-muted">
          No stories in this category yet — check back soon.
        </div>
      )}

      {hasMore ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((v) => v + pageSize)}
            className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-8 text-sm font-semibold text-paper transition-colors hover:border-accent-bright hover:text-accent-bright"
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}
