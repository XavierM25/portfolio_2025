import React, { createContext, useState, ReactNode } from 'react';
import es from '../locales/es.json';
import pt from '../locales/pt.json';
import en from '../locales/en.json';
import { TranslationKey } from '../types/translationKeys';

type Translations = Record<TranslationKey, string>;

interface LanguageContextProps {
  language: 'es' | 'en' | 'pt';
  translations: Translations;
  setLanguage: (lang: 'es' | 'en' | 'pt') => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'es',
  translations: es as Translations,
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'es' | 'en' | 'pt'>('es');
  const translations: Translations =
    language === 'es'
      ? (es as Translations)
      : language === 'pt'
      ? (pt as Translations)
      : (en as Translations);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
