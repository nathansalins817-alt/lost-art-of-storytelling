import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder guest portraits — swap for real headshots.
      { protocol: "https", hostname: "i.pravatar.cc" },
      // Placeholder editorial / thumbnail imagery — swap for real photos & YouTube thumbnails.
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      // YouTube thumbnail CDN, for when real video IDs are wired up.
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
