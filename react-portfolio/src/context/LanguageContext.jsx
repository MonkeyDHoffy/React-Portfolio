import React, { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const translations = {
  de: {
    hero: {
      title: 'Jannik Hoff',
      subtitle: 'Frontendentwickler',
      cta: 'Mehr erfahren',
    },
    header: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
    },
    about: {
      title: 'Über mich',
      p1: 'Kurze Vorstellung, Hintergrund und Erfahrung.',
      p2: 'Persönliche Details oder Interessen.',
    },
    skills: { title: 'Meine Fähigkeiten' },
    contact: { title: 'Kontakt' },
  },
  en: {
    hero: {
      title: 'Jannik Hoff',
      subtitle: 'Frontend Developer',
      cta: 'Learn More',
    },
    header: {
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
    },
    about: {
      title: 'About Me',
      p1: 'Brief introduction, background, and experience.',
      p2: 'Personal details or interests.',
    },
    skills: { title: 'My Skills' },
    contact: { title: 'Contact Me' },
  },
};

export function LanguageProvider({ children, defaultLang = 'de' }) {
  const [lang, setLang] = useState(defaultLang);

  const t = useMemo(() => {
    // Einfacher t()-Resolver: t('hero.title')
    return (key) => {
      const parts = key.split('.');
      return parts.reduce((obj, part) => (obj && obj[part] ? obj[part] : null), translations[lang]) ?? key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}