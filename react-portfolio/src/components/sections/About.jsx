import React from 'react';
import colors from '../../theme/colors';

// TODO: Add personal information and background details
const About = () => {
  return (
    <section className="" id="about">
      <div className="aboutme-wrapper flex justify-center items-center px-24 py-10">
    <div className="pictureofmeShadow relative w-[568px] h-[568px]">
  <div className="diagonalShadow"></div>

  <img 
    className="relative z-10 w-full h-full rounded-[30px] object-cover grayscale" 
    src="/assets/aboutme/thedeveloper.jpg" 
    alt="" 
  />
</div>

        <div className="whoiam w-[568px] h-[568px] rounded-[30px] flex flex-col ml-20 p-10">
          <h1 className="-mt-5 mb-5 font-karla text-secondary">Who I Am</h1>
          <div 
            className="aboutme-description border border-secondary rounded-[30px] flex-1 gap-8 p-10 flex flex-col justify-start" 
            style={{ backgroundColor: colors.background.greencontainer }}
          >
            <h2 className="font-firacode font-bold text-[64px] leading-[100%] tracking-[-0.03em] text-text-secondary">About me</h2>
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

export default About;