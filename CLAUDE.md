# Rawasi

Real estate and construction company in Montreal. Tagline: "Anchored In Trust". Tone: trustworthy, solid, professional.

## UI rule

Before writing or changing any UI in `web/` or `mobile/`, read `DESIGN.md` at the repo root and follow it. Read it every time, not from memory.

- Use only tokens from `DESIGN.md`. No new hex values, no off-palette Tailwind colors.
- If existing code disagrees with `DESIGN.md`, `DESIGN.md` wins. Update the code and say so.
- If `DESIGN.md` doesn't cover something (spacing, shadows, motion, a new color role), ask before inventing it.
- If the user's own design conflicts with `DESIGN.md`, ask which wins.

## Where things live

- Web: Next.js in `web/`, Tailwind 4, shared components in `web/src/components/ui`, theme variables in `web/src/app/globals.css`.
- Mobile: Expo in `mobile/`, themes in `mobile/src/constants/themes.ts`.
- Logo: `web/public/Logo.png` and `mobile/assets/images/Logo.png`. Wide transparent PNG. Don't recolor or distort it.

## Before finishing UI work

Check contrast, light and dark mode, and phone width. Say which `DESIGN.md` tokens you used and any deviation.
