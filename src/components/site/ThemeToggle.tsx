"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-colors hover:bg-accent"
        aria-label="Toggle theme"
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      aria-label="Basculer le thème"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-colors hover:bg-accent hover:text-[var(--brand-orange)]"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
