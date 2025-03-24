'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import WaitlistModal from './WaitlistModal';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

interface FinalCTAProps {
  heading?: string;
}

export default function FinalCTA({ heading = "Ready to transform your workflow?" }: FinalCTAProps) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section id="waitlist" className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa]">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container relative">
        <MotionDiv 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-white mb-6">
            {heading}
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join our exclusive waitlist today. Limited spots available for early access.
          </p>
          
          {/* Waitlist Button */}
          <div className="max-w-md mx-auto mb-8">
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Join Waitlist
            </button>
          </div>

          {/* Social Proof */}
          <p className="text-white/80 text-sm">
            Join 1,000+ teams already on the waitlist
          </p>
        </MotionDiv>

        {/* Floating Elements */}
        <MotionDiv
          className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <MotionDiv
          className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </section>
  );
} 