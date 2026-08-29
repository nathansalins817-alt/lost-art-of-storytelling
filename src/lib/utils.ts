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

export function youtubeWatchUrl(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

/** "{title}, {organization}" — falls back to just the title when there's no organization. */
export function guestRole(guest: Pick<Guest, "title" | "organization">) {
  return guest.organization ? `${guest.title}, ${guest.organization}` : guest.title;
}
