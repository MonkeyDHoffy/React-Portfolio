import React from 'react';

/**
 * RoundedCard enforces the shared rounded border and background styling.
 * @param {{ children: React.ReactNode, className?: string, style?: React.CSSProperties }} props
 * @returns {JSX.Element}
 */
let RoundedCard = ({ children, className = '', style }) => {
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
