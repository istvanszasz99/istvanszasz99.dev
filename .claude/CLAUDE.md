# istvanszasz99.dev

Personal portfolio of István Zoltán Szász, live at https://istvanszasz99.dev. It is a single-page React app served by a Cloudflare Worker, which also handles the contact form.

## Commands

- `pnpm install`: use pnpm only, and commit `pnpm-lock.yaml`.
- `pnpm dev`: Vite on port 5173. It proxies `/api` to port 8788.
- `pnpm dev:cf`: Worker on port 8788. It serves the existing `dist/`, so run `pnpm build` first.
- `pnpm build`: production build to `dist/`.
- `npx tsc --noEmit`: type-check.
- `pnpm build`, then `pnpm run deploy`: release. Deploy only when the owner asks.

## Verifying work

- There is no test runner, linter, formatter or CI. Run `pnpm build` and `npx tsc --noEmit`, and check UI changes in a browser.
- `tsc` has two baseline TS2882 errors, for the CSS imports in `App.tsx` and `main.tsx`. Any other error is new.

## Conventions

- Components are named exports. `App.tsx` adapts them for `lazy()`, and everything below the hero is lazy-loaded.
- Visible text lives in `src/app/i18n/en.ts` and `hu.ts`, read through `useLanguage()`. `hu.ts` must match the shape of `en.ts`, or `tsc` fails. Links, logos, colors and tech names stay in arrays at the top of each section component, matched to their text by `id`.
- The `sr-only` blocks, `<noscript>`, meta tags, JSON-LD and `llms.txt` stay in English, for crawlers.
- Theme colors are tokens in `src/styles/index.css`, read through `useTheme()` only when a value can't be a CSS class.
- Treat career facts, dates and links as the owner's to supply. Don't invent or embellish them.

## Gotchas

- Plain `pnpm deploy` runs pnpm's own workspace command, not the script. Use `pnpm run deploy`.
- Wrangler uploads `dist/` as it is, so a deploy without a build ships old files.
- `pnpm dev` alone cannot send contact email. Run `pnpm dev:cf` alongside it, with `RESEND_API_KEY` in `.dev.vars`. Production uses `wrangler secret put RESEND_API_KEY`.
- A valid `POST /api/contact` sends a real email. To test without sending one, post `{}` and expect a 400.
- Profile facts are duplicated by hand in both dictionaries, the `sr-only` blocks, `index.html` and `public/llms.txt`. A content change isn't finished until they all agree. Use the `/portfolio-tasks` skill.

## Known issues

Remove an entry when it is fixed.

- `src/worker.ts` puts form input into the email HTML without escaping it.
- `src/worker.ts` ignores the `error` field returned by `resend.emails.send`, so a failed send can report success. It also has no rate limiting.
- `index.html` and `public/site.webmanifest` reference favicon files that don't exist in `public/`.
- `README.md` recommends npm, and `.env.example` refers to Cloudflare Pages. Both are out of date.

## Agents

Start the coordinator with `claude --agent main-orchestrator`. It delegates to `senior-fullstack-developer`, `uiux-frontend-designer` and `devops-engineer`, which are defined in `.claude/agents/`.
