import React, { useEffect, useState } from 'react';

export default function MouseTracker() {
  const [mousePos, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>Mouse Position: {mousePos.x}, {mousePos.y}</p>
    </div>
  );
}
