import React from 'react';

/**
 * GlowBackground renders a radial glow layer behind its children.
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
let GlowBackground = ({ children }) => {
  return (
    <div 
      className="relative"
      style={{
        clipPath: 'inset(0 0 0 0)'
      }}
    >
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[1200px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at left, #3DCFB680 0%, transparent 60%)',
          transform: 'translateX(-20%) translateY(-50%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowBackground;