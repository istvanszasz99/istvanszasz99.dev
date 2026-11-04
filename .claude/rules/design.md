---
paths:
  - "src/app/components/**/*.tsx"
  - "src/styles/**/*.css"
  - "DESIGN.md"
---

# Design rules

- Read `DESIGN.md` before any visual change, and update it in the same change when a token or pattern changes.
- Components use literal Tailwind values such as `bg-[#ccff00]` and `text-white/50`, so `DESIGN.md` is the only named source for them.
- Ignore the tokens in `src/styles/theme.css`. They are unused shadcn scaffolding, and the site is dark only.
- Don't copy anything listed under Known Gaps in `DESIGN.md` into new work.
