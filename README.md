# Keti Gulua — Portfolio

Personal portfolio site. Light and dark themes, responsive down to mobile.

Built with React, TypeScript and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All content is in `src/data/site.json`:

- `links` — Upwork, GitHub and LinkedIn URLs. Empty links are hidden.
- `projects` — add one entry per project. Put screenshots (16:9, ~1600×900, `.webp`) in `public/projects/` and set `demo` / `source` links.
- `skills`, `experience` — about and timeline sections.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com). No configuration needed.
