'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const features = [
  {
    id: 'analytics',
    label: 'REAL-TIME ANALYTICS',
    title: 'Make informed decisions instantly',
    description: 'Gain instant insights into your operations with dynamic dashboards and reports, empowering you to act on data the moment it matters.',
    cta: 'Request your demo',
    stats: {
      efficiency: '98%',
      label: 'Performance dashboard'
    }
  },
  {
    id: 'integrations',
    label: 'SEAMLESS INTEGRATIONS',
    title: 'Connect all your tools in one place',
    description: 'Streamline your workflow by connecting your favorite tools. Our platform integrates seamlessly with popular services like Slack, Notion, and Salesforce.',
    cta: 'View Integrations',
    imageUrl: 'https://placehold.co/600x400/f5f3ff/a78bfa?text=Integration+Hub',
    isReversed: true,
  },
  {
    id: 'automation',
    label: 'SMART AUTOMATION',
    title: 'Automate your repetitive tasks',
    description: 'Let our AI-powered automation handle your routine tasks. Build custom workflows, set triggers, and watch your productivity soar.',
    cta: 'Discover Automation',
    imageUrl: 'https://placehold.co/600x400/f5f3ff/a78bfa?text=Automation+Flow',
    isReversed: false,
  },
];

function DashboardMockup() {
  const stats = features[0]?.stats;
  
  return (
    <div className="relative w-full max-w-[800px] mx-auto">
      {/* Background Gradient Effect */}
      <div className="absolute -inset-20 overflow-visible">
        {/* Primary large gradient blob */}
        <div className="absolute w-[800px] aspect-square bg-gradient-to-r from-purple-100/30 via-purple-200/30 to-transparent rounded-full blur-[100px] 
                      transform -translate-x-1/2 -translate-y-1/2
                      top-1/2 left-1/2" />
        
        {/* Secondary overlapping gradients for depth */}
        <div className="absolute w-[600px] aspect-square bg-gradient-to-tr from-purple-200/20 via-pink-200/20 to-transparent rounded-full blur-[80px] 
                      transform translate-x-1/4 -translate-y-1/4
                      top-1/2 right-1/2" />
        
        {/* Subtle accent gradients */}
        <div className="absolute w-[400px] aspect-square bg-gradient-to-b from-purple-300/10 via-purple-200/10 to-transparent rounded-full blur-[60px]
                      transform -translate-x-1/4 translate-y-1/4
                      bottom-1/2 left-1/2" />
      </div>

      {/* Main Dashboard Card */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl">
        <div className="mb-3 sm:mb-4">
          <div className="text-xs sm:text-sm text-gray-600">{stats?.label}</div>
          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-800">{stats?.efficiency} efficiency</div>
        </div>
        
        {/* Heatmap Grid */}
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-4 sm:mb-6">
          {Array(35).fill(null).map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-sm ${
                Math.random() > 0.5 
                  ? `bg-purple-${Math.floor(Math.random() * 3 + 2)}00` 
                  : 'bg-purple-100'
              }`}
            />
          ))}
        </div>

        {/* Bar Charts */}
        <div className="flex gap-1 sm:gap-2 items-end mb-4 sm:mb-6">
          {Array(7).fill(null).map((_, i) => (
            <div 
              key={i}
              className="bg-purple-500/80 rounded-t w-4 sm:w-5 md:w-6"
              style={{ height: `${Math.random() * 60 + 20}px` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Stats Card */}
      <div className="absolute -right-2 sm:-right-3 md:-right-4 -top-2 sm:-top-3 md:-top-4 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 z-30 scale-75 sm:scale-90 md:scale-100">
        <div className="w-20 sm:w-24 md:w-28 h-12 sm:h-14 md:h-16 relative">
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 100 50">
              <path
                d="M0 40 C 20 40, 30 10, 50 10 S 80 40, 100 40"
                fill="none"
                stroke="#9333EA"
                strokeWidth="2"
              />
              <circle cx="85" cy="10" r="3" fill="#E11D48" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureSection({ feature }: { feature: typeof features[0] }) {
  const contentOrder = feature.isReversed ? 'lg:order-2' : '';
  const imageOrder = feature.isReversed ? 'lg:order-1' : '';

  return (
    <section id={feature.id} className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left ${contentOrder}`}>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary">
                {feature.label}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-[#4A2B5F] mb-4 sm:mb-6 tracking-tight">
              {feature.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {feature.description}
            </p>
            
            <button className="inline-flex items-center text-sm sm:text-base text-primary hover:text-primary/80 font-medium transition-colors gap-1 sm:gap-2">
              {feature.cta}
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dashboard Mockup */}
          <div className={`relative ${imageOrder}`}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <div id="features" className="relative">
      {features.map((feature) => (
        <FeatureSection key={feature.id} feature={feature} />
      ))}
    </div>
  );
} 