# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multi-page marketing website for Calic Consulting, a transformation consultancy working across the public, private, and non-profit sectors. Built as static HTML files with embedded CSS and JavaScript — no build step required.

**Tagline**: "Precision. Expertise. Public Value."
**Tone**: Understated and confident — let credentials speak. No flashy marketing.
**Named clients**: DCMS, DBT (Department for Business and Trade), UKRI, CMA (Competition and Markets Authority)

## Related Sites

- **Live Site**: https://calicconsulting.co.uk (built via Lovable — being replaced by this static site)
- **Contact**: info@calicconsulting.co.uk

## Tech Stack

- **Framework**: Static HTML (no build step)
- **Styling**: Tailwind CSS via CDN + embedded `<style>` for custom brand tokens
- **JavaScript**: Vanilla JS, embedded in each HTML file
- **Fonts**: Century Gothic (system font, sans-serif fallback)
- **Screenshots**: Puppeteer (locally installed via npm)

## Commands

### Screenshot a page (desktop, 1440px)
```bash
node screenshot.js <page>.html
```
Outputs `screenshot-full.png`. Forces all `.reveal` elements visible before capture.

### Screenshot all pages at mobile width (375px)
```bash
node screenshot-mobile.js
```
Outputs `mobile-<page>.png` for each page.

### Capture reference screenshots from the live site
```bash
node capture-all-pages.js
```
Navigates the live SPA via click events (direct URL routing returns 404s), captures screenshots and text content, downloads images. Outputs to `assets/ref-<page>.png`.

### Capture a single live site page
```bash
node capture-page.js <pagename>
```

## File Structure

```
training/
├── index.html              # Main landing page (hero, social proof, services, differentiators, CTA)
├── about.html              # About page (company story, approach, values)
├── services.html           # 7 service pillars with sub-services
├── experience.html         # Case studies (central govt, public sector, non-profit)
├── team.html               # Team page (Altaf Daya, Bidesh Sarkar CBE)
├── contact.html            # Contact form + info (mailto-based, no backend)
├── screenshot.js           # Puppeteer screenshot utility (desktop)
├── screenshot-mobile.js    # Puppeteer screenshot utility (all pages at 375px)
├── capture-all-pages.js    # Live site content/screenshot extractor
├── capture-page.js         # Single live page content extractor
├── assets/
│   ├── img-0.png           # Calic logo (RGBA, transparent bg — no CSS filter needed)
│   ├── img-1.png           # DCMS logo
│   ├── img-2.png           # DBT logo
│   ├── img-3.png           # UKRI logo
│   ├── img-4.png           # CMA logo
│   ├── altaf-photo-*.png   # Altaf headshot
│   ├── bidesh-photo-*.png  # Bidesh headshot
│   └── ref-*.png           # Reference screenshots from live site
├── CLAUDE.md
└── .claude/
    └── settings.json
```

## Git Workflow

Feature branches use the `feature/` prefix (e.g., `feature/services-page`).

**IMPORTANT**: Feature branches may use `index.html` during development. After merging, always verify `index.html` contains the main landing page (title: "Calic Consulting"), not feature content.

## Design System

### Colors

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Navy | `#2C3D4F` | `navy` | Hero bg, footer, headers |
| Navy dark | `#1e2d3d` | `navy-dark` | Hover states on navy |
| Teal | `#7EC8D8` | `teal` | CTA buttons, accents, active nav, headings |
| Teal light | `#a3dbe6` | `teal-light` | Hover states on teal |
| White | `#FFFFFF` | — | Body bg, cards |
| Light grey | `#F5F6F7` | `grey-light` | Alternating section bg |
| Body text | `#333333` | `text-body` | Body copy |

Do not introduce other accent colours. Teal (`#7EC8D8`) is the signature accent.

### Tailwind Config Block

Every HTML page includes this config in `<head>`:
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          navy: '#2C3D4F',
          teal: '#7EC8D8',
          'teal-light': '#a3dbe6',
          'grey-light': '#F5F6F7',
          'text-body': '#333333',
        },
        fontFamily: {
          sans: ['Century Gothic', 'sans-serif'],
        },
        borderRadius: { sm: '4px', md: '6px', lg: '8px' }
      }
    }
  }
</script>
```

### Typography

- **Font**: Century Gothic (fallback: sans-serif)
- **Base size**: 16px
- **Font smoothing**: antialiased
- **Color**: `#000` for headings, `#333333` for body copy

### Corner Radii

Squared/luxe aesthetic — avoid rounded pills: `4px`, `6px`, `8px`.

### Logo

Infinity-style icon mark (assets/img-0.png). RGBA PNG with transparency — renders correctly on navy background without any CSS filter. Use `h-[50px] md:h-[80px]` for responsive sizing.

## Architecture

### Shared Patterns Across All Pages

Every page follows the same structure:
1. **`<head>`**: Tailwind CDN, config block, embedded `<style>` (scroll-progress, reveal animations, cursor glow, nav-link hover, mobile menu)
2. **Header**: Fixed navy header with logo (`h-[50px] md:h-[80px]`), desktop nav (hidden on mobile), hamburger menu button, mobile nav dropdown
3. **Hero**: Navy background, teal label (`tracking-[0.3em] uppercase`), white heading, grey subtitle
4. **Page content**: Varies per page
5. **CTA tagline**: Grey-light bg, centred text
6. **Teal accent bar**: `h-2 bg-teal`
7. **Footer**: Navy bg, 3-column grid (logo+tagline, quick links, contact+LinkedIn), copyright bar

### Interactive Features (embedded JS in each page)

- **Scroll progress bar**: Fixed 3px teal bar at top, width tracks scroll position
- **Scroll-reveal animations**: `.reveal` class with `opacity: 0; translateY(30px)`, triggered by IntersectionObserver at 0.1 threshold. Staggered with `.reveal-delay-1` through `.reveal-delay-7`
- **Cursor glow**: Desktop only (`lg:block`), 300px radial gradient following mouse
- **Mobile menu**: Toggle via hamburger button, `max-height` transition

### Responsive Breakpoints

- **Mobile**: Default (375px target)
- **`md:` (768px)**: Desktop nav visible, grid columns expand, logo scales up
- **`lg:` (1024px)**: Full desktop layout, cursor glow enabled

Key responsive patterns:
- Logo: `h-[50px] md:h-[80px]`
- Client logos: `h-12 md:h-20`
- Hero min-height: `min-h-[60vh] md:min-h-[80vh]` (index only)
- Mobile nav links: `py-2` padding for touch targets
- Team photos: `w-32 h-32 md:w-40 md:h-40`

### Screenshot-Driven Development Workflow

When building or refining pages:

1. **Generate/edit** the HTML file
2. **Screenshot**: `node screenshot.js <page>.html` → produces `screenshot-full.png`
3. **Compare** against reference (`assets/ref-<page>.png`). Check spacing, fonts, colors, alignment, radii, shadows, responsive behavior
4. **Fix** mismatches. Be specific (e.g., "heading is 32px but should be 24px")
5. **Re-screenshot** and compare again
6. **Repeat** until within ~2–3px. Always do at least 2 rounds.

**Important**: screenshot.js forces `.reveal.visible` before capture — without this, all animated elements are invisible (opacity: 0).

### Rules

- Do not add features, sections, or content not present in the reference
- Match the reference exactly — do not "improve" the design
- Keep code clean but don't over-abstract — inline Tailwind classes are fine
- **index.html is the main landing page** — don't overwrite with feature content

## Page-Specific Content

### Services (services.html)
7 pillars, each with description and 6 sub-services: Finance & Financial Management, Digital Data & Technology, People & Workforce Transformation, Change & Transformation, Programme & Portfolio Management, Strategy & Business Cases, Commercial & Procurement. Full content is in the HTML file and in the service pillars listing below.

### Team (team.html)
- **Altaf Daya** — Founding Partner. Photo uses `object-top` to avoid head cutoff.
- **Bidesh Sarkar CBE** — Strategic Partner.
- Full-page navy background (unlike other pages which use white).

### Contact (contact.html)
- Form submits via `mailto:` (no backend). Subject dropdown with 8 options.
- Contact info sidebar with email, LinkedIn, company registration note.

## Common Tasks

### Update Content
Edit the relevant HTML file directly. All content, styles, and scripts are embedded.

### Change Colors
Search for hex codes: `#2C3D4F` (navy), `#7EC8D8` (teal), `#F5F6F7` (grey), `#333333` (text).

### Update Contact Email
Search for `info@calicconsulting.co.uk` and replace across all files.

### Add a New Page
Copy any existing page as template. Update: `<title>`, hero content, nav active state (`text-teal` + `active` class on correct link), mobile nav active state, page content. Keep header/footer/scripts identical.

## Notes

- Keep the single-file architecture — no bundlers or build steps
- Maintain the squared corner aesthetic (no pills)
- Dark navy (`#2C3D4F`) for hero sections and footer — keep contrast high with white text
- Test scroll animations after content changes
- The live site is a Lovable SPA — direct URL navigation returns 404s. Use click-based navigation in Puppeteer scripts.

## Tools & Permissions

Pre-approved for use without prompting:
- **Web tools**: WebSearch, WebFetch
- **Non-destructive Bash**: source, export, curl, jq, cat, ls, grep, echo, which, wc, file, pwd, mkdir, touch, head, tail, find, sort, tree, diff, node, npm, npx, git status, git diff, git log

## Environment

- Platform: Windows 11
- Shell: bash (Unix syntax)
- Path contains spaces — always quote file paths
