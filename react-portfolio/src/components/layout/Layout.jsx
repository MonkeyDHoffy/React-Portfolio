import { useEffect, useRef } from 'react';

const DEFAULT_CURSOR_SIZE = 220;
const POINTER_CURSOR_SIZE = 320;

/**
 * Layout wraps the entire application and controls the spotlight cursor logic.
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
function Layout({ children }) {
  let DEBUG_LAYOUT = false;
  let layoutRef = useRef(null);
  let activeTouchId = useRef(null);
  let pointerModeRef = useRef(false);

  let setCursorVisibility = (visible) => {
    if (!layoutRef.current) return;
    layoutRef.current.style.setProperty('--cursor-opacity', visible ? '1' : '0');
  };

  let setCursorSize = (sizePx) => {
    if (!layoutRef.current) return;
    layoutRef.current.style.setProperty('--cursor-size', `${sizePx}px`);
  };

  let setPointerMode = (isPointer) => {
    if (pointerModeRef.current === isPointer) return;
    pointerModeRef.current = isPointer;
    setCursorSize(isPointer ? POINTER_CURSOR_SIZE : DEFAULT_CURSOR_SIZE);
  };

  let updatePointerModeFromTarget = (target) => {
    if (typeof window === 'undefined') return;
    if (!(target instanceof Element)) {
      setPointerMode(false);
      return;
    }
    const cursorValue = window.getComputedStyle(target).cursor || '';
    setPointerMode(cursorValue.includes('pointer'));
  };

  let updateCursorPosition = (x, y) => {
    if (!layoutRef.current) return;
    layoutRef.current.style.setProperty('--x', `${x}px`);
    layoutRef.current.style.setProperty('--y', `${y}px`);
  };

  let handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    updatePointerModeFromTarget(event.target);
    updateCursorPosition(event.clientX, event.clientY);
    setCursorVisibility(true);
  };

  let handlePointerLeave = (event) => {
    if (event.pointerType === 'touch') return;
    setPointerMode(false);
    setCursorVisibility(false);
  };

  let handlePointerDown = (event) => {
    if (event.pointerType === 'touch') return;
    updatePointerModeFromTarget(event.target);
    updateCursorPosition(event.clientX, event.clientY);
    setCursorVisibility(true);
  };

  let handlePointerUp = (event) => {
    if (event.pointerType === 'touch') return;
    setCursorVisibility(false);
  };

  useEffect(() => {
    setCursorSize(DEFAULT_CURSOR_SIZE);

    let layoutEl = layoutRef.current;
    if (!layoutEl) return undefined;

    let prefersFinePointer = window.matchMedia
      ? window.matchMedia('(pointer: fine)').matches
      : true;

    layoutEl.style.setProperty('--cursor-opacity', prefersFinePointer ? '1' : '0');

    let updateCursorFromTouch = (touch) => {
      if (!touch) return;
      updateCursorPosition(touch.clientX, touch.clientY);
      setCursorVisibility(true);
    };

    let getTrackedTouch = (touchList) => {
      if (!touchList || touchList.length === 0) return null;
      if (activeTouchId.current == null) return touchList[0];

      for (let i = 0; i < touchList.length; i += 1) {
        const touch = touchList[i];
        if (touch.identifier === activeTouchId.current) return touch;
      }
      return touchList[0];
    };

    let handleTouchStart = (event) => {
      const touch = event.changedTouches[0];
      if (!touch) return;
      activeTouchId.current = touch.identifier;
      updateCursorFromTouch(touch);
    };

    let handleTouchMove = (event) => {
      const trackedTouch = getTrackedTouch(event.touches);
      if (!trackedTouch) return;
      updateCursorFromTouch(trackedTouch);
    };

    let handleTouchEnd = (event) => {
      const touches = event.changedTouches;
      for (let i = 0; i < touches.length; i += 1) {
        if (touches[i].identifier === activeTouchId.current) {
          activeTouchId.current = null;
          setCursorVisibility(false);
          break;
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={layoutRef}
      data-debug={DEBUG_LAYOUT ? 'true' : 'false'}
      className="bg-background-main text-text-primary min-h-screen relative"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
    >
      <div className="cursor-spotlight" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default Layout;