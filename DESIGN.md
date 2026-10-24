---
name: Google (Material 3)
colors:
  background: "#faf8f6"
  foreground: "#242324"   # Logo near-black (tagline text)
  brand: "#3a3d3f"        # Primary — charcoal, the logo grey darkened for headers/footers
  muted: "#676a6c"        # Outline/Muted — exact logo grey (wordmark, mountains)
  border: "#e4e0db"       # Outline — hairline, never a mid-grey stroke
  card: "#ffffff"         # Surface Variant
  accent: "#e3682a"       # Secondary — logo orange, actions only. White text on it is 3.3:1, use foreground (4.7:1) or accent-strong
  accent-strong: "#b84b16" # Orange for text/links on light and white-label buttons (5.2:1 on white)
  warm: "#8f5f3a"         # Editorial accent (overlines, rules) — timber brown, kept apart from the action orange
  success: "#1f9d55"
  danger: "#b3261e"       # Error

  surface:                # Elevation ramp, light
    sunken: "#f1eeea"
    base: "#ffffff"
    raised: "#ffffff"
    glass: "#ffffffe6"

  dark:
    background: "#161617"
    foreground: "#f4f2ef"
    muted: "#a3a6a8"
    border: "#2e3032"
    card: "#1f2021"
    accent: "#f0783a"     # Lifted orange for dark surfaces (6.4:1 on background)
    accent-strong: "#f0783a"
    warm: "#d0a27a"
    success: "#4ac97e"
    danger: "#ff7a70"
    surface:              # Elevation ramp, dark — lighter = closer to the user
      sunken: "#0e0e0f"
      base: "#1f2021"
      raised: "#272829"
      glass: "#161617e6"

typography:
  fontFamily:
    sans: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"  # Main: body and UI. Weights 400, 400 italic, 500, 700
    mono: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"  # Same family
    display: "Fraunces, Georgia, Times New Roman, serif"          # Headlines. Variable 300-700, upright + italic
    text: "Inter, system-ui, -apple-system, Segoe UI, sans-serif" # Long paragraphs. Variable 300-700
  body:
    fontSize: "16px"
    lineHeight: "1.5"
    fontWeight: "400"
  heading:
    fontFamily: "display"
    fontWeight: "500"
    letterSpacing: "0"

rounded:
  default: "12px" # M3 uses 12px for cards/buttons by default
  md: "12px"
  lg: "18px"
  xl: "26px"
  full: "9999px"
---

<!--
Rawasi applied rules (palette sampled from the logo):
- Orange accent = actions only (buttons, active states, links). Never decoration.
- Timber brown = editorial signals (overlines, rules, "from" prices).
- Charcoal/grey = structure and text. Orange text on light uses accent-strong.
- Depth comes from the surface ramp + soft shadows, not from outlines. A border
  is a hairline separator, never a container's main definition.
-->


# Design System: Google (Material 3)

## Overview
Material 3 (Material You) is Google’s latest evolution of its design language. It is defined by personalization, accessibility, and an adaptive color system that responds to the user's environment.

## Design Philosophy
1. **Material You:** The brand is the user. The system uses dynamic color extraction to create a unique tonal palette based on the user's wallpaper.
2. **Adaptive Accessibility:** Uses a tonal palette system (0–100) to guarantee contrast ratios across any color combination.
3. **Personal & Expressive:** Moves away from the rigid grid of Material 2 toward softer shapes, larger interactive targets, and playful motion.
4. **Coherent Hierarchy:** Uses three tiers of tokens (Reference, System, Component) to manage complexity across platforms.

## Colors
- **Rawasi palette:** Sampled from the logo. Orange `#e3682a` (roof, towers) is the action color; grey `#676a6c` (wordmark, mountains) is muted text; `#242324` is body text. Backgrounds are a warm off-white so the orange sits naturally.
- **The Tonal System:** Colors are defined by their luminance rather than just hue. Primary, Secondary, and Tertiary roles each have their own tonal range.
- **Surface Variant:** Used for secondary containers and cards to create subtle depth without relying on heavy shadows.
- **On-Colors:** A strict system where every background color has a corresponding "On" color (e.g., `On Primary`) for high-contrast text and icons.

## Typography
- **IBM Plex Mono (main):** Body text, UI, labels, numbers. Static faces: Regular 400, Italic 400, Medium 500, Bold 700. `font-semibold` (600) resolves to Bold. It is the default (`font-sans` and `font-mono`).
- **Fraunces (display):** Headlines (`font-display`, applied to `h1`–`h6`). Variable weight 300–700 with optical size, upright and italic. Pair an upright headline with an italic accent word, as in the reference design ("Built with *Purpose*").
- **Inter (long text):** Paragraphs of more than a couple of lines (`font-text`), where a monospace face gets tiring. Variable weight 300–700.
- **Sizes:** Body is 16px / 1.5 / 400. Headings are Medium 500 with no letter-spacing.
- **Web files:** WOFF2 Latin subsets (English and French accents) live in `web/public/fonts/<Family>` and are declared with `@font-face` in `web/src/app/globals.css`. All three are under the SIL Open Font License, free for commercial use.

## Icons
- **Material Symbols, Outlined, weight 400, 24px:** the set at fonts.google.com/icons. Icons are inline SVG components in `web/src/components/ui/icons.tsx`, named like the site's icons in PascalCase (`arrow_forward` becomes `ArrowForward`). Don't import another icon library.
- **Adding one:** download the SVG from fonts.google.com/icons and add its path to `icons.tsx` (the file explains how). Choose Fill 1 only when the design needs a filled glyph, such as a star rating or a radio dot.
- **Use:** they draw in the current text color and size with `size-*` classes (`size-4` for buttons and inline use). They are decorative (`aria-hidden`), so give a button or link its own accessible name.

## Components
- **FAB (Floating Action Button):** Now often larger and square-rounded (`16px`) rather than a perfect circle.
- **Navigation Bar:** A horizontal bottom bar with large, rounded pill-shaped indicators for the active state.
- **Cards:** Feature a standard `12px` rounding and often use the "Surface Variant" color instead of a border.

## Visual Effects
- **Dynamic Color:** The primary visual flourish. The entire UI shifts its hue to match the user's context.
- **Soft Shadows:** Uses very subtle, multi-layered shadows that feel more like "ambient occlusion" than traditional drop shadows.
- **State Layers:** Interactive elements use an overlay (usually `8%` to `12%` opacity) to indicate hover and focus states.
- **Light/dark switch (web):** a circular reveal that grows out of the toggle button until it covers the screen. 620ms, ease-out cubic (`cubic-bezier(0.215, 0.61, 0.355, 1)`), the same as the mobile onboarding design 5. The page underneath doesn't scale or fade. Browsers without View Transitions, and visitors who prefer reduced motion, get an instant switch. Implemented in `web/src/components/ui/ThemeToggle.tsx` plus the `::view-transition` rules at the end of `globals.css`.
