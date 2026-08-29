# The Lost Art of Storytelling — Website

The official website for **The Lost Art of Storytelling**, an interview and news media podcast hosted by Nathan Salins. Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All podcast content lives in plain TypeScript data files — no CMS or database required to get started:

- `src/data/site.ts` — brand config, nav links, social/contact URLs
- `src/data/episodes.ts` — every episode/interview
- `src/data/guests.ts` — guest profiles
- `src/data/shorts.ts` — News & Shorts vertical video content

Add a new episode, guest or short by adding an object to the relevant array — pages, cards, filters and the sitemap all update automatically.

Every `youtubeId` in these files is a placeholder (format `demo-ep-001`, etc.). Swap in real YouTube video IDs once episodes are published — see `src/components/media/YouTubeLiteEmbed.tsx`.

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint

## Deployment

This project deploys to [Vercel](https://vercel.com/new) with zero configuration — connect the repo and deploy. Before going live, update `url` in `src/data/site.ts` to the real production domain so canonical URLs, the sitemap and Open Graph tags resolve correctly.
