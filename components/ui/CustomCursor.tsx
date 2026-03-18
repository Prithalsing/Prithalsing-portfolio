"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseHover);
    };
  }, []);

  // Smoother ring lag
  useEffect(() => {
    const followMouse = () => {
      setRingPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(followMouse);
    };
    const animateId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animateId);
  }, [mousePos]);

  return (
    <>
      <div
        className="cursor-dot hidden md:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div
        className="cursor-ring hidden md:block"
        style={{
          left: ringPos.x,
          top: ringPos.y,
          width: isHovering ? 60 : 30,
          height: isHovering ? 60 : 30,
          borderColor: isHovering ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
          backgroundColor: isHovering ? "rgba(255,255,255,0.03)" : "transparent",
        }}
      />
    </>
  );
}
