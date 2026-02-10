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
    liveDemo: { de: 'Live Demo', en: 'Live Demo' },
    github: { de: 'GitHub', en: 'GitHub' },
    nextLabel: { de: 'Nächstes Projekt', en: 'Next project' },
  },
  projectDetails: {
    p1: {
      title: { de: 'Join', en: 'Join' },
      question: { de: 'Worum geht es in diesem Projekt?', en: 'What is this project about?' },
      description: {
        de: 'Task-Manager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop und weise Benutzer sowie Kategorien zu.',
        en: 'Task manager inspired by the Kanban system. Create and organize tasks using drag-and-drop functions, assign users and categories.',
      },
    },
    p2: {
      title: { de: 'El Pollo Loco', en: 'El Pollo Loco' },
      question: { de: 'Worum geht es in diesem Projekt?', en: 'What is this project about?' },
      description: {
        de: 'Jump-, Run- und Throw-Spiel auf objektorientierter Basis. Hilf Pepe, Münzen und Tabasco zu finden, um gegen die verrückte Henne zu kämpfen.',
        en: 'Jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and Tabasco to fight the crazy hen.',
      },
    },
    p3: {
      title: { de: 'Pokédex', en: 'Pokedex' },
      question: { de: 'Worum geht es in diesem Projekt?', en: 'What is this project about?' },
      description: {
        de: 'Single-Page-Anwendung mit React, React Router und Tailwind, die per PokéAPI dynamische Daten lädt, zwischenspeichert und gefiltert darstellt. Fokus auf performantes Fetching, zustandsbasierte UI-Updates und mobile-responsive Komponenten.',
        en: 'Single-page app built with React, React Router, and Tailwind that consumes the PokéAPI, caches responses, and renders filterable data views. Emphasis on performant fetching, state-driven UI updates, and mobile-responsive components.',
      },
    },
  },
  gallery: {
    card1: {
      title:  { de: '', en: '' },
    text:   {
        de: 'Klarer Code, gute Tests und sinnvolle Komponenten. Jannik Hoff\'s Frontend‑Workflows sind effizient und professionell.',
        en: 'Clear code, solid tests, and well‑structured components. Jannik Hoff’s frontend workflows are efficient and professional.',
      },
      sender: { de: 'GitHub Copilot', en: 'GitHub Copilot' },
    },
    card2: {
     title:  { de: '', en: '' },
      text:   {
        de: 'Zuverlässig, performant und gut gepflegt. Jannik Hoff hält sein Entwicklungs‑Setup schlank und sorgt für reibungslose Workflows.',
        en: 'Reliable, performant, and well maintained. Jannik Hoff keeps his development setup lean and ensures smooth workflows.',
      },
      sender: { de: 'Alexander Schulz', en: 'Alexander Schulz' },
    },
   card3: {
      title:  { de: '', en: '' },
      text:   {
        de: 'Strukturiert, präzise und lösungsorientiert. Jannik Hoff kombiniert saubere Architektur mit solider UX und sorgt für wartbaren Code.',
        en: 'Structured, precise, and solution‑oriented. Jannik Hoff combines clean architecture with solid UX and delivers maintainable code.',
      },
      sender: { de: 'ChatGPT', en: 'ChatGPT' },
    },
    // NEW: 4th review card
    card4: {
      title:  { de: '', en: '' },
      text:   {
        de: 'Jannik Hoff kombiniert eine steile Lernkurve mit einer beneidenswerten Zielstrebigkeit. Im Web Development wartet er nicht auf Lösungen, er erarbeitet sie sich proaktiv selbst. Ein Entwickler mit dem richtigen Mindset, der sich schnell in neue Technologien einarbeitet und Ergebnisse liefert.',
        en: 'Jannik Hoff combines a steep learning curve with admirable determination. In web development he never waits for solutions—he proactively creates them. A developer with the right mindset who ramps up on new technologies quickly and delivers results.',
      },
      sender: { de: 'Nicolas Tran', en: 'Nicolas Tran' },
    },
    // NEW: 5th review card
    card5: {
        title:  { de: '', en: '' },
      text:   {
        de: 'Produktiv, fokussiert und schnell. Er nutzt das Tooling sinnvoll (Terminal, Tasks, Debugging) und hält das Projekt sauber.',
        en: 'Productive, focused, and fast. He uses the tooling effectively (terminal, tasks, debugging) and keeps the project clean.',
      },
      sender: { de: 'Visual Studio Code', en: 'Visual Studio Code' },
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
      name_helper:    {
        de: 'Wie darf ich dich oder dein Team ansprechen?',
        en: 'Let me know how I should address you or your team.',
      },
      email_label:    { de: 'Wie lautet deine E‑Mail?', en: "What's your email?" },
      email_ph:       { de: 'deine@email.de', en: 'youremail@email.com' },
      email_helper:   {
        de: 'Ich antworte dir direkt – bitte prüfe die Schreibweise.',
        en: 'I will reply straight away — double-check the spelling.',
      },
      message_label:  { de: 'Wobei kann ich helfen?', en: 'How can I help you?' },
      message_ph:     { de: 'Hallo Jannik, ich interessiere mich für…', en: 'Hello Jannik, I’m interested in…' },
      message_helper: {
        de: 'Projekt, Ziele oder Timeline? Ein paar Stichpunkte helfen mir bei der Vorbereitung.',
        en: 'A few notes on scope, goals, or timeline help me prepare.',
      },
      privacy_text:   {
        de: 'Ich habe die Datenschutzrichtlinie gelesen und stimme der Verarbeitung meiner Daten zu.',
        en: 'I have read the privacy policy and agree to the processing of my data as outlined.',
      },
      privacy_link:   { de: 'Datenschutzrichtlinie', en: 'privacy policy' },
      submit:         { de: 'Sag Hallo :)', en: 'Say Hello :)' },
      sending:        { de: 'Sende...', en: 'Sending...' },
      success:        {
        de: 'Danke für deine Nachricht! Ich melde mich innerhalb von 24 Stunden mit einer Antwort.',
        en: 'Thanks for your message! I will get back to you within 24 hours.',
      },
      error:          {
        de: 'Da ist etwas schiefgelaufen. Versuch es gleich noch einmal oder kontaktiere mich direkt per E-Mail.',
        en: 'Something went wrong. Please try again shortly or reach out via email directly.',
      },
      status_success: { de: 'Nachricht gesendet', en: 'Message sent' },
      status_error:   { de: 'Versand fehlgeschlagen', en: 'Delivery failed' },
      dismiss:        { de: 'Hinweis schließen', en: 'Dismiss notification' },
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