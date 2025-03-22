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
    <section id="use-cases" className="py-20 relative overflow-hidden">
      {/* Enhanced Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient layer */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(125deg, #E9D5FF 0%, #F3E8FF 25%, #FCE7F3 50%, #EDE9FE 75%, #FAE8FF 100%)',
            opacity: 1
          }}
        />
        
        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(100% 100% at 0% 0%, #E9D5FF 0%, transparent 70%),
              radial-gradient(100% 100% at 100% 0%, #FCE7F3 0%, transparent 70%),
              radial-gradient(100% 100% at 100% 100%, #EDE9FE 0%, transparent 70%),
              radial-gradient(100% 100% at 0% 100%, #F5D0FE 0%, transparent 70%)
            `,
            opacity: 0.8,
            mixBlendMode: 'multiply'
          }}
        />

        {/* Animated gradient spots */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, #D8B4FE 0%, transparent 50%),
              radial-gradient(circle at 70% 20%, #FBCFE8 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, #DDD6FE 0%, transparent 60%),
              radial-gradient(circle at 70% 80%, #E9D5FF 0%, transparent 50%),
              radial-gradient(circle at 30% 80%, #F5D0FE 0%, transparent 50%)
            `,
            filter: 'blur(30px)',
            opacity: 0.9,
            mixBlendMode: 'color-burn'
          }}
        />

        {/* Color overlay for vibrancy */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(45deg, rgba(216, 180, 254, 0.4) 0%, transparent 100%),
              linear-gradient(135deg, rgba(251, 207, 232, 0.4) 0%, transparent 100%),
              linear-gradient(225deg, rgba(224, 231, 255, 0.4) 0%, transparent 100%),
              linear-gradient(315deg, rgba(245, 208, 254, 0.4) 0%, transparent 100%)
            `,
            mixBlendMode: 'soft-light'
          }}
        />

        {/* Noise texture for depth */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px'
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#D8BFD8]/50 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#4A3A59]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wider text-[#4A3A59] uppercase">
              Use Cases
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-semibold text-[#4A3A59] mb-6 tracking-tight">
            Perfect for teams across industries
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how our solution adapts to various business needs and enhances workflow efficiency.
          </p>
        </div>

        <MotionDiv 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {useCases.map((useCase) => (
            <MotionDiv
              key={useCase.id}
              className="w-[320px] mx-auto bg-white/30 backdrop-blur-md rounded-2xl p-6 flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/90 transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-4 text-purple-600">
                {useCase.icon}
              </div>
              <h3 className="text-xl tracking-[-0.5px] font-medium text-[#4A3A59] mb-4">
                {useCase.title}
              </h3>
              <p className="text-[#6B7280] text-base leading-relaxed font-normal mb-6">
                {useCase.description}
              </p>
              {/* <div className="mt-auto flex items-center space-x-2 text-[#9333EA] font-medium group cursor-pointer">
                <span>Learn more</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div> */}
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
} 