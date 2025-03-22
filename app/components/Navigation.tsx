'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const menuItems = [
  // { name: 'Home', href: '#home' },
  { name: 'Explore Learning', href: '#explore-learning' },
  { name: 'About Us', href: '#about-us' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4 px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-semibold text-gradient">
            Moraa
          </span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-text-body hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="#waitlist" className="btn-primary">
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-text-header transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-8 h-0.5 bg-text-header transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-8 h-0.5 bg-text-header transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-body hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="#waitlist" 
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
} 