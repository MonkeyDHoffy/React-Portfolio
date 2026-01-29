import React from 'react';

// Footer component for the portfolio
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-neutral-900 to-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* LEFT: Logo + Info */}
          <div className="flex justify-start flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img className="w-[123px] h-[48px]" src="assets/headerpics/JHOFF.png" alt="" />
            </div>

            {/* Meta Info */}
            <div className="font-karla flex flex-col justify-center text-sm text-neutral-400 gap-1">
              <p>Web Developer</p>
              <p>Munich, Germany</p>
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
            <href>Github</href>
            <href>Email</href>
            <href>Legal Notice</href>
            {/* Add links here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;