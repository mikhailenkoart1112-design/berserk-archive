"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ua" | "de";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((current) => {
      if (current === "en") return "ua";
      if (current === "ua") return "de";
      return "en";
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div key={language} className="min-h-screen animate-[languageFade_0.35s_ease-out]">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}