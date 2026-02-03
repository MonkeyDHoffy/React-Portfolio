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
      de: 'Softwareentwickler mit Schwerpunkt auf sauberer Architektur, klarer Problemlösung und professioneller Zusammenarbeit. Ich entwickle performante, zugängliche Anwendungen und arbeite qualitäts‑ sowie testorientiert mit effizienten Workflows (Versionierung, Code‑Reviews).',
      en: 'Software developer focused on clean architecture, structured problem solving, and professional collaboration. I build performant, accessible applications and work in a quality‑ and test‑driven way using efficient workflows (version control, code reviews).',
    },
    location:     {
      de: 'Ansässig in Saarlouis; offen für Remote sowie Hybrid in der Region.',
      en: 'Based in Saarlouis; open to remote and hybrid roles.',
    },
    cognition:    {
      de: 'Analytisch und lösungsorientiert: klare Architektur, Performance, Accessibility und eine starke Developer Experience stehen für mich im Fokus.',
      en: 'Analytical and solution‑oriented: I prioritize clean architecture, performance, accessibility, and strong developer experience.',
    },
    releases:     {
      de: 'Mein Portfolio zeigt reale Projekte aus der Weiterbildung und eigene Arbeiten. Eine Auswahl findest du unten.',
      en: 'My portfolio showcases real training projects and personal work. A selection is below.',
    },
    new_releases: {
      de: 'Aktuell erweitere ich mein Portfolio mit weiteren praxisnahen Projekten – eine Auswahl findest du unten.',
      en: 'I am currently adding more practice‑driven projects to my portfolio — see a selection below.',
    },
  },
  skills: {
    label:        { de: 'Technologien', en: 'Technologies' },
    title:        { de: 'Skill Set', en: 'Skill Set' },
    intro:        {
      de: 'Fundierte Basis in modernen Frontend‑Stacks. Saubere Komponenten, State‑Management, Accessibility, Tests und Performance gehören zu meinem Werkzeugkasten. Praxisnahe Projekte und kontinuierliche Reviews haben meine Fähigkeiten in realen Szenarien geschärft.',
      en: 'Solid grounding in modern frontend stacks. Clean components, state management, accessibility, testing, and performance are part of my toolkit. Practice‑driven projects and continuous reviews have honed these skills on real scenarios.',
    },
    prompt:       { de: 'Sie brauchen eine andere Technologie?', en: 'Need another technology?' },
    outro:        {
      de: 'Sprechen Sie mich gern an – ich erweitere mein Know‑how kontinuierlich und arbeite mich zügig in neue Tools ein.',
      en: 'Feel free to reach out — I continuously expand my skill set and ramp up quickly on new tools.',
    },
    cta:          { de: "Let's Talk", en: "Let's Talk" },
  },
  projects: {
    label:        { de: 'Portfolio', en: 'Portfolio' },
    title:        { de: 'Ausgewählte Projekte', en: 'Featured Projects' },
    intro:        {
      de: 'Hier findest du eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Skills im Einsatz zu sehen.',
      en: 'Explore a selection of my work — interact with projects to see my skills in action.',
    },
  },
  gallery: {
    card1: {
      title: { de: 'Barrierefreie Benutzeroberflächen', en: 'Accessible Interfaces' },
      text:  { de: 'Semantische HTML‑Strukturen, ARIA‑Patterns und konsistente Tastaturnavigation. Fokus‑Management, Kontraste und responsives Design gemäß WCAG.', en: 'Semantic HTML, ARIA patterns, and consistent keyboard navigation. Focus management, contrast, and responsive design aligned with WCAG.' },
    },
    card2: {
      title: { de: 'Performance & Architektur', en: 'Performance & Architecture' },
      text:  { de: 'Klare Komponentenstrukturen, schlanke Bundles, gezieltes Code‑Splitting. Effizientes State‑Management, Caching und profilorientierte Optimierungen.', en: 'Clear component structure, lean bundles, targeted code splitting. Efficient state management, caching, and profiling‑driven optimizations.' },
    },
    card3: {
      title: { de: 'Qualitätssicherung', en: 'Quality Assurance' },
      text:  { de: 'Automatisierte Tests, Code‑Reviews und saubere Konventionen. Ziel: robuste, wartbare Anwendungen mit verlässlichen Deployments.', en: 'Automated tests, code reviews, and solid conventions. Goal: robust, maintainable apps with reliable deployments.' },
    },
  },
  contact: {
    label:        { de: 'Kontaktiere mich', en: 'Contact me' },
    title:        { de: 'Lass uns zusammenarbeiten', en: "Let's work together" },
    question:     { de: 'Welche Herausforderung lösen wir gemeinsam?', en: 'Which challenge can we solve together?' },
    blurb:        {
      de: 'Beschreibe kurz dein Projekt oder die Rolle. Ich bringe mich pragmatisch ein, liefere zuverlässig und arbeite professionell, strukturiert und kollaborativ in Frontend‑Teams.',
      en: 'Describe your project or the role. I contribute pragmatically, deliver reliably, and work professionally, with structure and collaboration in frontend teams.',
    },
    needdev:      { de: 'Sie suchen einen Frontend‑Entwickler?', en: 'Looking for a frontend developer?' },
    needdev_cta:  { de: 'Lass uns reden!', en: 'Let’s talk!' },
    form: {
      name_label:     { de: 'Wie heißt du?', en: "What's your name?" },
      name_ph:        { de: 'Dein Name', en: 'Your name' },
      email_label:    { de: 'Wie lautet deine E‑Mail?', en: "What's your email?" },
      email_ph:       { de: 'deine@email.de', en: 'youremail@email.com' },
      message_label:  { de: 'Wobei kann ich helfen?', en: 'How can I help you?' },
      message_ph:     { de: 'Hallo Jannik, ich interessiere mich für…', en: 'Hello Jannik, I’m interested in…' },
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