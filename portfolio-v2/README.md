# Portfolio v2 — Thisara Eranga

Modern rebuild of the portfolio site. React 18 + Vite, dark one-page design, deploys to the same URL as before: **https://thisara-de.github.io/portfolio/**

## Quick start

```bash
cd portfolio-v2
npm install
npm run dev      # local preview at http://localhost:5173/portfolio/
npm run deploy   # builds and pushes to the gh-pages branch (same URL as old site)
```

## Update content

All text lives in one file: `src/data.js`. Edit it to change jobs, skills, projects, certifications — no component changes needed.

## Two things to fill in (`src/data.js`)

1. **LinkedIn URL** — replace the placeholder in `profile.linkedin`.
2. **Formspree ID** — create a free form at https://formspree.io, paste the ID into `profile.formspreeId`. Until then, the contact section shows direct email/LinkedIn buttons (which always work).

## Updating the resume

Replace `public/Resume_Thisara.pdf` with a new export whenever your resume changes.

## Optional polish

- Add an `og-card.png` (1200×630) to `public/` for a nicer LinkedIn link preview.
- Replace project screenshots in `src/assets/projects/`.
