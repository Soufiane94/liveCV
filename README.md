# Soufiane's portfolio

A lightweight, static, bilingual (English/French) profile site presenting Soufiane's professional experience, skills, and certifications: https://s-azami.vercel.app/

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
| `skills.ts` | Skill categories and groups |
| `certifications.ts` | Certifications and their verification links |
| `sections.ts` | Page sections, used for the navigation and section headings |

Shared interface strings (navigation labels, "Present", etc.) are in `src/i18n.ts`.

`public/og-image.png` (the social preview image) shows the name and headline, so regenerate it if those change.

## Project structure

```text
public/            # Favicons and the social preview image
src/
├── components/    # Page sections and shared components (Section, Localized, LanguageToggle)
├── data/          # Typed content
├── i18n.ts        # Locales, translation helpers, interface strings
├── layouts/       # Document layout and metadata
├── lib/           # Structured data (JSON-LD)
├── pages/         # Routes (index, robots.txt)
└── styles/        # Global stylesheet
```

## How the language switch works

Both languages are rendered into the HTML; CSS shows the one matching `<html lang>`. A small inline script applies the visitor's saved choice (`localStorage` key `portfolio-language`) before the first paint, and `LanguageToggle.astro` handles switching.
