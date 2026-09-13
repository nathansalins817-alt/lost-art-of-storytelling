import type { Clip } from "@/types/content";

/**
 * Longer-form YouTube uploads that are neither a full episode nor a
 * vertical Short — highlight cuts and standalone bonus videos, sourced
 * from the real YouTube channel.
 */
export const clips: Clip[] = [
  {
    slug: "vietnamese-refugee-60m-bakery-obama",
    title: "How a Vietnamese Refugee Built a $60M Bakery — and Got Praised by Obama",
    description:
      "A shorter cut of Andrew Ly's story: escaping Vietnam as a refugee, building Sugar Bowl Bakery from nothing, and getting a shoutout from President Obama along the way.",
    guestSlug: "andrew-ly",
    guestName: "Andrew Ly",
    category: "Entrepreneurship",
    thumbnail: "https://i.ytimg.com/vi/tqYha0il_cI/maxresdefault.jpg",
    youtubeId: "tqYha0il_cI",
    runtime: "8 min",
    publishedAt: "2026-09-04",
    views: 196,
    relatedEpisodeSlug: "andrew-ly-sugar-bowl-bakery",
    featured: true,
  },
  {
    slug: "starting-over-in-canada-grandmothers-story",
    title: "Starting Over in Canada: My Grandma's Immigrant Story",
    description:
      "A shorter cut of Ethel Salins — Nathan's grandmother — on what her first winter as a new immigrant in Montreal was really like.",
    guestSlug: "ethel-salins",
    guestName: "Ethel Salins",
    category: "Personal Stories",
    thumbnail: "https://i.ytimg.com/vi/xwR3-ylypWM/maxresdefault.jpg",
    youtubeId: "xwR3-ylypWM",
    runtime: "9 min",
    publishedAt: "2026-08-30",
    views: 300,
    relatedEpisodeSlug: "ethel-salins-grandmothers-story",
    featured: true,
  },
  {
    slug: "jose-avila-almost-died-three-times",
    title: "José Avila Almost Died 3 Times?!?!",
    description:
      "The three near-death experiences from Jose Avila's episode, back to back — from Guatemala to a career in tech.",
    guestSlug: "jose-avila",
    guestName: "Jose Avila",
    category: "Technology",
    thumbnail: "https://i.ytimg.com/vi/AGlmKTaLL4A/maxresdefault.jpg",
    youtubeId: "AGlmKTaLL4A",
    runtime: "4 min",
    publishedAt: "2026-04-02",
    views: 27,
    relatedEpisodeSlug: "jose-avila-guatemala-to-tech",
    featured: true,
  },
  {
    slug: "andrew-ly-ranks-sugar-bowl-products",
    title: "Andrew Ly Ranks Sugar Bowl Bakery's Own Products",
    description:
      "Sugar Bowl Bakery founder Andrew Ly ranks his own products and tells the history behind each one.",
    guestSlug: "andrew-ly",
    guestName: "Andrew Ly",
    category: "Entrepreneurship",
    thumbnail: "https://i.ytimg.com/vi/KKedRJCXU00/maxresdefault.jpg",
    youtubeId: "KKedRJCXU00",
    runtime: "6 min",
    publishedAt: "2025-10-08",
    views: 8,
  },
  {
    slug: "andrew-ly-immigration-story",
    title: "Andrew Ly's Inspiring Immigration Story",
    description:
      "From a war-torn village in Vietnam to founding a multi-million dollar national bakery brand — Andrew Ly's immigration story in full.",
    guestSlug: "andrew-ly",
    guestName: "Andrew Ly",
    category: "Entrepreneurship",
    thumbnail: "https://i.ytimg.com/vi/g74iNI_X6w0/maxresdefault.jpg",
    youtubeId: "g74iNI_X6w0",
    runtime: "12 min",
    publishedAt: "2025-10-06",
    views: 15,
  },
  {
    slug: "obama-speech-sugar-bowl-bakery",
    title: "President Barack Obama's Speech About Sugar Bowl Bakery",
    description:
      "Archival footage of President Obama's 2013 San Francisco speech name-checking Sugar Bowl Bakery.",
    guestName: "Barack Obama",
    category: "Entrepreneurship",
    thumbnail: "https://i.ytimg.com/vi/61pehSOC6U0/maxresdefault.jpg",
    youtubeId: "61pehSOC6U0",
    runtime: "3 min",
    publishedAt: "2025-10-03",
    views: 26,
  },
];

export function getClipBySlug(slug: string) {
  return clips.find((clip) => clip.slug === slug);
}

export function getLatestClips(count = 4) {
  return [...clips]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}
