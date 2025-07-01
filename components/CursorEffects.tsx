"use client";

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const CursorEffects: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let animationId: number;
    let moveTimeout: NodeJS.Timeout;

    const colors = [
      'rgb(59, 130, 246)',   // blue-500
      'rgb(147, 51, 234)',   // purple-600
      'rgb(236, 72, 153)',   // pink-500
      'rgb(6, 182, 212)',    // cyan-500
    ];

    const createParticle = (x: number, y: number): Particle => ({
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 60,
      maxLife: 60,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    const updateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 1,
            vx: particle.vx * 0.98,
            vy: particle.vy * 0.98,
          }))
          .filter(particle => particle.life > 0)
      );

      animationId = requestAnimationFrame(updateParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      setIsMoving(true);

      // Create particles when moving
      if (Math.random() < 0.3) {
        setParticles(prev => [
          ...prev.slice(-20), // Keep only last 20 particles for performance
          createParticle(newPosition.x, newPosition.y)
        ]);
      }

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleClick = (e: MouseEvent) => {
      // Create burst of particles on click
      const burstParticles = Array.from({ length: 8 }, () =>
        createParticle(e.clientX, e.clientY)
      );
      
      setParticles(prev => [...prev, ...burstParticles]);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    updateParticles();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
      clearTimeout(moveTimeout);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]">
      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life / particle.maxLife,
            transform: `scale(${particle.life / particle.maxLife})`,
            transition: 'opacity 0.1s ease-out',
          }}
        />
      ))}

      {/* Glow Effect */}
      {isMoving && (
        <div
          className="absolute w-8 h-8 rounded-full pointer-events-none"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            animation: 'pulse 1s ease-in-out infinite',
          }}
        />
      )}
    </div>
  );
};

export default CursorEffects;