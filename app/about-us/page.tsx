'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
});

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface Belief {
  title: string;
  description: string;
  icon: string;
}

interface Founder {
  name: string;
  role: string;
  background: string;
  quote: string;
}

const beliefs: Belief[] = [
  {
    title: 'Interactive',
    description: 'Built around real-world application, not just static content.',
    icon: '🔄',
  },
  {
    title: 'Collaborative',
    description: 'Where knowledge is shared, refined, and practiced in a community.',
    icon: '👥',
  },
  {
    title: 'Action-Based',
    description: 'Ensuring that professionals dont just learn concepts but use them to drive meaningful impact.',
    icon: '🎯',
  },
];

const founders: Founder[] = [
  {
    name: 'Mohit',
    role: 'Co-Founder',
    background: 'Finance and Learning Solutions',
    quote: 'Learning should be a transformative experience, not just a passive activity.',
  },
  {
    name: 'Rahul',
    role: 'Co-Founder',
    background: 'Technology and Product Development',
    quote: 'Were building the tools I wish I had when learning new skills throughout my career.',
  },
];

export default function Page() {
  return (
    <main className="relative bg-white w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section className="w-full pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="w-full lg:w-[45%]">
              <span className="text-sm font-semibold tracking-wider text-purple-600 mb-4 block">
                Our Story
              </span>
              <h1 className="text-4xl lg:text-[42px] font-bold leading-tight text-gray-900">
                Transforming Professional Learning Through Interactive Experiences
              </h1>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[55%]">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                At Moraa, we're revolutionizing how professionals learn and grow. Our platform combines cutting-edge technology with proven learning methodologies to create engaging, practical, and transformative educational experiences. We believe that professional development should be more than just passive consumption—it should be an active journey of discovery, application, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 ">

            {/* Left Column - Image (45%) */}
            <div className="w-full lg:w-[45%]">
              <div className="w-full aspect-[4/3] rounded-lg bg-gray-200 overflow-hidden">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  [Interactive Learning Platform Preview]
                </div>
              </div>
            </div>

            {/* Right Column - Text Content (55%) */}
            <div className="w-full lg:w-[55%] space-y-6">
              <h2 className="text-3xl lg:text-[36px] font-medium leading-tight text-gray-700 mb-8">
              The Untapped Opportunity
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              ndustry practitioners hold deep, applied knowledge, yet many remain dormant as knowledge creators.These practitioners are the true architects of action-driven learning experiences, and they need a platform to bring their expertise to life.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              For too long, professional learning has been about watching, reading, and consuming information—but not enough about doing, applying, and collaborating.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              That's why we built Moraa—a platform that enables trainers, experts, and professionals to create and participate in immersive, engaging, and impactful learning experiences.
              </p>
            </div>

            
          </div>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="relative">
        <div className="section-container section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <MotionDiv
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-semibold mb-6">Our Mission</h3>
              <p className="text-xl text-gray-800 leading-relaxed">
                To elevate learning by making it collaborative, engaging, and action-based—empowering professionals to create and participate in experiences that drive real-world application.
              </p>
            </MotionDiv>

            {/* Vision */}
            <MotionDiv
              className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 lg:p-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-semibold mb-6">Our Vision</h3>
              <p className="text-xl text-gray-800 leading-relaxed">
                To build the leading professional learning ecosystem, where learning is immersive, applied, and continuously evolving.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="relative bg-gradient-to-b from-white to-purple-50/30">
        <div className="section-container section-padding">
          <MotionDiv
            className="max-w-4xl mx-auto space-y-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display font-semibold">A Shared Journey That Led to Moraa</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mohit and Rahul met in undergrad and stayed connected as they pursued different career paths—one in finance and learning solutions, the other in technology and product development. Their professional experiences eventually led them to a shared realization: learning needed to evolve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <MotionDiv
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  whileHover={{ y: -4 }}
                >
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-100 to-indigo-50 mb-6 flex items-center justify-center text-gray-400">
                    [Founder Photo: {founder.name}]
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-2">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-600 mb-6">{founder.background}</p>
                  <blockquote className="text-lg italic text-gray-800">"{founder.quote}"</blockquote>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary text-white">
        <div className="section-container section-padding">
          <MotionDiv
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
              Be Part of the Future of Learning
            </h2>
            <div>
              <a 
                href="#waitlist" 
                className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                Join the Waitlist
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </main>
  );
} 