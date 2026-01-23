import React from 'react';

// This component renders a section title with consistent styling
const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-3xl font-semibold mb-6 text-center">
      {title}
    </h2>
  );
};

export default SectionTitle;