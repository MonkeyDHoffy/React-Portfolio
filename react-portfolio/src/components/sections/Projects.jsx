import React from 'react';
import projectsData from '../../data/projects'; // Importing project data
import Card from '../ui/Card'; // Importing the Card component
import SectionTitle from '../ui/SectionTitle'; // Importing the SectionTitle component
import { useLang } from '../../context/LanguageContext';

const Projects = () => {
  return (
    <section className="text-white px-8 py-16" id="projects">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <p className="font-karla text-sm text-secondary mb-2">Portfolio</p>

        <h2 className="font-firacode text-5xl font-bold text-secondary mb-4">
          Featured Projects
        </h2>

        <p className="font-karla text-gray-400 max-w-xl mb-10">
          Explore a selection of my work here - Interact with projects to see my skills in action.
        </p>

        {/* Top Divider */}
        <div className="border-t border-secondary mb-6"></div>
        {/* Project List */}
        <div className="space-y-6">

          {/* Project Item */}
          <div className="flex font-firacode items-center justify-between py-4 border-b border-secondary">
            <h3 className="text-xl font-semibold tracking-wide">
              Join
            </h3>
            <span className="text-sm text-gray-400">
              Angular | TypeScript | HTML | CSS | Firebase
            </span>
          </div>

          {/* Project Item */}
          <div className="flex font-firacode items-center justify-between py-4 border-b border-secondary">
            <h3 className="text-xl font-semibold tracking-wide">
              El Pollo Loco
            </h3>
            <span className="text-sm text-gray-400">
              HTML | CSS | JavaScript
            </span>
          </div>

          {/* Project Item */}
          <div className="flex font-firacode items-center justify-between py-4 border-b border-secondary">
            <h3 className="text-xl font-semibold tracking-wide">
              DA Bubble
            </h3>
            <span className="text-sm text-gray-400">
              Angular | Firebase | TypeScript
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
