'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden bg-hero-gradient">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        {/* Content */}
        <motion.div 
          className="text-center lg:text-left"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-hero font-display mb-6">
            Transform Your 
            <span className="text-gradient"> Workflow</span>
          </h1>
          <p className="text-lg md:text-xl text-text-body mb-8 max-w-2xl mx-auto lg:mx-0">
            Experience the future of productivity with our innovative SaaS solution. 
            Streamline your processes and boost efficiency like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#waitlist" className="btn-primary">
              Join the Waitlist
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Product Preview */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            <Image
              src="https://placehold.co/800x600/f5f3ff/a78bfa?text=Product+Preview"
              alt="Product Interface Preview"
              width={800}
              height={600}
              className="object-cover"
              priority
            />
          </div>
          
          {/* Feature Highlights */}
          <motion.div
            className="absolute -right-4 top-4 bg-white rounded-lg shadow-lg p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm font-medium">Real-time Analytics</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -left-4 bottom-4 bg-white rounded-lg shadow-lg p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm font-medium">Smart Automation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 