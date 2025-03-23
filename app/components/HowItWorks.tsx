'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, UsersRound, Rocket, TrendingUp, BadgeDollarSign } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Design Your Learning Experience',
    description: 'Use Moraa\'s built-in collaboration tools to make learning interactive and applied.',
    icon: <PenTool className="w-full h-full text-purple-600" strokeWidth={1} />
  },
  {
    number: '2',
    title: 'Host & Engage Participants',
    description: 'Run LIVE courses, structured workshops, or self-paced learning experiences.',
    icon: <UsersRound className="w-full h-full text-purple-600" strokeWidth={1} />
  },
  {
    number: '3',
    title: 'Publish & Scale Your Reach',
    description: 'Publish content in Moraa\'s Discovery Hub so professionals can discover and enroll in your offerings.',
    icon: <Rocket className="w-full h-full text-purple-600" strokeWidth={1} />
  },
  {
    number: '4',
    title: 'Monetize & Grow Your Impact',
    description: 'Expand your professional influence by connecting with an audience actively looking for expert-driven learning.',
    icon: <BadgeDollarSign className="w-full h-full text-purple-600" strokeWidth={1} />
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
    <section className="relative overflow-hidden section-padding bg-gradient-to-b from-white to-purple-50/30">
      <div className="section-container relative">
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
          Learning shouldn't feel like a chore
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          With Moraa, you can create, host, and grow your learning experiences effortlessly. Here's how:
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 lg:gap-10"
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
                backgroundImage: `radial-gradient(circle at center, rgba(167, 139, 250, 0.15) 0%, rgba(167, 139, 250, 0) 70%)`,
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