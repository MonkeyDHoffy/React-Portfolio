import React, { useState } from 'react';

/**
 * IconWithHover
 * Displays an image that switches source on hover.
 *
 * Behavior: Identical output; only internal naming improved.
 * Props:
 * - baseSrc: default image source
 * - hoverSrc: image source shown when hovered
 * - alt: alt text for the image
 * - className: optional wrapper classes
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
