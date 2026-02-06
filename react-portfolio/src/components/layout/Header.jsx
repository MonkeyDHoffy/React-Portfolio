import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import logoImg from '../../assets/headerpics/JHOFF.png';
import mobileLogo from '../../assets/headerpics/jhicon.png';
import menuIcon from '../../assets/headerpics/menu.png';
import LanguageToggle from '../ui/LanguageToggle';
import NavLinks from '../ui/NavLinks';
import { useLang } from '../../context/LanguageContext';
import PageContainer from './PageContainer';
import useEscape from '../../hooks/useEscape';
import useClickOutside from '../../hooks/useClickOutside';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const Header = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEscape(() => setOpen(false), open);

  useClickOutside(menuRef, open, () => setOpen(false));
  // Lock body scroll when menu is open
  useBodyScrollLock(open);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);
  return (
    <header className="header-gradient text-text-primary h-[64px] md:h-[98px]">
      {/* Mobile Header */}
      <div className="md:hidden">
        <PageContainer className="flex h-[64px] items-center justify-between">
          {/* Logo left */}
          <Link to="/" className="inline-flex items-center">
            <img src={mobileLogo} alt="Logo" className="h-8 w-auto" />
          </Link>
          {/* Hamburger right */}
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center w-10 h-10 rounded-md backdrop-blur hover:bg-black/30 transition"
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
              className="absolute left-0 right-0 top-0 mx-4 mt-20 rounded-2xl border border-white/15 backdrop-blur p-5 shadow-2xl z-20 green-card-gradient"
            >
              <nav aria-label="Hauptnavigation">
                <NavLinks t={t} onClick={closeMenu} variant="list" />
              </nav>
              <div className="mt-5 pt-4 flex justify-center">
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
            <NavLinks t={t} />
          </div>
          <div className="Logo">
            <Link to="/">
              <img src={logoImg} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>
        </PageContainer>
      </div>
    </header>
  );
};

export default Header;


