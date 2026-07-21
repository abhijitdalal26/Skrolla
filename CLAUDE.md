# Skrolla — Landing Page

Static marketing site for the Skrolla Android app (book discovery, TikTok-style cover scroll +
AI chat). Plain HTML/CSS/JS — no build step, no framework, no dependencies.

## Structure

- `index.html` — single page: nav, hero, pill marquee, feature showcases (For You Feed,
  Onboarding, Home, Search, StoryMode spotlight, Library), final CTA, footer.
- `css/style.css` — design tokens + all styling.
- `js/main.js` — scroll-reveal (IntersectionObserver), nav scroll state, search-grid cover
  population, pill marquee loop, hero phone mouse-parallax, waitlist form (localStorage only,
  no backend wired).

## Design source of truth

Every phone-mockup screen's markup/colors/copy was lifted directly from the real design file at
`../Skrolla/app-layout/Frontend Design latest/BookScroll.dc.html` (a canvas of 10+ high-fidelity
screens built with the app's actual tokens) — not reinvented. If the app's design changes, that
file is the one to re-check against, then port matching updates into `index.html`'s inline phone
markup.

Colors/tokens match `Skrolla/android/Skrolla/app/src/main/java/com/skrolla/app/ui/theme/Color.kt`
exactly — "Night Reading Light" (shipped 2026-07-13, replacing the earlier violet/Inter look this
file used to describe): cool blue-black chrome `#0B0E15`/`#171C29`/`#1F2537`, one warm amber
accent `#F0A94A` (dim `#C98A38`, ~16%-alpha soft variant for chip/pill backgrounds and glows), a
separate rose `#FF6B81` for Like state, and a deliberately duller gold `#C9A44C` reserved only for
NYT/award badges. Gradients/glows (hero headline, CTA headline, ambient background, button glow)
are recalculated to read amber, not a violet gradient with the hex swapped. Fonts are Manrope
(sans, everything scanned — nav, body, buttons, form) + Newsreader (serif, only the hero h1 and
showcase/spotlight/final-CTA `h2`s — the site's own "one big focal thing" moments), same
allocation logic as the app; loaded via the Google Fonts CDN link in `index.html`'s `<head>`, not
self-hosted. Primary/CTA buttons use `var(--bg-primary)` (not white) as text color against the
amber fill — white-on-amber measures ~2:1 contrast (fails WCAG AA for text), dark-on-amber ~9.6:1.

Book covers are live Google Books thumbnail URLs by ISBN (same technique the design file uses):
`https://books.google.com/books/content?vid=ISBN:{isbn}&printsec=frontcover&img=1&zoom=1&edge=curl`

## Phone mockup screenshots (`images/*.png`, `*.jpeg`)

A few showcase sections (StoryMode spotlight, Home/FYP/Search/Library) use real raster
screenshots inside `.phone .screen img.app-screen-img` instead of live markup. These render at
only ~230-292 CSS px wide, so:

- **Export screenshots at ~2x their largest on-page display width** (500-600px), not raw device
  resolution (Android screenshots come out of the phone at 1080x2400 — that's ~4x too big and
  just makes the browser do more downscaling work, which shows up as blur). Resize down yourself
  before adding the file, with Lanczos/bicubic resampling.
- **PNG** for anything with UI text or flat colors (chat/card/app screens) — no compression
  artifacts. **JPEG** (quality ~85-90+) only for photographic content.
- Crop close to the destination `.phone`'s aspect ratio (`--pw`/`--ph`) since `object-fit: cover`
  will crop mismatches.
- `.phone .screen img.app-screen-img` has `image-rendering: -webkit-optimize-contrast` +
  `backface-visibility: hidden` + `transform: translateZ(0)` (css/style.css) to force Chromium
  onto a sharper resampling/compositing path — this mitigates but doesn't replace exporting at the
  right size. The blur this works around is worse on Windows laptops at non-integer display
  scaling (125%/150%) than on phones, since phones' high DPR hides it.

## Run locally

No build step — just serve the directory statically, e.g. `python -m http.server 8000`, then
open `index.html`.

## Not yet wired

- Waitlist form only writes to `localStorage` (`skrolla_waitlist` key) — no backend/email
  service connected yet.
- Deployed via Vercel (`.vercel/project.json` → project `skrolla`, org `team_4aLAbYk0qPZR0U0bw1R3Eoun`);
  `vercel --prod` from this directory ships it. Firebase Hosting (`skrolla-app-2026`) was
  considered but Vercel is what's actually wired.
