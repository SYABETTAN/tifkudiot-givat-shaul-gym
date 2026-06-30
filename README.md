# תיפקודיות — מכון כושר בגבעת שאול

Premium landing page demo for **תיפקודיות**, a functional training gym in Givat Shaul, Jerusalem.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Motion** (animations)
- **Lucide React** (icons)
- **React Three Fiber** (lazy-loaded hero 3D scene)

## Business Data Used

| Field | Value |
|-------|-------|
| Name | תיפקודיות |
| Type | Functional training gym |
| Address | מרכז ספיר, גבעת שאול, ירושלים, 9546112 |
| Phone | 054-489-9332 |
| WhatsApp | +972544899332 |

All content is based on **publicly available information only**. No invented hours, prices, coaches, ratings, or photos.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # ESLint
```

## Deployment

Deployed on Vercel. Set `NEXT_PUBLIC_SITE_URL` to your production URL for canonical URLs and JSON-LD.

```bash
npx vercel --prod --yes
```

## Quality Checklist

- [x] Hebrew RTL (`lang="he"`, `dir="rtl"`)
- [x] Mobile-first responsive design
- [x] Accessible CTAs with aria-labels
- [x] `prefers-reduced-motion` support
- [x] JSON-LD LocalBusiness / SportsActivityLocation
- [x] Sitemap & robots (noindex for private demo)
- [x] OpenGraph image
- [x] No fake ratings, reviews, or hours
- [x] Private demo banner

## Important Notes

- Data sourced from public information only
- Some public sources show inconsistent hours — **must be confirmed by the owner**
- Real photos should be added only with owner approval
- **No medical claims** are made on this site
- This is a **private demo**, not an official website

## Production URL

<!-- Updated after deployment -->

See Vercel dashboard or deployment output.

## Editing Content

- Business data & URLs: `lib/business-data.ts`
- SEO & JSON-LD: `lib/seo.ts`
- Section copy: `components/sections/*.tsx`

Prepared by **שמואל אביטן**
