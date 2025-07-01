"use client";

import React, { useEffect, useState, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<CursorPosition[]>([]);
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Update trail
      setTrail(prev => {
        const newTrail = [newPosition, ...prev.slice(0, 8)];
        return newTrail;
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
        }}
      >
        {/* Outer Ring */}
        <div
          className={`w-6 h-6 border-2 rounded-full transition-all duration-300 ${
            isHovering
              ? 'border-blue-500 bg-blue-500/20'
              : 'border-gray-400 dark:border-gray-300'
          } ${isClicking ? 'bg-blue-500/40' : ''}`}
        />
        
        {/* Inner Dot */}
        <div
          className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isHovering
              ? 'bg-blue-500 scale-150'
              : 'bg-gray-600 dark:bg-gray-300'
          } ${isClicking ? 'bg-blue-600 scale-200' : ''}`}
        />
      </div>

      {/* Cursor Trail */}
      <div ref={trailRef} className="fixed top-0 left-0 pointer-events-none z-[9998]">
        {trail.map((position, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full transition-all duration-300"
            style={{
              transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
              opacity: 1 - index * 0.15,
              scale: 1 - index * 0.1,
              transitionDelay: `${index * 20}ms`,
            }}
          />
        ))}
      </div>

      {/* Magnetic Effect for Interactive Elements */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
          
          button, a, [role="button"], .cursor-pointer {
            position: relative;
          }
          
          button:hover, a:hover, [role="button"]:hover, .cursor-pointer:hover {
            transform: scale(1.02);
            transition: transform 0.2s ease;
          }
        }
        
        @media (hover: none) or (pointer: coarse) {
          .custom-cursor {
            display: none !important;
          }
          
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;