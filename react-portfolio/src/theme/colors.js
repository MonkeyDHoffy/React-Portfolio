// Zentrale Farbdefinitionen für das gesamte Portfolio
// Diese Datei macht es einfach, das Farbschema an einer Stelle zu ändern

const colors = {
  // Hauptfarbe - wird für wichtige Elemente wie Buttons, Links verwendet
  primary: '#ffffff', // Dunkelgrau
  
  // Sekundärfarbe - für Akzente und Hover-Effekte
  secondary: '#3DCFB6', // Lila
  
  // Hintergrundfarben
  background: {
    main: '#1C1C1C',      // Haupthintergrund (dunkel)
    greencontainer: '#3DCFB61A',
    dark: '#0F0F0F',      // Noch dunkler Hintergrund für Sections
    light: '#2A2A2A',     // Hellerer Hintergrund für Abwechslung
  },
  
  // Textfarben
  text: {
    primary: '#FFFFFF',   // Haupttext (weiß) - wichtig für dunklen Hintergrund!
    secondary: '#3DCFB6', // Sekundärtext (hellgrau)
    light: '#FFFFFF',     // Weißer Text
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