---
name: portfolio-tasks
description: Step-by-step playbooks for repeating work on the istvanszasz99.dev portfolio. Use when adding or changing a project, job, education entry, certification, technology or profile fact, replacing the resume, adding a page section, running pre-release checks, or deploying.
argument-hint: "[add-project | add-experience | add-certification | add-tech | update-profile | replace-resume | add-section | preflight | release]"
---

# Portfolio tasks

Run the playbook named in `$ARGUMENTS`. If none is named, pick the one that matches the request. Every content playbook ends with **Preflight**.

Rules for all playbooks:

- Get facts, dates and URLs from the owner. Ask rather than guess.
- Keep the wording of a fact consistent everywhere it appears.
- Match the shape of neighboring entries in the file you are editing.
- Follow `DESIGN.md` for anything visual.

## Where each fact lives

Visible text has two copies: `src/app/i18n/en.ts` and `src/app/i18n/hu.ts`. Change both, and ask the owner to confirm new Hungarian wording. The arrays named below hold only links, logos, colors and tech names, with text matched by `id`.

| Fact | Visible UI | Hidden `sr-only` | `index.html` | `public/llms.txt` |
|---|---|---|---|---|
| Project | `Projects.tsx` `projects` | generated from the array | JSON-LD `ItemList`, `<noscript>` | `## Projects` |
| Job | `Experience.tsx` `workExperience` | `Hero.tsx`, `Experience.tsx` | JSON-LD `FAQPage`, `<noscript>` | Work experience |
| Education | `Experience.tsx` `education` | `Hero.tsx`, `Experience.tsx` | JSON-LD `Person` and `FAQPage`, `<noscript>` | Summary, Education |
| Certification | `Experience.tsx` `certifications` | `Hero.tsx`, `Experience.tsx` | JSON-LD `hasCredential` and `FAQPage`, `<noscript>` | `## Certifications`, Contact and status |
| Technology | `TechMarquee.tsx` `techs`, `TechSkills.tsx` `skills` | `TechSkills.tsx` | JSON-LD `knowsAbout`, `<noscript>` | Technical skills |
| Stats | `Hero.tsx` stats array | `Hero.tsx` | `<noscript>` | Contact and status |
| Role, location, availability | `Hero.tsx`, `About.tsx`, `Contact.tsx`, `Footer.tsx` | `Hero.tsx`, `About.tsx`, `Contact.tsx` | title, meta, OG and Twitter tags, JSON-LD, `<noscript>` | Summary, Contact and status |

Structured data is JSON-LD only, so don't add `itemprop` or similar attributes to the `sr-only` blocks. `.claude/rules/seo-files.md` has the format rules for `index.html` and the files in `public/`.

To find stale copies, search for the old value across the repo:

```bash
git grep -n "old value" -- index.html public/llms.txt src/app
```

## add-project

1. Save a screenshot to `public/image/<name>.png`.
2. Add an entry to `projects` in `src/app/components/Projects.tsx` with `id`, `tech`, `image`, `color`, `colorLight`, `github` and `live`. Use `""` for a missing link. Reuse an existing category color when the category matches. Add `title`, `category` and `description` under the same `id` in `projects.items` in both dictionaries.
3. Add the project to the JSON-LD `ItemList` and the `<noscript>` projects in `index.html`.
4. Add a link under `## Projects` in `public/llms.txt`.
5. If the total passes a displayed threshold, update the "Projects Completed" stat using **Where each fact lives**.

Rows alternate sides automatically, so no layout change is needed.

## add-experience

Covers jobs and education.

1. Add an entry to `workExperience` or `education` in `src/app/components/Experience.tsx`, newest first, with `id`, `link`, `badge` and `logo`. Add `title`, `department`, `description`, `location`, `type` (the date range) and `logoAlt` under the same `id` in `experience.work` or `experience.education` in both dictionaries.
2. Save the logo to `public/image/icon/` and set its path as `logo`.
3. Put any supporting PDF in `public/document/` and link it through `link`.
4. Update the other locations in the table. When a job's status changes, also update the "currently" and "previously" wording.

## add-certification

1. Add an entry to `certifications` in `src/app/components/Experience.tsx`, with the credential URL as `link`. In `experience.certifications` in both dictionaries, add the same `id` with the issuer as `department` and the platform as `location`.
2. Add the issuer logo to `public/image/icon/` if it's new.
3. Update the count in the `Hero.tsx` stats and the `sr-only` block, then in `index.html` and `public/llms.txt`.
4. Add a link under `## Certifications` in `public/llms.txt`.
5. In `index.html`, add an entry to JSON-LD `hasCredential`, and update the `FAQPage` answer and the `<noscript>` list.

## add-tech

1. In `src/app/components/TechMarquee.tsx`, import the icon from `@ridemountainpig/svgl-react` and add `{ name, color, icon: <Icon width={32} height={32} /> }` to `techs`, using the brand color. If the icon is monochrome, also set `iconLight` to its light-theme variant.
2. If the package has no icon, add a PNG to `public/image/icon/` and follow how the existing PNG icons are used in that file.
3. Add it to the matching group in `src/app/components/TechSkills.tsx` if it's a core skill.
4. Update Technical skills in `public/llms.txt`, plus JSON-LD `knowsAbout` and the `<noscript>` list in `index.html`.
5. Update the "Technologies" stat if the total passes the displayed threshold.

## update-profile

1. Search for the old value with the command above.
2. Update every location in the table's matching row.
3. If the page title or description changes, keep the `<title>`, description, Open Graph and Twitter tags identical in meaning.
4. Search again and confirm no stale copy remains.

## replace-resume

1. Overwrite `public/document/Resume_EN.pdf` or `Resume_HU.pdf`, keeping the filename. `hero.resumeHref` in each dictionary points to its language's file.
2. Compare the resume with the site and list any facts that now differ. Ask the owner before changing them.

## add-section

1. Create `src/app/components/<Name>.tsx` with a named export. Start from a similar section and keep these parts: `<section id aria-label>`, `<div className="noise-overlay" />`, the section label, the standard container class, and `py-32`.
2. Add it to `App.tsx` with `lazy()`, inside `<Suspense>`, at the right position.
3. If it needs a nav link, update **both** `navItems` and the `sections` array in `Navbar.tsx`.
4. Add a matching `<noscript>` section in `index.html`, and matching facts in `public/llms.txt`, using its format rules.
5. Add any new pattern to `DESIGN.md`.

## preflight

Run these and report each result:

```bash
pnpm build
npx tsc --noEmit
```

- The build must succeed. `tsc` should show only the two baseline errors listed in `.claude/CLAUDE.md`.
- Run `pnpm dev` and check the changed section in a browser at 375px and desktop widths, with no new console errors.
- If `src/worker.ts` or the contact form changed, run `pnpm build`, then `pnpm dev:cf`, and test `/api/contact` on port 8788. A valid request sends a real email, so only do that with `.dev.vars` set and the owner's agreement. An empty `{}` body should return a 400.
- If facts changed, confirm the stale value no longer appears, and set `<lastmod>` in `public/sitemap.xml` and `dateModified` in the JSON-LD to today.
- If `index.html` JSON-LD changed, confirm it still parses as JSON. After deploying, check it with https://validator.schema.org and Google's Rich Results Test.

## release

Only run this when the owner asks for a deployment.

1. Complete **Preflight** on a clean working tree, on the branch being released.
2. Confirm the commit to ship with the owner.
3. Build and deploy. Wrangler uploads `dist/` as it is, so always build first:

   ```bash
   pnpm build
   ```

   ```bash
   pnpm run deploy
   ```

4. Check that https://istvanszasz99.dev loads and shows the change.
5. Report the Wrangler version ID, in case a rollback is needed (`wrangler rollback`).
