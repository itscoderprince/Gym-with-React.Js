
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Programs', 'Trainers', 'Membership', 'About'];

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass-panel h-16 py-0' : 'h-20 py-4 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary transform group-hover:rotate-12 transition-transform">fitness_center</span>
            <h1 className="text-lg sm:text-xl font-display font-bold uppercase tracking-tighter">Elite Fitness</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-display font-bold uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-primary hover:bg-red-700 transition-all btn-glow text-white text-xs font-display font-bold uppercase tracking-widest px-6 py-2.5 rounded-sm">
              Start Training
            </button>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute inset-0 flex flex-col p-6"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-12">
                <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
                  <span className="material-symbols-outlined text-4xl">close</span>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-6 flex-1">
                {navLinks.map((item, idx) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-3xl font-display font-bold uppercase tracking-tight text-white hover:text-primary transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-primary hover:bg-red-700 transition-all btn-glow text-white text-lg font-display font-bold uppercase tracking-widest py-5 rounded-sm"
              >
                Start Training
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
