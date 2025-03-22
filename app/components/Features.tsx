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

const features = [
  {
    id: 'analytics',
    label: 'REAL-TIME ANALYTICS',
    title: 'Make informed decisions instantly',
    description: 'Transform raw data into actionable insights with our powerful analytics dashboard. Monitor key metrics, track performance, and identify trends in real-time.',
    cta: 'Explore Analytics',
    imageUrl: 'https://placehold.co/600x400/f5f3ff/a78bfa?text=Analytics+Dashboard',
    isReversed: false,
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

function FeatureSection({ feature }: { feature: typeof features[0] }) {
  const contentOrder = feature.isReversed ? 'lg:order-2' : '';
  const imageOrder = feature.isReversed ? 'lg:order-1' : '';

  return (
    <section id={feature.id} className="py-20 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl 
                      transform -translate-x-1/2 -translate-y-1/2
                      top-1/2 left-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div 
            className={`text-center lg:text-left ${contentOrder}`}
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5L15 7v6l-5 3.5L5 13V7l5-3.5z" />
                </svg>
              </div>
              <span className="text-sm font-semibold tracking-wider text-primary">
                {feature.label}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-text-header mb-6">
              {feature.title}
            </h2>
            <p className="text-lg text-text-body mb-8 max-w-2xl mx-auto lg:mx-0">
              {feature.description}
            </p>
            <button className="btn-primary inline-flex items-center gap-2">
              {feature.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Image */}
          <motion.div 
            className={`relative ${imageOrder}`}
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </motion.div>
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