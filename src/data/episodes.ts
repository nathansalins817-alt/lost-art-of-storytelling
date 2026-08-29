import type { Episode } from "@/types/content";

/**
 * Real episodes, sourced from the actual YouTube uploads (title, thumbnail,
 * runtime and description all drawn from the published video).
 */
export const episodes: Episode[] = [
  {
    slug: "janet-campbell-opera-singer",
    title: "From Six Freelance Jobs to the San Francisco Opera",
    description:
      "Opera singer and vocal teacher Janet Campbell on balancing six freelance jobs as a self-described \"reluctant musician,\" and why she ultimately traded her solo career for the stability of the San Francisco Opera.",
    guestSlug: "janet-campbell",
    guestName: "Janet Campbell",
    category: "Personal Stories",
    thumbnail: "https://i.ytimg.com/vi/SGoMf4IKayM/maxresdefault.jpg",
    youtubeId: "SGoMf4IKayM",
    runtime: "49 min",
    publishedAt: "2025-09-01",
    episodeNumber: 1,
  },
  {
    slug: "andrew-ly-sugar-bowl-bakery",
    title: "Escaping Vietnam by Boat to Building Sugar Bowl Bakery",
    description:
      "Sugar Bowl Bakery founder Andrew Ly on escaping Vietnam by boat after three failed attempts, surviving a month at sea, and building a multi-million dollar national brand from nothing.",
    guestSlug: "andrew-ly",
    guestName: "Andrew Ly",
    category: "Entrepreneurship",
    thumbnail: "https://i.ytimg.com/vi/YxQYCJYAGU0/maxresdefault.jpg",
    youtubeId: "YxQYCJYAGU0",
    runtime: "1 hr 22 min",
    publishedAt: "2025-10-01",
    episodeNumber: 2,
  },
  {
    slug: "jason-ting-win-win-win",
    title: "Finding the Win-Win-Win: Lessons From Wealth Management and College TV",
    description:
      "Merrill Lynch Wealth Management Advisor Jason Ting on the \"win-win-win\" philosophy he developed running a college TV station — and how it still shapes his approach to business today.",
    guestSlug: "jason-ting",
    guestName: "Jason Ting",
    category: "Business",
    thumbnail: "https://i.ytimg.com/vi/2HI5-JjMY2k/maxresdefault.jpg",
    youtubeId: "2HI5-JjMY2k",
    runtime: "46 min",
    publishedAt: "2025-11-01",
    episodeNumber: 3,
  },
  {
    slug: "arif-janmohamed-lightspeed",
    title: "From a Sick Kid Teaching Himself to Code to Partner at Lightspeed",
    description:
      "Lightspeed Venture Partners' Arif Janmohamed on teaching himself to program as a sick kid, building robots in a garage, and the 2003 rejection that almost derailed everything.",
    guestSlug: "arif-janmohamed",
    guestName: "Arif Janmohamed",
    category: "Business",
    thumbnail: "https://i.ytimg.com/vi/76YIOfs8VbM/maxresdefault.jpg",
    youtubeId: "76YIOfs8VbM",
    runtime: "39 min",
    publishedAt: "2025-12-01",
    episodeNumber: 4,
  },
  {
    slug: "ethel-salins-grandmothers-story",
    title: "A Grandmother's Journey From 1950s Bombay to Montreal",
    description:
      "Nathan's grandmother Ethel Salins on the \"nightmare\" of her early immigrant years — from the streets of 1950s Bombay to a converted basement in Montreal.",
    guestSlug: "ethel-salins",
    guestName: "Ethel Salins",
    category: "Personal Stories",
    thumbnail: "https://i.ytimg.com/vi/8VWOVc7karY/maxresdefault.jpg",
    youtubeId: "8VWOVc7karY",
    runtime: "44 min",
    publishedAt: "2026-01-01",
    episodeNumber: 5,
  },
  {
    slug: "jose-avila-guatemala-to-tech",
    title: "Three Near-Death Experiences in Guatemala, Then a Career in Tech",
    description:
      "Tech entrepreneur Jose Avila on surviving three near-death experiences in Guatemala, moving to the U.S. in 2005, and helping scale social gaming platforms at Easyboard and CrowdStar.",
    guestSlug: "jose-avila",
    guestName: "Jose Avila",
    category: "Technology",
    thumbnail: "https://i.ytimg.com/vi/zeB0YFKSk5A/maxresdefault.jpg",
    youtubeId: "zeB0YFKSk5A",
    runtime: "47 min",
    publishedAt: "2026-02-01",
    episodeNumber: 6,
  },
  {
    slug: "teri-handelman-bay-area-education",
    title: "Founding Two Schools and Reinventing Financial Literacy",
    description:
      "Educator Teri Handelman on founding two Bay Area schools, teaching financial literacy through real stock market simulations, and the case for single-gender learning environments.",
    guestSlug: "teri-handelman",
    guestName: "Teri Handelman",
    category: "Community",
    thumbnail: "https://i.ytimg.com/vi/dVpnilsuQxI/maxresdefault.jpg",
    youtubeId: "dVpnilsuQxI",
    runtime: "43 min",
    publishedAt: "2026-03-01",
    episodeNumber: 7,
    featured: true,
  },
];

export function getEpisodeBySlug(slug: string) {
  return episodes.find((episode) => episode.slug === slug);
}

export function getFeaturedEpisode() {
  return episodes.find((episode) => episode.featured) ?? episodes[episodes.length - 1];
}

export function getLatestEpisodes(count?: number) {
  const sorted = [...episodes].sort((a, b) => b.episodeNumber - a.episodeNumber);
  return count ? sorted.slice(0, count) : sorted;
}

export function getEpisodesByGuest(guestSlug: string) {
  return episodes
    .filter((episode) => episode.guestSlug === guestSlug)
    .sort((a, b) => b.episodeNumber - a.episodeNumber);
}

export function getRelatedEpisodes(episode: Episode, count = 3) {
  return episodes
    .filter((e) => e.slug !== episode.slug)
    .filter((e) => e.category === episode.category || e.guestSlug === episode.guestSlug)
    .sort((a, b) => b.episodeNumber - a.episodeNumber)
    .slice(0, count);
}
