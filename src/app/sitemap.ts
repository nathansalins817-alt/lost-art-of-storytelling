import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { episodes } from "@/data/episodes";
import { guests } from "@/data/guests";
import { shorts } from "@/data/shorts";
import { clips } from "@/data/clips";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/episodes`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/news-and-shorts`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteConfig.url}/clips`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}/guests`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/be-a-guest`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const episodeRoutes: MetadataRoute.Sitemap = episodes.map((episode) => ({
    url: `${siteConfig.url}/episodes/${episode.slug}`,
    lastModified: episode.publishedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guestRoutes: MetadataRoute.Sitemap = guests.map((guest) => ({
    url: `${siteConfig.url}/guests/${guest.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const shortRoutes: MetadataRoute.Sitemap = shorts.map((short) => ({
    url: `${siteConfig.url}/news-and-shorts/${short.slug}`,
    lastModified: short.publishedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const clipRoutes: MetadataRoute.Sitemap = clips.map((clip) => ({
    url: `${siteConfig.url}/clips/${clip.slug}`,
    lastModified: clip.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...episodeRoutes, ...guestRoutes, ...shortRoutes, ...clipRoutes];
}
