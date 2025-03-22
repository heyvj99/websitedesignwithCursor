'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import DecorativeElements from './DecorativeElements';

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
    y: -4,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

const useCases = [
  {
    id: 'marketing',
    title: 'Marketing Teams',
    description: 'Streamline campaign management, automate social media posts, and track performance metrics in real-time.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    id: 'product',
    title: 'Product Development',
    description: 'Keep your product roadmap on track with automated workflows, bug tracking, and feature prioritization.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 'customer-success',
    title: 'Customer Success',
    description: 'Enhance customer satisfaction with automated support workflows and proactive issue resolution.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    id: 'operations',
    title: 'Operations',
    description: 'Optimize business processes and resource allocation with data-driven insights and automated reporting.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
});

export default function UseCases() {
  const MotionDiv = motion.div;
  
  return (
    <section id="use-cases" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#D8BFD8]/50 flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#4A3A59]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#4A3A59] uppercase">
              Use Cases
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-[#4A3A59] mb-4 sm:mb-6 tracking-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
            Purpose-built for modern trainers and facilitators
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            Discover how our solution adapts to various business needs and enhances workflow efficiency.
          </p>
        </div>

        <MotionDiv 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {useCases.map((useCase) => (
            <MotionDiv
              key={useCase.id}
              className="w-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-3 sm:mb-4 text-purple-600">
                {useCase.icon}
              </div>
              <h3 className="text-lg sm:text-xl tracking-[-0.5px] font-medium text-[#4A3A59] mb-2 sm:mb-3">
                {useCase.title}
              </h3>
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed font-normal">
                {useCase.description}
              </p>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
} 