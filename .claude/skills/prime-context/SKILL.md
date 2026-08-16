---
name: prime-context
description: Prime a session with repo, git, and structural context before non-trivial work on vxjdev.github.io. Use at the start of an implementation, debugging, or review task to capture branch/diff state, read the key docs, map the structure, and state a verification plan before editing.
---

# Prime Context

Run this before any non-trivial implementation, debugging, or review work so edits start from an accurate picture of the repo.

> Multi-page business site: Vite + React 18 + TypeScript + Tailwind + React Router. Entry at `src/main.tsx` renders `src/App.tsx`, which is just a `BrowserRouter`/`Routes` shell wrapping `src/layouts/PageShell.tsx` (shared nav/backdrop/footer via `<Outlet/>`). Three routed pages live in `src/pages/`: `Home.tsx` (landing, with the typewriter tech-stack headline), `Projects.tsx` (personal projects), `Partners.tsx` (business-partner work + contact section). Shared pieces are in `src/components/`. Static output in `dist/` is deployed to GitHub Pages (custom domain `vxjdev.com` via `public/CNAME` + Cloudflare DNS, DNS-only/unproxied) and is tracked in git alongside source — see the `deploy` skill for the publish flow. No `CLAUDE.md` exists yet — this skill is the closest thing to project instructions.

## Gather

- Read `README.md` (currently just the project title — don't expect more).
- Capture git context up front:
  - `git status --short --branch`
  - current branch or detached HEAD
  - `git log --oneline -5`
- Inspect local changes / recent diffs relevant to the task before editing.
- Read `src/index.css` and `tailwind.config.js` before any styling work — together they *are* the design system (custom `navy`/`slate`/`indigo`/`cream` palette, `display`/`body` font families, `fade-up`/`breathe`/`shimmer`/`blink` keyframe animations). Inline `style={{}}` props are used throughout instead of Tailwind color utilities for the bespoke palette — match that convention rather than introducing arbitrary Tailwind values.
- Map the current structure with `git ls-files src public index.html`:
  - `src/App.tsx` — router shell only
  - `src/layouts/PageShell.tsx` — shared background/backdrop/nav/footer via `<Outlet/>`
  - `src/pages/{Home,Projects,Partners}.tsx` — one file per route
  - `src/components/` — `NavBar`, `Footer`, `MonogramBackdrop`, `TechStackTicker` (the typewriter headline word), `ProjectCard` (source/live-link cards used on both Projects and Partners), `ContactSection`
  - `src/data/socialLinks.tsx` — single source of truth for GitHub/LinkedIn/email links + icons, shared by `Footer` and `ContactSection`
  - `public/` holds `CNAME`, `favicon.svg`, `404.html` (GitHub Pages SPA-routing fallback for React Router — see `index.html`'s decode script) and is copied as-is into `dist/`
- `dist/` is a build artifact but **is tracked in git** on `main` (a deliberate choice, not the usual convention) — it only reflects whatever was committed at the last `npm run build`, and will drift from source until rebuilt. The `gh-pages` branch (pushed via `npm run deploy`) is the actual source of truth for what's live, independent of `dist/` on `main`.
- For deployment specifics, use the `deploy` skill rather than duplicating that flow here.

## Report

Before making edits or stating findings, report:

- repo state and branch status
- recent change context (what the dirty files and last commits are doing)
- files / docs reviewed
- task-relevant modules — which page(s) in `src/pages/`, which shared component(s) in `src/components/`, whether `PageShell`/`NavBar`/`Footer` are in scope
- constraints identified — e.g. keep the existing color tokens/animation names in `tailwind.config.js` rather than inventing new ad hoc values; project/partner links go through `ProjectCard`'s `githubUrl`/`liveUrl` props, not one-off markup; there's no backend/API/state management to reason about
- a verification plan with narrow checks first

## Verify

There is no test suite. Verification means:

- `npm run build` (`tsc && vite build`) to confirm TypeScript compiles and the production build is clean
- `npm run dev` and view in the browser to confirm behavior visually, including client-side route navigation (`/`, `/projects`, `/partners`)
- `npm run preview` to sanity-check the actual built output before deploying
- Deploying is a separate, explicit step — use the `deploy` skill, which confirms before publishing to the live `gh-pages` branch / production domain

Run the narrowest applicable check first (`npm run build` or a focused dev-server view) before broad ones.
