import React from 'react';

/**
 * SkillItem displays a skill icon with label and hover animation.
 * @param {{ icon: string, label: string, className?: string }} props
 * @returns {JSX.Element}
 */
let SkillItem = ({ icon, label, className = '' }) => {
  return (
    <div className={("skill-item flex flex-col items-center text-center hover:scale-110 transition-transform " + className).trim()}>
      <img src={icon} className="w-12 h-12 mb-2" alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default SkillItem;
