"use client";

import { useRef } from "react";
import { ListVideo } from "lucide-react";
import type { Chapter } from "@/types/content";
import { YouTubeLiteEmbed, type YouTubeLiteEmbedHandle } from "@/components/media/YouTubeLiteEmbed";
import { formatTimestamp, youtubeWatchUrl } from "@/lib/utils";

interface EpisodePlayerProps {
  youtubeId: string;
  thumbnail: string;
  title: string;
  chapters?: Chapter[];
}

/**
 * Wraps the click-to-play embed with an optional chapters list. Each
 * chapter is a real link to the timestamp on YouTube (crawlable, works
 * without JS); clicking it also seeks the in-page player when it's
 * already playing, or starts it at that timestamp otherwise.
 */
export function EpisodePlayer({ youtubeId, thumbnail, title, chapters }: EpisodePlayerProps) {
  const playerRef = useRef<YouTubeLiteEmbedHandle>(null);

  return (
    <div>
      <YouTubeLiteEmbed
        ref={playerRef}
        youtubeId={youtubeId}
        thumbnail={thumbnail}
        title={title}
        priority
        className="ring-1 ring-line-strong"
      />

      {chapters && chapters.length > 0 ? (
        <div className="mt-5 rounded-2xl border border-line bg-surface p-2">
          <div className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-paper">
            <ListVideo className="size-4 text-accent-bright" aria-hidden="true" />
            Chapters
            <span className="font-normal text-faint">({chapters.length})</span>
          </div>
          <ol className="max-h-80 overflow-y-auto">
            {chapters.map((chapter) => (
              <li key={chapter.startSeconds}>
                <a
                  href={youtubeWatchUrl(youtubeId, chapter.startSeconds)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => {
                    event.preventDefault();
                    playerRef.current?.seekTo(chapter.startSeconds);
                  }}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-white/5"
                >
                  <span className="shrink-0 font-mono text-xs text-accent-bright">
                    {formatTimestamp(chapter.startSeconds)}
                  </span>
                  <span className="text-muted">{chapter.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
