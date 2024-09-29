import { useEffect } from 'react';

const CursorAnimation = () => {
  const coords = { x: 0, y: 0 };
  const circles = Array.from({ length: 10 }).map(() => ({ x: 0, y: 0 }));

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
  ];

  useEffect(() => {
    window.addEventListener("mousemove", function(e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function(circle, index) {
        const circleElement = document.querySelector(`.circle-${index}`);
        if (circleElement) {
          circleElement.style.left = `${x - 12}px`;
          circleElement.style.top = `${y - 12}px`;
          circleElement.style.transform = `scale(${(circles.length - index) / circles.length})`;

          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        }
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, [circles]);

  return (
    <>
      {circles.map((_, index) => (
        <div
          key={index}
          className={`circle-${index} h-6 w-6 rounded-full fixed pointer-events-none z-[99999999]`}
          style={{
            position: 'absolute',
            backgroundColor: colors[index % colors.length], // Apply the corresponding color
          }}
        />
      ))}
    </>
  );
};

function Cursor() {
  return (
    <div>
      <CursorAnimation />
      {/* Your other components and routes go here */}
    </div>
  );
}

export default Cursor;
