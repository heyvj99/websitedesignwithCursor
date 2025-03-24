'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import WaitlistModal from './WaitlistModal';

const menuItems = [
  // { name: 'Home', href: '#home' },
  { name: 'Explore Learning', href: '/explore-learning' },
  { name: 'About Us', href: '/about-us' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const pathname = usePathname();

  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWaitlistOpen(true);
  };

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
        <div className="section-container">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Moraa Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href 
                      ? 'text-purple-600 font-medium' 
                      : 'text-text-body hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button onClick={handleWaitlistClick} className="btn-primary">
                Join Waitlist
              </button>
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
                      className={`transition-colors ${
                        pathname === item.href 
                          ? 'text-purple-600 font-medium' 
                          : 'text-text-body hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button 
                    onClick={(e) => {
                      setIsOpen(false);
                      handleWaitlistClick(e);
                    }}
                    className="btn-primary text-center"
                  >
                    Join Waitlist
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </nav>

      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
} 