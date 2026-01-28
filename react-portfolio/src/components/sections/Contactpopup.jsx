import React from 'react';
const Contactpopup = ({ img }) => {
    return (
        <div className="pictureofmeShadow relative w-[296px] h-[192px] rounded-[30px] overflow-hidden">
          <div className="diagonalShadowPopup"></div>
          <img 
            className="relative z-10 w-[296px] h-[192px] rounded-[30px] object-cover grayscale" 
            src={img || "/assets/aboutme/thedeveloper.jpg"} 
            alt="" 
          />
        </div>
    );
};

export default Contactpopup;