import React from 'react';
import devImg from '../../assets/aboutme/thedeveloper.jpg';
import locationIcon from '../../assets/aboutme/location_on.png';
import cognitionIcon from '../../assets/aboutme/cognition.png';
import newReleasesIcon from '../../assets/aboutme/new_releases.png';
import colors from '../../theme/colors';
import { useLang } from '../../context/LanguageContext';
import PageContainer from '../layout/PageContainer';

const About = () => {
  const { t } = useLang();
  
  return (
    <section className="debug-component py-8" id="about">
      <PageContainer>
        <div className="aboutme-wrapper flex justify-center items-center">
        <div className="pictureofmeShadow relative w-[568px] h-[568px]">
          <div className="diagonalShadow"></div>
          <img 
            className="movingpic relative z-10 w-full h-full rounded-[30px] object-cover grayscale" 
            src={devImg} 
            alt="" 
          />
        </div>

        <div className="whoiam  flex flex-col ml-20">
          <h1 className="mb-5 font-karla text-secondary">{t('about.whoiam')}</h1>
          <div 
            className="aboutme-description bg-background-greencontainer border border-secondary rounded-[30px] gap-8 p-10 flex flex-col justify-start w-[568px] h-[568px]"
          >
            <h2 className="font-firacode font-bold text-[64px] leading-[100%] tracking-[-0.03em] text-text-secondary">{t('about.title')}</h2>
            <span>{t('about.p1')}</span>
            <div className="flex gap-4 group">
              <img className="h-[32px] w-[32px]" src={locationIcon} alt="" />
              <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{t('about.location')}</p>
            </div>
            <div className="flex gap-4 group">
              <img className="h-[32px] w-[32px]" src={cognitionIcon} alt="" />
              <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{t('about.cognition')}</p>
            </div>
            <div className="flex gap-4 group">
              <img className="h-[32px] w-[32px]" src={newReleasesIcon} alt="" />
              <p className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{t('about.new_releases')}</p>
            </div>
          </div>
        </div>
        </div>
      </PageContainer>

    </section>
  );
};

export default About;