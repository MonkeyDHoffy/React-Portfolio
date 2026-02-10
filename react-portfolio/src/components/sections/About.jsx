import React, { useEffect, useRef } from 'react';
import devImg from '../../assets/aboutme/thedeveloper.jpg';
import locationIcon from '../../assets/aboutme/location_on.png';
import cognitionIcon from '../../assets/aboutme/cognition.png';
import newReleasesIcon from '../../assets/aboutme/new_releases.png';
import colors from '../../theme/colors';
import { useLang } from '../../context/LanguageContext';
import PageContainer from '../layout/PageContainer';
import RoundedCard from '../ui/RoundedCard';

/**
 * About highlights the personal introduction card with animated portrait.
 * @returns {JSX.Element}
 */
let About = () => {
  let { t } = useLang();
  let imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    let observer = null;

    let buildThresholds = () => Array.from({ length: 101 }, (_, i) => i / 100);

    let updateRevealProgress = (element, ratio) => {
      element.style.setProperty('--reveal-progress', String(ratio));
    };

    let createRevealObserver = (element, thresholds) => new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        updateRevealProgress(element, entry.intersectionRatio);
      },
      { root: null, threshold: thresholds }
    );

    let enableRevealEffect = () => {
      if (observer) return;
      el.classList.add('js-reveal');
      observer = createRevealObserver(el, buildThresholds());
      observer.observe(el);
    };

    let disableRevealEffect = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      el.classList.remove('js-reveal');
      el.style.removeProperty('--reveal-progress');
    };

    let mq = window.matchMedia('(max-width: 1024px)');

    let applyResponsiveReveal = () => {
      if (mq.matches) {
        disableRevealEffect();
      } else {
        enableRevealEffect();
      }
    };

    applyResponsiveReveal();
    mq.addEventListener('change', applyResponsiveReveal);

    return () => {
      mq.removeEventListener('change', applyResponsiveReveal);
      disableRevealEffect();
    };
  }, []);
  
  return (
    <section className="debug-component py-8" id="about">
      <PageContainer>
        <div className="aboutme-wrapper flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
        <div className="pictureofmeShadow relative w-full max-w-[var(--card-size)] h-[360px] sm:h-[420px] lg:h-[var(--card-size)]">
          <div className="diagonalShadow"></div>
          <img 
            ref={imgRef}
            className="movingpic relative z-10 w-full h-full rounded-[30px] object-cover grayscale" 
            src={devImg} 
            alt="Portrait von Jannik Hoff" 
          />
        </div>

        <div className="whoiam flex flex-col lg:ml-20 ml-0 w-full lg:w-auto">
          <h1 className="mb-5 font-karla text-secondary">{t('about.whoiam')}</h1>
          <RoundedCard 
            className="aboutme-description gap-8 p-10 flex flex-col justify-start w-full lg:w-[var(--card-size)] h-auto lg:h-[var(--card-size)]"
          >
            <h2 className="font-firacode font-bold text-[64px] leading-[100%] tracking-[-0.03em] text-text-secondary">{t('about.title')}</h2>
            <span>{t('about.p1')}</span>
            <div className="flex gap-4 group">
              <img className="h-[32px] w-[32px]" src={locationIcon} alt="Location icon" />
              <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{t('about.location')}</p>
            </div>
            <div className="flex gap-4 group">
              <img className="h-[32px] w-[32px]" src={cognitionIcon} alt="Focus icon" />
              <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{t('about.cognition')}</p>
            </div>
            <div className="flex gap-4 group">
              <img className="h-[32px] w-[32px]" src={newReleasesIcon} alt="Updates icon" />
              <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{t('about.new_releases')}</p>
            </div>
          </RoundedCard>
        </div>
        </div>
      </PageContainer>

    </section>
  );
};

export default About;