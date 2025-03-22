'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const motion = {
  div: dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
    ssr: false
  })
};

interface DecorativeElementsProps {
  variant?: 'light' | 'dark';
  density?: 'low' | 'medium' | 'high';
  includePatterns?: boolean;
  style?: 'default' | 'dimensional';
}

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-20, 0, -20],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const dimensionalFloatAnimation = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  initial: { scale: 1, opacity: 0.3 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.4, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function DecorativeElements({ 
  variant = 'light', 
  density = 'medium',
  includePatterns = true,
  style = 'default'
}: DecorativeElementsProps) {
  const baseColor = variant === 'light' ? 'primary' : 'white';
  const opacityClass = variant === 'light' ? 'opacity-[0.15]' : 'opacity-[0.08]';
  const MotionDiv = motion.div;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Gradient Background */}
      <div 
        className={`absolute inset-0 ${
          variant === 'light' 
            ? 'bg-gradient-to-br from-purple-50 via-purple-100/50 to-blue-50/30' 
            : 'bg-gradient-to-br from-purple-900/10 via-purple-800/5 to-blue-900/10'
        }`}
      />

      {style === 'dimensional' && (
        <>
          {/* Layered Dimensional Shapes */}
          <MotionDiv
            className="absolute top-1/4 -left-20 w-96 h-96 rounded-[4rem] bg-gradient-to-br from-purple-200/20 to-blue-200/10 transform rotate-12"
            variants={dimensionalFloatAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '-2s' }}
          />
          <MotionDiv
            className="absolute top-1/3 right-0 w-80 h-80 rounded-[3rem] bg-gradient-to-bl from-purple-300/20 to-blue-300/10 transform -rotate-12"
            variants={dimensionalFloatAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '-4s' }}
          />
          <MotionDiv
            className="absolute bottom-1/4 -left-40 w-[30rem] h-[30rem] rounded-[5rem] bg-gradient-to-tr from-blue-200/10 to-purple-200/20 transform -rotate-6"
            variants={dimensionalFloatAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '-6s' }}
          />
          
          {/* Additional Floating Elements */}
          <MotionDiv
            className="absolute top-1/2 right-1/4 w-64 h-64 rounded-3xl bg-gradient-to-br from-purple-400/10 to-transparent transform rotate-45"
            variants={floatAnimation}
            initial="initial"
            animate="animate"
          />
          <MotionDiv
            className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-2xl bg-gradient-to-tr from-blue-300/10 to-transparent transform -rotate-12"
            variants={floatAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '-3s' }}
          />
        </>
      )}

      {/* Original Decorative Elements */}
      {style === 'default' && (
        <>
          <MotionDiv
            className={`absolute w-[800px] h-[800px] bg-${baseColor}/5 rounded-full blur-3xl 
                     transform -translate-x-1/2 -translate-y-1/2 top-0 left-0`}
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
          />
          <MotionDiv
            className={`absolute w-[600px] h-[600px] bg-${baseColor}/5 rounded-full blur-3xl 
                     transform translate-x-1/2 translate-y-1/2 bottom-0 right-0`}
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
          />
        </>
      )}

      {/* Dot Grid Pattern */}
      {includePatterns && (
        <div 
          className={`absolute inset-0 ${opacityClass}`}
          style={{
            backgroundImage: `radial-gradient(circle at 1rem 1rem, currentColor 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            opacity: 0.1
          }}
        />
      )}

      {/* Wave Pattern */}
      {includePatterns && style === 'default' && (
        <div 
          className={`absolute bottom-0 left-0 right-0 h-64 ${opacityClass}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' stroke='currentColor' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 20px',
            backgroundRepeat: 'repeat-x',
            opacity: 0.1
          }}
        />
      )}
    </div>
  );
} 