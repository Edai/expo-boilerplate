import React, { createContext, useState } from "react";

export const DEFAULT_LANGUAGE = "en";

const translationMessages = {
  en: require("../../translations/en.json"),
  zh: require("../../translations/zh.json"),
};

export const LANGUAGES_AVAILABLE = Object.keys(translationMessages);

export const LanguageContext = createContext({
  translations: translationMessages[DEFAULT_LANGUAGE],
  setAppLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
  languagesAvailable: LANGUAGES_AVAILABLE,
});

export const LanguageProvider = ({ children }) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState(
    translationMessages[DEFAULT_LANGUAGE]
  );
  const setLanguage = (language) => {
    setTranslations(translationMessages[language]);
    setAppLanguage(language);
  };

  const initializeAppLanguage = async () => {
    const currentLanguage = DEFAULT_LANGUAGE;
    setLanguage(currentLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
        languagesAvailable: LANGUAGES_AVAILABLE,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
