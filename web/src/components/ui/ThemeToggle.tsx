"use client";

import { Button } from "@/components/ui/button";
import { DarkMode, LightMode } from "@/components/ui/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { flushSync } from "react-dom";

// Same reveal as the mobile app's onboarding design 5 (OnboardingDesign5.tsx):
// the new mode grows out of the tapped button as a circle until it covers the
// screen, over 620ms, ease-out cubic. Nothing inside scales — the page is
// simply uncovered — which is what the View Transitions API gives us.
const REVEAL_DURATION = 620;
const REVEAL_EASING = "cubic-bezier(0.215, 0.61, 0.355, 1)"; // ease-out cubic

/**
 * One button that flips between light and dark. With nothing stored the site
 * follows the visitor's system setting (see ThemeProvider); clicking this
 * stores the opposite of whatever is showing and that choice wins from then
 * on, across visits.
 *
 * The switch plays the circular reveal where the browser supports View
 * Transitions, and is instant everywhere else and for visitors who ask for
 * reduced motion. The reveal itself is driven from here, and its stylesheet
 * half (no default cross-fade) is at the bottom of globals.css.
 *
 * Both icons are always rendered and the `dark:` variant picks which one
 * shows. next-themes puts the `.dark` class on <html> before first paint, so
 * the right icon is there immediately and there is no mounted-state flicker
 * or server/client mismatch to work around.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, setThemeMode } = useTheme();

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || prefersReducedMotion) {
      setThemeMode(next);
      return;
    }

    // Centre the circle on the button, and grow it to the viewport corner
    // furthest from it so the last frame covers everything.
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // flushSync so next-themes has put the new class on <html> by the time the
    // browser takes its "after" snapshot.
    const transition = document.startViewTransition(() => {
      flushSync(() => setThemeMode(next));
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
          },
          {
            duration: REVEAL_DURATION,
            easing: REVEAL_EASING,
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      // A skipped transition (tab hidden, another one started) rejects `ready`;
      // the theme has already switched, there is just nothing to animate.
      .catch(() => {});
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={className}
      onClick={toggle}
    >
      <DarkMode className="size-5 dark:hidden" />
      <LightMode className="hidden size-5 dark:block" />
    </Button>
  );
}
