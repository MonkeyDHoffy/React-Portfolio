import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from './PageContainer';
import logoImg from '../../assets/headerpics/JHOFF.png';

// Footer component for the portfolio
const Footer = () => {
  return (
    <footer className="w-full text-white debug-component">
      <PageContainer className="py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* LEFT: Logo + Info */}
          <div className="flex justify-start flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Link to="/">
                <img className="h-12 w-auto" src={logoImg} alt="JHOFF logo" />
              </Link>
            </div>

            {/* Meta Info */}
            <div className="font-karla flex flex-col justify-center text-sm text-neutral-400 gap-1 hover:text-white transition-all transition-duration-30000">
              <p>Web Developer</p>
              <p>Saarlouis, Germany</p>
            </div>
          </div>

          {/* CENTER: Copyright */}
          <div className="flex justify-center">
            <p className="font-firacode text-teal-400 font-mono text-sm tracking-wide">
              © Jannik Hoff 2026
            </p>
          </div>

          {/* RIGHT: Links */}
          <div className="flex flex-col items-center gap-3">
            <a className="hover:text-secondary" href="https://github.com/MonkeyDHoffy" target="_blank" rel="noopener noreferrer">Github</a>
            <a className="hover:text-secondary" href="mailto:your.email@example.com">Email</a>
            <Link className="hover:text-secondary" to="/legal-notice">Legal Notice</Link>
            {/* Add links here */}
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;