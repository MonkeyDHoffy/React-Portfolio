import React from 'react';
import { useLang } from '../../context/LanguageContext';
import PageContainer from '../layout/PageContainer';
import RoundedCard from '../ui/RoundedCard';
import htmlIcon from '../../assets/skills/html.png';
import cssIcon from '../../assets/skills/css.png';
import jsIcon from '../../assets/skills/javascript.png';
import tsIcon from '../../assets/skills/typescript.png';
import angularIcon from '../../assets/skills/angular.png';
import reactIcon from '../../assets/skills/react.png';
import firebaseIcon from '../../assets/skills/firebase.png';
import gitIcon from '../../assets/skills/git.png';
import apiIcon from '../../assets/skills/api.png';
import scrumIcon from '../../assets/skills/scrum.png';
import growIcon from '../../assets/skills/grow.png';
import SkillItem from '../ui/SkillItem';

const Skills = () => {
  const { t } = useLang();
  return (
    <section 
      id="skills"
      className="relative text-white py-8 debug-component"
    >
      <PageContainer>
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
            
            {/* LEFT: Skill Card */}
            <div className="flex flex-col">
              <p className="mb-5 font-karla text-secondary">{t('skills.label')}</p>
              <div className="relative w-full lg:w-[var(--card-size)] max-w-[var(--card-size)] h-auto lg:h-[var(--card-size)] mx-auto lg:mx-0">
                <RoundedCard className="skill-description gap-8 p-10 flex flex-col w-full max-w-[var(--card-size)] h-auto lg:h-full lg:min-h-[var(--card-size)] overflow-hidden">
                  <h2 className="font-firacode font-bold text-[36px] sm:text-[48px] lg:text-[64px] leading-[100%] tracking-[-0.03em] text-text-secondary">
                    {t('skills.title')}
                  </h2>

                  <p className="text-neutral-300 leading-relaxed mb-6">
                    {t('skills.intro')}
                  </p>

                  <p className="font-semibold mb-2">
                    {t('skills.prompt')}
                  </p>

                  <p className="text-neutral-400 mb-8 hover:text-primary transition-colors duration-1000">
                    {t('skills.outro')}
                  </p>

                  <button className="mt-auto px-6 py-3 border text-primary rounded-full hover:text-secondary hover:border-secondary transition-all duration-1000 w-auto min-w-[140px] md:w-[150px] text-center">
                    {t('skills.cta')}
                  </button>
                </RoundedCard>
              </div>
            </div>

            {/* RIGHT: Skills Grid */}
            <div className="w-full lg:w-[var(--card-size)] max-w-[var(--card-size)] h-auto lg:h-[var(--card-size)] grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 place-items-center content-center">
              {[
                { icon: htmlIcon, label: 'HTML' },
                { icon: cssIcon, label: 'CSS' },
                { icon: jsIcon, label: 'JavaScript' },
                { icon: tsIcon, label: 'TypeScript' },
                { icon: angularIcon, label: 'Angular' },
                { icon: reactIcon, label: 'React' },
                { icon: firebaseIcon, label: 'Firebase' },
                { icon: gitIcon, label: 'Git' },
                { icon: apiIcon, label: 'REST-API' },
                { icon: scrumIcon, label: 'Scrum' },
                { icon: growIcon, label: 'Growth mindset', className: 'text-teal-400' },
              ].map(({ icon, label, className }) => (
                <SkillItem key={label} icon={icon} label={label} className={className} />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default Skills;

// bg-gradient-to-br from-teal-900/40 to-neutral-900 border border-teal-500/30 rounded-[30px] p-10 backdrop-blur-md shadow-[0_0_60px_rgba(45,212,191,0.15)] w-full h-full flex flex-col justify-between