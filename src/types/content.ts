export type ContentCategory =
  | "Business"
  | "Entrepreneurship"
  | "Sports"
  | "Technology"
  | "Community"
  | "Entertainment"
  | "Personal Stories";

export type ShortCategory =
  | "Trending"
  | "Technology"
  | "Business"
  | "Entertainment"
  | "Sports"
  | "World"
  | "Culture";

export interface Guest {
  slug: string;
  name: string;
  title: string;
  organization?: string;
  shortBio: string;
  bio: string[];
  image: string;
  topics: string[];
  location?: string;
  social?: {
    website?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
    tiktok?: string;
  };
  featured?: boolean;
}

export interface TranscriptLine {
  speaker: string;
  timestamp?: string;
  text: string;
}

export interface Chapter {
  label: string;
  startSeconds: number;
}

export interface MentionedLink {
  label: string;
  url: string;
}

export interface Episode {
  slug: string;
  title: string;
  description: string;
  guestSlug: string;
  guestName: string;
  category: ContentCategory;
  thumbnail: string;
  /** YouTube video ID — swap in the real ID from the YouTube Data API / Studio. */
  youtubeId: string;
  runtime: string;
  publishedAt: string;
  featured?: boolean;
  episodeNumber: number;
  /** Optional — renders a collapsible transcript section when present. */
  transcript?: TranscriptLine[];
  /** Optional — renders a timestamped chapter list that seeks the player. */
  chapters?: Chapter[];
  /** Optional — renders a "mentioned in this episode" show-notes section. */
  mentionedLinks?: MentionedLink[];
}

export interface Short {
  slug: string;
  headline: string;
  category: ShortCategory;
  thumbnail: string;
  youtubeId: string;
  publishedAt: string;
  trending?: boolean;
  /** Raw view count — formatted (and threshold-gated) for display via formatViews(). */
  views?: number;
}
