"use client";

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";
import type { ReactNode } from "react";

/**
 * Light/dark/system mode, backed by next-themes. There is a single Rawasi
 * palette (see DESIGN.md), so mode is the only theme axis.
 *
 * `attribute="class"` toggles a `.dark` class on `<html>`, which is exactly
 * what globals.css's `@custom-variant dark (&:is(.dark *))` already expects.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

interface UseThemeResult {
  themeMode: "light" | "dark" | "system";
  isDark: boolean;
  setThemeMode: (mode: "light" | "dark" | "system") => void;
}

/**
 * Colors are CSS custom properties (globals.css) read by Tailwind classes,
 * so there is no JS `theme` color object here.
 */
export function useTheme(): UseThemeResult {
  const { theme, setTheme, resolvedTheme } = useNextTheme();

  return {
    themeMode: (theme as UseThemeResult["themeMode"] | undefined) ?? "system",
    isDark: resolvedTheme === "dark",
    setThemeMode: setTheme,
  };
}
