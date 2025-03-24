'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const benefits = [
  {
    id: 'learn-by-doing',
    title: 'Learn by Doing, Not Just Watching',
    points: [
      'Move beyond passive content—experience interactive, applied learning.',
      'Join LIVE workshops where you engage, not just watch.',
      'Use interactive playbooks that make learning tangible and structured.',
      'Apply insights instantly with guided exercises and real-world scenarios.',
    ],
    imagePosition: 'right'
  },
  {
    id: 'collaborate',
    title: 'Collaborate in Real-Time',
    points: [
      'Learn with and from experts & peers.',
      'Participate in live discussions and hands-on problem-solving.',
      'Use multiplayer collaboration tools to refine ideas together.',
      'Join interactive lounges to reflect, exchange insights, and build connections.',
    ],
    imagePosition: 'left'
  },
  {
    id: 'discover',
    title: 'Discover & Participate in High-Impact Learning',
    points: [
      'Explore and enroll in LIVE courses, workshops, and interactive sessions.',
      'Access structured playbooks packed with actionable insights.',
      'Engage with peers to reflect, collaborate, and apply knowledge effectively.',
    ],
    imagePosition: 'right'
  }
];

export default function ExploreLearning() {
  return (
    <main className="relative bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full pt-20">
        <div className="section-container section-padding">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-[10%] left-[5%] w-48 sm:w-56 md:w-64 lg:w-72 aspect-square bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[10%] right-[5%] w-48 sm:w-56 md:w-64 lg:w-72 aspect-square bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="text-center lg:text-left space-y-6"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.15]">
                Learn by Doing.{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Apply Knowledge.
                </span>{' '}
                Grow Faster.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Move beyond passive learning. Moraa offers LIVE workshops, interactive playbooks, and actionable insights to help professionals upskill, pivot, and apply knowledge in real-world scenarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#waitlist" 
                  className="btn-primary"
                >
                  Join the Waitlist for Early Access
                </a>
              </div>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div
              className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-50 flex items-center justify-center text-gray-400">
                [Interactive Learning Illustration]
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50/30">
        <div className="section-container section-padding text-center">
          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-gray-900">
              Why Professionals Choose Moraa
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Learning shouldn't feel like a chore. Forget boring slides and endless videos—Moraa makes learning engaging, hands-on, and collaborative so you can apply what you learn immediately.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-2xl bg-white shadow-lg p-6 flex items-center justify-center text-gray-400">
                  [Benefit Icon {i}]
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="relative">
        <div className="section-container section-padding space-y-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                benefit.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <ul className="space-y-4">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${
                benefit.imagePosition === 'left' ? 'lg:order-first' : ''
              }`}>
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-indigo-50 flex items-center justify-center text-gray-400">
                  [Benefit Illustration {index + 1}]
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary text-white">
        <div className="section-container section-padding text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
              Ready to learn in a way that actually sticks?
            </h2>
            <div>
              <a 
                href="#waitlist" 
                className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                Join the Waitlist
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 