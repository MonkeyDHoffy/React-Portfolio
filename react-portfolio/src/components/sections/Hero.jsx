import React from 'react';
import Header from '../layout/Header';
import { useLang } from '../../context/LanguageContext';

const Hero = () => {
  const { t } = useLang();
  return (
    <section className="hero-gradient relative flex flex-col items-center justify-center h-screen text-text-primary overflow-hidden">
      <div className="cursor-spotlight absolute inset-0 z-0" />
      <div className="absolute top-0 left-0 right-0 z-10"><Header /></div>
      <div className="pt-20 text-center z-10">
        {/* h1: Fira Code, weight 400, 40px, line-height 100%, letter-spacing 0 */}
        <h1 className="font-fira font-normal text-[40px] leading-[100%] tracking-[0] mb-4">
          {t('hero.subtitle')}
        </h1>

        {/* p: Karla, weight 700, 128px, line-height 100%, letter-spacing -0.02em */}
        <p className="font-karla font-bold text-[128px] leading-[100%] tracking-[-0.02em] mb-8">
          {t('hero.title')}
        </p>

        <button className="border border-text-primary text-text-primary px-4 py-2 rounded-lg hover:bg-background-light transition">
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;