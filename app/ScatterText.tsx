"use client";

import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function ScatterText({ children }: { children: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);
  const [key, setKey] = useState(0);

  function handleClick() {
    if (!containerRef.current) return;

    const { chars } = splitText(containerRef.current.querySelector("h1")!);

    for (const element of chars) {
      animate(
        element,
        { x: 0, y: 0, },
        { type: "spring", stiffness: 200, damping: 50 }
      );
    }

    setKey((prevKey) => prevKey + 1);
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const { chars } = splitText(containerRef.current.querySelector("h1")!);

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000; // seconds
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    hover(chars, (element) => {
      // Calculate the speed of the pointer movement
      // and use that to calculate the distance the character should move
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 200, damping: 50 }
      );
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, [velocityX, velocityY, key]);

  return (
    <div className="flex justify-center items-center w-full max-w-md text-left will-change-auto cursor-grab select-none" ref={containerRef}>
      <h1 onClick={handleClick}>{children}</h1>
    </div>
  );
}
