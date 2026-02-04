import { useEffect } from 'react';

// Adds an Escape key listener while `active` is true
export default function useEscape(handler, active = true) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === 'Escape') handler?.(e);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [handler, active]);
}
