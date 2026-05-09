# AGENTS.md

Start here when working in this repository.

## Read first

1. `.github/copilot-instructions.md` for the main technical and repository guidance.
2. `docs/positioning.md` for Kauê's positioning, tone, and messaging rules.
3. `docs/design-direction.md` for visual direction and UX style.
4. `docs/content-priorities.md` for what to emphasize when changing sections, copy, or structure.

## Repository focus

- This is a Next.js App Router portfolio site.
- The homepage is composed in `src/app/page.tsx` from section components under `src/app/components/**`.
- Project content is driven by `src/data/projects.json` and consumed both by the home projects section and `src/app/project/[id]/page.tsx`.
- Styling is primarily SCSS modules plus global CSS variables in `src/app/globals.css`.

## Working rules

- Preserve the current positioning: high-performance, ambitious, technically credible, collaborative, never arrogant.
- Keep the portfolio expressive and tech-forward; avoid bland corporate or academic-looking output.
- Use the existing `@/*` alias for imports under `src`.
- Keep component structure consistent with `ComponentName/index.tsx` and adjacent `*.module.scss`.
- Reuse the existing theme variable system and maintain dark mode as a first-class experience.
- Treat skill and experience content as proof-backed narrative, not generic buzzword lists.

## Validation

- Dev: `npm run dev`
- Build: `npm run build` (runs lint first and must pass before production work is considered complete)
- Lint: `npm run lint`
- There is currently no automated test script in `package.json`.

Never ship production-facing changes without a successful `npm run build`.
