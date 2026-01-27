import React from 'react';
import projectsData from '../../data/projects'; // Importing project data
import Card from '../ui/Card'; // Importing the Card component
import SectionTitle from '../ui/SectionTitle'; // Importing the SectionTitle component
import { useLang } from '../../context/LanguageContext';

const Projects = () => {
  return (
        <section className="" id="about">
      <div className="aboutme-wrapper flex justify-center items-center px-24 py-10">
        <div className="pictureofmeShadow">
          <img 
            className="w-[568px] h-[568px] rounded-[30px] opacity-100" 
            src="/assets/aboutme/thedeveloper.jpg" 
            alt="" 
          />
        </div>
        <div className="whoiam w-[568px] h-[568px] rounded-[30px] border flex flex-col justify-center items-center ml-20 p-10">
          <h1>Who I Am</h1>
          <div className="aboutme-description border rounded-[30px] h-[540px] gap-8 p-10 flex flex-col justify-start">
            <h2 className="font-firacode">About me</h2>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, perferendis eum. Voluptatem, vel. Iste, cum corporis aut laboriosam est minus nesciunt, dolorem mollitia repellendus odit culpa similique velit repudiandae tempore voluptates repellat atque!</span>
            <div className="flex gap-4"><img className="h-[32px] w-[32px]" src="assets/aboutme/location_on.png" alt="" /><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, voluptate?</p></div>
            <div className="flex gap-4"><img className="h-[32px] w-[32px]" src="assets/aboutme/cognition.png" alt="" /><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore velit magnam pariatur nihil?</p></div>
            <div className="flex gap-4"><img className="h-[32px] w-[32px]" src="assets/aboutme/new_releases.png" alt="" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odit perspiciatis.</p></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;

// TODO: Implement the Card component to display project details
// TODO: Ensure projectsData contains the necessary fields (id, title, description, link) for each project