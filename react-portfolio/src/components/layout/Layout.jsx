import { useEffect, useRef } from 'react';

// Diese Komponente umschließt alle anderen Komponenten
// Sie stellt sicher, dass alles den gleichen Hintergrund hat
function Layout({ children }) {
  const DEBUG_LAYOUT = false;
  // Pseudocode:
  // - Ref auf den Layout-Container
  // - onMouseMove: relative Cursorposition berechnen
  // - CSS-Variablen --x / --y setzen (für das Overlay)

  const layoutRef = useRef(null);
  const touchFadeTimeout = useRef(null);

  const setCursorVisibility = (visible) => {
    if (!layoutRef.current) return;
    layoutRef.current.style.setProperty('--cursor-opacity', visible ? '1' : '0');
  };

  const scheduleTouchFade = () => {
    if (touchFadeTimeout.current) {
      clearTimeout(touchFadeTimeout.current);
    }
    touchFadeTimeout.current = setTimeout(() => {
      setCursorVisibility(false);
    }, 320);
  };

  const updateCursorPosition = (e) => {
    if (!layoutRef.current) return;
    const { clientX, clientY, pointerType = 'mouse' } = e;
    layoutRef.current.style.setProperty('--x', `${clientX}px`);
    layoutRef.current.style.setProperty('--y', `${clientY}px`);

    const isPointer = (() => {
      let node = e.target;
      while (node && node !== layoutRef.current) {
        const cursor = window.getComputedStyle(node).cursor;
        if (cursor === 'pointer') return true;
        node = node.parentElement;
      }
      return false;
    })();
    layoutRef.current.style.setProperty('--cursor-size', isPointer ? '320px' : '200px');

    if (pointerType === 'touch') {
      setCursorVisibility(true);
      scheduleTouchFade();
    } else {
      setCursorVisibility(true);
      if (touchFadeTimeout.current) {
        clearTimeout(touchFadeTimeout.current);
      }
    }
  };

  const handlePointerMove = (e) => updateCursorPosition(e);
  const handlePointerDown = (e) => updateCursorPosition(e);
  const handlePointerLeave = (e) => {
    if (e.pointerType === 'touch') {
      scheduleTouchFade();
    } else {
      setCursorVisibility(false);
    }
  };
  const handlePointerUp = (e) => {
    if (e.pointerType === 'touch') {
      scheduleTouchFade();
    }
  };

  useEffect(() => {
    if (!layoutRef.current) return undefined;
    const prefersFinePointer = typeof window !== 'undefined'
      ? window.matchMedia('(pointer: fine)').matches
      : true;
    layoutRef.current.style.setProperty('--cursor-opacity', prefersFinePointer ? '1' : '0');

    return () => {
      if (touchFadeTimeout.current) {
        clearTimeout(touchFadeTimeout.current);
      }
    };
  }, []);

  return (
    <div
      ref={layoutRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
      onPointerUp={handlePointerUp}
      data-debug={DEBUG_LAYOUT ? 'true' : 'false'}
      className="bg-background-main text-text-primary min-h-screen relative"
    >
      {/* Overlay: liegt unter dem Inhalt */}
      <div className="cursor-spotlight" />

      {/* Inhalt: über dem Overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default Layout;