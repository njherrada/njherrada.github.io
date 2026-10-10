# Novelyn project notes

- This is a Next.js App Router frontend in TypeScript, exported as a static site for GitHub Pages.
- Keep pages compatible with `output: "export"`; do not add server-only runtime features.
- The GitHub Actions deployment workflow builds on pushes to `main`. The Next.js base path is derived from `GITHUB_REPOSITORY` during that build.
- Keep all portfolio copy and resume details in `data/portfolio.ts`; avoid duplicating content in page components.
- Make every page mobile-first and responsive. Use flexible layouts, fluid sizing, and suitable breakpoints; verify there is no horizontal overflow at narrow viewport widths.
- Follow semantic HTML: use landmarks, a logical heading hierarchy, descriptive link text, and lists for grouped information.
- Meet accessibility basics: provide visible keyboard focus, sufficient color contrast, meaningful accessible names for controls, useful alternative text for informative images, and respect `prefers-reduced-motion`.
- Use smooth, restrained transitions for navigation and interactive elements; disable or minimize motion when `prefers-reduced-motion: reduce` is enabled. Never make motion necessary to understand content or use a control.
- Do not rely on color alone to communicate meaning. Ensure interactive elements work with keyboard and touch, and keep tap targets comfortably usable on mobile.
- Use responsive, optimized assets and avoid fixed-width layouts. Do not add remote image/font dependencies unless necessary; local assets should work with the GitHub Pages base path.
- Preserve metadata and document language, and keep pages statically renderable. For interactive features, isolate browser-only behavior in Client Components and avoid accessing browser APIs during prerendering.
- Run `npm run lint` and `npm run build` to validate changes.
- When changing layout or styling, check representative phone, tablet, and desktop viewport sizes, as well as keyboard focus and reduced-motion behavior.
