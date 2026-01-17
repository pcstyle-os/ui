"use client";

import React, { useState, useEffect } from 'react';
import { useUI } from '../provider';

const useMousePosition = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);
  return mouse;
};

export const NeuralCursor = ({ color }: { color?: string }) => {
  const { theme } = useUI();
  const mouse = useMousePosition();
  const [delayedMouse, setDelayedMouse] = useState({ x: 0, y: 0 });

  const activeColor = color || (theme === "cyber" ? "#ff00ff" : "#000000");

  useEffect(() => {
    const timeout = setTimeout(() => setDelayedMouse(mouse), 30);
    return () => clearTimeout(timeout);
  }, [mouse]);

  // Only show custom cursor in cyber or desktop minimal if desired
  // For now, let's make it a choice or default to cyber
  if (theme !== "cyber") return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[10000]">
      <div
        className="absolute w-4 h-4 border rounded-full transition-transform duration-75 ease-out"
        style={{ 
          transform: `translate(${mouse.x - 8}px, ${mouse.y - 8}px)`,
          borderColor: activeColor 
        }}
      />
      <div
        className="absolute w-2 h-2 rounded-full blur-[1px] opacity-40 translate-x-1"
        style={{ 
          transform: `translate(${delayedMouse.x - 4}px, ${delayedMouse.y - 4}px)`,
          backgroundColor: activeColor 
        }}
      />
      <svg className="absolute inset-0 w-full h-full">
        <line
          x1={mouse.x} y1={mouse.y}
          x2={delayedMouse.x} y2={delayedMouse.y}
          stroke={activeColor} strokeWidth="1" strokeOpacity="0.15"
        />
      </svg>
    </div>
  );
};
