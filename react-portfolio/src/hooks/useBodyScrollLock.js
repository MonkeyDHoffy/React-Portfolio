import { useEffect } from 'react';

// Locks body scroll while `active` is true.
// If `preserveScroll` is true, uses fixed positioning to avoid layout shift and restores scroll on cleanup.
export default function useBodyScrollLock(active, { preserveScroll = false } = {}) {
  useEffect(() => {
    if (!active) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    if (preserveScroll) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.width = prev.width;
      document.body.style.overflow = prev.overflow;
      if (preserveScroll) {
        window.scrollTo(0, scrollY);
      }
    };
  }, [active, preserveScroll]);
}
