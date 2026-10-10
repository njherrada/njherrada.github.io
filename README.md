# Novelyn J. Herrada — Portfolio

A responsive, resume-based portfolio configured to export as a static site for GitHub Pages.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Portfolio copy and resume details live in `data/portfolio.ts`; edit that file to update the site content. Layout and design are in `src/app/page.tsx` and `src/app/page.module.css`.

## Build the static site

```bash
npm run build
```

The generated website is written to `out/`. Preview that export with any static file server. Static export does not support server-only Next.js features such as API routes, middleware, or request-time rendering.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on pushes to `main` (or via the Actions tab). In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. If your default branch is not `main`, update the workflow trigger.

The build automatically uses the repository name as the base path for project sites (`owner.github.io/repository`) and uses the root path for `owner.github.io` sites. No manual path edit is needed.

## Customize

The `data/portfolio.ts` file contains the profile, hero text, statistics, work history, skills, education, certifications, publication, and contact copy. Update those values without changing the page component. The reference contacts are not published on the site. The hero currently uses a decorative monogram instead of a portrait; replace it with a photo if desired. Keep routes statically renderable for GitHub Pages, and use client-side browser code for any runtime interactions or data fetching.
