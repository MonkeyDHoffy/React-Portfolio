import React from 'react';

/**
 * PageContainer - Zentraler Layout-Wrapper
 * - Zentriert den Content
 * - Einheitliches horizontales Padding
 * - Max-Breite für große Screens
 */

const PageContainer = ({ children, className = '', as: Component = 'div' }) => {
  return (
    <Component className={`page-container w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`.trim()}>
      {children}
    </Component>
  );
};

export default PageContainer;
