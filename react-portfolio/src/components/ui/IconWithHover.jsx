import React, { useState } from 'react';

/**
 * IconWithHover swaps between base and hover icons while preserving layout.
 * @param {{ baseSrc: string, hoverSrc: string, alt: string, className?: string }} props
 * @returns {JSX.Element}
 */
let IconWithHover = ({ baseSrc, hoverSrc, alt, className = '' }) => {
  let [isHovered, setIsHovered] = useState(false);

  let handleMouseEnter = () => setIsHovered(true);
  let handleMouseLeave = () => setIsHovered(false);

  let containerStyle = { position: 'relative', pointerEvents: 'auto' };
  let currentSrc = isHovered ? hoverSrc : baseSrc;

  return (
    <div
      className={className}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={currentSrc} alt={alt} />
    </div>
  );
};

export default IconWithHover;
