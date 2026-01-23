// Zentrale Farbdefinitionen für das gesamte Portfolio
// Diese Datei macht es einfach, das Farbschema an einer Stelle zu ändern

const colors = {
  // Hauptfarbe - wird für wichtige Elemente wie Buttons, Links verwendet
  primary: '#3B82F6', // Blau
  
  // Sekundärfarbe - für Akzente und Hover-Effekte
  secondary: '#8B5CF6', // Lila
  
  // Hintergrundfarben
  background: {
    main: '#FFFFFF',      // Haupthintergrund (weiß)
    dark: '#1F2937',      // Dunkler Hintergrund für Sections
    light: '#F3F4F6',     // Heller Hintergrund für Abwechslung
  },
  
  // Textfarben
  text: {
    primary: '#1F2937',   // Haupttext (dunkelgrau)
    secondary: '#6B7280', // Sekundärtext (hellgrau)
    light: '#FFFFFF',     // Weißer Text auf dunklem Hintergrund
  },
  
  // Akzentfarben für besondere Elemente
  accent: {
    success: '#10B981',   // Grün - für Erfolg (z.B. erfolgreich gesendet)
    warning: '#F59E0B',   // Orange - für Warnungen
    error: '#EF4444',     // Rot - für Fehler
  }
};

// Exportiere das colors-Objekt, damit es in anderen Dateien verwendet werden kann
export default colors;