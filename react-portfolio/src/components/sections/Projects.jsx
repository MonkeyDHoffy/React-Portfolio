import React from 'react';
import Contactpopup from './Contactpopup';
import PageContainer from '../layout/PageContainer';

const Projects = () => {
  return (
    <section className="text-white py-24 relative debug-component" id="projects">
      <PageContainer>
        <div className="flex justify-start gap-8">
        
        {/* Left Card */}
        <div className="w-[880px] h-[568px]">
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
            <div className="relative group">
              <div 
                className="project1 flex font-firacode items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold tracking-wide">
                  Join
                </h3>
                <span className="text-sm text-primary">
                  Angular <span className="text-secondary">|</span> TypeScript <span className="text-secondary">|</span> HTML <span className="text-secondary">|</span> CSS <span className="text-secondary">|</span> Firebase
                </span>
              </div>
              <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Contactpopup img="/assets/projects/join.png" />
              </div>
            </div>

            {/* Project Item */}
            <div className="relative group">
              <div 
                className="project2 flex font-firacode items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold tracking-wide">
                  El Pollo Loco
                </h3>
                <span className="text-sm text-primary">
                  HTML <span className="text-secondary">|</span> CSS <span className="text-secondary">|</span> JavaScript
                </span>
              </div>
              <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Contactpopup img="/assets/projects/pollo.png" />
              </div>
            </div>

            {/* Project Item */}
            <div className="relative group">
              <div 
                className="project3 flex font-firacode items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold tracking-wide">
                  DA Bubble
                </h3>
                <span className="text-sm text-primary">
                  Angular <span className="text-secondary">|</span> Firebase <span className="text-secondary">|</span> TypeScript
                </span>
              </div>
              <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Contactpopup img="/assets/projects/bubble.png" />
              </div>
            </div>

          </div>
        </div>

        {/* Right Card */}

        </div>
      </PageContainer>
    </section>
  );
};

export default Projects;