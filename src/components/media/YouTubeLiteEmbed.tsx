"use client";

import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface YouTubeLiteEmbedProps {
  youtubeId: string;
  thumbnail: string;
  title: string;
  className?: string;
  aspect?: "video" | "vertical";
  priority?: boolean;
}

export interface YouTubeLiteEmbedHandle {
  /** Mount the iframe and start playback, optionally at a given timestamp. */
  play: (startSeconds?: number) => void;
  /** Seek the player if it's already playing; otherwise start it at that timestamp. */
  seekTo: (seconds: number) => void;
}

/**
 * Click-to-play YouTube embed: ships a static thumbnail instead of an
 * iframe until the user interacts, keeping the page fast. Swap
 * `youtubeId` / `thumbnail` for real values from the YouTube Data API.
 *
 * Exposes an imperative handle so a parent (e.g. a chapters list) can
 * start playback at a timestamp or seek an already-playing embed.
 */
export const YouTubeLiteEmbed = forwardRef<YouTubeLiteEmbedHandle, YouTubeLiteEmbedProps>(
  function YouTubeLiteEmbed(
    { youtubeId, thumbnail, title, className, aspect = "video", priority = false },
    ref
  ) {
    const [playing, setPlaying] = useState(false);
    const [startAt, setStartAt] = useState(0);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        play(startSeconds = 0) {
          setStartAt(startSeconds);
          setPlaying(true);
        },
        seekTo(seconds) {
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "seekTo", args: [seconds, true] }),
              "https://www.youtube.com"
            );
          } else {
            setStartAt(seconds);
            setPlaying(true);
          }
        },
      }),
      []
    );

    if (playing) {
      return (
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl bg-black",
            aspect === "video" ? "aspect-video" : "aspect-[9/16]",
            className
          )}
        >
          <iframe
            ref={iframeRef}
            className="absolute inset-0 size-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&enablejsapi=1${
              startAt ? `&start=${startAt}` : ""
            }`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    return (
      <button
        type="button"
        onClick={() => {
          setStartAt(0);
          setPlaying(true);
        }}
        aria-label={`Play video: ${title}`}
        className={cn(
          "group relative block w-full overflow-hidden rounded-2xl bg-surface",
          aspect === "video" ? "aspect-video" : "aspect-[9/16]",
          className
        )}
      >
        <Image
          src={thumbnail}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-ink shadow-xl transition-transform duration-200 ease-out group-hover:scale-110 sm:size-20">
            <Play className="ml-1 size-6 fill-current sm:size-7" aria-hidden="true" />
          </span>
        </span>
      </button>
    );
  }
);
