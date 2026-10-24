"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useTheme } from "@/contexts/ThemeContext";
import { DarkMode, LaptopMac, LightMode } from "@/components/ui/icons";
import { useEffect, useState } from "react";

const OPTIONS = [
  { value: "light", label: "Light", icon: LightMode },
  { value: "dark", label: "Dark", icon: DarkMode },
  { value: "system", label: "System", icon: LaptopMac },
] as const;

/**
 * Mirrors mobile's ThemeModeSelector — same three-way choice (light/dark/
 * system), just backed by next-themes' localStorage persistence instead of
 * AsyncStorage.
 */
export function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();
  // next-themes only knows the real theme after mount (it reads
  // localStorage/system preference client-side) — rendering the icon before
  // that would either flash the wrong one or mismatch server-rendered HTML.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Deliberately not derivable during render: the server and the client's
    // FIRST render must produce identical markup, and "has hydration
    // finished" is only ever true after that first render — an effect is
    // the correct tool for exactly this, not a workaround for one.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const current = OPTIONS.find((option) => option.value === themeMode) ?? OPTIONS[2];
  const Icon = current.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          {mounted ? <Icon /> : <LaptopMac />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {OPTIONS.map((option) => (
          <DropdownMenuItem key={option.value} onSelect={() => setThemeMode(option.value)}>
            <option.icon />
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
