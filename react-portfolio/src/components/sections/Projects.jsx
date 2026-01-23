import React from 'react';
import projectsData from '../../data/projects'; // Importing project data
import Card from '../ui/Card'; // Importing the Card component
import SectionTitle from '../ui/SectionTitle'; // Importing the SectionTitle component

const Projects = () => {
  return (
    <section className="py-10">
      <SectionTitle title="My Projects" /> {/* Section title for Projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Card key={project.id} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

// TODO: Implement the Card component to display project details
// TODO: Ensure projectsData contains the necessary fields (id, title, description, link) for each project