import React from 'react';
const Contactpopup = ({ img }) => {
    return (
      <div className="popup relative w-[296px] h-[192px] rounded-[30px] overflow-visible">
        <div className="diagonalShadowPopup translate-x-5 translate-y-2"></div>
        <img 
        className="relative z-10 w-[296px] h-[192px] rounded-[30px] object-cover" 
        src={img || "/assets/aboutme/thedeveloper.jpg"} 
        alt="" 
        />
      </div>
    );
};

export default Contactpopup;