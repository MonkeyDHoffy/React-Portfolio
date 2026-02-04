import React from 'react';

// Minimal wrapper to keep consistent rounded border + background styling
const RoundedCard = ({ children, className = '', style }) => {
  return (
    <div
      className={("rounded-[30px] border border-secondary bg-background-greencontainer " + className).trim()}
      style={style}
    >
      {children}
    </div>
  );
};

export default RoundedCard;
