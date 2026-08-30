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
    // Working example for the new transcript/chapters/show-notes fields —
    // chapters are the real, full YouTube auto-chapter list for this episode.
    // Transcript is a short real excerpt (lightly cleaned up from auto-captions)
    // covering the opening of the video; extend it with more of the episode
    // when you have the full transcript. mentionedLinks is a starting example.
    transcript: [
      {
        speaker: "Andrew Ly",
        timestamp: "0:00",
        text: "And then I decided to organize a boat to get the whole family and escape Vietnam to Malaysia. It took one month from Vietnam to Malaysia, and during that journey we got robbed two times by Thai pirates.",
      },
      {
        speaker: "Andrew Ly",
        timestamp: "0:24",
        text: "That location used to be a Filipino nightclub — there'd been a shooting there, seven people injured, two people died. That's why nobody wanted that shop.",
      },
      {
        speaker: "Nathan Salins",
        timestamp: "0:48",
        text: "So was your company ever recognized by anyone super famous? Can you tell us a little about that?",
      },
      {
        speaker: "Andrew Ly",
        timestamp: "0:59",
        text: "Yeah, there are a few. The one most people ask me about is President Obama, when he came to the United States in San Francisco...",
      },
    ],
    chapters: [
      { label: "Intro", startSeconds: 0 },
      { label: "Intro: Andrew Ly", startSeconds: 79 },
      { label: "Childhood in Vietnam", startSeconds: 152 },
      { label: "Vietnam War Impact", startSeconds: 336 },
      { label: "Family Background", startSeconds: 375 },
      { label: "Boat Escape & Pirates", startSeconds: 585 },
      { label: "Refugee Camp", startSeconds: 705 },
      { label: "Journey to the US", startSeconds: 804 },
      { label: "Arrival in California", startSeconds: 1116 },
      { label: "San Francisco Payphone", startSeconds: 1256 },
      { label: "Reconnecting in SF", startSeconds: 1362 },
      { label: "Wife's Shared Journey", startSeconds: 1434 },
      { label: "College & ESL", startSeconds: 1579 },
      { label: "Buying Sugar Bowl", startSeconds: 1754 },
      { label: "Adding Noodle Soup", startSeconds: 1856 },
      { label: "Daily City Location", startSeconds: 1934 },
      { label: "Community Impact", startSeconds: 2211 },
      { label: "Business Expansion", startSeconds: 2304 },
      { label: "2008 Financial Crisis", startSeconds: 2386 },
      { label: "Wholesale Growth", startSeconds: 2522 },
      { label: "Cold Outreach", startSeconds: 2631 },
      { label: "Costco & Safeway", startSeconds: 2769 },
      { label: "Business Model Shift", startSeconds: 2896 },
      { label: "Lessons from 2008", startSeconds: 3042 },
      { label: "Company Culture", startSeconds: 3302 },
      { label: "Obama Speech Story", startSeconds: 3397 },
      { label: "Company Vision Today", startSeconds: 3576 },
      { label: "Book Recommendations", startSeconds: 3664 },
      { label: "Free Time & Family", startSeconds: 3785 },
      { label: "Rapid-Fire Q&A", startSeconds: 3886 },
      { label: "Product Tier List", startSeconds: 4005 },
      { label: "Tasting Pastries", startSeconds: 4370 },
      { label: "Obama's Speech Clip", startSeconds: 4775 },
    ],
    mentionedLinks: [
      { label: "Sugar Bowl Bakery — official site", url: "https://www.sugarbowlbakery.com" },
    ],
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

/** Same category first (most recent first), then pads with the most recent other episodes. */
export function getRelatedEpisodes(episode: Episode, count = 3) {
  const sameCategory = episodes
    .filter((e) => e.slug !== episode.slug && e.category === episode.category)
    .sort((a, b) => b.episodeNumber - a.episodeNumber);

  if (sameCategory.length >= count) return sameCategory.slice(0, count);

  const rest = episodes
    .filter((e) => e.slug !== episode.slug && e.category !== episode.category)
    .sort((a, b) => b.episodeNumber - a.episodeNumber);

  return [...sameCategory, ...rest].slice(0, count);
}

export function getAdjacentEpisodes(episode: Episode) {
  const sorted = [...episodes].sort((a, b) => a.episodeNumber - b.episodeNumber);
  const index = sorted.findIndex((e) => e.slug === episode.slug);
  return {
    previous: index > 0 ? sorted[index - 1] : undefined,
    next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined,
  };
}
