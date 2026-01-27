import React from 'react';
import skillsData from '../../data/skills';

const Skills = () => {
  return (
    <section 
      id="skills"
      className="relative text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Headline */}
        <p className="text-teal-400 tracking-wide mb-2">Technologies</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: Skill Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-900/40 to-neutral-900 border border-teal-500/30 rounded-2xl p-8 backdrop-blur-md shadow-[0_0_60px_rgba(45,212,191,0.15)]">
              
              <h2 className="text-4xl font-bold text-teal-400 mb-6">
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

              <p className="text-neutral-400 mb-8">
                Feel free to contact me. I look forward to expanding on my previous knowledge.
              </p>

              <button className="px-6 py-3 border border-teal-400 text-teal-400 rounded-full hover:bg-teal-400 hover:text-neutral-900 transition">
                Let's talk
              </button>
            </div>
          </div>

          {/* RIGHT: Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-10 place-items-center">
            
            <div className="skill-item">
              <img src="assets/skills/html.png" className="w-12 h-12 mb-2" alt="HTML" />
              <span>HTML</span>
            </div>

            <div className="skill-item">
              <img src="assets/skills/css.png" className="w-12 h-12 mb-2" alt="CSS" />
              <span>CSS</span>
            </div>

            <div className="skill-item">
              <img src="assets/skills/javascript.png" className="w-12 h-12 mb-2" alt="JavaScript" />
              <span>JavaScript</span>
            </div>

            <div className="skill-item">
              <img src="assets/skills/typescript.png" className="w-12 h-12 mb-2" alt="TypeScript" />
              <span>TypeScript</span>
            </div>

            <div className="skill-item">
              <img src="assets/skills/angular.png" className="w-12 h-12 mb-2" alt="Angular" />
              <span>Angular</span>
            </div>

            <div className="skill-item">
              <img src="assets/skills/react.png" className="w-12 h-12 mb-2" alt="React" />
              <span>React</span>
            </div>

            <div className="skill-item">
              <img src="assets/skills/firebase.png" className="w-12 h-12 mb-2" alt="Firebase" />
              <span>Firebase</span>
            </div>

            <div className="skill-item">
              <img src="assets/skills/git.png" className="w-12 h-12 mb-2" alt="Git" />
              <span>Git</span>
            </div>

            <div className="skill-item">
              <img src="assets/skills/api.png" className="w-12 h-12 mb-2" alt="REST-API" />
              <span>REST-API</span>
            </div>

            <div className="skill-item">
              <img src="assets/skills/scrum.png" className="w-12 h-12 mb-2" alt="Scrum" />
              <span>Scrum</span>
            </div>

            <div className="skill-item text-teal-400">
              <img src="assets/skills/grow.png" className="w-12 h-12 mb-2" alt="Growth mindset" />
              <span>Growth mindset</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;