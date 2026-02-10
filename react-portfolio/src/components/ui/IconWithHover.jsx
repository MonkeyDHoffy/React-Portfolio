import React, { useState } from 'react';

/**
 * IconWithHover swaps between base and hover icons while preserving layout.
 * @param {{ baseSrc: string, hoverSrc: string, alt: string, className?: string }} props
 * @returns {JSX.Element}
 */
const IconWithHover = ({ baseSrc, hoverSrc, alt, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const containerStyle = { position: 'relative', pointerEvents: 'auto' };
  const currentSrc = isHovered ? hoverSrc : baseSrc;

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
