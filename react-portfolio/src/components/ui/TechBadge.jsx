import React from 'react';

/**
 * TechBadge shows a pill-shaped label with an optional icon.
 * @param {{ label: string, iconSrc?: string }} props
 * @returns {JSX.Element}
 */
let TechBadge = ({ label, iconSrc }) => {
  return (
    <span className="flex items-center gap-2 px-3 py-1 rounded-full border-white/20 text-sm text-white/90 font-firacode">
      {iconSrc ? (
        <img src={iconSrc} alt={`${label} icon`} className="w-5 h-5 object-contain" />
      ) : null}
      {label}
    </span>
  );
};

export default TechBadge;
