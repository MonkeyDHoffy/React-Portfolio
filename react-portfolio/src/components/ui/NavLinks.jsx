import React from 'react';

// Renders header navigation links with identical markup/classes.
// variant: 'inline' for desktop (anchors), 'list' for mobile (<ul><li> anchors)
const NavLinks = ({ t, onClick, variant = 'inline' }) => {
  const linkClass = "font-firacode text-text-primary hover:text-[#3DCFB6] transition-colors";
  const items = [
    { href: '#about', label: t('header.about') },
    { href: '#skills', label: t('header.skills') },
    { href: '#projects', label: t('header.projects') },
  ];

  if (variant === 'list') {
    return (
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={onClick} className={`flex justify-center block px-3 py-2 rounded-md ${linkClass}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {items.map((item) => (
        <a key={item.href} href={item.href} className={linkClass}>
          {item.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
