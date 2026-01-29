import { useRef } from 'react';

// Diese Komponente umschließt alle anderen Komponenten
// Sie stellt sicher, dass alles den gleichen Hintergrund hat
function Layout({ children }) {
  const DEBUG_LAYOUT = false;
  // Pseudocode:
  // - Ref auf den Layout-Container
  // - onMouseMove: relative Cursorposition berechnen
  // - CSS-Variablen --x / --y setzen (für das Overlay)

  const layoutRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = layoutRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    layoutRef.current.style.setProperty('--x', `${x}px`);
    layoutRef.current.style.setProperty('--y', `${y}px`); // TODO: Touch-Unterstützung ergänzen
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
  };

  return (
    <div
      ref={layoutRef}
      onMouseMove={handleMouseMove}
      data-debug={DEBUG_LAYOUT ? 'true' : 'false'}
      className="bg-background-main text-text-primary min-h-screen relative"
    >
      {/* Overlay: liegt unter dem Inhalt */}
      <div className="cursor-spotlight z-0" />

      {/* Inhalt: über dem Overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default Layout;