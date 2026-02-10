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
import IconWithHover from '../ui/IconWithHover';

/**
 * Hero assembles the opening screen with navigation, marquee banner, and CTA buttons.
 * @returns {JSX.Element}
 */
let Hero = () => {
  let { t } = useLang();
  return (
    <section className="hero-gradient relative flex flex-col items-center justify-start md:justify-center h-screen text-text-primary overflow-hidden debug-component">
      <div className="cursor-spotlight absolute inset-0 z-0" />
      <div className="absolute top-0 left-0 right-0 z-[100]"><Header /></div>
        <div className="pt-40 md:pt-20 text-center z-10 relative">
        <h1 className="font-firacode font-normal text-[24px] sm:text-[32px] md:text-[40px] leading-[100%] tracking-[0] mb-4">
          {t('hero.subtitle')}
        </h1>

        <p className="font-karla font-bold text-[56px] sm:text-[80px] md:text-[96px] lg:text-[128px] leading-[100%] tracking-[-0.02em] mb-8">
          {t('hero.title')}
        </p>
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
        <div className="rightCircle flex flex-col gap-4">
          <a href="mailto:hoffjannik95@gmail.com" aria-label="Email" className="pointercss lg:hidden">
            <IconWithHover
              baseSrc={mailIcon}
              hoverSrc={mailIconHover}
              alt="Email"
              className="relative md:-top-4 pointercss"
            />
          </a>
          <a href="https://github.com/MonkeyDHoffy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="pointercss">
            <IconWithHover
              baseSrc={gitIcon}
              hoverSrc={gitIconHover}
              alt="GitHub"
              className="relative md:-top-4 pointercss"
            />
          </a>
          <IconWithHover
            baseSrc={linkedinIcon}
            hoverSrc={linkedinIconHover}
            alt="LinkedIn"
            className="relative md:-top-4 pointercss"
          />
        </div>
        <a href="mailto:hoffjannik95@gmail.com" className="rightText hidden lg:block">hoffjannik95@gmail.com</a>
        <div className="rightLine"></div>
      </div>
      <Banner />
    </section>
  );
};

export default Hero;
