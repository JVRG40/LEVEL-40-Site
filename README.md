# LEVEL40

Firm site for **LEVEL40** — global advisory and management consulting. The brand line is *Where Vision Meets Execution*.

Jose Vila is Managing Director. The site is a single-page, black / cream / white brochure: typography and negative space carry the identity. There are no stock photographs.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- TypeScript
- Tailwind CSS 4

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Contact details

Default public contacts (from the LEVEL40 card):

| | |
| --- | --- |
| Email | `jose.vila@level-forty.com` |
| Phone | `+34 689 810 598` |
| Web | [www.level-forty.com](https://www.level-forty.com) |

Override the mailto address at build time:

```bash
# .env.local (not committed)
NEXT_PUBLIC_CONTACT_EMAIL=jose.vila@level-forty.com
```

Copy `.env.example` to `.env.local` if you want a local override. Next.js inlines `NEXT_PUBLIC_*` variables at **build** time, so rebuild after changing the email.

The default mail subject is set in `lib/site.ts`.

## Customize copy

All public copy lives in [`lib/site.ts`](lib/site.ts): wordmark, tagline, about, services, and contact. Section components in `components/` only render that data.

## Deploy

Any host that builds a Next.js app works. On [Vercel](https://vercel.com):

1. Import this repository.
2. Framework preset: Next.js (defaults are fine).
3. Optionally set `NEXT_PUBLIC_CONTACT_EMAIL`.
4. Deploy.

Other Node hosts: `npm run build` then `npm run start`.

## Brand notes

- Wordmark: `LEVEL40`, high-contrast serif (Bodoni Moda)
- Tagline: wide-tracked sans, all caps
- Palette: `#000000`, charcoal, white, cream `#E0DDD5`
- Buttons: ghost outline (`CONTACT`, `LEARN MORE`)
- The small geometric mark in About is an original reduction motif (complex → essential). It is not a reproduction of Picasso’s bull series.
