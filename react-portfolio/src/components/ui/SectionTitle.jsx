import React from 'react';

/**
 * SectionTitle applies consistent typography to section headings.
 * @param {{ title: string }} props
 * @returns {JSX.Element}
 */
const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-3xl font-semibold mb-6 text-center">
      {title}
    </h2>
  );
};

export default SectionTitle;