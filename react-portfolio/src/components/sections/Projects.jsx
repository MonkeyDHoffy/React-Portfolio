import React, { useState } from 'react';
import projectsData from '../../data/projects';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { useLang } from '../../context/LanguageContext';
import Contactpopup from './Contactpopup';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="text-white px-24 py-24" id="projects">
      <div className="flex justify-center gap-8">
        
        {/* Left Card */}
        <div className="w-[880px]">
          <p className="font-karla text-sm text-secondary mb-2">Portfolio</p>

          <h2 className="font-firacode text-5xl font-bold text-secondary mb-4">
            Featured Projects
          </h2>

          <p className="font-karla text-gray-400 max-w-xl mb-10">
            Explore a selection of my work here - Interact with projects to see my skills in action.
          </p>

          {/* Top Divider */}
          <div className="border-t border-secondary"></div>
          
          {/* Project List */}
          <div className="">

            {/* Project Item */}
            <div 
              className="flex font-firacode items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300"
              onMouseEnter={() => setHoveredProject('join')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h3 className="text-xl font-semibold tracking-wide">
                Join
              </h3>
              <span className="text-sm text-primary">
                Angular <span className="text-secondary">|</span> TypeScript <span className="text-secondary">|</span> HTML <span className="text-secondary">|</span> CSS <span className="text-secondary">|</span> Firebase
              </span>
            </div>

            {/* Project Item */}
            <div 
              className="flex font-firacode items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300"
              onMouseEnter={() => setHoveredProject('pollo')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h3 className="text-xl font-semibold tracking-wide">
                El Pollo Loco
              </h3>
              <span className="text-sm text-primary">
                HTML <span className="text-secondary">|</span> CSS <span className="text-secondary">|</span> JavaScript
              </span>
            </div>

            {/* Project Item */}
            <div 
              className="flex font-firacode items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300"
              onMouseEnter={() => setHoveredProject('bubble')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h3 className="text-xl font-semibold tracking-wide">
                DA Bubble
              </h3>
              <span className="text-sm text-primary">
                Angular <span className="text-secondary">|</span> Firebase <span className="text-secondary">|</span> TypeScript
              </span>
            </div>

          </div>
        </div>

        {/* Right Card */}
        <div className="w-[360px] border border-secondary rounded-[30px] p-8 flex items-center justify-center">
          {hoveredProject ? (
            <Contactpopup />
          ) : (
            <p className="text-gray-400 text-center">Hover over a project to see preview</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;