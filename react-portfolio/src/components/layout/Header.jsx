import React from 'react';
import LanguageToggle from '../ui/LanguageToggle'; // Erklärung: Sprach-Button einbinden
import { useLang } from '../../context/LanguageContext'; // Erklärung: useLang Hook importieren

// Header component for the portfolio
const Header = () => {
  const { t } = useLang(); // Erklärung: t() Funktion aus dem LanguageContext holen
  return (
    <header className="header-gradient flex justify-between items-center text-text-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="HeaderNavigation justify-between items-center flex gap-8">
          {/* Erklärung: ersetzt das statische English-Icon */}
          <div><LanguageToggle size="default" /></div>
          <div><p>{t('header.about')}</p></div>
          <div><p>{t('header.skills')}</p></div>
          <div><p>{t('header.projects')}</p></div>
        </div>
      </div>
      <div className="Logo">
        {/* Erklärung: Dateien in public/ per absolutem Pfad laden */}
        <img src="/assets/headerpics/logo.png" alt="Logo" className="h-8 w-auto" />
      </div>
    </header>
  );
};

export default Header;


