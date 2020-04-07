import { createContext } from "react";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

const enTranslationMessages = require("../../translations/en.json");
const translationMessages = {
  en: enTranslationMessages,
};

// i18n.locale = Localization.locale;
i18n.fallbacks = true;
i18n.translations = translationMessages;
i18n.getText = (str) => {
  return i18n.t(str);
};

export default IntlContext = createContext(i18n);
