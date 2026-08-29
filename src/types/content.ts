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
}

export interface Short {
  slug: string;
  headline: string;
  category: ShortCategory;
  thumbnail: string;
  youtubeId: string;
  publishedAt: string;
  trending?: boolean;
  views?: string;
}
