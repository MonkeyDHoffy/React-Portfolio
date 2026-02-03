import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import logoImg from '../../assets/headerpics/JHOFF.png';
import mobileLogo from '../../assets/headerpics/jhicon.png';
import menuIcon from '../../assets/headerpics/menu.png';
import LanguageToggle from '../ui/LanguageToggle';
import { useLang } from '../../context/LanguageContext';
import PageContainer from './PageContainer';

const Header = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);
  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);
  return (
    <header className="header-gradient text-text-primary h-[64px] md:h-[98px]">
      {/* Mobile Header */}
      <div className="md:hidden">
        <PageContainer className="flex h-[64px] items-center justify-between">
          {/* Logo left */}
          <a href="#top" className="inline-flex items-center">
            <img src={mobileLogo} alt="Logo" className="h-8 w-auto" />
          </a>
          {/* Hamburger right */}
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 bg-black/20 backdrop-blur hover:bg-black/30 transition"
          >
            <img src={menuIcon} alt="" className="w-5 h-5" />
          </button>
        </PageContainer>

        {/* Mobile Menu Overlay via Portal */}
        {open && createPortal(
          <div className="fixed inset-0 z-[9999]" aria-modal="true" role="dialog">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            {/* Card */}
            <div
              ref={menuRef}
              id="mobile-menu"
              className="absolute left-0 right-0 top-0 mx-4 mt-20 rounded-2xl border border-white/15 backdrop-blur p-5 shadow-2xl z-20"
              style={{ backgroundImage: 'linear-gradient(55.22deg, #1C1C1C 36.26%, #08463B 93.28%)' }}
            >
              <nav aria-label="Hauptnavigation">
                <ul className="space-y-3">
                  <li>
                    <a href="#about" onClick={closeMenu} className="block px-3 py-2 rounded-md font-firacode text-base text-text-primary hover:text-[#3DCFB6] transition-colors">{t('header.about')}</a>
                  </li>
                  <li>
                    <a href="#skills" onClick={closeMenu} className="block px-3 py-2 rounded-md font-firacode text-base text-text-primary hover:text-[#3DCFB6] transition-colors">{t('header.skills')}</a>
                  </li>
                  <li>
                    <a href="#projects" onClick={closeMenu} className="block px-3 py-2 rounded-md font-firacode text-base text-text-primary hover:text-[#3DCFB6] transition-colors">{t('header.projects')}</a>
                  </li>
                </ul>
              </nav>
              <div className="mt-5 pt-4 border-t border-white/10 flex justify-center">
                <LanguageToggle size="default" />
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <PageContainer className="flex h-[98px] items-center justify-between">
          <div className="HeaderNavigation justify-between items-center flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            <div><LanguageToggle size="default" /></div>
            <a href="#about" className="font-firacode text-text-primary hover:text-[#3DCFB6] transition-colors">{t('header.about')}</a>
            <a href="#skills" className="font-firacode text-text-primary hover:text-[#3DCFB6] transition-colors">{t('header.skills')}</a>
            <a href="#projects" className="font-firacode text-text-primary hover:text-[#3DCFB6] transition-colors">{t('header.projects')}</a>
          </div>
          <div className="Logo">
            <img src={logoImg} alt="Logo" className="h-12 w-auto" />
          </div>
        </PageContainer>
      </div>
    </header>
  );
};

export default Header;


