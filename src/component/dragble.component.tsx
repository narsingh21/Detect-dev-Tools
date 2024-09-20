import React, { useEffect, useRef } from "react";

interface props {
  children: React.ReactNode;
  position: { x: string; y: string };
}

function DragbleElement({ children, position }: props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      console.log("setting");
      elementRef.current.style.left = `${position.x}px`;
      elementRef.current.style.right = `${position.y}px`;

      console.log();
    }
  }, [position]);

  return (
    <div className="absolute" ref={elementRef}>
      {children}
    </div>
  );
}

export default DragbleElement;
