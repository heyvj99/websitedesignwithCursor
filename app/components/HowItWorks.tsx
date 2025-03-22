'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Sign up & Profile',
    description: 'Create your account and set up your personalized profile in minutes.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M4 12L12 4L20 12L12 20L4 12Z" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L16 16M12 12L8 8M12 12L12 4M12 12L12 20" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="gradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA"/>
            <stop offset="1" stopColor="#7C3AED"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    number: '2',
    title: 'Personalisation',
    description: 'Customize your experience with AI-powered recommendations and settings.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M4 8h4v12H4V8zM10 4h4v16h-4V4zM16 12h4v8h-4v-8z" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="gradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA"/>
            <stop offset="1" stopColor="#7C3AED"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    number: '3',
    title: 'Strategy',
    description: 'Develop and implement your learning roadmap with expert guidance.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M4 16l4-4 4 4 8-8" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 8h6v6" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="gradient" x1="4" y1="8" x2="20" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA"/>
            <stop offset="1" stopColor="#7C3AED"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    number: '4',
    title: 'Analyze & Scale',
    description: 'Track progress, measure results, and expand your impact with data-driven insights.',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M20 20H4V4" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 16.5L12 9l3 3 5-5" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="gradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA"/>
            <stop offset="1" stopColor="#7C3AED"/>
          </linearGradient>
        </defs>
      </svg>
    )
  }
];

const containerVariants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  whileInView: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-gray-900 mb-4">
            Your journey to success
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these four simple steps to transform your learning experience
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="group relative bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 sm:p-8"
              style={{
                backgroundImage: `radial-gradient(circle at center, rgba(167, 139, 250, 0.1) 0%, rgba(167, 139, 250, 0) 70%)`,
                backgroundSize: '200% 200%',
                backgroundPosition: 'center'
              }}
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Dot Grid Pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                   style={{
                     background: `
                       radial-gradient(circle at center, #A78BFA 2px, transparent 2px) center / 16px 16px
                     `,
                     mask: 'radial-gradient(circle at center, black, transparent)'
                   }}
              />
              
              {/* Card Content */}
              <div className="relative">
                {/* Step Indicator */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 mb-6">
                  <span className="text-sm font-medium text-purple-600">Step {step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 transform transition-transform group-hover:scale-110">
                  {step.icon}
                </div>

                {/* Text Content */}
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Card Shadow/Depth Effect */}
              <div className="absolute inset-0 rounded-2xl shadow-lg opacity-50 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 