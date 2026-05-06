# Getso — Website Implementation Plan

**Repo:** `getso-web`
**Domain:** `getso.app`
**Date:** 2026-05-05
**Design reference:** `../getso-app/docs/agents/design-system.md`, `../getso-docs/ui-spec.md §1–§2`

---

## Current State

The repo currently contains a static placeholder served by Cloudflare Pages:

```
getso-web/
├── public/
│   ├── index.html                            ← placeholder card (to be replaced)
│   ├── _headers                              ← Cloudflare Pages header overrides (preserve)
│   └── .well-known/
│       ├── apple-app-site-association        ← iOS Universal Links (preserve, fill in Team ID)
│       └── assetlinks.json                   ← Android App Links (preserve, SHA-256 already set)
└── CLAUDE.md
```

The migration replaces `index.html` with a full Next.js 15 site. The `.well-known/` files
and `_headers` must be carried forward unchanged.

---

## Target File Structure (post-migration)

```
getso-web/
├── src/
│   └── app/
│       ├── layout.tsx                        ← Root layout (fonts, metadata)
│       ├── page.tsx                          ← / Landing page
│       ├── privacy/
│       │   └── page.tsx                      ← /privacy
│       ├── terms/
│       │   └── page.tsx                      ← /terms
│       ├── contact/
│       │   └── page.tsx                      ← /contact
│       ├── changelog/
│       │   └── page.tsx                      ← /changelog
│       ├── join/
│       │   └── [token]/
│       │       └── page.tsx                  ← /join/:token (functional deeplink)
│       └── verify/
│           └── [token]/
│               └── page.tsx                  ← /verify/:token (functional deeplink)
├── src/
│   └── components/
│       ├── Nav.tsx
│       ├── Footer.tsx
│       └── ui/                               ← Button, Badge, etc.
├── public/
│   ├── _headers                              ← Copied from current public/_headers
│   └── .well-known/
│       ├── apple-app-site-association        ← Copied from current
│       └── assetlinks.json                   ← Copied from current
├── CLAUDE.md
├── next.config.ts
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSR for SEO; dynamic pages for `/join/:token` |
| Styling | Tailwind CSS v4 | Utility-first; tokens mapped to Tailwind config |
| Font | `next/font/google` — Poppins 400/500/600 | Self-hosted, no layout shift, matches app |
| Hosting | Cloudflare Pages + `@cloudflare/next-on-pages` | Existing infra; edge rendering |
| Contact form | Cloudflare Email Routing | Forwards to `hello@getso.app`, no third party |
| Analytics | Plausible | Cookieless, GDPR-compliant, no consent banner needed |

---

## Design Tokens (Tailwind config)

```ts
// tailwind.config.ts
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand:        '#53B175',
        'brand-light':'#EBF7F1',
        'brand-dark': '#2E7D52',
        amber:        '#FF9F43',
        'amber-light':'#FFF3E4',
        'text-pri':   '#1A1A2E',
        'text-sec':   '#6B7280',
        'text-muted': '#9CA3AF',
        border:       '#E5E7EB',
        'bg-sec':     '#F7F8FA',
        'shop-bg':    '#0D1117',
        'shop-surf':  '#161B22',
        'shop-text':  '#E2E8F0',
        'shop-muted': '#64748B',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xs: '6px', sm: '8px', md: '12px',
        lg: '16px', xl: '24px',
      },
    },
  },
}
```

---

## Pages

---

### `/` — Landing Page

**10 sections in order:**

---

#### Nav (sticky)

```
Left:  G logomark (28×28px, green bg, white G, radius-sm) + "getso" wordmark (Poppins 600 18px)
Mid:   Features · How it works · Download  (smooth-scroll, desktop only)
Right: "Sign in" ghost link + "Download the app →" green pill button
```

Mobile: hamburger collapses mid links. Download pill always visible.

---

#### Section 1 — Hero

```
EYEBROW:    FREE ON iOS & ANDROID  (Poppins 500 12px, brand green, uppercase)

H1:         Stop buying four        (Poppins 600 52px desktop / 36px mobile)
            pints of milk.

SUBHEAD:    Getso is the shared shopping list your household actually sticks to.
            Add items, see what your partner added, and tick things off
            together — even if you're in different aisles.
            (Poppins 400 18px, text-secondary, max-w-[520px], leading-relaxed)

CTAs:       [App Store badge] [Google Play badge]
            (both 48px tall pill buttons, side by side)
            → Play Store link is live: play.google.com/store/apps/details?id=app.getso.mobile
            → iOS link: placeholder until App Store listing is live

TRUST LINE: Free to use · No account needed to start · Works offline
            (Poppins 400 12px, text-muted, centered)
```

**Hero visual (right side on desktop, below on mobile):**
Phone mockup — light chrome device frame — showing the L2 list screen.
Pre-populated with realistic UK grocery items:
- Produce: Bananas, Avocados
- Dairy: Semi-skimmed milk 4 pints, Cathedral City mature cheddar
- Bakery: Warburtons medium sliced
- Household: Fairy washing up liquid

One item shows a blue partner avatar (Jake) on the right edge — demonstrates
sharing without any label needed.

---

#### Section 2 — Social Proof Strip

Full-width `bg-sec` band. 3 short beta tester quotes side by side (horizontal scroll on mobile).

```
Quote 1:
  "Finally. We had four different shopping apps and still came home with
   two bags of pasta and no butter."
  — Priya M., London

Quote 2:
  "Jake adds things from work, I add them at home. We get to Tesco and
   the list is just there, up to date."
  — Emma C., Manchester

Quote 3:
  "The price tracker saved us from arguing about the weekly shop budget."
  — Tom R., Edinburgh
```

Each quote: small avatar (initials, one of the 4 app avatar colour pairs),
name + city in muted text.

---

#### Section 3 — The Problem

Centered copy, max-w-[640px], bg-primary.

```
H2:   You know how this goes.
      (Poppins 600 36px)

BODY: One of you is in Sainsbury's. The other is at home.
      Neither of you knows if you've still got butter. You buy butter.
      There is butter. There are now three butters.
      (Poppins 400 16px, leading-7, text-secondary)

PAIN LIST (three rows, left-aligned × icon in red):
  ✗  "Did we need milk?" texts every week
  ✗  Buying things that are already in the cupboard
  ✗  Arguing about whose turn it was to check the list

BRIDGE (centered, brand green, Poppins 500 14px, mt-8):
  Getso fixes this.
```

---

#### Section 4 — Feature Cards (id="features")

2×2 grid desktop / single column mobile. Each card: white bg, radius-lg, 1px border, shadow.

**Card 1 — Live shared list**
- Visual: partial phone screenshot of L2 list with two presence avatars in header
- H3: `See what your household is adding — live.`
- Body: `Both of you can add, tick, and edit at the same time. No refreshing. No "did you update the list?" messages.`

**Card 2 — Shopping mode** (dark card — uses `shop-bg` background)
- Visual: partial screenshot of S1 shopping mode (dark chrome, float bar showing £12.47)
- H3 (white): `A focused mode for when you're actually in the shop.`
- Body (shop-muted): `Shopping mode is dark, distraction-free, and built for one-handed use in the biscuit aisle.`

**Card 3 — OCR price capture**
- Visual: partial screenshot of S3 OCR viewfinder (green corner marks, `£1.65` detected)
- H3: `Scan the shelf label. Log the price instantly.`
- Body: `Point your camera at any price label. Getso reads it and records it — no typing needed.`

**Card 4 — Trip summary**
- Visual: partial screenshot of S4s trip success (green hero band, `£34.18`, two avatar cards)
- H3: `See exactly what you spent — and who bought what.`
- Body: `Every shop ends with a breakdown by person. Great for splitting costs or tracking your weekly budget.`

---

#### Section 5 — How It Works (id="how-it-works")

3-column horizontal (desktop) / vertical (mobile). Number in green circle, heading, one-liner.

```
① Create or join a list
  One person sets up the list and shares an invite link.
  Your partner joins with one tap — no account needed to start.

② Add items from anywhere
  Add things on the sofa, on the bus, or when you clock that
  you're out of something at 11pm.

③ Shop together (or separately)
  In shopping mode, tick items off as you go.
  Both phones update in real time.
```

Connecting step line between numbers (desktop only, `--brand` colour, `h-0.5`).

---

#### Section 6 — Offline Callout

Full-width `bg-sec` band. Left: copy. Right: icon.

```
EYEBROW: WORKS WITHOUT SIGNAL  (brand, 11px, caps)

H3:      Supermarkets are terrible for phone signal.

BODY:    Getso stores everything on your phone first. Your list loads
         the moment you open it — no signal required. Changes sync
         automatically when you're back on Wi-Fi or 4G.
```

---

#### Section 7 — Guest Mode Callout

Narrow amber band. `amber-light` bg, `1px amber` top/bottom border.

```
TEXT:  Not ready to create an account? Try Getso as a guest first — no sign-up, no commitment.
CTA:   "Get the app — it's free"  (amber border pill button)
```

---

#### Section 8 — Download (id="download")

Centered, generous padding, bg-primary.

```
H2:    Get Getso free.

SUB:   iOS and Android. Works for couples, flatmates, and families.

CTAs:  App Store badge + Google Play badge (same as hero)

QR:    Small QR code → getso.app  (for desktop visitors)
       Label: "Scan to download on your phone"

CHIPS: Requires iOS 16+ · Android 10+ · Free forever
       (12px, text-muted, centered)
```

---

#### Footer

4-column (desktop) / stacked (mobile). `bg-sec`, `1px border` top.

```
Col 1 — Brand
  G logomark + "getso" wordmark
  "The shared shopping list for households."
  "Made in the UK" (small, muted)

Col 2 — App
  Download on iOS ↗
  Download on Android ↗

Col 3 — Product
  Features (scroll)
  How it works (scroll)
  Changelog

Col 4 — Legal & Support
  Privacy Policy
  Terms of Service
  Contact
  hello@getso.app

Bottom bar:
  © 2026 Getso · Privacy · Terms
  "All user data stored in the EU (Frankfurt)." (small, muted)
```

---

### `/privacy` — Privacy Policy

Plain English. Poppins. Max-w-[720px], centered, generous line-height.
Required for App Store submission.

```
Sections:
1. What we collect
   - Name and email (account creation)
   - Shopping lists and items (synced to EU servers)
   - Shopping session data (items, prices, timestamps)
   - Group membership and invite tokens
   - Push notification tokens
   - Anonymous usage analytics (Plausible, no PII)

2. What we never do
   - Sell your data
   - Show ads
   - Store data outside the EU
   - Keep data after you delete your account

3. Where data lives
   - Supabase (Frankfurt, Germany) — lists, items, sessions
   - Cloudflare Workers (EU edge) — API processing
   - Audio / camera: never stored. OCR is on-device.

4. Guest mode
   - Guest data lives on your device only
   - Nothing sent to our servers until you choose to sign up
   - If you never sign up, we have no record of you

5. Your rights (GDPR)
   - Export: request at privacy@getso.app
   - Delete account: Profile → Delete Account (in-app)
   - Purge timeline: all data deleted within 30 days
   - Rectification: update name/email in Profile

6. Data retention
   - Active accounts: data kept until you delete it
   - Deleted accounts: purged within 30 days
   - Push tokens: deleted on sign-out

7. Contact
   privacy@getso.app
   Last updated: May 2026
```

---

### `/terms` — Terms of Service

Plain English. England & Wales jurisdiction.

```
1. What Getso is
   A shopping coordination tool for households.
   Not a financial service, payment processor, or retail platform.

2. Your account
   One account per person. Must be 13 or older.
   Keep your credentials secure.

3. Your data
   You own your list data. We store it to make the service work.
   We claim no rights over your content.

4. Acceptable use
   No illegal content. No attempts to access other users' data.
   No reverse engineering or scraping.

5. Free tier
   The features listed on getso.app/features are free permanently.
   If a paid tier is introduced, existing free features stay free.

6. Service availability
   We aim for high availability but make no uptime guarantees.
   We may update features with reasonable notice.

7. Liability
   Getso is provided as-is. Not liable for data loss or service interruption.
   Maximum liability: the amount you paid us in the past 12 months.

8. Governing law
   England and Wales.

9. Changes
   We'll notify you of significant changes via app or email.
   Continued use after notice = acceptance.

10. Contact: legal@getso.app · Last updated: May 2026
```

---

### `/contact` — Contact Page

Two-column layout (desktop): copy left, form right.

```
Left:
  H2: Got a question?
  Body: We're a small team. We read every message and reply within
        one working day.
  Email: hello@getso.app
  Privacy note: For data requests, email privacy@getso.app

Form (right):
  Name (text, required)
  Email (email, required)
  Subject (select): General · Something's not working · Feature request
                    · Billing · Privacy or data · Press enquiry
  Message (textarea 5 rows, required)
  Submit: green pill "Send message →"
  Note: We don't share your email. Average reply: under 24 hours.
```

**Form submission:** POST to a Cloudflare Worker at `api.getso.app/contact` (or a
dedicated Worker route) that forwards to `hello@getso.app` via Cloudflare Email Routing.
No third-party form service. Rate-limit to 5 submissions per IP per hour.

---

### `/changelog` — Release Notes

Reverse-chronological. One `<section>` per release. Good for trust and SEO.

```
## v1.0 — May 2026
Initial launch.
Lists, groups, real-time sync, shopping mode, OCR price capture, trip summary,
guest mode, offline support.

## v1.1 — [date]
...
```

---

## Functional Deeplink Pages

These pages are visited when a user taps a Getso link outside the app. They must:
1. Detect if the app is installed → open it directly (Universal Links / App Links handle this)
2. If not installed → show context and redirect to the correct store

---

### `/join/[token]` — Group Invite

**Called from:** `GET /api/v1/invites/:token` (public Getso API, no auth required)

**Response includes:** `group_name`, `group_type`, `invited_by`, `member_count`,
`is_expired`, `is_accepted`

```tsx
// src/app/join/[token]/page.tsx
// Server component — fetch invite data at render time (SSR)

export default async function JoinPage({ params }) {
  const data = await fetch(`https://api.getso.app/api/v1/invites/${params.token}`)
    .then(r => r.json())
    .catch(() => null);

  // Render invite card or error state
}
```

**Page layout:**

```
Logo (small, top-center)

Invite card (max-w-[380px], bg-sec, radius-xl, shadow, centered):

  If valid invite:
    Group emoji (64×64px, brand-light bg, radius-full):
      🏠 flat · 👨‍👩‍👧 family · 👥 friends · ✦ other
    Group name (Poppins 600 20px)
    "Invited by [name]" (text-secondary 14px)
    Member count badge ("N member already" / "N members")
    Divider
    Primary CTA: "Download Getso to join"
      → iOS: App Store (with deferred deeplink via Install Referrer)
      → Android: Play Store (play.google.com/store/apps/details?id=app.getso.mobile)
    Note: "Open this link again after installing to join automatically"

  If expired:
    "This invite link has expired."
    "Ask your flatmate for a new one."
    Ghost CTA: "Download Getso →"

  If invalid:
    "This invite link isn't valid."
    Ghost CTA: "Download Getso →"
```

**Universal Links / App Links:** When the app IS installed, iOS and Android intercept
the `getso.app/join/:token` URL before it reaches the browser. This page is only seen
by users who don't have the app. The AASA and assetlinks.json files (already in
`public/.well-known/`) handle this routing.

---

### `/verify/[token]` — Email Verification

**Called from:** Supabase Auth sends a verification email with a link to
`getso.app/verify/:token`. Supabase must be configured to use this URL as the
redirect target in Auth Settings → Email Templates.

```tsx
// src/app/verify/[token]/page.tsx
// Can be a client component — reads token, calls Supabase to verify

'use client';
// On mount: call supabase.auth.verifyOtp({ token_hash, type: 'email' })
// Success → show green checkmark + "Open Getso"
// Error   → show error + link to download
```

```
Success state:
  Large green checkmark (64px, brand colour)
  Heading: "Email verified!"
  Body:    "You're all set. Open Getso to continue."
  CTA:     "Open Getso →"  (deep link: getso://verified)
  Fallback: "Download Getso" (if app not installed)

Error state:
  Heading: "This verification link has expired."
  Body:    "Open the Getso app and request a new verification email."
  CTA:     "Download Getso →"
```

---

## Existing Files to Preserve

These files already exist and are correctly configured. Do not overwrite or move them —
copy them into the new Next.js `public/` folder unchanged.

### `public/.well-known/assetlinks.json`

Android App Links verification. The SHA-256 cert fingerprint is already set correctly:
```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "app.getso.mobile",
    "sha256_cert_fingerprints": [
      "D1:D6:4D:E2:40:51:8C:EA:AE:74:48:DC:61:E6:54:98:0E:01:23:38:5D:48:7F:94:75:51:CF:40:E5:C6:26:EC"
    ]
  }
}]
```

### `public/.well-known/apple-app-site-association`

iOS Universal Links. Currently a placeholder — must be updated with the Apple Team ID
and bundle ID once the Apple Developer account is configured:
```json
{
  "applinks": {
    "details": [{
      "appIDs": ["<TEAM_ID>.app.getso.mobile"],
      "components": [
        { "/": "/join/*" },
        { "/": "/verify/*" },
        { "/": "/list/*" }
      ]
    }]
  }
}
```

### `public/_headers`

Cloudflare Pages header overrides. Copy to project root (not inside `public/`):
```
/.well-known/assetlinks.json
  Content-Type: application/json
  Access-Control-Allow-Origin: *

/.well-known/apple-app-site-association
  Content-Type: application/json
  Access-Control-Allow-Origin: *
```

---

## Migration Steps

1. **Init Next.js 15** in the repo root:
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-git
   ```

2. **Copy preserved files:**
   ```bash
   # These already exist — copy from old public/ to new public/
   cp public/.well-known/assetlinks.json public/.well-known/assetlinks.json
   cp public/.well-known/apple-app-site-association public/.well-known/apple-app-site-association
   # Move _headers to project root (Cloudflare Pages reads it from there)
   mv public/_headers _headers
   ```

3. **Add Cloudflare Pages adapter:**
   ```bash
   npm install --save-dev @cloudflare/next-on-pages
   ```
   Add to `next.config.ts`:
   ```ts
   import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
   if (process.env.NODE_ENV === 'development') await setupDevPlatform();
   ```

4. **Add Poppins via `next/font`:**
   ```ts
   // src/app/layout.tsx
   import { Poppins } from 'next/font/google';
   const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600'],
                              variable: '--font-poppins' });
   ```

5. **Build pages** in the order in §Implementation Priority below.

---

## Implementation Priority

Build in this order — each step unblocks something real:

| # | Page / Task | Unblocks |
|---|---|---|
| 1 | Migrate `.well-known/` + `_headers` to Next.js structure | Android deeplinks continue working |
| 2 | `/privacy` page | App Store submission |
| 3 | `/terms` page | App Store submission |
| 4 | `/contact` page | App Store support URL requirement |
| 5 | `/join/[token]` deeplink page | Invite links show a proper landing |
| 6 | `/verify/[token]` deeplink page | Email verification flow completes in browser |
| 7 | `/` landing page (hero + download section) | Google Play / App Store listing review |
| 8 | `/` full landing (all 8 sections) | Marketing |
| 9 | `/changelog` | Trust, SEO |

---

## GitHub Actions (CI/CD)

Cloudflare Pages auto-deploys on push to `main`. No GitHub Actions needed for the web
site itself — Cloudflare Pages handles the build and deploy pipeline natively.

If you want preview deployments on PRs, enable "GitHub Integration" in the Cloudflare
Pages dashboard. This creates per-branch preview URLs automatically.

---

## Definition of Done

- [ ] `getso.app/.well-known/assetlinks.json` returns JSON with correct `Content-Type`
- [ ] `getso.app/.well-known/apple-app-site-association` returns JSON (TEAM_ID filled in)
- [ ] `getso.app/privacy` is live and accurate (linked in App Store submission)
- [ ] `getso.app/terms` is live
- [ ] `getso.app/contact` is live with working form
- [ ] `getso.app/join/:token` shows invite card for a valid token, error for expired
- [ ] `getso.app/verify/:token` shows success after Supabase verifies the token
- [ ] `getso.app/` loads in < 2s on mobile 4G (Lighthouse ≥ 95)
- [ ] Plausible analytics script installed (no cookie banner needed)
- [ ] Open Graph image renders correctly when shared to WhatsApp/iMessage
