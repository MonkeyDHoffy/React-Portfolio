import React from 'react';
import { Link } from 'react-router-dom';

// Renders header navigation links with identical markup/classes.
// variant: 'inline' for desktop (anchors), 'list' for mobile (<ul><li> anchors)
const NavLinks = ({ t, onClick, variant = 'inline' }) => {
  const linkClass = "font-firacode text-text-primary hover:text-[#3DCFB6] transition-colors";
  const items = [
    { to: '/#about', label: t('header.about') },
    { to: '/#skills', label: t('header.skills') },
    { to: '/#projects', label: t('header.projects') },
  ];

  if (variant === 'list') {
    return (
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} onClick={onClick} className={`flex justify-center block px-3 py-2 rounded-md ${linkClass}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {items.map((item) => (
        <Link key={item.to} to={item.to} className={linkClass}>
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
