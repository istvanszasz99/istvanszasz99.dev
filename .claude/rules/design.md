---
paths:
  - "src/app/components/**/*.tsx"
  - "src/styles/**/*.css"
  - "DESIGN.md"
---

# Design rules

- Read `DESIGN.md` before any visual change, and update it in the same change when a token or pattern changes.
- Components use the theme tokens in `src/styles/index.css`, such as `bg-canvas`, `text-ink-50`, `bg-brand-fill` and `text-brand-ink`, so colors follow the light and dark themes. The light theme has no lime or yellow.
- Don't put theme-dependent colors in Motion props. Motion can't read the tokens, and a changed value doesn't re-apply when the theme switches. Use CSS classes.
- Ignore the tokens in `src/styles/theme.css`. They are unused shadcn scaffolding.
- Check visual changes in both themes and both languages.
- Don't copy anything listed under Known Gaps in `DESIGN.md` into new work.
