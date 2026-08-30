import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Guest } from "@/types/content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateShort(dateString: string) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** hqdefault is guaranteed to exist for every video; maxresdefault often 404s. */
export function youtubeThumbnail(youtubeId: string) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

export function youtubeWatchUrl(youtubeId: string, atSeconds?: number) {
  const base = `https://www.youtube.com/watch?v=${youtubeId}`;
  return atSeconds ? `${base}&t=${Math.floor(atSeconds)}s` : base;
}

/** 90 -> "1:30", 3725 -> "1:02:05" */
export function formatTimestamp(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${minutes}:${pad(seconds)}`;
}

/** "1 hr 22 min" / "49 min" -> ISO 8601 duration for JSON-LD, e.g. "PT1H22M". */
export function runtimeToIso8601(runtime: string) {
  const hourMatch = runtime.match(/(\d+)\s*hr/);
  const minMatch = runtime.match(/(\d+)\s*min/);
  const hours = hourMatch?.[1];
  const minutes = minMatch?.[1];
  if (!hours && !minutes) return undefined;
  return `PT${hours ? `${hours}H` : ""}${minutes ? `${minutes}M` : ""}`;
}

/**
 * 1100 -> "1.1K", 6900 -> "6.9K", 2000000 -> "2M". Returns undefined below
 * `threshold` so callers can hide the view count entirely for low numbers.
 */
export function formatViews(count: number, threshold = 1000) {
  if (count < threshold) return undefined;
  if (count >= 1_000_000) return `${trimZero(count / 1_000_000)}M`;
  if (count >= 1_000) return `${trimZero(count / 1_000)}K`;
  return count.toString();
}

function trimZero(n: number) {
  return n.toFixed(1).replace(/\.0$/, "");
}

/** "{title}, {organization}" — falls back to just the title when there's no organization. */
export function guestRole(guest: Pick<Guest, "title" | "organization">) {
  return guest.organization ? `${guest.title}, ${guest.organization}` : guest.title;
}
