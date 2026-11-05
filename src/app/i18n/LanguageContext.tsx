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
import { setCookiebotLanguage, setCookiebotWidgetText } from "./cookiebot";
import { en, type Translation } from "./en";
import { hu } from "./hu";

export type Language = "en" | "hu";

const dictionaries: Record<Language, Translation> = { en, hu };

function hasSavedLanguage() {
  try {
    const saved = localStorage.getItem("lang");
    return saved === "hu" || saved === "en";
  } catch {
    return false;
  }
}

// Hungarian if it is anywhere in the visitor's language list, otherwise English.
function detectLanguage(): Language {
  return navigator.languages.some(
    (language) => language.toLowerCase().split("-")[0] === "hu",
  )
    ? "hu"
    : "en";
}

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // The inline script in index.html has already applied the saved or detected language.
  const [lang, setLangState] = useState<Language>(() =>
    document.documentElement.lang === "hu" ? "hu" : "en",
  );
  const followsDevice = useRef(!hasSavedLanguage());

  const applyLang = useCallback((next: Language) => {
    setLangState(next);
    document.documentElement.lang = next;
    setCookiebotLanguage(next);
  }, []);

  // The slider's choice replaces the device setting from here on.
  const setLang = useCallback(
    (next: Language) => {
      followsDevice.current = false;
      applyLang(next);
      try {
        localStorage.setItem("lang", next);
      } catch {
        // Storage can be blocked. The choice then lasts until the page is closed.
      }
    },
    [applyLang],
  );

  useEffect(() => {
    const onChange = () => {
      if (followsDevice.current) applyLang(detectLanguage());
    };
    window.addEventListener("languagechange", onChange);
    return () => window.removeEventListener("languagechange", onChange);
  }, [applyLang]);

  useEffect(() => {
    setCookiebotWidgetText(lang, dictionaries[lang].cookieWidget);
  }, [lang]);

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
