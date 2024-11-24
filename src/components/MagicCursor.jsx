import { useEffect, useState } from 'react';

const MagicCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [trail, setTrail] = useState([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isHeroTag, setIsHeroTag] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // setTrail(prev => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }].slice(-20));
    };

    const updatePointer = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isHero = hoveredElement?.closest('.hero_tag');
      const isClickable = hoveredElement?.matches('button, a, select, [role="button"]') || 
                         hoveredElement?.closest('button, a, select, [role="button"]');
      
      setIsHeroTag(!!isHero);
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', updatePointer);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', updatePointer);
    };
  }, [position.x, position.y]);

  return (
    <>
      <div 
        className="magic-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHeroTag ? '120px' : isPointer ? '80px' : '40px',
          height: isHeroTag ? '120px' : isPointer ? '80px' : '40px',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />
      {/* {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: 1 - (index / trail.length),
            transform: `scale(${1 - (index / trail.length)})`,
          }}
        />
      ))} */}
    </>
  );
};

export default MagicCursor;
