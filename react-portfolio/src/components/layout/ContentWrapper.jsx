import React from 'react';
import PageContainer from './PageContainer';

/**
 * ContentWrapper (deprecated) - Use PageContainer instead.
 */
const ContentWrapper = ({ children, className = '' }) => {
  return (
    <PageContainer className={className}>
      {children}
    </PageContainer>
  );
};

export default ContentWrapper;
