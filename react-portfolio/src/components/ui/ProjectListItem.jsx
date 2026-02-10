import React from 'react';
import Contactpopup from '../sections/Contactpopup';

/**
 * ProjectListItem renders a clickable project row with hover preview imagery.
 * @param {{
 *  className?: string,
 *  title: string,
 *  stackSegments?: string[],
 *  previewImg: string,
 *  previewAlt?: string,
 *  onClick?: () => void
 * }} props
 * @returns {JSX.Element}
 */
let ProjectListItem = ({
  className,
  title,
  stackSegments = [],
  previewImg,
  previewAlt,
  onClick,
}) => {
  return (
    <div className="relative group">
      <div
        className={`${className} flex flex-col md:flex-row gap-2 md:gap-0 font-firacode items-start md:items-center justify-between px-8 py-10 border-b border-secondary hover:bg-background-greencontainer cursor-pointer transition-colors duration-300`}
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        <span className="text-sm text-primary mt-2 md:mt-0">
          {stackSegments.map((seg, i) => (
            <React.Fragment key={`${seg}-${i}`}>
              {i > 0 && <span className="text-secondary">|</span>}{' '}
              {seg}
              {' '}
            </React.Fragment>
          ))}
        </span>
      </div>
      <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Contactpopup img={previewImg} alt={previewAlt} />
      </div>
    </div>
  );
};

export default ProjectListItem;
