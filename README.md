# Soufiane's portfolio

A lightweight, static personal profile site for presenting Soufiane's professional experience, skills, and (in a later phase) coding projects.

## Stack

- Astro
- TypeScript
- Plain CSS
- Static site generation
- Node.js and npm

## Prerequisites

- Node.js 20.19+ or 22.12+ (a current Node LTS version)
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run Astro and TypeScript checks:

```bash
npm run check
```

## Project structure

```text
src/
├── components/    # Page sections
├── data/          # Typed experience and skills content
├── layouts/       # Shared document layout and metadata
├── pages/         # Astro routes
└── styles/        # Global stylesheet
```

Update `src/data/experiences.ts` and `src/data/skills.ts` with your own content first, then replace the profile links and introductory copy in `src/components/Header.astro` and `src/components/About.astro`.

The site is designed for static deployment on Vercel.
