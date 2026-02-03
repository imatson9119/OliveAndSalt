# Olive & Salt

Olive & Salt is a SvelteKit site for a personal chef service. This repo includes the marketing site, contact form, and shared UI components.

## Tech Stack

- SvelteKit + Svelte 5
- Tailwind CSS v4
- Cloudflare Pages adapter (via Wrangler)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## Common Scripts

```bash
npm run check        # Typecheck and Svelte diagnostics
npm run build        # Production build
npm run preview      # Build + preview using Wrangler
npm run deploy       # Build + deploy to Cloudflare Pages
npm run cf-typegen   # Generate Cloudflare worker types
```

## Deployment

This project is configured for Cloudflare Pages via `wrangler.jsonc`. Use:

```bash
npm run deploy
```

If you are deploying to GitHub Pages instead, see `DEPLOYMENT.md` for the setup guide.

## Project Structure

- `src/routes`: SvelteKit routes and layouts
- `src/lib/components`: Reusable UI and page components
- `src/lib/constants.ts`: Copy and configuration constants
- `static/`: Static assets (images, icons, robots.txt, sitemap)
