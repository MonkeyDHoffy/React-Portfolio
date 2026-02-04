import React from 'react';
import { useLang } from '../../context/LanguageContext';
import skillsData from '../../data/skills';
import PageContainer from '../layout/PageContainer';
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
              <div className="relative w-full lg:w-[568px] max-w-[568px] h-auto lg:h-[568px] mx-auto lg:mx-0">
                <div className="skill-description bg-background-greencontainer border border-secondary rounded-[30px] gap-8 p-10 flex flex-col w-full max-w-[568px] h-auto lg:h-full lg:min-h-[568px] overflow-hidden">
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
                </div>
              </div>
            </div>

            {/* RIGHT: Skills Grid */}
            <div className="w-full lg:w-[568px] max-w-[568px] h-auto lg:h-[568px] grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 place-items-center content-center">
              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={htmlIcon} className="w-12 h-12 mb-2" alt="HTML" />
                <span>HTML</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={cssIcon} className="w-12 h-12 mb-2" alt="CSS" />
                <span>CSS</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={jsIcon} className="w-12 h-12 mb-2" alt="JavaScript" />
                <span>JavaScript</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={tsIcon} className="w-12 h-12 mb-2" alt="TypeScript" />
                <span>TypeScript</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={angularIcon} className="w-12 h-12 mb-2" alt="Angular" />
                <span>Angular</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={reactIcon} className="w-12 h-12 mb-2" alt="React" />
                <span>React</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={firebaseIcon} className="w-12 h-12 mb-2" alt="Firebase" />
                <span>Firebase</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={gitIcon} className="w-12 h-12 mb-2" alt="Git" />
                <span>Git</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={apiIcon} className="w-12 h-12 mb-2" alt="REST-API" />
                <span>REST-API</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center hover:scale-110 transition-transform">
                <img src={scrumIcon} className="w-12 h-12 mb-2" alt="Scrum" />
                <span>Scrum</span>
              </div>

              <div className="skill-item flex flex-col items-center text-center text-teal-400 hover:scale-110 transition-transform">
                <img src={growIcon} className="w-12 h-12 mb-2" alt="Growth mindset" />
                <span>Growth mindset</span>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default Skills;

// bg-gradient-to-br from-teal-900/40 to-neutral-900 border border-teal-500/30 rounded-[30px] p-10 backdrop-blur-md shadow-[0_0_60px_rgba(45,212,191,0.15)] w-full h-full flex flex-col justify-between