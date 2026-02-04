import React, { useState } from 'react';

// Reusable hoverable icon that swaps between base and hover images
const IconWithHover = ({ baseSrc, hoverSrc, alt, className = '' }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={className}
      style={{ position: 'relative', pointerEvents: 'auto' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={hover ? hoverSrc : baseSrc} alt={alt} />
    </div>
  );
};

export default IconWithHover;
