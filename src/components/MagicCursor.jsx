import { useEffect, useRef, useState } from 'react';

const MagicCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState({ isPointer: false, isHeroTag: false });

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId;
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    const updateCursor = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`;
      }

      // Throttle expensive elementFromPoint checks (every 100ms)
      const now = performance.now();
      if (now - lastTime > 100) {
        lastTime = now;
        const hoveredElement = document.elementFromPoint(lastX, lastY);
        
        const isHero = hoveredElement?.closest('.hero_tag');
        const isClickable = hoveredElement?.matches('button, a, select, [role="button"]') || 
                           hoveredElement?.closest('button, a, select, [role="button"]');
        
        // Only update state if it changes
        setIsHovering(prev => {
          if (prev.isHeroTag !== !!isHero || prev.isPointer !== !!isClickable) {
            return { isHeroTag: !!isHero, isPointer: !!isClickable };
          }
          return prev;
        });
      }
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const { isPointer, isHeroTag } = isHovering;

  return (
    <div 
      ref={cursorRef}
      className="magic-cursor pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-difference"
      style={{
        width: isHeroTag ? '120px' : isPointer ? '80px' : '40px',
        height: isHeroTag ? '120px' : isPointer ? '80px' : '40px',
        transition: 'width 0.3s ease, height 0.3s ease, transform 0.1s linear',
        // Centering logic using margins to avoid conflict with translate
        marginLeft: isHeroTag ? '-60px' : isPointer ? '-40px' : '-20px',
        marginTop: isHeroTag ? '-60px' : isPointer ? '-40px' : '-20px',
      }}
    />
  );
};

export default MagicCursor;
