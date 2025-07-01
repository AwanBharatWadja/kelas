"use client";

import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  loop = true
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => {
            if (!loop && prev === texts.length - 1) {
              return prev;
            }
            return (prev + 1) % texts.length;
          });
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          if (loop || currentTextIndex < texts.length - 1) {
            setIsPaused(true);
          }
        }
      }
    }, isPaused ? pauseTime : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseTime, loop]);

  return (
    <>
      {currentText}
      <Text as="span" animation="blink 1s infinite">
        |
      </Text>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default TypewriterText;