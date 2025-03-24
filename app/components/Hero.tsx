'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import WaitlistModal from './WaitlistModal';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleWaitlistClick = () => {
    setIsWaitlistOpen(true);
  };

  return (
    <section id="home" className="relative min-h-[100svh] w-full pt-20">
      <div className="section-container section-padding">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[5%] w-48 sm:w-56 md:w-64 lg:w-72 aspect-square bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-[10%] right-[5%] w-48 sm:w-56 md:w-64 lg:w-72 aspect-square bg-secondary/10 rounded-full blur-3xl -z-10" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-[85rem] mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold tracking-tight leading-[1.15]">
              Make Learning{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Interactive</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Moraa is the ultimate platform for trainers, facilitators, and knowledge creators who want to go beyond static content and design immersive, action-packed learning experiences. 
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start">
              <button 
                onClick={handleWaitlistClick}
                className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg rounded-lg bg-[#6e46d4] text-white font-medium hover:bg-[#5738a7] transition-colors"
              >
                Join Waitlist
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('features');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base md:text-lg rounded-lg bg-white text-gray-800 font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            className="relative w-full max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl">
              <Image
                src="https://placehold.co/800x600/f5f3ff/a78bfa?text=Product+Preview"
                alt="Product Interface Preview"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Feature Highlights */}
            <motion.div
              className="absolute -right-[20px] top-4 bg-white rounded-lg shadow-lg p-3 sm:p-4 max-w-[90%] sm:max-w-none transform translate-x-0 sm:translate-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                <span className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">Real-time Collaboration</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-20 bottom-4 bg-white rounded-lg shadow-lg p-3 sm:p-4 max-w-[90%] sm:max-w-none transform -translate-x-0 sm:-translate-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-600" />
                <span className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">Smart Engagement</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </section>
  );
} 