import { useState } from 'react';
import Header from '../layout/Header';
import ContentWrapper from '../layout/ContentWrapper';
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
    <section className="hero-gradient relative flex flex-col items-center justify-center h-screen text-text-primary overflow-hidden">
      <div className="cursor-spotlight absolute inset-0 z-0" />
      <div className="absolute top-0 left-0 right-0 z-10"><Header /></div>
        <div className="pt-20 text-center z-10 relative">
        <h1 className="font-firacode font-normal text-[40px] leading-[100%] tracking-[0] mb-4">
          {t('hero.subtitle')}
        </h1>

        <p className="font-karla font-bold text-[128px] leading-[100%] tracking-[-0.02em] mb-8">
          {t('hero.title')}
        </p>
        <div className="gap-4 flex justify-center">
          <button className="border text-text-primary hover:text-secondary rounded-[100px] px-6 py-[13px] hover:border-secondary border-primary transition-colors duration-1000 w-[180px]">
            {t('hero.workbtn')}
          </button>
          <button className="border text-text-primary hover:text-secondary rounded-[100px] px-6 py-[13px] hover:border-secondary border-primary transition-colors duration-1000 w-[180px]">
            {t('hero.contactbtn')}
          </button>
        </div>
        </div>

      <div className="ultrastylischelinielinks">
        <div className="leftCircle"><img className="movingarrow" src="/assets/heropics/movingarrow.png" alt="" /></div>
        <div className="leftLine"></div>
      </div>

      <div className="ultrastylischelinierechts" style={{ pointerEvents: 'auto' }}>
        <div className="rightCircle flex flex-col gap-8">
          <IconWithHover
            baseSrc="/assets/heropics/giticon.png"
            hoverSrc="/assets/heropics/giticonHover.png"
            alt="GitHub"
            className="relative -top-4 pointercss"
          />
          <IconWithHover
            baseSrc="/assets/heropics/linkedinicon.png"
            hoverSrc="/assets/heropics/linkediniconHover.png"
            alt="LinkedIn"
            className="relative -top-4 pointercss"
          />
        </div>
        <div className="rightLine"></div>
        <p className="rightText pointercss">hoffjannik95@gmail.com</p>
      </div>
      <Banner />
    </section>
  );
};

export default Hero;
