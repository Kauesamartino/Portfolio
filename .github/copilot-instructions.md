# Copilot Instructions for this Repository

## Context files to consult

- Read `docs/positioning.md` for personal positioning, tone, strengths, and copy guidance.
- Read `docs/design-direction.md` for visual direction, motion, hierarchy, and theme guidance.
- Read `docs/content-priorities.md` for what should be emphasized first when restructuring sections or rewriting content.
- Treat `.github/copilot-instructions.md` as the global technical/context entrypoint, and use the docs above when the task involves copy, UI direction, or prioritization.

## Build, lint, and test commands

| Task | Command | Notes |
| --- | --- | --- |
| Start the dev server | `npm run dev` | Runs the Next.js app locally on port 3000 by default. |
| Create a production build | `npm run build` | Runs lint first and only builds if lint passes. Use this before anything intended for production. |
| Start the production server | `npm run start` | Runs the built app. |
| Run linting | `npm run lint` | This uses `next lint`, which is deprecated in Next.js 15 but is the lint command currently configured here. |

There is currently **no automated test script** in `package.json`, so there is no repository-supported full-test or single-test command yet.

Do not treat a task as ready for production unless `npm run build` passes, since it now enforces lint before creating the production build.

## High-level architecture

- This is a **Next.js App Router** portfolio site. The app lives under `src/app`, and `src/app/layout.tsx` provides the global shell by importing `globals.css`, setting the root `<html>` theme class, and rendering the shared `Header` above every page.
- The landing page in `src/app/page.tsx` is an assembly page: it renders `Hero`, `Skills`, `About`, and `Projects` in sequence. Most site content is implemented as colocated components under `src/app/components/**`.
- Project content is **data-driven** from `src/data/projects.json`. The home-page `Projects` section maps over that JSON to build cards, and the dynamic route `src/app/project/[id]/page.tsx` reads the route param with `useParams()` and looks up the matching record from the same JSON file.
- The animated background is a shared client-side concern. `src/app/components/interactiveBackground/index.tsx` renders the fixed canvas, while `src/hooks/useInteractiveBackground.ts` owns the animation loop, mouse tracking, resize handling, and CSS-variable-based colors. Pages that need the effect render `InteractiveBackground`, and the layout keeps page content above it with a higher `z-index`.
- Styling is split between **global CSS variables in `src/app/globals.css`** and **per-component SCSS modules**. Tailwind is imported globally, but the current UI code is written with SCSS modules rather than utility classes.

## Personal and product context

- This portfolio should represent **Kauê Samartino as a high-potential technology intern at Mottu**, with real operating experience across software development, data, automation, and applied AI.
- The strongest background to preserve in copy and project framing is: starting from data work, building Dataform tables and operational analysis for billing, duplicate invoice emission, stock movement, and financial invoice movement; then evolving into product and engineering work that reduces pending billing inside the WMS flow.
- His current positioning should show a professional who already operates across **.NET frontend and backend work, SQL in production environments, BigQuery/Dataform workflows, Python RPAs, and internal automations**.
- Prioritize evidence of ownership, business impact, and technical range over generic “passion for technology” phrasing.

## Tone and messaging

- The writing should reflect a culture close to **Mottu's performance mindset**: ambition, speed, accountability, and protagonism.
- Keep the voice ambitious and technically credible, but **never arrogant**. It should sound like someone with high standards and strong goals who still works shoulder-to-shoulder with the team.
- Favor language that shows collaboration, execution, and business contribution. The user explicitly values a culture where everyone helps each other reach stronger results.
- Avoid empty startup-style hype, exaggerated self-promotion, and academic-sounding descriptions.

## Design direction

- The desired direction is **tech/futuristic with stronger visual impact**, not conservative corporate design.
- Preserve personality and visual intensity, but avoid clutter. The site should feel modern, sharp, and high-performance rather than noisy.
- If redesigning sections, keep the result expressive and memorable without losing clarity or readability.
- Dark mode should remain a first-class experience, and new visual treatments should continue using the existing CSS-variable theme system.

## Key conventions

- Use the `@/*` import alias from `tsconfig.json` for code under `src` instead of long relative paths when possible.
- Keep reusable UI in the existing component-folder pattern: `ComponentName/index.tsx` with an adjacent `*.module.scss` file.
- Theme changes are driven by toggling `light` / `dark` on the root `<html>` element in `DarkModeButton`. New theme-aware UI should read the existing CSS custom properties from `globals.css` instead of hard-coding duplicate color values.
- Browser-only features live in explicit client components. Existing interactive pieces such as the menu, dark-mode toggle, animated background, and project detail page all use `'use client'`; keep static content as server components unless hooks or browser APIs are actually required.
- Portfolio/project data belongs in `src/data/projects.json`, and both the listing page and detail page depend on that shared shape. If you add fields there, update both consumers together.
- Default to **bilingual-aware content decisions**. New copy or structure changes should not assume the portfolio will stay single-language.
