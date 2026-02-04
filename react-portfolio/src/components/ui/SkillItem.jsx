import React from 'react';

// Small presentational component for a skill icon + label
const SkillItem = ({ icon, label, className = '' }) => {
  return (
    <div className={("skill-item flex flex-col items-center text-center hover:scale-110 transition-transform " + className).trim()}>
      <img src={icon} className="w-12 h-12 mb-2" alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default SkillItem;
