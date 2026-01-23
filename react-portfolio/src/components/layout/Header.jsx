import React from 'react';
import Skills from '../sections/Skills';

// Header component for the portfolio
const Header = () => {
  return (
    <header className="header-gradient flex justify-between items-center text-text-primary p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="HeaderNavigation justify-between items-center flex gap-8">
            <div><img src="" alt="" /></div>
            <div><p>About me</p></div>
            <div><p>Skills</p></div>
            <div><p>Projects</p></div>
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


