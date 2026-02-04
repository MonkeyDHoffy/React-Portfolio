import { useState } from 'react';
import movingArrow from '../../assets/heropics/movingarrow.png';
import gitIcon from '../../assets/heropics/giticon.png';
import gitIconHover from '../../assets/heropics/giticonHover.png';
import linkedinIcon from '../../assets/heropics/linkedinicon.png';
import linkedinIconHover from '../../assets/heropics/linkediniconHover.png';
import mailIcon from '../../assets/heropics/mailHover.png';
import mailIconHover from '../../assets/heropics/mail.png';
import Header from '../layout/Header';
import { useLang } from '../../context/LanguageContext';
import './ultrastylischelinien.css';
import Banner from './banner';

// Icon-Hover: wechselt zwischen base und hover Bild per Events
function IconWithHover({ baseSrc, hoverSrc, alt, className }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={className}
      style={{ position: 'relative', pointerEvents: 'auto' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={hover ? hoverSrc : baseSrc} alt={alt} />
    </div>
  );
}

const Hero = () => {
  const { t } = useLang();
  return (
    // SECTION CONTAINER
    // - Vertical position: change `justify-start` (higher) or `justify-center` (centered)
    //   You can also make this responsive, e.g. `justify-start md:justify-center`.
    // - Height: `h-screen` = full viewport. Use `min-h-screen` or remove to let content flow.
    // - Global text color and overflow are set here.
    <section className="hero-gradient relative flex flex-col items-center justify-start md:justify-center h-screen text-text-primary overflow-hidden debug-component">
      <div className="cursor-spotlight absolute inset-0 z-0" />
      <div className="absolute top-0 left-0 right-0 z-[100]"><Header /></div>
        {/* HERO CONTENT WRAPPER
            - Top spacing: adjust `pt-8 md:pt-20` → e.g. `pt-4`, `pt-16`, etc.
            - Text alignment: `text-left md:text-center` → change as needed.
            - If still too low: increase `pt-*` or use negative margin on this wrapper (e.g. `-mt-4`).
        */}
        <div className="pt-40 md:pt-20 text-center z-10 relative">
        {/* SUBTITLE
            - Font sizes: adjust the explicit `text-[..]` values for each breakpoint.
            - Spacing below: `mb-4` → increase/decrease.
        */}
        <h1 className="font-firacode font-normal text-[24px] sm:text-[32px] md:text-[40px] leading-[100%] tracking-[0] mb-4">
          {t('hero.subtitle')}
        </h1>

        {/* TITLE
            - Main size: adjust `text-[56px] sm:text-[80px] md:text-[96px] lg:text-[128px]` as desired.
            - Letter spacing: `tracking-[-0.02em]` → tweak if needed.
            - Spacing below: `mb-8` → change to control distance to buttons.
        */}
        <p className="font-karla font-bold text-[56px] sm:text-[80px] md:text-[96px] lg:text-[128px] leading-[100%] tracking-[-0.02em] mb-8">
          {t('hero.title')}
        </p>
        {/* BUTTON ROW
            - Horizontal spacing: `gap-4` → increase/decrease.
            - Alignment: `justify-center` → use `justify-start` to align left on mobile, e.g. `justify-start md:justify-center`.
        */}
        <div className="gap-4 flex justify-start md:justify-center">
          <a href="#projects" className="border text-text-primary hover:text-secondary rounded-[100px] px-6 py-[13px] hover:border-secondary border-primary transition-colors duration-1000 w-auto min-w-[160px] md:w-[180px]">
            {t('hero.workbtn')}
          </a>
          <a href="#contact" className="border text-text-primary hover:text-secondary rounded-[100px] px-6 py-[13px] hover:border-secondary border-primary transition-colors duration-1000 w-auto min-w-[160px] md:w-[180px]">
            {t('hero.contactbtn')}
          </a>
        </div>
        </div>

      <div className="ultrastylischelinielinks">
        <div className="leftCircle"><img className="movingarrow" src={movingArrow} alt="" /></div>
        <div className="leftLine"></div>
      </div>

      <div className="ultrastylischelinierechts" style={{ pointerEvents: 'auto' }}>
        {/* RIGHT ICON COLUMN
            - Vertical spacing between icons: `gap-4` → adjust.
            - Vertical offset of each icon: `-top-4` on each `IconWithHover` → tune up/down.
            - Circle/line sizes and positions: see `ultrastylischelinien.css` for `.rightCircle` / `.rightLine`.
        */}
        <div className="rightCircle flex flex-col gap-4">
          {/* Mail-Icon bis Tablet anzeigen (lg und größer ausblenden) */}
          <a href="mailto:hoffjannik95@gmail.com" aria-label="Email" className="pointercss lg:hidden">
            <IconWithHover
              baseSrc={mailIcon}
              hoverSrc={mailIconHover}
              alt="Email"
              className="relative md:-top-4 pointercss"
            />
          </a>
          <IconWithHover
            baseSrc={gitIcon}
            hoverSrc={gitIconHover}
            alt="GitHub"
            className="relative md:-top-4 pointercss"
          />
          <IconWithHover
            baseSrc={linkedinIcon}
            hoverSrc={linkedinIconHover}
            alt="LinkedIn"
            className="relative md:-top-4 pointercss"
          />
        </div>
        {/* Vertikaler Email-Text nur auf großen Desktops anzeigen (lg+) */}
        <a href="mailto:hoffjannik95@gmail.com" className="rightText hidden lg:block">hoffjannik95@gmail.com</a>
        <div className="rightLine"></div>
      </div>
      {/* DECORATIVE LINES & ARROWS
          - To fine-tune their sizes/positions, edit `src/components/sections/ultrastylischelinien.css`.
          - Look for `clamp(...)` values on `.ultrastylischelinielinks`, `.ultrastylischelinierechts`, `.leftLine`, `.rightLine`, `.movingarrow`.
          - Increase/decrease min/mid/max values to control scaling across breakpoints.
      */}
      <Banner />
    </section>
  );
};

export default Hero;
