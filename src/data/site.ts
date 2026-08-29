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
  // Update this once a custom domain is connected — see README.
  url: "https://lost-art-of-storytelling.vercel.app",
  locale: "en_US",
  themeColor: "#08090b",

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
  { label: "Interviews", href: "/interviews" },
  { label: "News & Shorts", href: "/news-and-shorts" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Interviews", href: "/interviews" },
  { label: "Episodes", href: "/episodes" },
  { label: "News & Shorts", href: "/news-and-shorts" },
  { label: "About", href: "/about" },
  { label: "Be a Guest", href: "/be-a-guest" },
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

export const shortCategories = [
  "Trending",
  "Technology",
  "Business",
  "Entertainment",
  "Sports",
  "World",
  "Culture",
] as const;
