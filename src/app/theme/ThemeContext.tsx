import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light";

const metaThemeColors: Record<Theme, string> = {
  dark: "#080808",
  light: "#efefe8",
};

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // The inline script in index.html has already applied any saved choice.
  const [theme, setThemeState] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    const root = document.documentElement;
    if (next === "light") {
      root.dataset.theme = "light";
    } else {
      delete root.dataset.theme;
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", metaThemeColors[next]);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked. The choice then lasts until the page is closed.
    }
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}
