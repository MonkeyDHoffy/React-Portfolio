import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { key: 'about', to: '/#about', hash: '#about', labelKey: 'header.about' },
  { key: 'skills', to: '/#skills', hash: '#skills', labelKey: 'header.skills' },
  { key: 'projects', to: '/#projects', hash: '#projects', labelKey: 'header.projects' },
];

/**
 * NavLinks renders the localized navigation links for both inline and list variants.
 * @param {{ t: (key: string) => string, onClick?: () => void, variant?: 'inline'|'list' }} props
 * @returns {JSX.Element}
 */
let NavLinks = ({ t, onClick, variant = 'inline' }) => {
  let location = useLocation();
  let [activeLink, setActiveLink] = useState(null);
  let linkClass = "font-firacode text-text-primary hover:text-[#3DCFB6] transition-colors";
  let items = NAV_ITEMS.map((item) => ({ ...item, label: t(item.labelKey) }));

  let handleSelect = (item) => {
    setActiveLink(item.to);
    if (typeof window !== 'undefined') {
      window.setTimeout(() => {
        if (window.location.hash === item.hash) {
          window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
        }
      }, 400);
    }
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    if (!location.hash) return;
    let match = NAV_ITEMS.find((item) => item.hash === location.hash);
    if (match) {
      setActiveLink(match.to);
    }
  }, [location.hash]);

  let renderIndicator = (isActive) => {
    let base = [
      'pointer-events-none absolute top-full mt-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-secondary transition-all duration-200 ease-out',
      'group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100',
    ];
    return (
      <span
        className={`${base.join(' ')} ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        aria-hidden="true"
        style={{ zIndex: 100000 }}
      />
    );
  };

  if (variant === 'list') {
    return (
      <ul className="space-y-3">
        {items.map((item) => {
          let isActive = activeLink === item.to;
          return (
            <li key={item.key} className="relative flex flex-col items-center group">
              <Link
                to={item.to}
                onClick={() => handleSelect(item)}
                className={`flex justify-center px-3 py-2 rounded-md ${linkClass}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
              {renderIndicator(isActive)}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      {items.map((item) => {
        let isActive = activeLink === item.to;
        return (
          <div key={item.key} className="relative flex flex-col items-center group">
            <Link
              to={item.to}
              className={linkClass}
              onClick={() => handleSelect(item)}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </Link>
            {renderIndicator(isActive)}
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
