import { useEffect } from 'react';

// Calls `onOutside` when clicking outside of ref element while `active` is true
export default function useClickOutside(ref, active, onOutside) {
  useEffect(() => {
    const handler = (e) => {
      if (!active) return;
      const el = ref?.current;
      if (el && !el.contains(e.target)) {
        onOutside?.(e);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [ref, active, onOutside]);
}
