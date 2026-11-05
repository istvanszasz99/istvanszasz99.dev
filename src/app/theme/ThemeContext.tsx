import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light";

const metaThemeColors: Record<Theme, string> = {
  dark: "#080808",
  light: "#efefe8",
};

const systemLight = "(prefers-color-scheme: light)";

function hasSavedTheme() {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark";
  } catch {
    return false;
  }
}

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // The inline script in index.html has already applied the saved or system theme.
  const [theme, setThemeState] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );
  const followsSystem = useRef(!hasSavedTheme());

  const applyTheme = useCallback((next: Theme) => {
    setThemeState(next);
    const root = document.documentElement;
    if (next === "light") {
      root.dataset.theme = "light";
    } else {
      delete root.dataset.theme;
    }
  }, []);

  // The slider's choice replaces the system setting from here on.
  const setTheme = useCallback(
    (next: Theme) => {
      followsSystem.current = false;
      applyTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Storage can be blocked. The choice then lasts until the page is closed.
      }
    },
    [applyTheme],
  );

  useEffect(() => {
    const media = window.matchMedia(systemLight);
    const onChange = (event: MediaQueryListEvent) => {
      if (followsSystem.current) applyTheme(event.matches ? "light" : "dark");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [applyTheme]);

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", metaThemeColors[theme]);
  }, [theme]);

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
