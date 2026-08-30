/**
 * Central brand + site configuration.
 */
export const siteConfig = {
  name: "The Lost Art of Storytelling",
  shortName: "Lost Art of Storytelling",
  host: "Nathan Salins",
  tagline: "Stories Worth Hearing. People Worth Knowing.",
  description:
    "The Lost Art of Storytelling with Nathan Salins is an interview podcast and media brand exploring the entrepreneurs, business leaders, athletes, community leaders and creators shaping our world — plus fast-moving news shorts on the stories everyone's talking about.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel's project settings once a custom
  // domain is connected — no code change or redeploy needed. Falls back to
  // the current deployment URL when that env var isn't set.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lost-art-of-storytelling.vercel.app",
  locale: "en_US",
  themeColor: "#08090b",
  /** Single source of truth for "New episodes ___" copy across the site. */
  publishCadence: "monthly",

  youtube: {
    channelUrl: "https://www.youtube.com/@thelostartofstorytelling",
    subscribeUrl:
      "https://www.youtube.com/@thelostartofstorytelling?sub_confirmation=1",
    handle: "@thelostartofstorytelling",
  },

  social: {
    youtube: "https://www.youtube.com/@thelostartofstorytelling",
    tiktok: "https://www.tiktok.com/@thelostartofstorytelling",
    instagram: "https://www.instagram.com/thelostartofstorytelling/",
  },

  contact: {
    general: "nathansalins817@gmail.com",
    guests: "nathansalins817@gmail.com",
    partnerships: "nathansalins817@gmail.com",
    press: "nathansalins817@gmail.com",
  },

  location: "Bay Area, California",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "News & Shorts", href: "/news-and-shorts" },
  { label: "Guests", href: "/guests" },
  { label: "Be a Guest", href: "/be-a-guest" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "News & Shorts", href: "/news-and-shorts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const contentCategories = [
  "Business",
  "Entrepreneurship",
  "Sports",
  "Technology",
  "Community",
  "Entertainment",
  "Personal Stories",
] as const;

/** URL-slug <-> category mapping for /episodes?topic=... — shareable, indexable filter links. */
export const categorySlugs: Record<(typeof contentCategories)[number], string> = {
  Business: "business",
  Entrepreneurship: "entrepreneurship",
  Sports: "sports",
  Technology: "technology",
  Community: "community",
  Entertainment: "entertainment",
  "Personal Stories": "personal-stories",
};

export function categoryToSlug(category: (typeof contentCategories)[number]) {
  return categorySlugs[category];
}

export function slugToCategory(slug: string) {
  return contentCategories.find((category) => categorySlugs[category] === slug);
}

export const shortCategories = [
  "Trending",
  "Technology",
  "Business",
  "Entertainment",
  "Sports",
  "World",
  "Culture",
] as const;
