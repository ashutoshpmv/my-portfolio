import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold gradient-text"
        >
          AKS
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="text-gray-300 hover:text-primary-500 transition-colors duration-300 relative group"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="btn-glow px-6 py-2 rounded-full text-white font-medium flex items-center space-x-2"
          >
            <Download size={18} />
            <span>Resume</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-primary-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-700"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="block text-gray-300 hover:text-primary-500 transition-colors duration-300 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="btn-glow px-6 py-2 rounded-full text-white font-medium flex items-center space-x-2 w-full justify-center"
              >
                <Download size={18} />
                <span>Resume</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;