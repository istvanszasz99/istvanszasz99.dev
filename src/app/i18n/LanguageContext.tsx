import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en, type Translation } from "./en";
import { hu } from "./hu";

export type Language = "en" | "hu";

const dictionaries: Record<Language, Translation> = { en, hu };

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // The inline script in index.html has already applied any saved choice.
  const [lang, setLangState] = useState<Language>(() =>
    document.documentElement.lang === "hu" ? "hu" : "en",
  );

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem("lang", next);
    } catch {
      // Storage can be blocked. The choice then lasts until the page is closed.
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return value;
}
