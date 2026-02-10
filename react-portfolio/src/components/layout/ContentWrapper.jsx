import React from 'react';
import PageContainer from './PageContainer';

/**
 * ContentWrapper provides a thin alias for PageContainer to preserve legacy layout usage.
 * @param {{ children: React.ReactNode, className?: string }} props
 * @returns {JSX.Element}
 */
let ContentWrapper = ({ children, className = '' }) => {
  return (
    <PageContainer className={className}>
      {children}
    </PageContainer>
  );
};

export default ContentWrapper;
