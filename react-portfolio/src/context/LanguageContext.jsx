import React, { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const translations = {
  hero: {
    title:        { de: 'Jannik Hoff', en: 'Jannik Hoff' },
    subtitle:     { de: 'Frontendentwickler', en: 'Frontend Developer' },
    workbtn:      { de: 'Meine Projekte', en: 'Check my work' },
    contactbtn:   { de: 'Kontaktier mich', en: 'Contact Me' },
    bannerone:    { de: 'Verfügbar für Remote-Arbeit', en: 'Available for remote work' },
    bannertwo:    { de: 'Frontendentwickler', en: 'Frontend Developer' },
    bannerthree:  { de: 'Ansässig in Saarlouis', en: 'Based in Saarlouis' },
  },
  header: {
    about:        { de: 'Über mich', en: 'About me' },
    skills:       { de: 'Fähigkeiten', en: 'Skills' },
    projects:     { de: 'Projekte', en: 'Projects' },
  },
  about: {
    whoiam:       { de: 'Wer ich bin', en: 'Who I Am' },
    title:        { de: 'Über mich', en: 'About Me' },
    p1:           {
      de: 'Ich bin Frontend‑Entwickler mit Fokus auf React und TypeScript. Ich baue schnelle, zugängliche UIs, arbeite testgetrieben und lege Wert auf sauberen, wartbaren Code.',
      en: 'I am a frontend developer focused on React and TypeScript. I build fast, accessible UIs, work in a test‑driven way, and care about clean, maintainable code.',
    },
    location:     {
      de: 'Ansässig in Saarlouis, offen für Remote sowie Hybrid in der Region.',
      en: 'Based in Saarlouis, open to remote and hybrid opportunities.',
    },
    cognition:    {
      de: 'Analytisch und lösungsorientiert: klare Architektur, Performance und gute Developer Experience sind mir wichtig.',
      en: 'Analytical and solution‑oriented: I value clear architecture, performance, and great developer experience.',
    },
    releases:     {
      de: 'Aktuell arbeite ich an Portfolio‑Projekten und kleinen Tools – unten findest du eine Auswahl.',
      en: 'Currently working on portfolio projects and small tools — see a selection below.',
    },
    new_releases: {
      de: 'Aktuell arbeite ich an Portfolio‑Projekten und kleinen Tools – unten findest du eine Auswahl.',
      en: 'Currently working on portfolio projects and small tools — see a selection below.',
    },
  },
  skills: {
    label:        { de: 'Technologien', en: 'Technologies' },
    title:        { de: 'Skill Set', en: 'Skill Set' },
    intro:        {
      de: 'Ein kurzer Überblick über meine Stärken: moderne Frontend‑Stacks, saubere Komponenten, State‑Management, Tests und Performance. Ich lerne schnell und arbeite mich zügig in neue Tools ein.',
      en: 'A brief overview of my strengths: modern frontend stacks, clean components, state management, testing, and performance. I learn fast and pick up new tools quickly.',
    },
    prompt:       { de: 'Sie brauchen eine andere Technologie?', en: 'Need another technology?' },
    outro:        {
      de: 'Sprechen Sie mich gern an – ich erweitere mein Know‑how kontinuierlich.',
      en: 'Feel free to reach out — I continuously expand my skill set.',
    },
    cta:          { de: 'Lass uns sprechen', en: "Let's talk" },
  },
  projects: {
    label:        { de: 'Portfolio', en: 'Portfolio' },
    title:        { de: 'Ausgewählte Projekte', en: 'Featured Projects' },
    intro:        {
      de: 'Hier findest du eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Skills im Einsatz zu sehen.',
      en: 'Explore a selection of my work — interact with projects to see my skills in action.',
    },
  },
  contact: {
    label:        { de: 'Kontaktiere mich', en: 'Contact me' },
    title:        { de: 'Lass uns zusammenarbeiten', en: "Let's work together" },
    question:     { de: 'Gibt es eine Herausforderung zu lösen?', en: 'Got a problem to solve?' },
    blurb:        {
      de: 'Beschreibe kurz dein Projekt oder die Rolle, für die du suchst. Ich bringe mich pragmatisch ein und liefere wertvolle Beiträge in Frontend‑Teams.',
      en: 'Tell me about your project or the role you are hiring for. I contribute pragmatically and deliver value in frontend teams.',
    },
    needdev:      { de: 'Sie brauchen einen Frontend‑Entwickler?', en: 'Need a Frontend developer?' },
    needdev_cta:  { de: 'Lass uns sprechen!', en: "Let's talk!" },
    form: {
      name_label:     { de: 'Wie heißt du?', en: "What's your name?" },
      name_ph:        { de: 'Dein Name', en: 'Your name' },
      email_label:    { de: 'Wie lautet deine E‑Mail?', en: "What's your email?" },
      email_ph:       { de: 'deine@email.de', en: 'youremail@email.com' },
      message_label:  { de: 'Wobei kann ich helfen?', en: 'How can I help you?' },
      message_ph:     { de: 'Hallo Jannik, ich interessiere mich für…', en: 'Hello Jannik, I am interested in…' },
      privacy_text:   {
        de: 'Ich habe die Datenschutzrichtlinie gelesen und stimme der Verarbeitung meiner Daten zu.',
        en: 'I have read the privacy policy and agree to the processing of my data as outlined.',
      },
      privacy_link:   { de: 'Datenschutzrichtlinie', en: 'privacy policy' },
      submit:         { de: 'Sag Hallo :)', en: 'Say Hello :)' },
    },
  },
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