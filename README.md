# Soufiane's portfolio

A lightweight, static, bilingual (English/French) profile site presenting Soufiane's professional experience, developed apps, skills, and certifications: https://s-azami.vercel.app/

## Stack

- Astro (static output) with TypeScript in its strictest configuration
- Plain CSS (light and dark themes, print stylesheet)
- `@astrojs/sitemap`, plus generated `robots.txt` and JSON-LD structured data
- Deployed on Vercel (`vercel.json` adds security headers)

## Prerequisites

- Node.js 22 LTS or newer is recommended. Astro 5 still runs on Node 20.3+, but Node 20 is end-of-life and the next Astro major version requires Node 22.12+.
- npm

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start the development server
npm run build     # create a production build in dist/
npm run preview   # serve the production build locally
npm run check     # Astro and TypeScript checks
```

## Editing content

All copy lives in typed modules under `src/data`. A text value is either a plain string (identical in both languages) or an `{ en, fr }` object.

| File | Contents |
| --- | --- |
| `profile.ts` | Name, headline, profile links, About text, SEO title and description, optional email and CV links |
| `experiences.ts` | Roles, dates (`YYYY-MM`, omit `end` for the current role), highlights, technologies |
| `apps.ts` | Developed apps: summary, technologies, links, and screenshots. Each app also gets its own page at `/apps/<slug>/` |
| `skills.ts` | Skill categories and groups |
| `certifications.ts` | Certifications and their verification links |
| `sections.ts` | Page sections, used for the navigation and section headings |

Shared interface strings (navigation labels, "Present", etc.) are in `src/i18n.ts`.

`public/og-image.png` (the social preview image) shows the name and headline, so regenerate it if those change.

### Adding app screenshots

1. Put the image files (PNG, JPEG or WebP) in `src/assets/apps/<slug>/`. When the app shows its text in the visitor's language, use one folder per language (`en/`, `fr/`), as Wafi does.
2. Import each one at the top of `src/data/apps.ts`, e.g. `import homeEn from '../assets/apps/wafi/en/home.webp';`.
3. List them in the app's `screenshots`, in display order, each with alternative text in both languages: `{ image: { en: homeEn, fr: homeFr }, alt: { en: '…', fr: '…' } }`, or `image: home` when one image serves both languages.

At build time, Astro resizes the screenshots and converts them to WebP. Visitors see the screenshots in their language, and each thumbnail links to a full-size copy. Until an app has screenshots, its page says they are coming soon.

Wafi also has its own self-contained page in `public/wafi/` (made in the KindWords repository, served at `/wafi/` and linked as "Website"). It uses its own copies of the screenshots, so update both folders when they change.

## Project structure

```text
public/            # Favicons, the social preview image, and Wafi's page (wafi/)
src/
├── assets/        # App screenshots, optimized at build time
├── components/    # Page sections and shared components (Section, SiteNav, Localized, LanguageToggle)
├── data/          # Typed content
├── i18n.ts        # Locales, translation helpers, interface strings
├── layouts/       # Document layout and metadata
├── lib/           # Structured data (JSON-LD)
├── pages/         # Routes (index, apps/[slug], robots.txt)
└── styles/        # Global stylesheet
```

## How the language switch works

Both languages are rendered into the HTML; CSS shows the one matching `<html lang>`. A small inline script applies the visitor's saved choice (`localStorage` key `portfolio-language`) before the first paint, and `LanguageToggle.astro` handles switching.
