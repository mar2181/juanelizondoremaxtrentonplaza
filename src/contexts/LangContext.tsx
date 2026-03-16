import React, { createContext, useContext, useState } from "react";

type Lang = "es" | "en";

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "es",
  toggle: () => {},
});

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("es");
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
};

/** Bilingual text helper */
export const T: React.FC<{ es: string; en: string }> = ({ es, en }) => {
  const { lang } = useLang();
  return <>{lang === "es" ? es : en}</>;
};
