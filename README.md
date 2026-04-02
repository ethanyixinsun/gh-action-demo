# GitHub Actions Demo

A minimal Vite + vanilla JavaScript app with a complete CI/CD pipeline via GitHub Actions.

## Stack

| Layer | Tool |
|-------|------|
| Frontend | Vite + vanilla JS |
| Testing | Vitest |
| Linting | ESLint 9 |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

## Local development

```bash
npm ci          # install dependencies (use ci, not install, to match CI)
npm run dev     # start dev server at localhost:5173
npm run lint    # run ESLint
npm test        # run unit tests
npm run build   # production build → dist/
npm run preview # preview the production build locally
```

## Workflow overview

`.github/workflows/ci.yml` triggers on:

- **pull_request** — runs lint, test, build (no deploy)
- **push to main** — runs lint, test, build, then deploys to GitHub Pages
- **workflow_dispatch** — manual trigger from the Actions tab (also deploys)

### Jobs

```
build  →  deploy (main / manual only)
```

The `deploy` job uses OIDC (`id-token: write`) — no secrets required.

## Live site

Deployed at: `https://<your-username>.github.io/<your-repo-name>/`
