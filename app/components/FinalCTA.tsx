'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="waitlist" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa]">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join our exclusive waitlist today. Limited spots available for early access.
          </p>
          
          {/* Email Form */}
          <form className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </form>

          {/* Social Proof */}
          <p className="text-white/80 text-sm">
            Join 1,000+ teams already on the waitlist
          </p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>
    </section>
  );
} 