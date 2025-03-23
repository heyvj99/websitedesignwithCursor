'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { PieChart, Lightbulb, ThumbsUp, LayoutGrid } from 'lucide-react';
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
    id: 'Professional Development Trainers',
    title: 'Professional Development Trainers',
    description: 'Run immersive workshops with built-in engagement tools.',
    icon: <PieChart className="w-5 h-5" strokeWidth={2} />,
  },
  {
    id: 'Learning Facilitators',
    title: 'Learning Facilitators',
    description: 'Create Live and self-paced learning experiences that professionals love.',
    icon: <Lightbulb className="w-5 h-5" strokeWidth={2} />,
  },
  {
    id: 'Knowledge Creators',
    title: 'Knowledge Creators',
    description: 'Package your knowledge into interactive playbooks & micro-courses.',
    icon: <ThumbsUp className="w-5 h-5" strokeWidth={2} />,
  },
  {
    id: 'Thought Leaders',
    title: 'Thought Leaders',
    description: "Reach the right audience for your expertise with Moraa's Discovery Hub",
    icon: <LayoutGrid className="w-5 h-5" strokeWidth={2} />,
  },
];

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
});

export default function UseCases() {
  const MotionDiv = motion.div;
  
  return (
    <section id="use-cases" className="relative overflow-hidden section-padding">
      {/* Content */}
      <div className="section-container relative">
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

        {/* <MotionDiv 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {useCases.map((useCase) => (
            <MotionDiv
              key={useCase.id}
              className="w-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-gradient-to-br hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:translate-y-[-4px]"
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
        </MotionDiv> */}
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
            className="w-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-gradient-to-br hover:from-purple-200 hover:to-pink-200 transition-all duration-300 transform hover:translate-y-[-4px] group"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-3 sm:mb-4 text-purple-600">
              {useCase.icon}
            </div>
            <h3 className="text-lg sm:text-xl tracking-[-0.5px] font-medium text-[#4A3A59] group-hover:text-purple-800 mb-2 sm:mb-3 transition-colors duration-300">
              {useCase.title}
            </h3>
            <p className="text-[#6B7280] group-hover:text-purple-600 text-sm sm:text-base leading-relaxed font-normal transition-colors duration-300">
              {useCase.description}
            </p>
          </MotionDiv>
        ))}
      </MotionDiv>
      </div>
    </section>
  );
} 