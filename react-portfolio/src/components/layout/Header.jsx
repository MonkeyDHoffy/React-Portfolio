import React from 'react';
import LanguageToggle from '../ui/LanguageToggle';
import { useLang } from '../../context/LanguageContext';
import FadeText from '../ui/FadeText';

const Header = () => {
  const { t } = useLang();
  return (
       <header className="header-gradient flex justify-between items-center text-text-primary p-4 h-[98px] px-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className="HeaderNavigation justify-between items-center flex gap-8">
          <div><LanguageToggle size="default" /></div>
          <button
            type="button"
            className="font-firacode text-text-primary hover:text-[#3DCFB6] transition-colors bg-transparent p-0 cursor-pointer"
          >
            {t('header.about')}
          </button>
          <button
            type="button"
            className="font-firacode text-text-primary hover:text-[#3DCFB6] transition-colors bg-transparent p-0 cursor-pointer"
          >
            {t('header.skills')}
          </button>
          <button
            type="button"
            className="font-firacode text-text-primary hover:text-[#3DCFB6] transition-colors bg-transparent p-0 cursor-pointer"
          >
            {t('header.projects')}
          </button>
        </div>
      </div>
      <div className="Logo">
        <img src="/assets/headerpics/JHOFF.png" alt="Logo" className="h-8 h-[48px] w-auto" />
      </div>
    </header>
  );
};

export default Header;


