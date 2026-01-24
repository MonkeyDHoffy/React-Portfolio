import React, { useEffect, useState } from 'react';

export default function FadeText({ text, as = 'span', className = '', duration = 200 }) {
  const [display, setDisplay] = useState(text);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (text === display) return;
    setVisible(false);
    const t = setTimeout(() => {
      setDisplay(text);
      setVisible(true);
    }, duration);
    return () => clearTimeout(t);
  }, [text, duration, display]);

  const Tag = as;
  return (
    <Tag
      className={`${className} transition-opacity ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {display}
    </Tag>
  );
}