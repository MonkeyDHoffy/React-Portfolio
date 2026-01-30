import React from 'react';
import skillsData from '../../data/skills';
import PageContainer from '../layout/PageContainer';

const Skills = () => {
  return (
    <section 
      id="skills"
      className="relative text-white py-8 debug-component"
    >
      <PageContainer>
        <div className="flex justify-center items-center">
          <div className="flex items-start gap-16">
            
            {/* LEFT: Skill Card */}
                  <div className="flex flex-col">
                    <p className="mb-5 font-karla text-secondary">Technologies</p>
                    <div className="relative w-[568px] h-[568px]">
                    <div className="skill-description bg-background-greencontainer border border-secondary rounded-[30px] gap-8 p-10 flex flex-col justify-start w-full h-full">
                      
                      <h2 className="ont-firacode font-bold text-[64px] leading-[100%] tracking-[-0.03em] text-text-secondary">
                      Skill Set
                      </h2>

                    <p className="text-neutral-300 leading-relaxed mb-6">
                    A short introduction of your skills. Highlight your experience of using
                    different front-end technologies and emphasise your openness to learning
                    and adapting to new technologies. Show how important it is for you to
                    keep up with the rapid changes in web development.
                    </p>

                    <p className="font-semibold mb-2">
                    You need <span className="text-teal-400">another skill?</span>
                    </p>

                    <p className="text-neutral-400 mb-8 hover:text-primary transition-colors duration-1000">
                    Feel free to contact me. I look forward to expanding on my previous knowledge.
                    </p>

                      <button className="px-6 py-3 border text-primary rounded-full hover:text-secondary hover:border-secondary transition-all duration-1000 w-[150px] text-center">
                      Let's talk
                      </button>
                    </div>
                    </div>
                  </div>

                  {/* RIGHT: Skills Grid */}
            <div className="w-[568px] h-[568px] grid grid-cols-3 gap-8 place-items-center content-center">
            
            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/html.png" className="w-12 h-12 mb-2" alt="HTML" />
              <span>HTML</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/css.png" className="w-12 h-12 mb-2" alt="CSS" />
              <span>CSS</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/javascript.png" className="w-12 h-12 mb-2" alt="JavaScript" />
              <span>JavaScript</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/typescript.png" className="w-12 h-12 mb-2" alt="TypeScript" />
              <span>TypeScript</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/angular.png" className="w-12 h-12 mb-2" alt="Angular" />
              <span>Angular</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/react.png" className="w-12 h-12 mb-2" alt="React" />
              <span>React</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/firebase.png" className="w-12 h-12 mb-2" alt="Firebase" />
              <span>Firebase</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/git.png" className="w-12 h-12 mb-2" alt="Git" />
              <span>Git</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/api.png" className="w-12 h-12 mb-2" alt="REST-API" />
              <span>REST-API</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center">
              <img src="/assets/skills/scrum.png" className="w-12 h-12 mb-2" alt="Scrum" />
              <span>Scrum</span>
            </div>

            <div className="skill-item flex flex-col items-center text-center text-teal-400">
              <img src="/assets/skills/grow.png" className="w-12 h-12 mb-2" alt="Growth mindset" />
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