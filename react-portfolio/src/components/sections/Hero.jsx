import React from 'react';
import Header from '../layout/Header'; // Erklärung: Header im Hero oben anzeigen

// Hero component for the portfolio
const Hero = () => {
  // TODO: Scroll zu About bei Button-Klick
  // Pseudocode:
  // 1) element = document.getElementById('about')
  // 2) element?.scrollIntoView({ behavior: 'smooth' })

  return (
    // Erklärung: relative = Basis für absolut positioniertes Overlay + Header
    <section className="hero-gradient relative flex flex-col items-center justify-center h-screen text-text-primary overflow-hidden">
      {/* Overlay: liegt über dem Hero-Background, unter dem Inhalt */}
      <div className="cursor-spotlight absolute inset-0 z-0" />

      {/* Header oben am Rand des Hero */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Header />
      </div>

      {/* Inhalt: z-10 damit über Overlay sichtbar */}
      <div className="pt-20 text-center z-10">
        <h1 className="text-5xl font-bold mb-4">Jannik Hoff</h1>
        <p className="text-lg mb-8">Frontendentwickler</p>
        <button
          className="border border-text-primary text-text-primary px-4 py-2 rounded-lg hover:bg-background-light transition"
          // TODO: onClick hinzufügen (siehe Pseudocode oben)
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;