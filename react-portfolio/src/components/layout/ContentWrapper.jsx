import React from 'react';

/**
 * ContentWrapper - Zentraler Container für konsistente Content-Breite
 * - Begrenzt Content auf max-w-[1920px] (oder 1440px)
 * - Sorgt für einheitliche Seitenabstände (px-24)
 * - Backgrounds bleiben fullwidth
 */
const ContentWrapper = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1920px] mx-auto px-24 ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
