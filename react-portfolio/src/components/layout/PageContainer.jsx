import React from 'react';

/**
 * PageContainer constrains content width and applies consistent horizontal padding.
 * @param {{ children: React.ReactNode, className?: string, as?: keyof JSX.IntrinsicElements|React.ComponentType }} props
 * @returns {JSX.Element}
 */
let PageContainer = ({ children, className = '', as: Component = 'div' }) => {
  return (
    <Component className={`page-container w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`.trim()}>
      {children}
    </Component>
  );
};

export default PageContainer;
