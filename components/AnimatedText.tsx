"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'slideUp' | 'bounce';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  animation = 'fadeInUp'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fadeInUp':
        return 'animate-fade-in-up';
      case 'fadeInLeft':
        return 'animate-fade-in-left';
      case 'fadeInRight':
        return 'animate-fade-in-right';
      case 'slideUp':
        return 'animate-slide-up';
      case 'bounce':
        return 'animate-bounce-in';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-${Math.round(duration * 1000)} ${getAnimationClass()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: isVisible ? '0s' : `${delay}ms`
      }}
    >
      {text}
    </div>
  );
};

export default AnimatedText;