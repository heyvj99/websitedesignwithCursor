'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Sign Up & Connect',
    description: 'Create your account and connect your existing tools in minutes.',
  },
  {
    number: '2',
    title: 'Configure Workflows',
    description: 'Set up your custom workflows and automation rules with our intuitive interface.',
  },
  {
    number: '3',
    title: 'Watch Magic Happen',
    description: 'Sit back as your workflow becomes more efficient and productive.',
  },
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
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl 
                      transform -translate-x-1/2 -translate-y-1/2
                      top-1/2 left-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wider text-primary">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-semibold text-text-header mb-6">
            3 simple steps to effortless efficiency
          </h2>
        </div>

        {/* Steps Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-xl font-semibold text-primary">{step.number}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-text-header mb-4">
                {step.title}
              </h3>
              <p className="text-text-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 