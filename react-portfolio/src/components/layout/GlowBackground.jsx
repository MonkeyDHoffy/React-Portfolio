import React from 'react';

const GlowBackground = ({ children }) => {
  return (
    <div 
      className="relative"
      style={{
        clipPath: 'inset(0 0 0 0)'  // Clippt nur außerhalb, blockiert nicht Scroll-Timeline
      }}
    >
      {/* Linker Halbkreis-Glow-Effekt */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[1200px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at left, #3DCFB680 0%, transparent 60%)',
          transform: 'translateX(-20%) translateY(-50%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowBackground;