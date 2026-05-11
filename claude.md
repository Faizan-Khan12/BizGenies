# Biz Genies — Project Context (claude.md)

> **READ THIS FIRST every session before touching any code.**

---

## Project Overview

**Name:** Biz Genies  
**Type:** Next.js 16 (App Router) marketing website  
**Stack:** Next.js · TypeScript · Vanilla CSS (no Tailwind) · React  
**Path:** `/Users/faizankhan/Documents/Projects/xcendlabs-next`  
**Repo:** `https://github.com/Faizan-Khan12/BizGenies.git`  
**Dev command:** `npm run dev` (package.json has `--webpack` to avoid Turbopack crash)

---

## ✅ Current Architecture (FULLY REFACTORED)

The old Vite/minified-bundle approach has been **completely replaced** with a proper Next.js App Router structure.

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — metadata only
│   ├── page.tsx                # Home page
│   ├── globals.css             # Design tokens + global styles
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── reviews/page.tsx
│   ├── our-work/page.tsx
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   └── api/proxy/leadconnector/[...path]/route.ts  # DISABLED (503 stub)
│
└── components/
    ├── Navbar.tsx              # Client component — mobile drawer + mega menu
    ├── Footer.tsx              # Server component — branding/contact + quick links
    ├── SiteLayout.tsx          # Wrapper: Navbar + children + Footer
    └── home/
        ├── HeroSection.tsx     # Hero + lead capture form (client)
        ├── TickerBanner.tsx    # Scrolling stats ticker
        ├── ServicesSection.tsx # 6-card services grid + SERVICES_DATA export
        ├── TradesTicker.tsx    # 2-row scrolling trades tickers with Lucide icons
        ├── ProcessSection.tsx  # 3-step process
        ├── ReviewsSection.tsx  # Scrolling reviews + REVIEWS_DATA export
        ├── WhyUsSection.tsx    # 6-card why-us grid with Lucide icons
        ├── FaqSection.tsx      # Accordion FAQ (client)
        └── CtaSection.tsx      # Final CTA block
```

---

## Brand

| Token | Value |
|-------|-------|
| Primary accent | `#FF6B35` (orange) |
| Secondary accent | `#F5A623` (amber) |
| Logo | Image asset at `/public/biz-genies-logo.png`; current favicons generated from symbol at `/public/favicon-v2.ico`, `/public/favicon-v2.png`, `/public/favicon-v2-192.png`, `/public/apple-touch-icon-v2.png` |
| Font | Inter (body), Space Grotesk (headings), Space Mono (mono) |
| Background | `#0e0e0e` dark, `#f8f7f4` light |

---

## Key Content

### Positioning
- Location-neutral marketing systems for local service businesses
- Do not position Biz Genies as Miami-only; the agency location remains Miami, FL on the Contact page only

### Services
`website` · `text-back` · `reviews` · `follow-up` · `campaigns` · `seo` · `ads` · `inbox`

### Pricing
- Starter: $197/mo — website, mobile optimization, hosting, Google Business Profile setup
- Pro: $497/mo (most popular) — Starter plus missed call text back, review gating, automated lead flow, personalized all-in-one inbox, one-click campaigns
- Custom — custom requirements beyond Starter and Pro

### Contact
- Phone: (305) 600-5727
- Email: hello@bizgenies.com
- Agency location: Miami, FL

---

## Disabled / Pending

- **LeadConnector API proxy** — returns 503. Re-enable when GHL keys are ready.
- **Logo** — CSS text placeholder. Replace with SVG/PNG asset when ready.
- **Work portfolio images** — gradient placeholders. Replace with real screenshots.

---

## Conventions

- All section components in `src/components/home/` are server components unless they need state → add `'use client'` only then.
- CSS lives in `globals.css` — use CSS vars (`var(--accent)`, `var(--text)`, etc.)
- No Tailwind. Use inline styles for layout, class names from globals for typography/animation.
- Pages import `SiteLayout` as the outer wrapper.
- Shared data (REVIEWS_DATA, SERVICES_DATA) exported from component files for reuse across pages.

---

## Git

```bash
cd /Users/faizankhan/Documents/Projects/xcendlabs-next
git add -A
git commit -m "refactor: full Next.js modular structure"
git push -u origin main
```
