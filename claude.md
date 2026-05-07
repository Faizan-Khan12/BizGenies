# Biz Genies — Project Context (claude.md)

> **READ THIS FIRST every session before touching any code.**

---

## Project Overview

**Name:** Biz Genies  
**Type:** Next.js 15 (App Router) marketing website  
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
    ├── Footer.tsx              # Server component — links + contact
    ├── SiteLayout.tsx          # Wrapper: Navbar + children + Footer
    └── home/
        ├── HeroSection.tsx     # Hero + lead capture form (client)
        ├── TickerBanner.tsx    # Scrolling stats ticker
        ├── ServicesSection.tsx # 6-card services grid + SERVICES_DATA export
        ├── TradesTicker.tsx    # 2-row scrolling trades tickers
        ├── ProcessSection.tsx  # 3-step process
        ├── ReviewsSection.tsx  # Scrolling reviews + REVIEWS_DATA export
        ├── WhyUsSection.tsx    # 6-card why-us grid
        ├── FaqSection.tsx      # Accordion FAQ (client)
        └── CtaSection.tsx      # Final CTA block
```

---

## Brand

| Token | Value |
|-------|-------|
| Primary accent | `#FF6B35` (orange) |
| Secondary accent | `#F5A623` (amber) |
| Logo | CSS text gradient (purple → orange), `biz-genies-logo` class |
| Font | Inter (body), Space Grotesk (headings), Space Mono (mono) |
| Background | `#0e0e0e` dark, `#f8f7f4` light |

---

## Key Content

### Team (About page)
1. Stephen Avis — Founder & Strategist
2. Faizan Khan — Automation Engineer

### Services
`website` · `text-back` · `reviews` · `follow-up` · `campaigns` · `seo` · `ads` · `inbox`

### Pricing
- Starter: $197/mo
- Growth System: $297/mo (most popular)
- Pro: $497/mo

### Contact
- Phone: (305) 600-5727
- Email: hello@bizgenies.com
- Location: Miami, FL (Nationwide)

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
