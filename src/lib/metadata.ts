import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  /** Omit to fall back to the site-wide generated opengraph-image. */
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
}

const defaultKeywords = [
  "The Lost Art of Storytelling",
  "Nathan Salins",
  "Nathan Salins podcast",
  "storytelling podcast",
  "interview podcast",
  "entrepreneur interviews",
  "business interviews",
  "inspiring stories",
  "podcast interviews",
  "news shorts",
  "trending news",
  "YouTube podcast",
  "Bay Area podcast",
];

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : undefined;

  return {
    title,
    description,
    keywords: [...new Set([...defaultKeywords, ...keywords])],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images,
      locale: siteConfig.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
