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
exactly: bg `#121212`/`#141414`/`#1E1E1E`, accent violet `#8B5CF6` (this is the real shipped
accent — an amber palette was proposed in `app-layout/screens/09-product-vision.md` but never
implemented in code, so violet is correct here). Font is Inter, same weights as the app.

Book covers are live Google Books thumbnail URLs by ISBN (same technique the design file uses):
`https://books.google.com/books/content?vid=ISBN:{isbn}&printsec=frontcover&img=1&zoom=1&edge=curl`

## Run locally

No build step — just serve the directory statically, e.g. `python -m http.server 8000`, then
open `index.html`.

## Not yet wired

- Waitlist form only writes to `localStorage` (`skrolla_waitlist` key) — no backend/email
  service connected yet.
- No deploy target configured yet (Firebase Hosting is already set up for the `skrolla-cba2a`
  project and would be the natural choice — see `../Skrolla/CLAUDE.md` for backend infra).
