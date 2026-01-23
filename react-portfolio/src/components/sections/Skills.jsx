import React from 'react';
import skillsData from '../../data/skills'; // Importing skills data

const Skills = () => {
  return (
    <section className="py-10 text-text-light" id="skills">
      <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skillsData.map((skill) => (
          <div key={skill.name} className="m-4 p-4 border rounded shadow-md">
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="text-gray-600">{skill.level}</p>
            {/* TODO: Add visual indicators for skill proficiency (e.g., progress bars or icons) */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;