---
name: B!R Technologies
description: Software agency delivering design, DevOps, and AI agents — shipped with a bang.
colors:
  bone-paper: "#F2EEE3"
  ink-black: "#161413"
  card-surface: "#FAF6F4"
  secondary-paper: "#E3DED3"
  proof-mark: "#FFE70A"
  muted-ash: "#66615C"
  deep-ink: "#131210"
  destructive: "#E3301C"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Space Mono', ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.65rem"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  none: "0rem"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  "2xl": "96px"
components:
  button-default:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.bone-paper}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    size: "44px"
  button-default-hover:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.bone-paper}"
  button-hero:
    backgroundColor: "{colors.proof-mark}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "0 32px"
    size: "56px"
  button-hero-hover:
    backgroundColor: "{colors.proof-mark}"
    textColor: "{colors.ink-black}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    size: "44px"
  button-outline-hover:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.bone-paper}"
  card-default:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "24px"
  input-default:
    backgroundColor: "{colors.bone-paper}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 12px"
---

# Design System: B!R Technologies

## 1. Overview

**Creative North Star: "The Workshop Wall"**

This system is the visual language of a senior engineering team — not an agency pitching itself, but engineers talking to engineers. The Workshop Wall is the physical metaphor: a workspace where tools hang in exactly the right place, surfaces are worn in by use, and every mark means something. Nothing is hung for decoration. The ink is real. The structure is load-bearing.

The aesthetic is **brutalist editorial**: bone paper as the working surface, near-black ink as the primary mark, and a single Proof Mark yellow for the moments that demand attention. Hard offset shadows replace ambient blur — depth here is structural, like blocks pressed onto a page, not atmospheric. Zero border radius. Heavy type at tight leading. The system is direct, dense where it needs to be, and deliberately quiet everywhere else.

What this system explicitly rejects: the generic SaaS template (cream backgrounds, rounded cards, gradient CTAs), the Big-4 consulting firm aesthetic (stiff navy-and-white corporate stillness), the freelancer portfolio (personal, scrappy, under-produced), and the overdesigned agency showreel (motion performing creativity rather than serving it).

**Key Characteristics:**
- Bone paper on near-black ink — contrast that reads as physical, not digital
- Zero border radius — no rounding anywhere; corners are decisions
- Hard offset shadows with no blur — depth through geometry, not atmosphere
- Archivo extrabold for display; Space Mono for labels and code contexts
- Proof Mark yellow used in small, loud doses — its rarity is the system
- `mark-accent` — yellow highlighter marker behind inline text, a signature move
- Eyebrow labels as a deliberate brand system: square yellow tick + mono uppercase

## 2. Colors: The Workshop Palette

A two-color system amplified by one signal: bone paper and press-black ink, punctuated by Proof Mark yellow.

### Primary
- **Press Black** (`#161413`): The ink. Used as the primary button fill, hard borders, rule lines, and all foreground text. On hover states, surfaces fill with this color — the interaction model is "press to ink."
- **Bone Paper** (`#F2EEE3`): The working surface. Body background in light mode. The warmth is earned, not decorative — closer to newsprint than cream. Also the text color inside ink-filled elements.

### Secondary
- **Lifted Paper** (`#FAF6F4`): Card surfaces and raised states. One tone lighter than the body. Signals elevation without brightness or shadow blur.
- **Gallery Paper** (`#E3DED3`): Section alternates and muted surfaces. Used as background on secondary sections to break the page without introducing new color.

### Tertiary
- **Proof Mark** (`#FFE70A`): The one signal color. Used for: the active navigation underline, the selection highlight, `mark-accent` inline text, the blinking cursor, focus rings, the terminal's success line, and the hero variant button. Never used as a background; never used as body text. Its job is to mark the thing that matters most on any given surface, once.

### Neutral
- **Muted Ash** (`#66615C`): Secondary body text and metadata. Descriptive, not hierarchically important content. At ~4.7:1 against Bone Paper — passes AA.
- **Deep Ink** (`#131210`): Dark mode body background. The inverse of Bone Paper, tinted warm toward the same hue.
- **Destructive Red** (`#E3301C`): Error states only. Never used decoratively.

### Named Rules
**The Proof Mark Rule.** Signal yellow appears on ≤10% of any given screen. When everything is marked, nothing is. Use it once per viewport to name what matters; let the rest recede.

**The Press Rule.** All hover interactions move toward ink. Outline buttons fill to Press Black; ghost elements fill to Press Black. The metaphor is consistent — pressing always leaves a mark.

## 3. Typography

**Display Font:** Archivo (ui-sans-serif fallback)
**Label/Mono Font:** Space Mono (ui-monospace fallback)

**Character:** Archivo at extrabold with tight negative tracking is the voice of a system that has nothing to prove — dense, upright, direct. Space Mono introduces a typewriter grain for labels, metadata, and code contexts: technical without being cold.

### Hierarchy
- **Display** (800 weight, clamp(3.25rem–5.6rem), line-height 0.9, tracking −0.03em): Hero headlines only. Uppercase. The page's claim. One per page.
- **Headline** (800 weight, clamp(2rem–3.75rem), line-height 0.95, tracking −0.02em): Section headings. Uppercase. Often uses `mark-accent` on a key word.
- **Title** (700 weight, 1.5rem, line-height 1.2, tracking −0.01em): Sub-headers, card titles, featured labels.
- **Body** (400 weight, 1rem, line-height 1.6): Prose and descriptions. Max line length 65–75ch. Color: Muted Ash when secondary, Press Black when primary.
- **Label** (Space Mono, 400 weight, 0.65rem, tracking 0.12em, uppercase): Navigation items, eyebrow system, metadata, pricing labels, terminal text. The mono face marks "this is a system annotation, not content."

### Named Rules
**The Ceiling Rule.** Display headings cap at 5.6rem (~90px). Above that, the page shouts. Below 3.25rem, it loses the physical mass the system needs.

**The Uppercase Discipline.** All-caps is used only in Display, Headline, and Label roles. Body and Title text is mixed-case. Using uppercase on descriptive body copy collapses the hierarchy.

## 4. Elevation

This system uses **structural hard-offset shadows** as the default elevation signal, with a Proof Mark yellow glow appearing specifically on interactive hover states. There is no blur, no ambient shadow, no drop-shadow softening.

Surfaces at rest are flat. Lift happens mechanically: a precise offset in X and Y, no feathering. The metaphor is physical type blocks raised off the substrate — you can see the distance because you can see the shadow's edge.

### Shadow Vocabulary
- **Card Shadow** (`4px 4px 0 0 #161413`): Standard lift. Used on cards, buttons on hover. Ink-colored offset pointing down-right.
- **Elegant Shadow** (`8px 8px 0 0 #161413`): Heavy lift. Used for prominent surface elevation — featured cards, modals, deep callouts.
- **Proof Mark Glow** (`6px 6px 0 0 #FFE70A`): Hover-state interaction shadow on the default ink button. The only time yellow appears in a shadow role. Signals "this is the interactive object" without changing the button's fill.
- **Dark Mode Offset** (`4px 4px 0 0 #F2EEE3`): Same geometry, bone-colored — inverted identity maintained in dark mode.

### Named Rules
**The No-Blur Rule.** `box-shadow: N N 0 0 color` — the spread and blur are always zero. A blurred shadow means atmosphere. An unblurred shadow means structure. This system is structural.

**The State Signal Rule.** The Proof Mark Glow shadow appears only on the default ink button hover (not hero, not outline). It is the one place where yellow enters the shadow layer. All other hover shadows use the ink offset.

## 5. Components

### Buttons

The button system treats interaction as physical printing: pressing leaves a mark. On hover, every button either lifts on a hard shadow or fills with ink. No gradient fills, no border-radius, no softening.

- **Shape:** Sharp (0px radius) — non-negotiable; `rounded-none` everywhere.
- **Hero (primary CTA):** Proof Mark yellow background (`#FFE70A`), Press Black text. Border: 2px Press Black. Size: 56px tall, 32px horizontal padding. On hover: translate −3px/−3px, 4px ink card shadow. The signature button — used for primary conversions only.
- **Default (ink):** Press Black fill, Bone Paper text. Border: 2px Press Black. On hover: translate −3px/−3px, 6px Proof Mark glow shadow. The secondary action button — appears in body sections.
- **Outline:** Transparent fill, 2px Press Black border, Press Black text. On hover: fills to Press Black, text inverts to Bone Paper. Clean secondary action with no lift.
- **Ghost:** No border, no fill. On hover: fills to Press Black, inverts text. Contextual inline actions.
- **Link:** Press Black text, underline-offset-4, yellow decoration. Normal case, normal tracking — not a button, just inline linking.
- **Focus:** 2px Proof Mark ring, offset 2px. Keyboard navigation is first-class.
- **Active state:** All transforms reset to 0; shadow collapses. The press completes.

### Cards / Containers

- **Corner Style:** Sharp (0px radius). Always.
- **Background:** Lifted Paper (`#FAF6F4`) for standard cards. Press Black for inverted/featured cards.
- **Shadow Strategy:** Card Shadow (4px offset) at rest for elevated cards; Elegant Shadow (8px) for featured/hero cards. The `brut-box` utility class produces the canonical bordered surface.
- **Border:** 2px Press Black — always present, never decorative.
- **Internal Padding:** 24px (`p-6`). Never nested cards.
- **Hover lift:** `.brut-lift` — translate −3px/−3px, Card Shadow on hover. Applied to interactive cards.

### Inputs / Fields

- **Style:** 48px tall, 2px Press Black border, Bone Paper background, 12px horizontal padding. Zero radius.
- **Focus:** 2px Proof Mark yellow ring (`ring-accent`), no offset. The yellow ring is the only visible focus affordance beyond the border — it signals "active" with the system's signal color.
- **Placeholder:** Muted Ash (`#66615C`) — verified ≥4.5:1 on Bone Paper.
- **Disabled:** 50% opacity, pointer-events none.
- **Error:** Destructive Red border (`#E3301C`) replaces the ink border.

### Navigation

- **Style:** Fixed header, 72px tall, 2px Press Black bottom border. Background fades to `bg-background/80 backdrop-blur` when at page top; solid `bg-background` when scrolled.
- **Nav items:** Space Mono, 0.75rem, uppercase, tracking 0.12em (Label role). Color: Muted Ash at rest, Press Black on active/hover.
- **Active indicator:** 3px Proof Mark yellow bar at the bottom edge of the nav item — underline, not background fill.
- **Primary CTA:** Hero button (Proof Mark fill) sits rightmost in the nav.
- **Mobile:** Full-width drawer, 2px Press Black top border. Items stagger-enter with a small x-axis translate. Active items carry a Proof Mark square tick (same eyebrow component).

### Eyebrow Labels (Signature Component)

The eyebrow is the system's section annotation: Space Mono, 0.65rem, uppercase, tracking 0.25em. A 12×12px Proof Mark yellow square precedes the text via `::before`. This component appears to introduce section identity — not as generic scaffolding, but as a deliberate brand mark. The yellow square is the system's fingerprint.

The eyebrow should appear on one or two sections per page, not every section. When it appears on every heading, it becomes scaffolding. When it appears selectively, it marks the system's own voice.

### Utility Patterns

- **`mark-accent`**: Yellow highlighter behind inline text — `background: linear-gradient(transparent 58%, #FFE70A 58%)`. Used on one key word per headline, typically inside a Headline role. Never on multiple words in the same line.
- **`grid-ink`**: Fine ink grid backdrop at 8% opacity, 28×28px. Used as section texture without adding visual weight.
- **`dots-ink`**: Halftone dot field at 16% opacity, 16×16px. Alternative section texture.
- **`stripes-ink`**: 45° diagonal hazard stripes. For structural decoration in small doses.

## 6. Do's and Don'ts

### Do:
- **Do** use 2px Press Black borders on every interactive element — buttons, cards, inputs, and the nav. The border is the structure; removing it removes the system.
- **Do** use `mark-accent` on one key word per headline — the yellow highlight marker is the system's editorial voice; use it sparingly and never on full sentences.
- **Do** use uppercase only in Display, Headline, and Label roles. All other text is mixed-case.
- **Do** keep the Proof Mark yellow rare. Use it for: focus rings, the active nav indicator, the hero button, the eyebrow square, `mark-accent`, cursor blinks, and terminal success lines. That is the complete list.
- **Do** write display headings at `line-height: 0.9` and `letter-spacing: -0.03em`. The tight tracking and sub-1 leading are the system's typographic signature.
- **Do** use hard-offset shadows with zero blur (`4px 4px 0 0`). Never gaussian shadows on this system.
- **Do** cap display headings at 5.6rem (approximately 90px). Test at all breakpoints; overflow is a system failure.
- **Do** verify Muted Ash (`#66615C`) text against its background before use — it passes AA on Bone Paper but fails on Secondary Paper. Use Press Black on darker surfaces.

### Don't:
- **Don't** add `border-radius` anywhere. Zero radius is non-negotiable. `rounded-none` is the only valid value system-wide.
- **Don't** use the Proof Mark yellow as a background for body content, section fills, or anything that covers more than ~10% of a screen.
- **Don't** use gradient text (`background-clip: text`). Emphasis is carried by weight and scale, not color gradients.
- **Don't** soften hover states with transitions that ease-in-out symmetrically. All motion eases out (cubic-bezier(0.2, 0, 0, 1) is the system default). Entrances decelerate; there is no bounce.
- **Don't** use glassmorphism or `backdrop-filter: blur()` decoratively. The header's blur is functional (scroll-state signaling); do not extend this pattern.
- **Don't** produce a generic SaaS landing page — cream backgrounds, rounded cards, gradient CTAs, feature grids with icon+heading+text repeated identically. This system is the explicit counter to that aesthetic.
- **Don't** add eyebrow labels above every section heading. Eyebrows as universal scaffolding are a failure. They earn their place by being selective.
- **Don't** use numbered section markers (01/02/03) as decorative scaffolding. Numbers appear only when the section IS a real sequence — e.g. the Process section — and the order carries meaning.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards or callouts. Rewrite with full borders, background tints, or nothing.
- **Don't** let the site feel like a freelancer portfolio (personal, scrappy, under-produced) or a Big-4 consulting deck (stiff, navy, corporate, slow). B!R is a senior team, not a department.
- **Don't** make motion the point. Animations serve the content — reveal, confirm, direct attention. Motion that exists to look impressive is the overdesigned agency showreel failure mode.
