# getso-web — Claude Code Context

> Read this file at the start of every session.

---

## What This Repo Is

The `getso.app` website. Served via **Cloudflare Pages**.

- Marketing landing page for the Getso mobile app
- Legal pages (Privacy Policy, Terms of Service)
- Functional deeplink pages (`/join/:token`, `/verify/:token`)
- Universal Link and App Link verification files (`.well-known/`)

**Companion repos:**
- `../getso-app/` — React Native / Expo app
- `../getso-backend/` — Hono API on Cloudflare Workers

---

## Current State

The site is currently a **static placeholder** (`public/index.html`).
The planned migration is to **Next.js 15** deployed on Cloudflare Pages.

See `docs/plans/2026-05-05-landing-page-plan.md` for the full implementation plan.

---

## Critical Files — Do Not Break

| File | Why it matters |
|---|---|
| `public/.well-known/assetlinks.json` | Android App Links verification — must be served at this exact path with `Content-Type: application/json`. Breaking this breaks all Android deeplinks. |
| `public/.well-known/apple-app-site-association` | iOS Universal Links — same constraint. Currently a placeholder pending Apple Developer account setup. |
| `public/_headers` | Cloudflare Pages header overrides — sets `Content-Type: application/json` and `Access-Control-Allow-Origin: *` on `.well-known/` files. Required for AASA and assetlinks to be valid. |

When migrating to Next.js, these files move to the Next.js `public/` folder.
The `_headers` file moves to the project root (Cloudflare Pages reads it from there).

---

## Domain & Hosting

| Environment | URL |
|---|---|
| Production | `https://getso.app` |
| Preview (Cloudflare Pages) | Auto-generated per branch |

Cloudflare Pages is configured to deploy from the `main` branch of this repo.
The `public/` directory is the current build output (static mode).
After Next.js migration, the build output will be `out/` or handled by the
`@cloudflare/next-on-pages` adapter.

---

## Design System

Font: **Poppins** (400, 500, 600) — matches the mobile app exactly.

| Token | Value | Usage |
|---|---|---|
| `--brand` | `#53B175` | Primary green — CTAs, active states |
| `--brand-light` | `#EBF7F1` | Soft brand surface |
| `--brand-dark` | `#2E7D52` | Brand text on light |
| `--amber` | `#FF9F43` | Guest-mode callouts only |
| `--bg-primary` | `#FFFFFF` | Page background |
| `--bg-secondary` | `#F7F8FA` | Section bands |
| `--text-primary` | `#1A1A2E` | Headings, body |
| `--text-secondary` | `#6B7280` | Subheadings, captions |
| `--shop-bg` | `#0D1117` | Shopping mode dark sections |
| `--shop-surface` | `#161B22` | Shopping mode card backgrounds |

Full token reference and page-by-page spec: `docs/plans/2026-05-05-landing-page-plan.md`

---

## Non-Negotiable Rules

1. **`.well-known/` files must always be accessible** at their exact paths with correct `Content-Type`. Never add auth middleware that blocks them.

2. **UK English throughout.** "flatmates", "shop", "colour" — not US spellings.

3. **No cookie banners.** Use Plausible for analytics (cookieless). Do not add Google Analytics, Facebook Pixel, or any consent-requiring tracker.

4. **GDPR-compliant.** The privacy policy must be accurate. Do not add any tracking that contradicts it.

5. **App Store link placeholder.** Until the iOS app is live on the App Store, the App Store badge/button links to `#download` or shows "Coming to iOS soon". Do not link to a non-existent App Store listing.

---

## Key External Links

| Destination | Link |
|---|---|
| Android Play Store | `https://play.google.com/store/apps/details?id=app.getso.mobile` |
| iOS App Store | TBD — update when live |
| Getso API (production) | `https://api.getso.app` |
| Getso API (staging) | `https://api-staging.getso.app` |
