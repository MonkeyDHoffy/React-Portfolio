import React from 'react';
import skillsData from '../../data/skills'; // Importing skills data

const Skills = () => {
  return (
<section class="relative bg-neutral-950 text-white py-24 overflow-hidden">
  <div class="max-w-7xl mx-auto px-6">
    
    <!-- Headline -->
    <p class="text-teal-400 tracking-wide mb-2">Technologies</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      <!-- LEFT: Skill Card -->
      <div class="relative">
        <div class="bg-gradient-to-br from-teal-900/40 to-neutral-900 border border-teal-500/30 rounded-2xl p-8 backdrop-blur-md shadow-[0_0_60px_rgba(45,212,191,0.15)]">
          
          <h2 class="text-4xl font-bold text-teal-400 mb-6">
            Skill Set
          </h2>

          <p class="text-neutral-300 leading-relaxed mb-6">
            A short introduction of your skills. Highlight your experience of using
            different front-end technologies and emphasise your openness to learning
            and adapting to new technologies. Show how important it is for you to
            keep up with the rapid changes in web development.
          </p>

          <p class="font-semibold mb-2">
            You need <span class="text-teal-400">another skill?</span>
          </p>

          <p class="text-neutral-400 mb-8">
            Feel free to contact me. I look forward to expanding on my previous knowledge.
          </p>

          <button class="px-6 py-3 border border-teal-400 text-teal-400 rounded-full hover:bg-teal-400 hover:text-neutral-900 transition">
            Let’s talk
          </button>
        </div>
      </div>

      <!-- RIGHT: Skills Grid -->
      <div class="grid grid-cols-3 sm:grid-cols-4 gap-10 place-items-center">
        
        <!-- Skill Item Component -->
        <div class="skill-item">
          <img src="/icons/html.svg" class="w-12 h-12 mb-2" />
          <span>HTML</span>
        </div>

        <div class="skill-item">
          <img src="/icons/css.svg" class="w-12 h-12 mb-2" />
          <span>CSS</span>
        </div>

        <div class="skill-item">
          <img src="/icons/js.svg" class="w-12 h-12 mb-2" />
          <span>JavaScript</span>
        </div>

        <div class="skill-item">
          <img src="/icons/material.svg" class="w-12 h-12 mb-2" />
          <span>Material Design</span>
        </div>

        <div class="skill-item">
          <img src="/icons/ts.svg" class="w-12 h-12 mb-2" />
          <span>TypeScript</span>
        </div>

        <div class="skill-item">
          <img src="/icons/angular.svg" class="w-12 h-12 mb-2" />
          <span>Angular</span>
        </div>

        <div class="skill-item">
          <img src="/icons/firebase.svg" class="w-12 h-12 mb-2" />
          <span>Firebase</span>
        </div>

        <div class="skill-item">
          <img src="/icons/git.svg" class="w-12 h-12 mb-2" />
          <span>Git</span>
        </div>

        <div class="skill-item">
          <img src="/icons/api.svg" class="w-12 h-12 mb-2" />
          <span>REST-API</span>
        </div>

        <div class="skill-item">
          <img src="/icons/scrum.svg" class="w-12 h-12 mb-2" />
          <span>Scrum</span>
        </div>

        <div class="skill-item text-teal-400">
          <img src="/icons/growth.svg" class="w-12 h-12 mb-2" />
          <span>Growth mindset</span>
        </div>

      </div>
    </div>
  </div>
</section>

  );
};

export default Skills;