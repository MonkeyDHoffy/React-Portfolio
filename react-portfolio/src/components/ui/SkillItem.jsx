import React from 'react';

/**
 * SkillItem displays a skill icon with label and hover animation.
 * @param {{ icon: string, label: string, className?: string, tooltip?: string }} props
 * @returns {JSX.Element}
 */
let SkillItem = ({ icon, label, className = '', tooltip }) => {
  return (
    <div className={("skill-item group relative flex flex-col items-center text-center hover:scale-110 transition-transform " + className).trim()}>
      {tooltip ? (
        <div className="skill-tooltip">
          {tooltip}
        </div>
      ) : null}
      <img src={icon} className="w-12 h-12 mb-2" alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default SkillItem;
