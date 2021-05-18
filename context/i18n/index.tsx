import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { en_us } from "../../i18n/en-us";
import { pt_br } from "../../i18n/pt-br";

type I18nContextProps = {
  getText: (key: string) => string;
  lang: string;
  setLang: (lang: string) => void;
};

export const I18nContext = createContext({} as I18nContextProps);

type I18nContextProviderProps = {
  children: ReactNode;
};

const LOCALES = {
  "en-US": en_us,
  "pt-BR": pt_br,
};

export const I18nContextProvider = ({ children }: I18nContextProviderProps) => {
  const [lang, _setLang] = useState<string>('');
  const [i18n, setI18n] = useState({});
  const router = useRouter();

  const setLang = (lang: string) => {
    router.push("/", "/", { locale: lang });
  };

  const getText = (key: string) => {
    const text = i18n[key];
    return text ? text : key;
  };

  useEffect(() => {
    const translates = LOCALES[router.locale];
    _setLang(router.locale);
    translates && setI18n(translates);
  }, [router.locale]);

  return (
    <I18nContext.Provider value={{ getText, setLang, lang }}>
      {children}
    </I18nContext.Provider>
  );
};
