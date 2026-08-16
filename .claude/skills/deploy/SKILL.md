---
name: deploy
description: Build and publish the vxjdev.github.io site to GitHub Pages via the gh-pages branch. Use when the user asks to deploy, publish, or ship the site live.
---

# Deploy to GitHub Pages

Publishes the working tree to the live site at vxjdev.com by pushing a fresh production build to the `gh-pages` branch.

## Steps

1. Check `git status --short`. Deploys should generally ship what's actually committed — `dist/` reflects the working tree, not just commits. If there are uncommitted changes that don't look like intentional part of this deploy, flag them and confirm before proceeding rather than shipping silently.
2. Run `npm run build` (`tsc && vite build`) to produce a fresh `dist/`. It must pass clean — if `tsc` errors, stop and fix before deploying.
3. Sanity check `ls dist/` includes the `public/` passthrough files: `CNAME`, `404.html`, `favicon.svg`, `index.html`, `assets/`. Missing `CNAME` breaks the custom domain; missing `404.html` breaks client-side routing (React Router) since GitHub Pages has no server-side rewrites.
4. Run `npm run deploy` (`gh-pages -d dist`) — this force-pushes `dist/` to the `gh-pages` branch on `origin`, which is what GitHub Pages actually serves.
5. Report the result. Propagation to vxjdev.com is usually under a couple of minutes (DNS is Cloudflare, DNS-only/unproxied, pointed at GitHub Pages).

## Notes

- This pushes to a shared, live branch serving the production domain — it's a real publish action, not a local/reversible one. Only run it on an explicit deploy/publish/ship request; if this skill gets invoked incidentally, confirm with the user first.
- `npm run deploy` (the `gh-pages` package) handles the branch push itself — no manual git commands needed for that step.
- Deploying doesn't touch `main`. Source changes still need their own commit/push to `main` if they aren't there yet — this skill only publishes the build output.
