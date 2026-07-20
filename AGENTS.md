# Soedirman Student Summit 2026 - Agent Guide

## Project Overview
Astro static site (v5) for Soedirman Student Summit 2026. Indonesian-language university event website with React components, Tailwind CSS, and animations (GSAP, Motion, Swiper).

**Node requirement:** >=22.12.0

## Commands
```
npm run dev      # Start dev server at localhost:4321
npm run preview  # Preview production build
npm run astro    # Run Astro CLI commands
```

No lint, typecheck, test, or format scripts are configured. Astro provides built-in type checking via `astro check` but it is not configured as a script.

## Stack & Path Aliases
- **Astro 5** + React 19 (`.astro` and `.tsx` components)
- **Tailwind CSS 4** with `@tailwindcss/vite`
- **TypeScript strict** (extends `astro/tsconfigs/strict`)
- **Path alias:** `@/*` → `./src/*` (configured in `tsconfig.json` and `astro.config.mjs`)

## Structure
```
src/
  pages/          # Route files (.astro); subdirs become routes (info-gensoed/, penugasan/)
  components/     # Reusable .astro and React components
  layouts/        # Layout.astro is the main template
  styles/         # global.css
  assets/         # Static images
  lib/            # Utilities
```

## Key Implementation Details
- Layout language is Indonesian (lang="id")
- Default page title/description in `Layout.astro` (lines 11-12)
- Global CSS in `src/styles/global.css`
- Uses clsx and tailwind-merge for className utilities

## Build Artifacts
- Output directory: `./dist/`
- Type definitions: `.astro/` (generated, in `.gitignore`)
- Do not commit `.astro/`, `dist/`, or `node_modules/`
