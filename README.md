# Misheel's Bakery — demo site

A design-pitch website for **Misheel's Bakery** ([@misheelsbakery](https://www.instagram.com/misheelsbakery/)), Ulaanbaatar.
Mongolian by default with an English toggle. **All content is placeholder.**

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · no database, no auth.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (all pages are static)
npm start          # serve the production build
npm run lint       # ESLint (Next + a11y rules)
npm run typecheck  # TypeScript
```

## Deploy to Vercel

**Option A — from GitHub (recommended)**
1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Keep the defaults (Framework: Next.js, no env vars needed) → **Deploy**.

**Option B — from the CLI**
```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Where to edit content

Search the code for `TODO` to find every invented value.

| What | File |
| --- | --- |
| Products, categories, prices (₮), cake flavours & sizes | `data/menu.ts` |
| Phone, address, hours, map location, Instagram/Facebook, IG grid photos | `data/site.ts` |
| Photos (all stock placeholders) | `data/images.ts` |
| UI text in Mongolian + English (headings, story, form labels) | `lib/dictionary.ts` |
| Colours & fonts | `app/globals.css`, `app/layout.tsx` |

### Swapping photos
1. Put real photos in `public/images/` (e.g. `public/images/honey-cake.jpg`).
2. In `data/images.ts`, replace the Unsplash URL with `"/images/honey-cake.jpg"`.
3. When all photos are real, set `showPlaceholderLabels: false` in `data/site.ts` to hide the "Sample photo" chips.
   You can also remove the Unsplash entry in `next.config.ts`.

If a photo URL fails to load, the site falls back to a soft gradient block, so nothing looks broken.
The Unsplash IDs couldn't be previewed while this was built, so check them on the first deploy and replace any that don't fit.

## Demo-only behaviour (change before going live)
- **No indexing:** `robots` metadata in `app/layout.tsx`, `app/robots.ts` and an `X-Robots-Tag` header in `next.config.ts`. Remove all three for launch.
- **"Demo preview" badge** in `components/Footer.tsx`.
- **Custom cake form** (`components/CustomCakeForm.tsx`) only validates, logs the request to the browser console and shows a success message. Hook it up to email, a Google Sheet or similar for real orders.
- **Order buttons** open an Instagram DM via `https://ig.me/m/misheelsbakery`.

## Structure

```
app/            layout (fonts, metadata), home page, /menu page, robots, favicon, global CSS
components/     Header, Hero, FeaturedCarousel, MenuTabs, ProductCard, CustomCakeForm,
                About, InstagramGrid, Contact, Footer, LanguageToggle
components/ui/  Reveal (scroll animation), SectionHeading, PlaceholderImage, Icons
data/           menu.ts, site.ts, images.ts  ← all editable content
lib/            i18n context, dictionary (mn/en strings), price formatting
```

## Notes
- Fonts: Lora (serif accent) + Nunito (body), both with `cyrillic-ext` for Mongolian Ө/Ү.
- The language choice is remembered in `localStorage`. The page is pre-rendered in Mongolian.
- Animations respect `prefers-reduced-motion`.
