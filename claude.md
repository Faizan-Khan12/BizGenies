# Biz Genies — Project Context (`claude.md`)

> **Read this file at the start of every session.** It contains the full context for the Biz Genies website project.

---

## 🏢 Business Overview

- **Brand Name:** Biz Genies (previously XcendLabs — all old references have been replaced)
- **Business Model:** Done-for-you marketing systems for local service businesses in the US (trades, contractors, home services)
- **Target Market:** Local service businesses (plumbers, HVAC, electricians, roofers, landscapers, etc.) — primarily US-based
- **Location:** Miami, FL
- **Tagline:** Marketing Systems for Local Businesses
- **Value Prop:** Websites + automation + reviews + SEO — full systems, not just sites
- **Email:** hello@bizgenies.com
- **Domain:** bizgenies.com (placeholder; was xcendlabs.io)
- **Twitter/Social:** @BizGenies

### Team
| Name | Role |
|------|------|
| Sharib | Founder & Strategist |
| Waris | Lead Developer |
| Faizan | Automation Engineer |
| Tiffany | Client Success |

---

## 🗂️ Project Structure

```
/Users/faizankhan/Documents/Projects/xcendlabs-next/
├── src/
│   └── app/
│       ├── layout.tsx          ← Page metadata, head tags, CSS/JS imports
│       ├── globals.css         ← Minimal global styles
│       └── [[...slug]]/
│           └── page.tsx        ← Catch-all route (renders #root div)
│       └── api/
│           └── proxy/
│               └── leadconnector/[...path]/
│                   └── route.ts ← GHL proxy (currently DISABLED — returns 503)
├── public/
│   └── site/
│       ├── index-je0mC7Us.js   ← ⭐ MAIN SITE BUNDLE (Vite-built React app)
│       ├── index-C53Id17u.css  ← Main site CSS (Tailwind classes)
│       ├── biz-genies-overrides.css ← ⭐ Custom overrides (logo, layout fixes)
│       ├── css2(1)             ← Google Fonts (Inter)
│       └── [other assets...]
├── package.json                ← "dev": "next dev --webpack" (Turbopack disabled!)
└── claude.md                   ← This file
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 16.2.5** (App Router) |
| Bundler | **Webpack** (`--webpack` flag — Turbopack is disabled due to a fatal crash bug) |
| Site Content | Pre-built **Vite + React** bundle in `public/site/` |
| Styling | Tailwind CSS (in bundle) + Custom `biz-genies-overrides.css` |
| Language | TypeScript |
| Backend | GoHighLevel / LeadConnector (via proxy — currently disabled) |

### ⚠️ Critical Notes
1. **Do NOT remove `--webpack` from the dev script.** Turbopack crashes with a fatal panic on this project (`Next.js package not found` internally), causing an infinite browser refresh loop.
2. **The main site content is in `public/site/index-je0mC7Us.js`** — this is a minified/bundled Vite React app. All page content, components, routing, and text lives here. It is NOT standard Next.js pages.
3. **The Next.js layer** (`src/app/`) is purely a shell — it renders a `<div id="root">` that the Vite bundle mounts into. It handles metadata, CSS imports, and the proxy API route.

---

## 🛣️ Pages / Routes

| Route | Component | Notes |
|-------|-----------|-------|
| `/` | Home | Hero + services overview |
| `/services` | Services | Full services breakdown |
| `/our-work` | Our Work | Portfolio / case studies |
| `/reviews` | Reviews | Client testimonials |
| `/pricing` | Pricing | Packages & pricing |
| `/about` | About (`UF` component) | Team + story + values |
| `/contact` | Contact | Contact form (currently disconnected) |
| `/privacy-policy` | Privacy Policy | Legal page |

---

## 🎨 Design System

### Colors
- **Accent / Primary:** Orange `#FF6B35` (also used for "Biz Genies" on About headline)
- **Brand Purple:** `#6C47FF` (used in logo gradient)
- **Logo Gradient:** `135deg, #6C47FF → #FF6B35`
- **Background:** Dark theme (`bg-bg`, `bg-surface-2`)
- **Text:** `text-text`, `text-muted`
- **Border:** `border-border`

### Favicon / Browser Icon
- Inline SVG: Purple rectangle (`#6C47FF`) with white "BG" text
- Defined in `src/app/layout.tsx` `icons.icon` field

### Logo (Navbar, Footer, Mobile Menu)
- **Type:** CSS text placeholder (no image file)
- **Class:** `.biz-genies-logo` + `.biz-genies-logo--sm` (navbar) / `.biz-genies-logo--lg` (footer)
- **Renders:** "Biz Genies" in a purple→orange gradient, bold
- **Defined in:** `public/site/biz-genies-overrides.css`
- When a real logo image is ready, update the JS bundle to use `<img>` with the new src

### Typography
- Font: Inter (Google Fonts via `css2(1)`)

---

## 🔌 Integrations & Connections

| Integration | Status | Notes |
|-------------|--------|-------|
| GoHighLevel / LeadConnector forms | **DISABLED** | Proxy returns 503. Re-enable by restoring `route.ts` to forward to `https://backend.leadconnectorhq.com` |
| Phone click-to-call (`tel:`) | **DISABLED** | Changed to `#` — no number connected yet |
| Email (`hello@bizgenies.com`) | Placeholder | Domain/inbox not yet configured |
| Calendar booking (LeadConnector) | **DISABLED** | Goes through the same proxy (disabled) |

---

## 📝 Changes Made So Far

### Branding (XcendLabs → Biz Genies)
- `src/app/layout.tsx`: Title, author, OG tags, Twitter handle, favicon
- `public/site/index-je0mC7Us.js`: All 12× `XcendLabs`, all `@xcendlabs`, `xcendlabs.io`, email → `hello@bizgenies.com`
- `public/site/saved_resource.html` + `1776148884210495199.html`: Same replacements
- Phone `tel:3056005727` → `#`

### Logo
- Removed old `<img>` pointing to external Vibe CDN URL
- Replaced with CSS `.biz-genies-logo` span placeholder in all 3 locations (2× navbar, 1× footer)

### About Page
- "Biz Genies" in the H1 headline (`"We're Biz Genies — Miami's Marketing Team for the Trades"`) wrapped in `<span style="color: #FF6B35">` for orange color

### Forms & Calls
- `api/proxy/leadconnector/[...path]/route.ts` → returns 503 stub for all requests

### Dev Server Fix
- Changed `"dev": "next dev"` → `"dev": "next dev --webpack"` in `package.json`
- Reason: Turbopack (default in Next.js 15+/16) panics with fatal error on this project

### CSS Layout Overrides (`biz-genies-overrides.css`)
- Logo placeholder styles
- Mobile padding fixes (hero, cards, footer)
- Responsive grid fixes on small screens
- Form input sizing consistency
- Body overflow-x fix
- Button touch target minimum 44px

---

## 🚀 Running the Project

```bash
cd /Users/faizankhan/Documents/Projects/xcendlabs-next
npm run dev
# → http://localhost:3000
```

**Always use `npm run dev`** — do not use `next dev` directly (missing `--webpack` flag will trigger Turbopack crash).

---

## 🗒️ Backlog / Known TODOs

- [ ] Create/design a real Biz Genies logo SVG or image file
- [ ] Replace logo placeholder with actual logo image in all 3 locations (search for `biz-genies-logo` in JS bundle)
- [ ] Re-enable GHL form proxy when business is ready to receive leads
- [ ] Update phone number when business line is set up
- [ ] Configure `hello@bizgenies.com` email
- [ ] Set proper domain in metadata (OG / Twitter image URLs still point to old Vibe CDN)
- [ ] Update OG image to Biz Genies branding
- [ ] Set `robots: { index: true, follow: true }` in layout.tsx when site is ready to go live
- [ ] Further mobile padding audit after real device testing
- [ ] Review and update privacy policy page with Biz Genies branding (still references xcendlabs.io in the log files policy text)

---

## 🧠 Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | SEO metadata, CSS/JS imports, favicon |
| `public/site/index-je0mC7Us.js` | ALL site content & components (minified Vite bundle) |
| `public/site/biz-genies-overrides.css` | Custom branding + layout fixes (edit this for visual changes) |
| `src/app/api/proxy/leadconnector/[...path]/route.ts` | Form/booking proxy (currently disabled) |
| `package.json` | `"dev": "next dev --webpack"` — never remove `--webpack` |
