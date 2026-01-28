import React from 'react';
import colors from '../../theme/colors';
import { useLang } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLang();
  
  return (
    <section className="" id="about">
      <div className="aboutme-wrapper flex justify-center items-center px-24 pt-56">
        <div className="pictureofmeShadow relative w-[568px] h-[568px] -mt-72">
          <div className="diagonalShadow"></div>
          <img 
            className="relative z-10 w-full h-full rounded-[30px] object-cover grayscale" 
            src="/assets/aboutme/thedeveloper.jpg" 
            alt="" 
          />
        </div>

        <div className="whoiam rounded-[30px] flex flex-col ml-20">
          <h1 className="-mt-5 mb-5 font-karla text-secondary">{t('about.whoiam')}</h1>
          <div 
            className="aboutme-description border border-secondary rounded-[30px] gap-8 p-10 flex flex-col justify-start w-[568px] h-[568px]" 
            style={{ backgroundColor: colors.background.greencontainer }}
          >
            <h2 className="font-firacode font-bold text-[64px] leading-[100%] tracking-[-0.03em] text-text-secondary">{t('about.title')}</h2>
            <span>{t('about.p1')}</span>
            <div className="flex gap-4 group">
              <img className="h-[32px] w-[32px]" src="assets/aboutme/location_on.png" alt="" />
              <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{t('about.location')}</p>
            </div>
            <div className="flex gap-4 group">
              <img className="h-[32px] w-[32px]" src="assets/aboutme/cognition.png" alt="" />
              <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{t('about.cognition')}</p>
            </div>
            <div className="flex gap-4 group">
              <img className="h-[32px] w-[32px]" src="assets/aboutme/new_releases.png" alt="" />
              <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{t('about.new_releases')}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;