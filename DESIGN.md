---
version: alpha
name: istvanszasz99-design-analysis
description: A dark-first editorial portfolio for István Zoltán Szász, with an optional light theme. The system anchors on near-black surfaces with oversized condensed Bebas Neue headlines, a single electric-lime accent, and hard-edged primary controls. Brand voltage comes from the black/lime pairing, used with restraint so that one word or one action carries each view. Type voice runs Bebas Neue for display, Space Grotesk for tracked uppercase labels and short copy, and Roboto for titles and reading text. Grain, a faint line grid, and soft lime glows add atmosphere without any drop shadows.

colors:
  primary: "#ccff00"
  primary-hover: "#aada00"
  on-primary: "#050505"
  surface: "#050505"
  surface-alt: "#080808"
  surface-raised: "#0a0a0a"
  surface-sunken: "#030303"
  surface-visual: "#111111"
  surface-visual-tint: "#0d1a0d"
  on-surface: "#ffffff"
  on-surface-strong: "rgba(255, 255, 255, 0.7)"
  on-surface-soft: "rgba(255, 255, 255, 0.6)"
  body: "rgba(255, 255, 255, 0.5)"
  muted: "rgba(255, 255, 255, 0.4)"
  faint: "rgba(255, 255, 255, 0.3)"
  ghost: "rgba(255, 255, 255, 0.2)"
  hairline-strong: "rgba(255, 255, 255, 0.2)"
  hairline: "rgba(255, 255, 255, 0.1)"
  hairline-soft: "rgba(255, 255, 255, 0.05)"
  hairline-focus: "rgba(204, 255, 0, 0.5)"
  error: "#f87171"
  code-keyword: "#7c9eff"
  code-string: "#88d8b0"
  project-web: "#00ffcc"
  project-3d: "#ff5f9e"

typography:
  display-xl:
    fontFamily: "Bebas Neue, cursive"
    fontSize: 200px
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -0.02em
  display-lg:
    fontFamily: "Bebas Neue, cursive"
    fontSize: 140px
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -0.02em
  display-md:
    fontFamily: "Bebas Neue, cursive"
    fontSize: 110px
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: 0em
  display-sm:
    fontFamily: "Bebas Neue, cursive"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0em
  display-xs:
    fontFamily: "Bebas Neue, cursive"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.1em
  title-lg:
    fontFamily: "Roboto"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: 0em
  title-md:
    fontFamily: "Roboto"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: "Roboto"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: "Roboto"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: "Roboto"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0em
  copy-lg:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0em
  copy-md:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0em
  button:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.08em
  button-ghost:
    fontFamily: "Roboto"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  nav-link:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.08em
  caption:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.1em
  caption-uppercase:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2em
  chip:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.1em
  code:
    fontFamily: "ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em

rounded:
  none: 0px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 64px
  band: 80px
  section: 128px
  container: 1280px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 32px
  button-primary-hover:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.button-ghost}"
    rounded: "{rounded.none}"
    padding: 12px 24px
  button-ghost-hover:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
  button-ghost-pill:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.button-ghost}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-ghost-circle:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    size: 40px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.nav-link}"
  top-nav:
    backgroundColor: transparent
    textColor: "{colors.on-surface-soft}"
    typography: "{typography.nav-link}"
    padding: 20px 0px
  top-nav-scrolled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-soft}"
    typography: "{typography.nav-link}"
  top-nav-cta:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.button-ghost}"
    rounded: "{rounded.full}"
    padding: 8px 20px
  hero-band:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-xl}"
    padding: 128px
  section-band:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-md}"
    padding: 128px
  section-band-alt:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display-md}"
    padding: 128px
  section-label:
    textColor: "{colors.faint}"
    typography: "{typography.caption-uppercase}"
  stat-value:
    textColor: "{colors.primary}"
    typography: "{typography.display-sm}"
  stat-label:
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
  profile-visual-card:
    backgroundColor: "{colors.surface-visual}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
  profile-visual-tint:
    backgroundColor: "{colors.surface-visual-tint}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
  code-window-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 20px
  code-keyword:
    textColor: "{colors.code-keyword}"
    typography: "{typography.code}"
  code-string:
    textColor: "{colors.code-string}"
    typography: "{typography.code}"
  skill-card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: 32px
  entry-row:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
    padding: 24px 0px
  project-title:
    textColor: "{colors.on-surface}"
    typography: "{typography.title-lg}"
  project-description:
    textColor: "{colors.body}"
    typography: "{typography.body-lg}"
  project-image:
    rounded: "{rounded.xl}"
    height: 380px
  badge-category-web:
    textColor: "{colors.project-web}"
    typography: "{typography.chip}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-category-3d:
    textColor: "{colors.project-3d}"
    typography: "{typography.chip}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-tech:
    textColor: "{colors.muted}"
    typography: "{typography.chip}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  tech-pill:
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    padding: 12px 20px
  text-input:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.copy-md}"
    rounded: "{rounded.none}"
    padding: 16px 20px
  text-input-label:
    textColor: "{colors.muted}"
    typography: "{typography.caption-uppercase}"
  text-input-error:
    textColor: "{colors.error}"
    typography: "{typography.nav-link}"
  social-row:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 20px
  hairline-divider:
    backgroundColor: "{colors.hairline}"
    height: 1px
  hairline-divider-strong:
    backgroundColor: "{colors.hairline-strong}"
    height: 1px
  hairline-divider-soft:
    backgroundColor: "{colors.hairline-soft}"
    height: 1px
  hairline-focus-ring:
    backgroundColor: "{colors.hairline-focus}"
    height: 1px
  footer:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.faint}"
    typography: "{typography.nav-link}"
    padding: 64px 0px
  footer-legal:
    textColor: "{colors.ghost}"
    typography: "{typography.caption}"
  scrollbar-thumb:
    backgroundColor: "{colors.primary}"
    width: 4px
---

## Overview

istvanszasz99.dev is a one-page portfolio that behaves like a poster rather than a résumé template. The base atmosphere is a **near-black canvas** (`{colors.surface}` — #050505), and headlines run **Bebas Neue** at up to 200px with tight leading. The combination feels technical, editorial and slightly brutalist.

Brand voltage comes from the **black + lime pairing**. Lime (`{colors.primary}` — #ccff00) is the only brand accent, used on the main action, one word or line of each headline, stats, status dots and hover states. Its impact depends on scarcity, so most of each view stays white on black.

The page has four surface modes that pace the scroll:
1. **Canvas** (`{colors.surface}`) — hero, contact and most section bands
2. **Alternate band** (`{colors.surface-alt}`) — separates neighboring sections, such as Projects
3. **Raised card** (`{colors.surface-raised}`) — the stacking skill cards
4. **Sunken footer** (`{colors.surface-sunken}`) — closes the page

The site is **dark by default, with a light theme** the visitor can switch to. The tokens in this file describe dark, and **Light theme** under Colors lists how they change. The variables in `src/styles/theme.css` are unused shadcn scaffolding, and no component uses a `dark:` variant. Components use the theme tokens in `src/styles/index.css`, such as `bg-canvas` and `text-ink-40`.

**Key Characteristics:**
- Near-black canvas (`{colors.surface}` — #050505) with pure white headlines (`{colors.on-surface}` — #ffffff).
- Electric-lime accent (`{colors.primary}` — #ccff00), one focal point per view.
- Uppercase Bebas Neue display type, usually split into a white part and a lime part.
- The curly-brace wordmark `ISTVAN {ZOLTAN} SZASZ`, which nods to code and appears in the hero, navbar and footer. In Hungarian it reads `SZÁSZ ISTVÁN {ZOLTÁN}`, with the family name first. `SZÁSZ` and `{ZOLTÁN}` are lime and `ISTVÁN` is white. The words and their colors come from `brand.lines` in the dictionaries.
- Text hierarchy built from white at reduced opacity rather than grey hex values.
- Shape signals function: square controls, rounded media, full-round chips and icon buttons.
- Section rhythm `{spacing.section}` (128px), with `{spacing.band}` (80px) between major blocks.
- Motion is part of the identity: masked headline reveals, wipe-in button fills and a lime arrow cursor.

## Colors

### Brand & Accent
- **Lime / Primary** (`{colors.primary}` — #ccff00): The signature accent. Used on primary buttons, highlighted headline words, stats, status dots, section-label rules, the cursor, the scrollbar and text selection.
- **Lime Hover** (`{colors.primary-hover}` — #aada00): The darker scrollbar-thumb hover. A disabled primary button uses lime at 60% opacity, which `button-primary-disabled` approximates with this token.
- **Lime Hairline** (`{colors.hairline-focus}` — rgba(204, 255, 0, 0.5)): Focus and hover borders on inputs.
- **Lime Glow**: Radial gradients at 5–8% opacity that fade to transparent, and hover fills at 4–15%. These are decorative treatments rather than tokens.

### Surface
- **Canvas** (`{colors.surface}` — #050505): The default page floor, also used for the scrolled navbar at 95% opacity.
- **Surface Alt** (`{colors.surface-alt}` — #080808): Alternating section bands. Also the browser `theme-color`.
- **Surface Raised** (`{colors.surface-raised}` — #0a0a0a): Skill cards.
- **Surface Sunken** (`{colors.surface-sunken}` — #030303): The footer.
- **Surface Visual** (`{colors.surface-visual}` — #111111) and **Visual Tint** (`{colors.surface-visual-tint}` — #0d1a0d): The ends and center of the About card's diagonal gradient.

### Text
- **On Surface** (`{colors.on-surface}` — #ffffff): Headlines and titles.
- **On Surface Strong** (`{colors.on-surface-strong}` — white at 70%): Attribute values.
- **On Surface Soft** (`{colors.on-surface-soft}` — white at 60%): Navigation links, lead copy and the typewriter role.
- **Body** (`{colors.body}` — white at 50%): Reading text. The lowest step that passes WCAG AA, at about 5.3:1 on canvas.
- **Muted** (`{colors.muted}` — white at 40%): Form labels, tech tags and stat labels. About 3.7:1, so for non-essential text only.
- **Faint** (`{colors.faint}` — white at 30%): Section labels and footer text. About 2.5:1.
- **Ghost** (`{colors.ghost}` — white at 20%): Footer legal line and window-chrome labels.
- **On Primary** (`{colors.on-primary}` — #050505): Text on lime.

### Hairlines
- **Hairline Strong** (`{colors.hairline-strong}` — white at 20%): Ghost buttons.
- **Hairline** (`{colors.hairline}` — white at 10%): Inputs, cards, chips and row dividers.
- **Hairline Soft** (`{colors.hairline-soft}` — white at 5%): The navbar edge, footer edge and attribute rows.

### Semantic
- **Error** (`{colors.error}` — #f87171): Form error text. The system has no success color, since success states use lime.

### Data Colors
- **Project Web** (`{colors.project-web}` — #00ffcc) and **Project 3D** (`{colors.project-3d}` — #ff5f9e): Set per project in `Projects.tsx`. They tint the category badge (38% border, 9% fill) and never appear outside that project's row.
- **Tech brand colors** in `TechMarquee.tsx` are data for the marquee only.
- **Code colors** (`{colors.code-keyword}` — #7c9eff, `{colors.code-string}` — #88d8b0): Only for the About card's `profile.ts` window, along with its red, yellow and green window dots.

### Light theme

`<html data-theme="light">` overrides the variables in `src/styles/index.css`. In code, use the token rather than a literal, so a color follows the theme.

| Code token | Used for | Dark | Light |
|---|---|---|---|
| `canvas` | `{colors.surface}` | #050505 | #f7f7f2 |
| `canvas-alt` | `{colors.surface-alt}` | #080808 | #efefe8 |
| `canvas-raised` | `{colors.surface-raised}` | #0a0a0a | #ffffff |
| `canvas-sunken` | `{colors.surface-sunken}` | #030303 | #e8e8e0 |
| `ink` | Headlines and titles | #ffffff | #050505 |
| `ink-80` to `ink-20` | Text hierarchy | white at that opacity | near-black at 88% to 60% |
| `line-20`, `line-10`, `line-5` | Hairlines and faint fills | white at that opacity | near-black at 20%, 12%, 8% |
| `brand-fill` | Primary buttons, status dots, logo mark, text selection | #ccff00 | #4d6600 |
| `on-brand` | Text and icons on `brand-fill` | #050505 | #f7f7f2 |
| `brand-ink` | Accent text, lines and icons | #ccff00 | #4d6600 |
| `brand-hairline` | Input focus border | lime at 50% | olive at 50% |
| `brand-wipe` | Primary button hover layer | #ffffff | #3a4d00 |
| `--glow` | Radial glows in the hero and contact sections | lime | olive |
| `card-accent` | Code values and soft-skill icons in the `profile.ts` card | #ccff00 | #ffffff |
| `error` | Form error text | #f87171 | #b91c1c |

- **The light theme has no lime or yellow.** Olive #4d6600 replaces lime everywhere, and light-theme cursors are near-black with a white border. Third-party brand logos, such as JavaScript, and the `profile.ts` window dots keep their own colors.
- **Ink steps are separate values, not one color at reduced opacity.** Black needs more opacity than white to stay readable, so every light step used for text passes WCAG AA on its background.
- **The `profile.ts` card stays dark in both themes**, as a code-editor panel, so it keeps literal values, apart from `card-accent`. Its red, amber and green window dots look the same in both themes.
- **Project colors** have a darker `colorLight` per project: #00705c and #b8185e.
- **Marquee icons that would vanish on light** set an `iconLight` variant. MongoDB keeps its green logo in both themes, and Unreal Engine keeps its white logo on a round near-black badge.
- **Motion can't read these tokens**, so theme-dependent colors belong in CSS classes, not in Motion props.

## Typography

### Font Family
The system runs **Bebas Neue** for display, **Space Grotesk** for labels and short copy, and **Roboto** for titles and reading text. Code uses the default monospace stack through `font-mono`.

The split is functional:
- Bebas Neue (weight 400, uppercase) → hero, section headings, stats, footer wordmark
- Space Grotesk (weight 400–600) → primary buttons, navigation, labels, chips, hero and contact copy
- Roboto (weight 400–700) → ghost buttons, project, skill and experience titles and descriptions
- Monospace → the `profile.ts` window only

Utilities live in `src/styles/tailwind.css` (`font-bebas`, `font-space`). Bebas Neue and Space Grotesk load from Google Fonts in `src/styles/fonts.css`.

### Hierarchy

Display tokens hold the largest size of a fluid clamp. At `wide-screen`, the hero, contact and section headings step up to 280px, 190px and 150px.

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | clamp(80px, 14vw, 200px) | 400 | 0.9 | -0.02em | Hero name |
| `{typography.display-lg}` | clamp(60px, 10vw, 140px) | 400 | 0.9 | -0.02em | "LET'S BUILD SOMETHING GREAT" |
| `{typography.display-md}` | clamp(60px, 8vw, 110px) | 400 | 0.9 | 0 | Section headings |
| `{typography.display-sm}` | 48px | 400 | 1 | 0 | Hero stats and footer wordmark (the sent message is 40px) |
| `{typography.display-xs}` | 24px | 400 | 1.33 | 0.1em | Experience group headings |
| `{typography.title-lg}` | 36px | 700 | 48px | 0 | Project titles |
| `{typography.title-md}` | 20px | 700 | 28px | 0 | Skill and experience titles |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Project and section descriptions |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Skill list items |
| `{typography.body-sm}` | 14px | 400 | 24px | 0 | Experience descriptions and meta |
| `{typography.copy-lg}` | 16px | 400 | 1.8 | 0 | About lead paragraph |
| `{typography.copy-md}` | 15px | 400 | 1.8 | 0 | Hero and contact copy, input text |
| `{typography.button}` | 14px | 600 | 1.5 | 0.08em | Primary button labels, uppercase |
| `{typography.button-ghost}` | 16px | 400 | 1.5 | 0 | Ghost button labels |
| `{typography.nav-link}` | 13px | 400 | 1.5 | 0.08em | Navigation and small links, uppercase |
| `{typography.caption}` | 12px | 400 | 1.5 | 0.1em | Stat labels, uppercase |
| `{typography.caption-uppercase}` | 11px | 400 | 1.5 | 0.2em | Section and form labels, uppercase |
| `{typography.chip}` | 10px | 400 | 1.5 | 0.1em | Category and tech badges, uppercase |
| `{typography.code}` | 13px | 400 | 1.5 | 0 | `profile.ts` window |

### Principles
Display type is always uppercase Bebas Neue at its single weight, never faux-bolded. Size carries emphasis, and one lime word carries the rest. Labels are small, uppercase and widely tracked, and that contrast with the huge display type gives the page its poster feel.

### Note on Font Substitutes
Bebas Neue and Space Grotesk are open fonts, so no substitute is needed. If Bebas Neue fails to load, the declared fallback is `cursive`, which reads as off-brand. `Oswald` or `Anton` would be closer fallbacks.

## Layout

### Spacing System
- **Base unit:** 4px (Tailwind's scale).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 64px · `{spacing.band}` 80px · `{spacing.section}` 128px.
- **Section padding:** `{spacing.section}` (`py-32`) on all main bands.
- **Between blocks:** `{spacing.band}` (`gap-20`), and `{spacing.xxl}` (`gap-16`) inside split layouts.
- **Card padding:** `{spacing.xl}` (`p-8`) on skill cards.

### Grid & Container
- **Max content width:** `{spacing.container}` (`max-w-7xl`), narrowed by viewport, and 1800px at `wide-screen`.
- **Standard container:** Every section uses `max-w-7xl w-11/12 tablet:w-5/6 desktop:w-3/4 wide-screen:max-w-450 mx-auto`. Reuse this exact string.
- **Page order:** Hero, About, Skills, Tech Marquee, Experience, Projects, Contact, Footer.
- **Section label:** An absolutely positioned `top-12 left-4 tablet:left-16` row with a 24px lime rule and a `{typography.caption-uppercase}` word.
- **Split layouts:** One column below `desktop`, two from it. About uses equal columns, Contact uses `1fr 1.2fr`, and project rows alternate with `desktop:flex-row-reverse`.

### Whitespace Philosophy
Generous vertical space lets the oversized headlines land one at a time. Horizontal space narrows the container on large screens rather than stretching content, so line lengths stay comfortable even on very wide displays.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Section bands and hero |
| Hairline | 1px `{colors.hairline}` border | Inputs, cards, chips, rows |
| Stepped surface | `{colors.surface-alt}` or `{colors.surface-raised}` background | Alternate bands, skill cards |
| Blur | `backdrop-blur-md` over a translucent surface | Open mobile menu only. Avoid it on anything that stays on screen during scrolling |
| Sticky stack | `sticky` cards with increasing `z-index` and scroll-linked scale | Skill cards |

The elevation philosophy is **surface steps first, no shadows**. Layer order is navbar `z-50`, mobile backdrop `z-40`, and noise overlay 9997.

### Decorative Depth
- `noise-overlay`: SVG fractal-noise grain at 5% opacity, as one fixed layer in `App.tsx`. Don't add it per section.
- `bg-grid`: An 80px line grid at 4% opacity behind the hero.
- Lime radial glows: Slowly breathing orbs in the hero and a static glow behind Contact.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Primary and ghost buttons, inputs, social rows, skill cards |
| `{rounded.md}` | 8px | Experience logo tiles |
| `{rounded.lg}` | 12px | About code window |
| `{rounded.xl}` | 16px | Project images and the About card |
| `{rounded.full}` | 9999px | Chips, ghost pills and circles, status dots, logo mark |

The `--radius` value in `theme.css` is unused scaffolding, so don't build on it.

### Photography & Illustrations
The site uses no portrait photography or illustration. Visual interest comes from type, and from these sources:
- Project screenshots, 380px tall on large screens, cropped with `object-cover`.
- The About card's decorative `profile.ts` code window.
- Organization logos at 48px with `object-contain`, and brand icons at 32px in the marquee.

## Components

### Top Navigation

**`top-nav`** — Fixed bar, transparent at the top of the page. A round lime "IS" mark and wordmark sit at the left, with links at the right in `{typography.nav-link}`. The active link turns lime with a sliding 1px underline.

**`top-nav-scrolled`** — After 50px of scroll, the background becomes `{colors.surface}` at 95% with a `{colors.hairline-soft}` bottom edge.

**`top-nav-cta`** — The Contact link, a small `button-ghost` pill.

**Nav switches** — `NavSwitch.tsx`: two 56 × 28px pills at the far right of the bar, for theme (moon and sun) and language (EN and HU). The default option is on the left, and a thumb in `ink` (white in dark, near-black in light) slides to the active one. The tap area extends to 44px high through a pseudo-element. Below `laptop` they sit left of the hamburger. The wordmark is hidden below `tablet` and from `laptop` to `desktop`, where the bar has no room for it, leaving the "IS" mark. Dark and EN are the defaults, and the visitor's choice is saved in `localStorage` and applied by an inline script in `index.html` before first paint.

### Buttons

**`button-primary`** — Lime fill, near-black uppercase `{typography.button}`, square corners, 16px × 32px padding. **`button-primary-hover`** wipes a white layer (`brand-wipe`, darker olive in the light theme) in from the left over 0.35s. It scales to 1.03 on hover and 0.97 on tap. **`button-primary-disabled`** shows the form's loading state.

**`button-ghost`** — Transparent with a `{colors.hairline-strong}` border, white `{typography.button-ghost}` label and 12px × 24px padding. **`button-ghost-hover`** turns the border, label and icons lime, scaling to 1.02 on hover and 0.96 on tap over 0.15s.

**`button-ghost-pill`** — `button-ghost` with full-round corners, used for "More Projects".

**`button-ghost-circle`** — 40px circular `button-ghost` holding one icon, used for project links.

Both button variants come from `Button.tsx`: `variant` is `primary` or `ghost`, `shape` is `square`, `pill`, `circle` or `underline`, and `size` is `sm`, `md` or `none`. Use it for any new button rather than restyling a link. Set `slideOnHover` on a primary button to keep its size on hover, slide the label and icons 5px right over 0.2s, and scale to 0.98 on tap, as on "Send Message". Entrance animations go on a wrapping motion element.

**`text-link`** — `button-ghost` with `shape="underline"`: an uppercase `{typography.nav-link}` label with only a bottom hairline, such as "View All on GitHub". It takes the same lime hover and scaling.

### Cards & Containers

**`hero-band`** — Full-height band with the grid, glows, tag line, name, typewriter role, bio, buttons and stats, plus a scroll indicator.

**`section-band`** + **`section-band-alt`** — Standard section wrappers with a section label, the container and `py-32`.

**`section-label`** — A lime rule and a faint uppercase word in the section's top-left corner.

**`stat-value`** + **`stat-label`** — Count-up number, above a small uppercase label, both centered in their card. Below `tablet` the three cards share the row in equal thirds. with a `+` suffix on open-ended totals only (projects and technologies, not certifications). Hero only.

**`profile-visual-card`** + **`profile-visual-tint`** — The About card's rounded container with a diagonal gradient. Below the code window, a soft-skills row shows three Lucide icons in `card-accent` with short labels.

**`code-window-card`** — The translucent `profile.ts` window, with `{colors.surface}` standing in for `bg-black/40`, plus **`code-keyword`** and **`code-string`** text.

**`skill-card`** — Square `{colors.surface-raised}` card with a `{colors.hairline}` border, a lime icon and a list marked with small lime diamonds. Cards stack as you scroll.

**`entry-row`** — Experience row with a logo, `{typography.title-md}` title and date, separated by a top hairline.

**`project-image`**, **`project-title`** + **`project-description`** — Alternating project rows with the image on one side and text on the other.

**`tech-pill`** — Draggable marquee item with an icon and name that pauses on interaction.

### Inputs & Forms

**`text-input`** — `.input-field`: transparent, 1px `{colors.hairline}` border, square corners, 16px × 20px padding. **`hairline-focus-ring`** represents its lime border on focus, which transitions over 0.3s.

**`text-input-label`** — Uppercase label above the field.

**`text-input-error`** — Red message above the submit button.

**`social-row`** — Full-width contact link row built on `button-ghost`. On hover it takes the ghost treatment and an arrow appears.

### Tags / Badges

**`badge-category-web`** + **`badge-category-3d`** — Project category pill tinted with the project's color.

**`badge-tech`** — Muted tech-tag pill with a `{colors.hairline}` border.

### Dividers

**`hairline-divider`**, **`hairline-divider-strong`** + **`hairline-divider-soft`** — The three 1px line strengths.

### Footer

**`footer`** — Sunken band with the wordmark, navigation and social links. Links turn lime on hover.

**`footer-legal`** — Copyright, privacy settings and "Built with" line. A single row from `tablet`, and three centered lines below it. The privacy settings button opens the Cookiebot dialog. It uses `text-ink-50` and an underline so it stays readable as a control, and turns lime on hover.

### Motion & Cursor

**`scrollbar-thumb`** — 4px lime scrollbar, darkening on hover.

**Cursor** — CSS cursors in `index.css`, sized like an OS pointer: a borderless 14 × 19px lime arrow, plus lime I-beam and grab hands with a black outline for text fields and the marquee. `CursorTone.tsx` switches the arrow to a near-black fill with a lime outline over light text, light fills, images and icons, In the light theme, the arrow and grab hand are near-black with a white border, and `CursorTone.tsx` turns them white with a near-black border over dark fills, the dark `profile.ts` card, dark areas of images, large dark icons and the glyphs of dark text at 40px or larger. Smaller dark text and icons keep the dark cursor, because a white one would disappear on the page around them. Disabled buttons keep the native not-allowed cursor.

**Motion standards**
- Reveal easing: `[0.33, 1, 0.68, 1]`.
- Durations: 0.5–0.9s for reveals, 0.2–0.35s for hovers.
- Headlines rise from `y: "110%"` inside an `overflow-hidden` wrapper. In Hungarian, `index.css` adds top padding to these so the mask doesn't cut off accents.
- Scroll reveals use `useInView` with `{ once: true, margin: "-20% 0px" }`, or `whileInView` with `viewport={{ once: true }}`.

## Do's and Don'ts

### Do
- Anchor every section on a `canvas` surface.
- Check new work in both themes and both languages. Hungarian text often runs longer.
- Keep one lime focal point per view: one headline word and one main action.
- Use Bebas Neue for every display headline, and split it into white and lime parts.
- Keep reading text at `{colors.body}` or brighter.
- Reuse the standard container string and `{spacing.section}` on new sections.
- Lazy-load below-the-fold sections, and give images `loading="lazy"` and `decoding="async"`.
- Update this file in the same change when a token or pattern changes.

### Don't
- Don't add a second brand accent, or use project colors outside their row.
- Don't round primary buttons or inputs, and don't add drop shadows.
- Don't use grey hex values for text, or `text-white` outside the `profile.ts` card. Use the `ink` steps.
- Don't use a literal lime in components. Use `brand-fill` or `brand-ink`, so the light theme stays free of yellow.
- Don't use `{colors.muted}` or `{colors.faint}` for information a visitor needs.
- Don't add new font families.
- Don't animate layout properties such as `width` or `top` for continuous effects. Use `transform` and `opacity`.

## Responsive Behavior

### Breakpoints

These are the only breakpoints. They are set in `@theme` in `src/styles/index.css`, which clears Tailwind's defaults, so `sm:`, `md:` and the rest generate nothing. Don't use arbitrary ones such as `min-[500px]:`.

| Name | Class prefix | From | Key Changes |
|---|---|---|---|
| Mobile | `mobile:` | 375px | Hero buttons go from three rows to two, full width; hero stat labels and the `profile.ts` card reach full size |
| Tablet | `tablet:` | 768px | Container `w-5/6`; navbar wordmark appears; section labels move in; footer three columns; footer legal, experience rows and hero buttons become one row; scroll indicator appears |
| Laptop | `laptop:` | 1024px | Full nav links. Page content keeps the tablet layout |
| Desktop | `desktop:` | 1440px | Splits become two columns; project rows alternate; container `w-3/4`, capped at 1280px; wordmark returns next to the nav links |
| Wide Screen | `wide-screen:` | 2560px | Container capped at 1800px; display type and project images grow |

### Touch Targets
- `{component.button-primary}` and `{component.text-input}` comfortably exceed 44px in height.
- `{component.button-ghost-circle}` is 40 × 40px, slightly under the 44px target.
- `{component.social-row}` spans the full width of its column.

### Collapsing Strategy
- Navigation collapses to a hamburger below `laptop`, opening a centered menu that slides down under the bar.
- Hero buttons sit in one left-aligned row from `tablet`. Below that the group is full width, like the Send Message button. From `mobile` the resume button takes the first row, and GitHub and LinkedIn share the second at half width each. Below `mobile` there is one full-width button per row.
- Split layouts stack with the visual or info column first.
- Display type scales through `clamp()`, so sizes shrink with the viewport instead of breaking at set points.

### Image Behavior
- Project images are full width on mobile and half width from `desktop`, at a fixed height with `object-cover` (taller at `wide-screen`).
- Logos stay at a fixed 48px at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key (`{component.button-primary}`, `{component.skill-card}`).
2. Variants of an existing component (`-hover`, `-disabled`, `-scrolled`) live as separate entries in `components:`.
3. Use `{token.refs}` in this document. In code, use the matching theme token from `src/styles/index.css`.
4. Headlines stay uppercase Bebas Neue, and labels stay tracked uppercase Space Grotesk.
5. Black + white + lime is the trinity. Don't introduce a new surface hue.
6. When in doubt about emphasis, go bigger before adding another accent.
7. New sections start by copying a similar section's wrapper and section label.

## Known Gaps

- **Roboto isn't loaded.** `font-['Roboto']` depends on the visitor having it installed and has no fallback declared.
- **No reduced-motion support.** Nothing honors `prefers-reduced-motion`.
- **Low-contrast labels.** In the dark theme, `{component.section-label}`, `{component.footer}`, `{component.footer-legal}` and several 10–12px labels fall below WCAG AA.
- **Small hamburger target.** The menu button is a 22px icon with no padding.
- **Marquee font.** `tech-pill` names set no font family and inherit the browser default sans stack.
- **Tokens are written by hand.** The theme tokens in `src/styles/index.css` aren't generated from this file, so keep the two in step. `src/styles/theme.css` holds unrelated scaffolding values.
- **CSS-shorthand padding.** Two-value `padding` entries follow CSS shorthand, which is broader than the single dimension in Google's token schema, so the linter may warn about them.
