import React from 'react';
import './Contactpopup.css';

const Contactpopup = () => {
    return (
        <div className="pictureofmeShadow relative w-[568px] h-[568px] -mt-72">
          <div className="diagonalShadow"></div>
          <img 
            className="relative z-10 w-full h-full rounded-[30px] object-cover grayscale" 
            src="/assets/aboutme/thedeveloper.jpg" 
            alt="" 
          />
        </div>
    );
};

export default Contactpopup;