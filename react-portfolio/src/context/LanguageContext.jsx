import React, { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const translations = {
  hero: {
    title:   { de: 'Jannik Hoff',          en: 'Jannik Hoff' },
    subtitle:{ de: 'Frontendentwickler',   en: 'Frontend Developer' },
    workbtn:     { de: 'Meine Projekte',        en: 'Check my work' },
    contactbtn:  { de: 'Kontaktier mich',         en: 'Contact Me' },
    bannerone:   { de: 'Verfügbar für Remote-Arbeit', en: 'Available for remote work' },
    bannertwo:   { de: 'Frontendentwickler', en: 'Frontend Developer' },
    bannerthree: { de: 'Ansässig in Saarlouis', en: "Based in Saarlouis" },
  },
  header: {
    about:   { de: 'Über mich',            en: 'About me' },
    skills:  { de: 'Fähigkeiten',          en: 'Skills' },
    projects:{ de: 'Projekte',             en: 'Projects' },
  },
  about: {
    whoiam:    { de: 'Wer ich bin', en: 'Who I Am' },
    title:     { de: 'Über mich', en: 'About Me' },
    p1:        { de: 'Kurze Vorstellung, Hintergrund und Erfahrung.', en: 'Brief introduction, background, and experience.' },
    location:  { de: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, voluptate?', en: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, voluptate?' },
    cognition: { de: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore velit magnam pariatur nihil?', en: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore velit magnam pariatur nihil?' },
    releases:  { de: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odit perspiciatis.', en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odit perspiciatis.' },
  },
  skills:  { title: { de: 'Meine Fähigkeiten', en: 'My Skills' } },
  contact: { title: { de: 'Kontakt',           en: 'Contact Me' } },
};

export function LanguageProvider({ children, defaultLang = 'de' }) {
  const [lang, setLang] = useState(defaultLang);

  // t('hero.subtitle') -> nimmt node[lang] aus der nebeneinanderliegenden Struktur
  const t = useMemo(() => {
    return (key) => {
      const parts = key.split('.');
      const node = parts.reduce((obj, part) => (obj && obj[part] !== undefined ? obj[part] : null), translations);
      if (node == null) return key;
      if (typeof node === 'string') return node;       // Fallback für alte Einträge
      return node[lang] ?? key;
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